$(() => {

    //! GLOBAL VARIABLES
    let deathFlag = false;

    let currentRoomId = "MAIN_ROOM"

    // Holds the set of clues that have been read
    const readClues = []

    // Clue Bar Init
    const displayClueBar = () => {
        $("#clueBar").text("Clues: " + readClues.length);
    };

    /**
     * Resets the game by reloading the page
     */
    const resetGame = () => {
        window.location.reload()
    }

    const game = {
        // start: MAIN_ROOM,
        rooms: {
            MAIN_ROOM: {
                title: "Main Room",
                description: `You hear a faint whirring sound as your VR implant spins up. The room focuses into view. You are in a
                standard laboratory. There is a locked safe in the centre of the room.`,
                actions: [],
            },
            POWER_REACTOR: {
                title: "Power Reactor",
                description: `You walk over to the power reactor.\nThe surrounding area is warm, and a faint orange glow emits from the machine.\nThere is a note stuck on the reactor, and a big red button.`,
                actions: ["POWER_NOTE", "POWER_BUTTON"],
            },
        },
        actions: {
            POWER_NOTE : {
                title: "Read note",
                description: `"Dave told me to clean the reactor, but I haven't been paid for 2 months.\nToo bad, I'm not gonna do anything. Who cares about the stupid jQuery library anyway, it's so old!"
                \n*You take a small circuit board wedged behind the note. This looks like a clue!*`,
            },
            POWER_BUTTON : {
                title: "Push Button",
                description: `"Kill Me`,
            },
        },

        /*
        rooms: [

            {
                id: "MAIN_ROOM",
                description: `You hear a faint whirring sound as your VR implant spins up. The room focuses into view. You are in a
                standard laboratory. There is a locked safe in the centre of the room.`,
                actions: [],
                // exits: [POWER_REACTOR, STUDY_TABLE, AI_CONSTRUCT, CHEMICAL_STORE, KEY_ROOM],
                // exits: [game.rooms[1].id, ]
            },

            {
                id: "POWER_REACTOR",
                description: `You walk over to the power reactor.\nThe surrounding area is warm, and a faint orange glow emits from the machine.\nThere is a note stuck on the reactor, and a big red button.`,
                actions: ["POWER_NOTE", "POWER_BUTTON"],
                // exits: [MAIN_ROOM],
            },

            {
                id: "STUDY_TABLE",
                description: `The table is littered with notes and drawings, on paper ("How old!" you wonder).\nThere is an iMike standard-issue computer on the table.`,
                actions: ["STUDY_NOTE", "I_MIKE"],
                // exits: [MAIN_ROOM],
            },
            
            {
                id: "AI_CONSTRUCT",
                description: `You see a female AI, quietly meditating in the corner. `,
                actions: ["AI_TALK"],
                // exits: [MAIN_ROOM],
            },

            {
                id: "CHEMICAL_STORE",
                description: `In the storeroom, there's a small vial left behind on the table.`,
                actions: ["CHEM_READ", "CHEM_SMELL"],
                // exits: [MAIN_ROOM],
            },

        ],
        actions: [

            {
                roomid: "POWER_REACTOR",
                titleBtn: "Read note",
                id_done: false,
                description: `"Dave told me to clean the reactor, but I haven't been paid for 2 months.\nToo bad, I'm not gonna do anything. Who cares about the stupid jQuery library anyway, it's so old!"
                \n*You take a small circuit board wedged behind the note. This looks like a clue!*`,
                

            },

            {
                roomid2: "POWER_REACTOR",
                titleBtn2: "Press Button",
                description: `A siren sounds as the doors of the machine swing open, bathing you in a blinding flash of light.
                \nYou hear your skin crackling as the radiation reduces you to dust. Game Over.`,
                // result: DEATH,
            },

            {
                roomid: "STUDY_TABLE",
                titleBtn: "Read Notes",
                id_done: false,
                description: `Despite me repeatedly warning them, corporate refuses to put on greater encryption.
                \nI'm done. I'm supposed to hide the unlocker device but I'll do it next time. - 27 July 2081, Researcher Farhan, Justin, Sylvester, et al.
                \n*You take the unlocker device and notice it's missing a few parts*`,
                // result: ADD_CLUE,
            },

            {
                roomid2: "STUDY_TABLE",
                titleBtn2: "Turn on iMike",
                description: `As the boot sequence of the computer commences, the police break into the room.
                \nAiming a raygun at you, they fire a .remove() function in your face as you fade from the world. Game Over.`,
                // result: DEATH,
            },

            {
                roomid: "AI_CONSTRUCT",
                titleBtn: "Talk to AI",
                id_done: false,
                description: `"Greetings, Simon, I'm A5HL3Y. I didn't know people still visited here.
                \nFrom what I can see in your implant, you are not from here. You must be trying to save the world.
                \nSadly I cannot, as I am stuck here in this computer. Please, take this circuit board. It'll help you with your quest."
                \n*A5HL3Y hands you a circuit board. This looks like a clue!*`,
                // result: ADD_CLUE,
            },

            {
                roomid: "CHEMICAL_STORE",
                titleBtn: "Read Vial",
                id_done: false,
                description: `"IF THEY FORCE YOU TO HAND OVER THE CIRCUIT BOARD, DROP THE CIRCUIT INTO THIS VIAL AND DRINK IT. YOU'LL DIE, BUT SO WILL THE BOARD."
                \n*You notice a circuit board stuck under the vial. Looks like you found a clue!*`,
                // result: ADD_CLUE,
            },

            {
                roomid2: "CHEMICAL_STORE",
                titleBtn2: "Smell Vial",
                description: `You uncork the vial and take a whiff. The vial smells strongly of bitter almonds. A bit of the liquid gets on your lips.
                \nYou get a headache and notice blood dripping from your nostrils, as you crumple to the ground like a wet newspaper and expire. Game over.`,
                // result: DEATH,
            },

        ]
        */
    }

        

   

    /**
     * Reads the clue
     * 
     * Step 1: See if the clue has been read
     * Step 2: If the clue is read, we will prompt the user
     * Step 3: if the clue is not read, we will display the clue
     * 
     * @param {string} actionId 
     */
    const readRoomClue = (actionId) => {
        if (readClues.includes(actionId)) {
            alert("Sorry, this clue has mysteriously vanished.")
        } else {
            //  Display the clue
            alert(game.actions[actionId].description)
            readClues.push(actionId)
            displayClueBar()
        }
    }

    /**
     * Navigates to a room
     * Note that it does 
     * 
     * @param {string} roomId 
     */
    const navigateToRoom = (roomId) => {
        currentRoomId = roomId
        displayRoom(currentRoomId)
    }

    /**
     * Displays the navigation buttons
     */
    const displayNavigationButtons = () => {
        $("#stageNavigation").empty()

        for (const roomId in game.rooms) {
            if (roomId === currentRoomId) continue

            const room = game.rooms[roomId]

            $("#stageNavigation").append(($('<button/>')
                .text(room.title)
                .on("click", function() {
                    navigateToRoom(roomId)
                })
            ))
        }
    }

    /**
     * create a single room button
     * 
     * @param {object} action 
     * @returns 
     */
    const createRoomButton = (actionId) => {
        const action = game.actions[actionId]
        return $('<button/>')
                .text(action.title)
                .on("click", function() {
                    readRoomClue(actionId)
                })
    }

    /**
     * Displays a room
     * 
     * @param {*} roomId 
     */
    const displayRoom = (roomId) => {

        // Get the room
        const room = game.rooms[roomId]
        
        // Display the description
        $("#description").html(room.description)

        // Display the action Keys
        $("#stageActions").empty()
        for(const actionId of room.actions) {
            const button = createRoomButton(actionId)
            $("#stageActions").append(button)
        }

        //  Display the navigation buttons
        displayNavigationButtons()
    }

    // DEATH FUNCTION
    const deathFunc = () => {
        ("*").off();
        $("<div>").text("");
        $("<div>").text("Game Over. Please refresh the page to restart.");
    };


    /**
     * Initialise the app
     */
     const initApp = () => {
        displayRoom(currentRoomId)
        displayClueBar()
    }

    /**
     * Initialise when all scripts are loaded and ready
     */
    $(document).ready(() => {
        initApp()
    })
})
