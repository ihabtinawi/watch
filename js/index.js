$(function (){
  $(window).resize(function(){
  });
  function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    setPosHour(hour , radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    setPosMin(minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    setPosSec(second, radius*0.9, radius*0.02);
}

  function setPosSec(x, y){
    $(".second").css("left", Math.sin((Math.PI/2)+((Math.PI/2)- i* Math.PI/6)) * $(".face").width()/2 + 0.5* $(".face").width()+"px");
  }
  for (i = 0 ; i< 12 ; i++ ) {
    setTimeout(setLeftPos(i+1) ,1000);
  }

});
