/     //? Return to Main Room Function
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


