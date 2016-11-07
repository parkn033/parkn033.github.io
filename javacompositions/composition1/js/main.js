$("body").css("background-color","black");

for (var dots = 0; dots < 200; dots++){
    $(".wrapper").append("<div class='circle'></div>");    
}
        
var counter = 1;

var b = ["bld.jpg",""]

$(".circle").each(function() {
    console.log(counter);;
    $(this).css("opacity",(counter/200));
    $(this).html(counter);
    $(this).css("width",(300+counter));
    $(this).css("line-height",100+counter+"px");
    $(this).css("height",(300+counter));
    $(this).css("font-size",(counter));
    $(this).css("transform","translate(-30%, -30%) rotate("+ (counter/100)*720 + "deg)");
    var winWidth = $(window).width();
    var winHeight = $(window).height();
    var newTop = Math.floor(Math.random()*winHeight);
    var newLeft = Math.floor(Math.random()*winWidth);
    $(this).css("top", newTop);
    $(this).css("left", newLeft);
    counter++;
    counter++;
});

$(window).scroll(function() {
    console.log($(window).scrollTop());
    $(".circle").css("opacity",$(window).scrollTop()/4000)
});

$(window).resize(function() {
    $(".circle").each(function() {
        var winWidth = $(window).width();
        var winHeight = $(window).height();
        var newTop = Math.floor(Math.random()*winHeight);
        var newLeft = Math.floor(Math.random()*winWidth);
        $(this).css("top", newTop);
        $(this).css("left", newLeft);
    });
});