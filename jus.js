function candlelight(){

    const Light = document.getElementById("light");
Light.style.scale = "1.2"
const shadow = document.getElementById("ll");
shadow.style.boxShadow =" 0 2px 76px rgba(214, 210, 210, 0.356)"

return;

}
function candlelight2(){

    const Light = document.getElementById("light");
    Light.style.transform = "skewx(40deg)"
    const shadow = document.getElementById("ll");
    shadow.style.boxShadow =" 0px 2px 176px rgba(214, 210, 210, 0.356)"
return;
}
function candlelight3(){

    const Light = document.getElementById("light");
  Light.style.transform = "skewx(50deg)"
  const shadow = document.getElementById("ll");
  shadow.style.boxShadow =" 0 2px 186px rgba(214, 210, 210, 0.356)"
return;
}
function candlelight4(){

    const Light = document.getElementById("light");
 Light.style.transform = "skewx(20deg)"
 const shadow = document.getElementById("ll");
 shadow.style.boxShadow =" 0 2px 140px rgba(214, 210, 210, 0.356)"
return;

}
function candlelight5(){

    const Light = document.getElementById("light");
 Light.style.transform = "skew(60deg)"
 const shadow = document.getElementById("ll");
 shadow.style.boxShadow =" 0 2px 200px rgba(214, 210, 210, 0.356)"
return;

}

setInterval(candlelight,100);
setInterval(candlelight2,200);
setInterval(candlelight3,300);
setInterval(candlelight4,400);
setInterval(candlelight5,500);