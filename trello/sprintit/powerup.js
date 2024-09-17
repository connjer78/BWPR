// Initialize Trello Power-Up context
const t = TrelloPowerUp.iframe();

// Set up the Power-Up
TrelloPowerUp.initialize({
  // Define the `card-buttons` capability, which adds a button to the card menu
  'card-buttons': function (t, options) {
    return [
      {
        // Text that will appear on the button in the card menu
        text: 'Sprint It!',
        callback: function (t) {
          // Handle the button click event
          return t.card('all') // Get all details about the current card
            .then(function (card) {
              // Extract labels, board ID, and card title from the current card
              const labels = card.labels; 
              const boardId = card.idBoard;
              const cardTitle = card.name;

              // Define the ID of the board where template cards are stored
              const templateBoardId = '1rW0VzoP'; // Replace with actual board ID

              // Fetch all template cards from the template board
              return t.get('boards', 'cards', [templateBoardId])
                .then(function (templateCards) {
                  // Filter the template cards to match the labels from the current card
                  const matchingTemplates = fetchTemplateCards(templateCards, labels);

                  // Define the ID of the target board where new cards will be created
                  const targetBoardId = 'ZMxZMSgR'; // Replace with actual board ID
                  const targetListId = '66e0a34618ad960763506825'; //ID of the list where the new cards should go

                  // Create new cards on the target board based on matching templates
                  const creationPromises = matchingTemplates.map(function (template) {
                    const newCardTitle = `${cardTitle} - ${template.labelName}`;
                    return createCardOnBoard(t, targetBoardId, newCardTitle, template);
                  });

                  // Wait for all card creation promises to complete and then close the popup
                  return Promise.all(creationPromises)
                    .then(() => t.closePopup()); // Close the popup once all cards are created
                });
            });
        }
      }
    ];
  }
});

// Function to filter template cards based on matching labels
function fetchTemplateCards(templateCards, labels) {
  const labelNames = labels.map(label => label.name); // Extract label names from the current card
  return templateCards.filter(card => {
    const cardLabelNames = card.labels.map(label => label.name); // Extract label names from each template card
    return cardLabelNames.some(labelName => labelNames.includes(labelName)); // Check for matching labels
  }).map(card => {
    return {
      id: card.id,
      description: card.desc,
      checklists: card.checklists,
      labels: card.labels,
      labelName: card.labels[0] ? card.labels[0].name : '' // Use the name of the first label for card creation
    };
  });
}

// Function to create a new card on the target board
function createCardOnBoard(t, boardId, title, templateCard) {
  return t.post('boards', 'createCard', {
    name: title, // Set the title of the new card
    desc: templateCard.description, // Use the description from the template card
    idBoard: boardId, // Specify the target board ID
    checklists: templateCard.checklists.map(checklist => ({
      name: checklist.name, // Set the name of each checklist
      checkItems: checklist.checkItems.map(item => ({
        name: item.name, // Set the name of each checklist item
        checked: item.state === 'complete' // Set the item state based on whether it's checked or not
      }))
    })),
    labels: templateCard.labels.map(label => label.id) // Add labels from the template card to the new card
  });
}
