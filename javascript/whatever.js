$(".button").click(function(){
   // do stuff...
   numofClicks = numofClicks +1;
   console.log(numOfClicks);
   $("mark").html(numbofClicks);
   $("body").css("background-color","blue");
}); 