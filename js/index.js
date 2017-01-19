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
    setPos(hour , radius*0.5, radius*0.07);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    setPos(minute, radius*0.8, radius*0.07);
    // second
    second=(second*Math.PI/30);
    setPos("second", second);
}

  function setPos(div, value){
    switch (div) {
      case "second":
          $(".second").css("left", Math.sin(value) * $(".face").width()/2 + 0.5* $(".face").width()+"px");
          $(".second").css("top", Math.cos(value) * $(".face").height()/2 + 0.5* $(".face").height()+"px");
          break;
      case "minute":

          break;
      case "hour":
          break;
    }
  }

});
