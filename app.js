$(() => {


    //! GLOBAL VARIABLES
    let deathFlag = false;
    let clueCounter = 0;

    //! Clue Counter Iterator Function thingamajig
    const addOneClue = () => {
        clueCounter++
    };

//     //? Return to Main Room Function
//     const getOut = () => {

//     }
//     $(".backButton").on("click", mainRoomInit); // what if I only declared this ONCE, GLOBALLY.

    

//     // NAV BAR Initialization
//     const navbarInit = () => {
//         $("#cluebar").append("Clues: " + clueCounter);
        
//     };

    

//     // DEATH SCREEN INIT

//     const showDeathScreen = () => {
//     if (deathFlag === true) {
//         $(".mainroom").hide();
//         $(".keyroom").hide();
//         $(".powerReactor").hide();
//         $(".studyTable").hide();
//         $(".aiConstruct").hide();
//         $(".chemicalStore").hide();
//         $(".navbar").hide();
//         $(".deathScreen").show();
//     } else {
//         $(".deathScreen").hide();
//     };
// };

// // MAIN ROOM Without the stupid handlers




//     // MAIN ROOM INIT
//     const mainRoomInit = () => {
//         $(".deathScreen").hide();
//         $(".keyroom").hide();
//         $(".powerReactor").hide();
//         $(".studyTable").hide();
//         $(".aiConstruct").hide();
//         $(".chemicalStore").hide();
//         $(".mainroom").show();
//         $(".navbar").show();

//         $("#goPowerReactor").on("click", powerReactorInit);
//         $("#gostudyTable").on("click", studyTableInit);
//         $("#goaiConstruct").on("click", aiConstructInit);
//         $("#gochemicalStore").on("click", chemicalStoreInit);
//         $("#gokeyRoom").on("click", keyRoomInit);


//     }
    
// // POWER REACTOR INIT
// const powerReactorInit = () => {
//         $(".powerReactor").show();
//         $(".mainroom").hide();

        
// };

// // STUDY TABLE INIT
// const studyTableInit = () => {
//         $(".studyTable").show();
//         $(".mainroom").hide();


// };

// // AI Construct Init
// const aiConstructInit = () => {
//         $(".aiConstruct").show();
//         $(".mainroom").hide();


// };

// // Chemical Store Init
// const chemicalStoreInit = () => {
//         $(".chemicalStore").show();
//         $(".mainroom").hide();


// };

// // Key Room Init
// const keyRoomInit = () => {
//         $(".mainroom").hide();
//         $(".keyroom").show();


// };



//! TIME TO REWRITE THE ENTIRE THING MUAHAHAHAHAHAHAHAAHAHA

//! Define the div const variables
const MAIN_ROOM = $("#mainRoom");
const POWER_REACTOR = $("#powerReactor");
const STUDY_TABLE = $("#studyTable");
const AI_CONSTRUCT = $("#aiConstruct");
const CHEMICAL_STORE = $("#chemicalStore");
const KEY_ROOM = $("#keyRoom");

//! Define the buttons in each room and what they do




//! Define the room (by 15 June morning, link up at least 3 rooms first)
const game = {
    start: MAIN_ROOM,
    rooms: [

        {
            id: MAIN_ROOM,
            description: `You hear a faint whirring sound as your VR implant spins up. The room focuses into view. You are in a
            standard laboratory. There is a locked safe in the centre of the room.`,
            actions: [],
            exits: [POWER_REACTOR, STUDY_TABLE, AI_CONSTRUCT, CHEMICAL_STORE, KEY_ROOM],
        },

        {
            id: POWER_REACTOR,
            description: `You walk over to the power reactor.\nThe surrounding area is warm, and a faint orange glow emits from the machine.\nThere is a note stuck on the reactor, and a big red button.`,
            actions: [POWER_NOTE, POWER_BUTTON],
            exits: [MAIN_ROOM],
        },

        {
            id: STUDY_TABLE,
            description: `The table is littered with notes and drawings, on paper ("How old!" you wonder).\nThere is an iMike standard-issue computer on the table.`,
            actions: [STUDY_NOTE, I_MIKE],
            exits: [MAIN_ROOM],
        },
        
        {
            id: AI_CONSTRUCT,
            description: `You see a female AI, quietly meditating in the corner. `,
            actions: [AI_TALK],
            exits: [MAIN_ROOM],
        },

        {
            id: CHEMICAL_STORE,
            description: `In the storeroom, there's a small vial left behind on the table.`,
            actions: [CHEM_READ, CHEM_SMELL],
            exits: [MAIN_ROOM],
        },

        {
            id: KEY_ROOM,
            description: `A raised pedestal adorns the centre of the laboratory.\nThere is a black safe on the pedestal, and you catch glimpses of blue light through the hinges.`,
            actions: [KEY_OPEN],
            exits: [MAIN_ROOM],
        },
    ],

    actions: [

        {
            id: POWER_NOTE,
            description: `"Dave told me to clean the reactor, but I haven't been paid for 2 months.\nToo bad, I'm not gonna do anything. Who cares about the stupid jQuery library anyway, it's so old!"
            \n*You take a small circuit board wedged behind the note. This looks like a clue!*`,
            result: ADD_CLUE,

        },

        {
            id: POWER_BUTTON,
            description: `A siren sounds as the doors of the machine swing open, bathing you in a blinding flash of light.
            \nYou hear your skin crackling as the radiation reduces you to dust. Game Over.`,
            result: DEATH,
        },

        {
            id: STUDY_NOTE,
            description: `Despite me repeatedly warning them, corporate refuses to put on greater encryption.
            \nI'm done. I'm supposed to hide the unlocker device but I'll do it next time. - 27 July 2081, Researcher Farhan, Justin, Sylvester, et al.
            \n*You take the unlocker device and notice it's missing a few parts*`,
            result: ADD_CLUE,
        },

        {
            id: I_MIKE,
            description: `As the boot sequence of the computer commences, the police break into the room.
            \nAiming a raygun at you, they fire a .remove() function in your face as you fade from the world. Game Over.`,
            result: DEATH,
        },

        {
            id: AI_TALK,
            description: `"Greetings, Simon, I'm A5HL3Y. I didn't know people still visited here.
            \nFrom what I can see in your implant, you are not from here. You must be trying to save the world.
            \nSadly I cannot, as I am stuck here in this computer. Please, take this circuit board. It'll help you with your quest."
            \n*A5HL3Y hands you a circuit board. This looks like a clue!*`,
            result: ADD_CLUE,
        },

        {
            id: CHEM_READ,
            description: `"IF THEY FORCE YOU TO HAND OVER THE CIRCUIT BOARD, DROP THE CIRCUIT INTO THIS VIAL AND DRINK IT. YOU'LL DIE, BUT SO WILL THE BOARD."
            \n*You notice a circuit board stuck under the vial. Looks like you found a clue!*`,
            result: ADD_CLUE,
        },

        {
            id: CHEM_SMELL,
            description: `You uncork the vial and take a whiff. The vial smells strongly of bitter almonds. A bit of the liquid gets on your lips.
            \nYou get a headache and notice blood dripping from your nostrils, as you crumple to the ground like a wet newspaper and expire. Game over.`,
            result: DEATH,
        },

        {
            id: KEY_OPEN,
            description: `The box opens and the almost-mythical jQuery library appears in your hands. You sprint out of the room and save the day. YOU WIN!`,
            result: WIN,
        }
    ]
}



//! The testing area - KEEP CLEAR -

// navbarInit();
// mainRoomInit();


//Jerrick Wee's wisdom
// ("*").off() this turns off all clicks
// $("<div>").text("")


});