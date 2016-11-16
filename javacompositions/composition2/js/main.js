console.log("Hello world");

$("body").css("background-color","white");

var hasClicked = false;

for (var i = 0; i < 1000; i++) {
    $("body").append("<div class='go'></div>");
}

for (var i = 0; i < 1; i++) {
    $(".go").append("<div class='ball'></div>");
}



$(".go").click(function() {
    console.log("you clicked it...");
    $(this).css("background-color","lime");
    $(this).html("HOLA");
});

$(".go").mouseenter(function() {
    console.log("you clicked it...");
    $(this).css("background-color","white");
    $(this).html("HOLA");
});

$(".go").mouseleave(function() {
    console.log("you clicked it...");
    $(this).html("BYE");
});

$(window).scroll(function() {
    console.log($(window).scrollTop());
    $("body").css("background-color","grey");
});