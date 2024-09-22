# Sprint It! - Trello Power-Up

## Description
"Sprint It!" is a Trello Power-Up that allows users to quickly create new cards from templates based on the labels of an existing card. This tool is designed to streamline sprint planning and task management within Trello boards.

## Features
- Adds a "Sprint It!" button to Trello cards
- Creates new cards based on the labels of the selected card
- Allows selection of due dates and team members for the new cards
- Automatically creates cards in the same list as the original card
- Copies selected labels to the new cards

## Files
- `index.html`: The connector file for the Power-Up (active)
- `popup.html`: Handles the user interface for the Power-Up (active)
- `manifest.json`: JSON manifest file for Trello Power-Up configuration (active)
- `authorize.html`: Handles the authorization process for the Power-Up (active)
- `authorize-callback.html`: Callback page for the authorization process (inactive)

Note: The `authorize-callback.html` file is currently inactive but may be implemented in future versions for enhanced security and functionality. The authorization process is currently handled directly in `authorize.html`.

## Installation
1. Host these files on a web server (e.g., GitHub Pages)
2. Create a new Power-Up in your Trello Workspace
3. Set the connector URL to the hosted `index.html` file
4. Add the Power-Up to your Trello board

## Usage
1. Click the "Sprint It!" button on any card in your Trello board
2. If not authorized, you'll be prompted to authorize the Power-Up
3. Once authorized, select the labels for which you want to create new cards
4. Choose a due date (optional)
5. Select team members to assign to the new cards (optional)
6. Click "Create Sprint Cards" to generate new cards based on your selections
7. New cards will be created at the top of the same list as the original card

## Dependencies
- Trello Power-Up Client Library

## Configuration
Ensure that your `manifest.json` file is correctly set up with the necessary permissions and capabilities for the Power-Up.

## Development Status
This Power-Up is functional and can successfully create new cards based on labels. It includes user authorization for enhanced security and uses the Trello REST API for card creation. The Power-Up operates on the card and board level, creating new cards within the same board and list as the original card. It displays all available label colors, including light and dark variants, for a comprehensive user experience. Future improvements may include more customization options and refined error handling.

## Contributing
This is a personal project and is not currently open for contributions.

## License
[Your chosen license, if applicable]

## Contact
For support or inquiries, please contact: support@BWPR.co
