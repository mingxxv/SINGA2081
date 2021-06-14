$(() => {


    //! GLOBAL VARIABLES
    let deathFlag = false;
    let clueCounter = 0;

    //! Clue Counter Iterator Function thingamajig
    const addOneClue = () => {
        clueCounter++
    };

    //? Return to Main Room Function
    const getOut = () => {

    }
    $(".backButton").on("click", mainRoomInit); // what if I only declared this ONCE, GLOBALLY.

    

    // NAV BAR Initialization
    const navbarInit = () => {
        $("#cluebar").append("Clues: " + clueCounter);
        
    };

    

    // DEATH SCREEN INIT

    const showDeathScreen = () => {
    if (deathFlag === true) {
        $(".mainroom").hide();
        $(".keyroom").hide();
        $(".powerReactor").hide();
        $(".studyTable").hide();
        $(".aiConstruct").hide();
        $(".chemicalStore").hide();
        $(".navbar").hide();
        $(".deathScreen").show();
    } else {
        $(".deathScreen").hide();
    };
};

// MAIN ROOM Without the stupid handlers




    // MAIN ROOM INIT
    const mainRoomInit = () => {
        $(".deathScreen").hide();
        $(".keyroom").hide();
        $(".powerReactor").hide();
        $(".studyTable").hide();
        $(".aiConstruct").hide();
        $(".chemicalStore").hide();
        $(".mainroom").show();
        $(".navbar").show();

        $("#goPowerReactor").on("click", powerReactorInit);
        $("#gostudyTable").on("click", studyTableInit);
        $("#goaiConstruct").on("click", aiConstructInit);
        $("#gochemicalStore").on("click", chemicalStoreInit);
        $("#gokeyRoom").on("click", keyRoomInit);


    }
    
// POWER REACTOR INIT
const powerReactorInit = () => {
        $(".powerReactor").show();
        $(".mainroom").hide();

        
};

// STUDY TABLE INIT
const studyTableInit = () => {
        $(".studyTable").show();
        $(".mainroom").hide();


};

// AI Construct Init
const aiConstructInit = () => {
        $(".aiConstruct").show();
        $(".mainroom").hide();


};

// Chemical Store Init
const chemicalStoreInit = () => {
        $(".chemicalStore").show();
        $(".mainroom").hide();


};

// Key Room Init
const keyRoomInit = () => {
        $(".mainroom").hide();
        $(".keyroom").show();


};



//! The actual code logic I guess. Maybe I'll write the buttons here.

//Room moving shit


// Into power reactor button
const POWER_REACTOR = "powerReactor"
const game = {
    start: MAIN_ROOM,
    rooms: [
        {
            id: POWER_REACTOR,
            description: `You walk over to the power reactor. The surrounding area is warm, and a faint orange glow emits from the machine. There is a note stuck on the reactor, and a big red button.`,
            actions: ["Read Note", "Push Button"],
            exits: [MAIN_ROOM],
        },
        {
            id: MAIN_ROOM,
            description: `You hear a faint whirring sound as your VR implant spins up. The room focuses into view. You are in a
            standard laboratory. There is a locked safe in the centre of the room.`,
            actions: [],
            exits: [POWER_REACTOR, AI_CONSTRUCT, CHEMICAL_STORE],
        },
        {
            id: AI_CONSTRUCT,
            description: `You see a female AI, quietly meditating in the corner. `,
            actions: ["talk to AI"],
            exits: [MAIN_ROOM],
        }
    ]
}



//! The testing area - KEEP CLEAR -

// navbarInit();
// mainRoomInit();


//Jerrick Wee's wisdom
// ("*").off() this turns off all clicks
// $("<div>").text("")
navbarInit();
mainRoomInit();

});