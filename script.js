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
        'inspect', 'view', 'use', 'pickup', 'move forward', 'move left', 'move right', 'move back', 'drop'
    ]
    // Commands are basic things that a player can do throughout the game besides possibly moving to another room. This line will populate on the footer of your game for players to reference. 
    // This shouldn't be more than 6-8 different commands.
}

//* Items
class Item {
    constructor(name, description, location, moveable) {
        this.name = name,
            this.description = description,
            this.location = location
        this.moveable = moveable
    }
}

const sword = new Item(
    "Sword",
    "A sword wielded by a hero in an ancient age. When grasped, a strange sense of nostalgia washes over you. Take it when going alone would otherwise be dangerous.",
    "Guard Room",
    true
)
const potato = new Item(
    "Potato",
    "it's just a raw potato...",
    "Dining Hall",
    true
)

const crown = new Item(
    "Crown",
    "The Crown of the castle ruler, encrusted with jewels. There is something eerie about it...",
    "Royal Bedchambers",
    true
)

const jewel = new Item(
    "Jewel",
    'The Jewel shone of its own inner light, and appeared a "little globe of pallid light" in darkness, and yet, it took all light that fell upon it and changed it into "ten thousand sparks of white radiance, shot with glints of the rainbow"',
    "Throne Room",
    true
)

const lever = new Item(
    "Lever",
    "I wonder if it does anything.",
    "Castle Gates",
    false
)

const greenTunic = new Item(
    "Green Tunic",
    "A tunic that resonates with strength and courage. It feels as though it has been passed through time. Looks as though it could be worn by a child or an adult, but strangely you don't think it will fit you.",
    "Guard Room",
    false
)

const pillow = new Item(
    "Pillow",
    "A well loved pillow, the pillow case is slightly frayed at the ends but very soft. Whoever left this behind must miss it.",
    "Royal Bed Chamber",
    false
)

const roastedWholeBird = new Item(
    "Roasted Whole Bird",
    "A perfectly roasted whole bird. It's still warm as if it was just cooked minutes ago. Makes you hungry.",
    "Dining Hall",
    true
)

const letter = new Item(
    "Letter",
    "looks like tattered piece of paper on the floor. Scrawled with writing that you can't understand. There are markings in the four corners of the page. A potato, a jewel, a sword and a flower?",
    false
)

const pitcherOfWine = new Item(
    "Pitcher of Wine",
    "The pitcher glistens with condensation, the wine is still cold. It smells of an oaky after birth.",
    "Dining Hall",
    false
)

const lilyOfTheValley = new Item(
    "Lily of the Valler",
    "A beautiful flower, there are tons of them scattered across the floor of the room. Gives you feelings of warmth and courage.",
    "Royal Bed Chamber",
    true
)

const rock = new Item(
    'Rock',
    "Its a shiny rock",
    'Castle Gates',
    true
)

//* item lookup table


let itemLookup = {
    'Sword': sword,
    'Jewel': jewel,
    'Crown': crown,
    'Potato': potato,
    'Lever': lever,
    'GreenTunic': greenTunic,
    'Pillow': pillow,
    'RoastedWholeBird': roastedWholeBird,
    'Letter': letter,
    'PitcherOfWine': pitcherOfWine,
    'LilyOfTheValley': lilyOfTheValley,
    'Rock': rock
}


//* Locations
class Location {
    constructor(name, description, item, direction) {
        this.name = name;
        this.description = description;
        this.item = item;
        this.direction = direction;
    }

    pickup(itemName) {

        const item = itemLookup[itemName];
        if (item === undefined) {
            return `You don't see that item here.`
        } else if (item.moveable === true) {
            this.item = this.item.filter(item => item !== itemName);
            playerInventory.push(itemName);
            return `You picked up the ${itemName} and place it into you inventory. ${itemName} : ${item.description}.`;
        } else {
            return `You can't pick that up.`
        }
    }



}

const castleGates = new Location(
    "Castle Gates",
    "A massive Castle Gate serves as the entrance to what seems to be an ancient castle. The gate's doors are swung open as if someone left in a hurry. The stones, weathered with time, look as through they have been standing for many ages, yet still hold true.",
    ["Lever", "Rock"],
    {
        'move forward': 'greatHall'
    }
)

const greatHall = new Location(
    "Great Hall",
    "The Great Hall, the very core of the castle. Old weathed tapestries hang on the wall. It seems like you can navigate to most of the rooms of the castle from here.",
    ["Potato", "Letter"],
    {
        'move forward': 'throneRoom',
        'move back': 'castleGates',
        'move left': 'diningHall',
        'move right': 'guardRoom'
    }
)

const guardRoom = new Location(
    "Guard Room",
    "You enter what looks like a guard room. Old decayed armors and weapons line the walls, and are scattered on floor. Maybe there is something you can scavange from this room.",
    ["Sword", "Green Tunic"],
    {
        'move back': 'greatHall'
    }
)

