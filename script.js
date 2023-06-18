/* 
    TODO for students
        General Setup:
            - This object is framed for you to fill out the values to help customize your game.
            - This will alter the browser to display your game title. The "Quick Notes" modal will also detail your information along with the description (desc) of what your game is about. It is important to highlight key commands that you want the player to use.
            - The startingRoomDescription will display what the player sees upon coming to your project.

        Do NOT alter the name of this object.

        Both exports are required in order for this project to run.

        - index.html should be running in your browser through the build process.
            - use your browsers console throughout testing.
*/

export const gameDetails = {   
    title: 'Castle Crawl',
    desc: 'Welcome to the world of Castle Crawl, here are some quick rules & concepts... use the commands listed below to navigate through the rooms of the castle and discover its secrets!',
    author: 'Dominic Altobell',
    cohort: 'ptsb-may-2023',
    startingRoomDescription: 'What you see before you is a magnificent castle gate, it looks ancient and its shadow looms over you. What will you do?',
    playerCommands: [
        // replace these with your games commands as needed
        'inspect', 'view', 'look', 'pickup','move left', 'move right','move forward','move backward'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

//* Items
class Item {
    constructor(name, description, location, moveable ) {
        this.name = name,
        this.description = description,
        this.location = location
        this.moveable = moveable
    }
}

const sword = new Item (
    "Sword",
    "A sword wielded by a hero in an ancient age. When grasped, a strange sense of nostalgia washes over you. Take it when going alone would otherwise be dangerous.",
    "Guard Room",
    true
)
const potato = new Item (
    "Potato",
    "It's a raw potato...",
    "Dining Hall",
    true
)

const crown = new Item (
    "Crown",
    "The Crown of the castle ruler, encrusted with jewels. There is something eerie about it...",
    "Royal Bedchambers",
    true
)

const jewel = new Item (
    "Jewel",
    'The Jewel shone of its own inner light, and appeared a "little globe of pallid light" in darkness, and yet, it took all light that fell upon it and changed it into "ten thousand sparks of white radiance, shot with glints of the rainbow"',
    "Throne Room",
    true
)




//* Locations
let locations = {

}
let playerInventory = [];


// Your code here

export const domDisplay = (playerInput) => {
    /* 
        TODO: for students
        - This function must return a string. 
        - This will be the information that is displayed within the browsers game interface above the users input field.

        - This function name cannot be altered. 
        - "playerInput" is whatever text the user is typing within the input field in the browser after hitting the ENTER key.
            - test this out with a console log.

        What your player should be able to do (checklist):
            - move between rooms
            - view current room
            - pickup moveable items
                - there should be at least 2 items that cannot be moved.
            - view player inventory
        
        Stretch Goals:
            - drop items in "current room" (if a player picks up an item in one room and moves to another, they should be able to remove it from their inventory)
            - create win/lose conditions.
                - this could be a puzzle that may require an item to be within the players inventory to move forward, etc.

        HINTS:
            - consider the various methods that are available to use.
            - arrays are a great way to hold "lists".
            - You are not limited to just the exported function. Build additional functions and don't forget to hold the return within a variable.
            - Review notes!
                - Have them open as you build.
                - break down each problem into small chunks
                    - What is the process of picking up an item exactly? ex: Look. Pick from a list of items. Put into players list of items... 
    */

    // Your code here
} 
