// est dva tipa function decloration exploration
// algoritm xanoyskoye

// $(".nav__menu").on("click", function () {
//     console.log($(this).index());
//     $(".fruit").removeClass("active")
//     console.log($(".fruit").index())
//     $(".fruit")[$(this).index()].classList.add("active")
// })








// *************************** //

$("#btn").on("click", function () {
    $(".hidden").css("display","flex")
    $(".hidden").css("transition","1s ease-in")

    $(".hidden").css("transform","scale(1)")
    
})
$(".close").on("click", function() {
    // $(".hidden").css("display","none")
    $(".hidden").css("transform","scale(0)")
})


// *************************** //