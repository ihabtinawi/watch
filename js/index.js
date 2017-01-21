$(function (){
  setInterval(drawTime, 1000);
  $(window).resize(function(){
  });
  function drawTime(ctx, radius){
    var now = new Date();
    var hour = now.getHours();
    var minute = now.getMinutes();
    var second = now.getSeconds();
    //hour
    $(".digital-sec").text(second+"");
    $(".digital-min").text(minute+"");
    $(".digital-hour").text(hour+"");
    hour=hour%12;
    hour=(hour*Math.PI/6)+
    (minute*Math.PI/(6*60))+
    (second*Math.PI/(360*60));
    setPos("hour",hour);
    //minute
    minute=(minute*Math.PI/30)+(second*Math.PI/(30*60));
    setPos("minute",minute);
    // second
    second=(second*Math.PI/30);
    setPos("second", second);
}

  function setPos(div, value){
    switch (div) {
      case "second":
          $(".second").css("top",0.5* $(".face").height() - Math.cos(-value) * $(".face").height()/2 + "px");
          $(".second").css("left",0.5* $(".face").width() - Math.sin(-value) * $(".face").width()/2 + "px");
//          $(".digital-sec").text(1+Math.sin(value)+"");
          break;
      case "minute":
          $(".min").css("left", 0.5* $(".face").width() - Math.sin(-value) * $(".face").width()/2 + "px");
          $(".min").css("top", 0.5* $(".face").height() - Math.cos(-value) * $(".face").height()/2 + "px");
  ///        $(".digital-min").text(value+"");
          break;
      case "hour":
          $(".hour").css("left",0.5* $(".face").width() - Math.sin(-value) * $(".face").width()/2 + "px");
          $(".hour").css("top", 0.5* $(".face").height() - Math.cos(-value) * $(".face").height()/2 + "px");
    //      $(".digital-hour").text(value+"");
          break;
    }
  }

});
