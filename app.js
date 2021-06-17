$(() => {

   

    let currentRoomId = "MAIN_ROOM"

    // Holds the set of clues that have been read
    const readClues = []

    // Clue Bar Init
    const displayClueBar = () => {
        $("#clueBar").text("Clues: " + readClues.length);
    };

    

    const game = {
        // start: MAIN_ROOM,
        rooms: {
            MAIN_ROOM: {
                title: "Main Room",
                description: `You hear a faint whirring sound as your VR implant spins up. The room focuses into view. You are in a
                standard laboratory.`,
                actions: [],
            },
            POWER_REACTOR: {
                title: "Power Reactor",
                description: `You walk over to the power reactor.\nThe surrounding area is warm, and a faint orange glow emits from the machine.\nThere is a note stuck on the reactor, and a big red button.`,
                actions: ["POWER_NOTE", "POWER_BUTTON"],
            },
            STUDY_TABLE: {
                title: "Study Table",
                description: `The table is littered with notes and drawings, on paper ("How old!" you wonder).\nThere is an iMike standard-issue computer on the table.`,
                actions: ["STUDY_NOTES", "STUDY_IMIKE"],
            },
            AI_CONSTRUCT: {
                title: "AI Construct",
                description: `You see a female AI, quietly meditating in the corner.`,
                actions: ["AI_TALK"],
            },
            CHEMICAL_STORE: {
                title: "Chemical Store",
                description: `In the storeroom, there's a small vial left behind on the table.`,
                actions: ["CHEM_READ", "CHEM_SMELL"],
            },

        },
        actions: {
            POWER_NOTE : {
                title: "Read note",
                description: `"Dave told me to clean the reactor, but I haven't been paid for 2 months.\nToo bad, I'm not gonna do anything. Who cares about the stupid jQuery library anyway, it's so old!"
                \n*You take a small circuit board wedged behind the note. This looks like a clue!*`,
                death: false,
            },
            POWER_BUTTON : {
                title: "Push Button",
                description: `A siren sounds as the doors of the machine swing open, bathing you in a blinding flash of light.
                \nYou hear your skin crackling as the radiation reduces you to dust. Game Over.`,
                death: true,
            },
            STUDY_NOTES : {
                title: "Read Study Notes",
                description: `Despite me repeatedly warning them, corporate refuses to put on greater encryption.
                \nI'm done. I'm supposed to hide the unlocker device but I'll do it next time. - 27 July 2081, Researcher Farhan, Justin, Sylvester, et al.
                \n*You take the unlocker device and notice it's missing a few parts*`,
                death: false,
            },
            STUDY_IMIKE : {
                title: "Turn on iMike Computer",
                description: `As the boot sequence of the computer commences, the police break into the room.
                \nAiming a raygun at you, they fire a .remove() function in your face as you fade from the world. Game Over.`,
                death: true,
            },
            AI_TALK : {
                title: "Talk to AI",
                description: `"Greetings, Simon, I'm A5HL3Y. I didn't know people still visited here.
                \nFrom what I can see in your implant, you are not from here. You must be trying to save the world.
                \nSadly I cannot, as I am stuck here in this computer. Please, take this circuit board. It'll help you with your quest."
                \n*A5HL3Y hands you a circuit board. This looks like a clue!*`,
            },
            CHEM_READ : {
                title: "Read Label on Vial",
                description: `"IF THEY FORCE YOU TO HAND OVER THE CIRCUIT BOARD, DROP THE CIRCUIT INTO THIS VIAL AND DRINK IT. YOU'LL DIE, BUT SO WILL THE BOARD."
                \n*You notice a circuit board stuck under the vial. Looks like you found a clue!*`,
                death: false,
            },
            CHEM_SMELL : {
                title: "Smell contents of Vial",
                description: `You uncork the vial and take a whiff. The vial smells strongly of bitter almonds. A bit of the liquid gets on your lips.
                \nYou get a headache and notice blood dripping from your nostrils, as you crumple to the ground like a wet newspaper and expire. Game over.`,
                death: true,
            },


        },

        
    }


       // Check if the clues have all been found

       const checkWin = () => {
        if (readClues.length === 4) {
        alert(`With all the clues in hand, S1M0N assembles the unlocker device, steals the jQuery library, and jacks out of the map.
        \n You Win!!!`)
        window.location.href = "/index.html";
    }
} 

   

    
    // Check if clues have been read, or whether the 'clue' leads to death, or whether the clue is an actual clue.
    const readRoomClue = (actionId) => {
        if (readClues.includes(actionId)) { 
            alert("Sorry, you've already read this clue.") 
        } else if (game.actions[actionId].death === true) {
            alert(game.actions[actionId].description)
            window.location.reload()
        } else {
            alert(game.actions[actionId].description)
            readClues.push(actionId)
            displayClueBar()
            checkWin()
        }
    }



    

    // ROOM NAVIGATOR FUNCTION
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
     * 
     */
    const displayRoom = (roomId) => {

        // Get the room
        const room = game.rooms[roomId]

        // Display the title, which is stored in currentRoomId
        $("#title").html(currentRoomId)
        
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

// HUNGRY FOR MORE??
// YOU DONT WIN UNLESS U GO TO A SPECIFIC PLACE WITH ALL 4 CLUES
// YOU CAN ADD USELESS CLUES TOO
// YOU CAN DROP USELESS CLUES AND CARRY MORE (INVENTORY)
// YOU CAN PICK THEM UP, BUT YOU CAN DROP USEFUL CLUES TOO
