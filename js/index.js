$(function (){
  var ratio= .5;
  var secondwidth = 10;
  var secondheight= 10;
  function getwindowsize () {
    $(".maindiv").css("height",ratio * $(window).height()+"");
    $(".maindiv").css("width",ratio * $(window).width()+"");
    $(".second").css("width", ratio * secondwidth);
    $(".second").css("height", ratio * secondwidth);
    $(".min").css("width", ratio * (secondwidth+10));
    $(".min").css("height", ratio * (secondwidth+10));
    $(".hour").css("width", ratio * (secondwidth+15));
    $(".hour").css("height", ratio * (secondwidth+15));
  }
  getwindowsize();
  setInterval(drawTime, 1000);
  $(window).resize(function(){
      getwindowsize();
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
    setPos("second", second*Math.PI/(30));
}

  function setPos(div, value){
    switch (div) {
      case "second":
          $(".second").css("left",0.5* $(".secface").width()-$(".second").width() - Math.sin(-value) * $(".secface").width()/2 + "px");
          $(".second").css("top",0.5* $(".secface").height()-$(".second").height() - Math.cos(-value) * $(".secface").height()/2 + "px");
//          $(".digital-sec").text(Math.sin(-value)+"");
          break;
      case "minute":
          $(".min").css("left", 0.5* $(".minface").width() - Math.sin(-value) * $(".minface").width()/2 + "px");
          $(".min").css("top", 0.5* $(".minface").height() - Math.cos(-value) * $(".minface").height()/2 + "px");
  ///        $(".digital-min").text(value+"");
          break;
      case "hour":
          $(".hour").css("left",0.5* $(".hourface").width() - Math.sin(-value) * $(".hourface").width()/2 + "px");
          $(".hour").css("top", 0.5* $(".hourface").height() - Math.cos(-value) * $(".hourface").height()/2 + "px");
    //      $(".digital-hour").text(value+"");
          break;
    }
  }

});
