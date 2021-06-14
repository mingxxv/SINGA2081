$(() => {

    $(".prologue").hide()

    const showPrologue = () => {
        $(".title").hide();
        $(".prologue").show()
    }

$("#startbutton").on("click", showPrologue);


















});