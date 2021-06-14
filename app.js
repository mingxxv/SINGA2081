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
    //! ROOM INITS GO HERE

    

    // NAV BAR Initialization
    const navbarInit = () => {
        $(".navbar").show();
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





//! The testing area - KEEP CLEAR -

// navbarInit();
// mainRoomInit();


//Jerrick Wee's wisdom
// ("*").off() this turns off all clicks
// $("<div>").text("")
navbarInit();
mainRoomInit();

});