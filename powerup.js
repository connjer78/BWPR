// Initialize the Trello Power-Up
var t = TrelloPowerUp.iframe(); // Create a Trello Power-Up instance

// Function to handle button click
t.cardButton({
    text: 'Sprint It!',
    callback: function(t, options) { // Define callback for button click
        // Fetch the ID of the sprint board
        return t.get('card', 'shared', 'ZMxZMSgR') // Replace with your sprint board ID - DONE
            .then(function(sprintBoardId) { // When the board ID is retrieved
                // Fetch the labels from the card
                return t.get('card', 'shared', 'labels')
                    .then(function(labels) { // When the labels are retrieved
                        // For each label, find the corresponding template card
                        labels.forEach(function(label) {
                            findTemplateCard(label).then(function(templateCard) { // Find the template card by label
                                if (templateCard) {
                                    createSprintCard(sprintBoardId, templateCard); // Create sprint card from template
                                } else {
                                    console.error('Template not found for label:', label.name); // Log if no template found
                                }
                            });
                        });
                    });
            });
    }
});

// Function to find the template card by label
function findTemplateCard(label) {
    // Replace with your board ID containing the templates
    var templateBoardId = '1rW0VzoP'; // Replace with your template board ID - DONE

    // Fetch all cards from the template board
    return t.get('board', 'all')
        .then(function(boardData) {
            var cards = boardData.cards; // Get the list of cards
            // Find the card that has the same name as the label
            return cards.find(card => card.name === label.name); // Return the matching template card
        });
}

// Function to create a new card in the sprint board from a template card
function createSprintCard(boardId, templateCard) {
    // Define the new card data using the template card's details
    var cardData = {
        name: templateCard.name, // The name of the template card as the new card title
        desc: templateCard.desc, // Copy the description from the template
        labels: templateCard.labels.map(lbl => lbl.id), // Assign the template's label IDs to the new card
        idList: '66e9ca5e0e5d1635fdb8388d' // ID of the list where the new card will be created
    };

    // Use Trello API to create a new card
    t.post('cards', cardData)
        .then(function(response) {
            // Log successful card creation
            console.log('Card created:', response);
        })
        .catch(function(error) {
            // Handle any errors
            console.error('Error creating card:', error);
        });
}