const diningHall = new Location(
    "Dining Hall",
    "Disheveled chairs line a long table. Upon the table looks to be food? An intoxicating aroma of a freshly prepared feast wafts through the hall. The food has to be old, but it smells as if it was cooked only minutes ago.",
    ["Roasted Whole Bird", "Pitcher of Wine"],
    {
        'move back': 'greatHall'
    }
)

const throneRoom = new Location(
    "Throne Room",
    "A room steeped in divinity, light pours through intricate stain glass windows that look to depict stories and deeds of an acient time long past. An oddly nostalgic place, yet you have no memory of every being here.",
    ["Crown", "Jewel"],
    {
        'move back': 'greatHall',
        'move forward': 'royalBedchamber'
    }
)

const royalBedchamber = new Location(
    "Royal Bed Chamber",
    "You stumble into a room to be greeted by a strong floral aroma, Lily of the Valley? A large bed sits in the middle of the room, covered in way too many pillows of course. You instantly feel exhausted, but you know you this is not the time for rest."
    ["Lily of the Valley", "Pillow"],
    {
        'move back': 'throneRoom'
    }
)

//* State Machine
let locationLookUp = {
    'castleGates': castleGates,
    'greatHall': greatHall,
    'guardRoom': guardRoom,
    'diningHall': diningHall,
    'throneRoom': throneRoom,
    'royalBedchamber': royalBedchamber
}
let locations = {
    castleGates: ['greatHall'],
    greatHall: ["castleGates", "guardRoom", "diningHall", "throneRoom"],
    guardRoom: ["greatHall"],
    diningHall: ["greatHall"],
    throneRoom: ["greatHall", "royalBedchamber"],
    royalBedchamber: ["throneRoom"]
};

let currentLocation = "castleGates";

let commands = {
    inspect: ['inspect'],
    view: ['view'],
    user: ['use'],
    pickup: ['pickup'],
    move: ['move back', 'move right', 'move left', 'move forward'],
    drop: ['drop']
}

// Your code here
let playerInventory = [];
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

    let splinput = playerInput.split(' ');
    let inputItem = splinput.slice(1).join(' ');
    let pInput = splinput[0];


    function capitalize(someWord) {
        let firstLetter = someWord[0];
        let restOfWord = someWord.slice(1, someWord.length);
        let fullWord = firstLetter.toUpperCase() + restOfWord.toLowerCase();

        return fullWord;
    };

    // invalid command handling
    if (!gameDetails.playerCommands.includes(pInput) && pInput !== 'move') {
        return `You're not sure what that means. (invalid command)`
    };

    // if player input is just view return the current location description, if player input is view itemname check if item is in inventory and return description if it is
    if (commands.view.includes(pInput)) {
        if (inputItem === '') {
            return `${locationLookUp[currentLocation].description}`;
        } else if (inputItem !== '' && playerInventory.includes(capitalize(inputItem))) {
            let item = itemLookup[capitalize(inputItem)];
            return `${item.description}`;
        } else {
            return `You don't have that item in your inventory.`
        }
    };
    // pickup command handling

    if (commands.pickup.includes(pInput)) {
        let res = locationLookUp[currentLocation].pickup(capitalize(inputItem));
        console.log(playerInventory);
        return res;
    };

    // if player input is just inspect return items in the room with their description, if player input is inspect itemname return just that items description
    if (commands.inspect.includes(pInput)) {
        if (inputItem === '') {
            let items = locationLookUp[currentLocation].item;
            let itemNames = items.map(item => itemLookup[item].name);
            return `You see ${itemNames.join(', ')}`;
        } else if (inputItem !== '' && locationLookUp[currentLocation].item.includes(capitalize(inputItem))) {
            let item = itemLookup[capitalize(inputItem)];
            return `${item.description}`;
        } else {
            return `You don't see that item here.`
        }
    }


    // move commands handling
    if (commands.move.includes(playerInput)) {
        if (commands.move.includes(playerInput) && locations[currentLocation].includes(locationLookUp[currentLocation].direction[playerInput])) {
            currentLocation = locationLookUp[currentLocation].direction[playerInput];
            return `You move to the ${locationLookUp[currentLocation].name}.`;
        } else {

            return `You're in the ${locationLookUp[currentLocation].name}, you can't go that way. Try a different direction.`;
        }
    };

    // - ** Given ** the player wishes to drop an item in a new location.
    // - ** Then ** the item should be removed from the player inventory.
    // - ** And ** added to the rooms item list.
    if (commands.drop.includes(pInput)) {
        if (playerInventory.includes(capitalize(inputItem))) {
            playerInventory = playerInventory.filter(item => item !== capitalize(inputItem));
            locationLookUp[currentLocation].item.push(capitalize(inputItem));
            return `You dropped the ${capitalize(inputItem)} on the floor.`;
        } else {
            return `You don't have that item in your inventory.`
        }
    }


};
