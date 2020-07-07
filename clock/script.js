const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

let date = new Date();

let hr = date.getHours(), min = date.getMinutes(), sec = date.getSeconds();

let hrPosition = (hr * 360/12)+(min *(460/60)/60) , minPosition = (min * 360/60)+(sec *( 360/60)/60) , secPosition = sec * 360/60;

function runClock() {
hrPosition+=(3/360);
minPosition+=(6/60);
secPosition+=6

HOURHAND.style.transform = `rotate(${hrPosition}deg)`;

MINUTEHAND.style.transform = `rotate(${minPosition}deg)`;

SECONDHAND.style.transform = `rotate(${secPosition}deg)`;
}






document.querySelector("#open").onclick = function() {
setTimeout(() => { document.querySelector('#sound').play(); }, 600);
  let interval = setInterval(runClock , 1000);
  
;
  document.querySelector("#open").style.height = "0";
  document.querySelector("#open h1").style.color = "lightskyblue";
} 





