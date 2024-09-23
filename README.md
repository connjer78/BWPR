# Sprint Cards Power-Up for Trello

## Overview

The Sprint Cards Power-Up is a custom Trello Power-Up that enhances project management by allowing users to quickly create sprint cards based on labels from a source card. This Power-Up streamlines the process of setting up sprint tasks, making it easier for teams to plan and manage their sprints within Trello.

## Features

- Create sprint cards from a source card based on selected labels
- Automatically copy card details from template cards in a dedicated "Templates" list
- Set due dates for each new sprint card
- Assign multiple members to each new sprint card
- Maintain a link back to the source card for easy reference

## Workspace Requirements

For the Sprint Cards Power-Up to function correctly, your Trello workspace must meet the following requirements:

1. A board named "Sprint" must exist in the workspace.
2. The "Sprint" board must contain a list named "Templates".
3. The "Templates" list should contain template cards with names that exactly match the labels used in your workspace.
4. The "Sprint" board must also contain a list named "Backlog" where new sprint cards will be added.

Ensure these requirements are met before using the Power-Up to create sprint cards.

## How It Works

1. The Power-Up adds a "Sprint It!" button to Trello cards.
2. Clicking the button opens a popup where users can:
   - Select which labels to create sprint cards for
   - Set due dates for each sprint card
   - Choose multiple members to assign to each sprint card
3. The Power-Up then:
   - Finds corresponding template cards in the "Templates" list of the "Sprint" board
   - Creates new cards based on these templates
   - Applies the selected labels, due dates, and member assignments
   - Moves the new cards to the "Backlog" list of the "Sprint" board
   - Adds a link back to the source card on each new sprint card

## Recent Improvements

- Implemented a vertical layout for better space utilization in the popup
- Added a custom multi-select dropdown for member selection, allowing multiple members to be assigned while saving space
- Updated the UI to use Trello's official style guide and Atlassian Design Tokens for better visual integration and theme support
- Improved error handling and user feedback

## Usage

1. Navigate to a card in your Trello board
2. Click the "Sprint It!" button that appears on the card
3. In the popup, select the labels you want to create sprint cards for
4. Set due dates for each selected label (optional)
5. Choose members to assign to each sprint card (optional)
6. Click "Create Sprint Cards" to generate the new cards

## Development

This Power-Up is built using HTML, CSS, and JavaScript, leveraging the Trello Power-Up API. It uses Trello's official CSS for styling and Atlassian Design Tokens for theme compatibility.

[Include any specific development setup instructions, if necessary]

## Support

For support or to report issues, please contact us at support@bwpr.co.
