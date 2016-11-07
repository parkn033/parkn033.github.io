$("body").css("background-color","red");

for (var dots = 0; dots < 100; dots++){
    $(".wrapper").append("<div class='circle'></div>");    
}
        
var counter = 1;

var b = ["bld.jpg",""]

$(".circle").each(function() {
    console.log(counter);
    $(this).html(counter);
    $(this).css("opacity",(counter/100));
    $(this).css("width",(100+counter));
    $(this).css("height",(100+counter));
    $(this).css("font-size",(counter));
    $(this).css("trasnform","rotate("+(counter/101)*360 + "deg)");
    $(this).css("top",Math.floor(Math.random()*500));
    $(this).css("left",Math.floor(Math.random()*500));
    counter++;
});
