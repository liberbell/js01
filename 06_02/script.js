const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runTheClock() {
  var date = new Date();
  console.log(date);
  let hr = date.getHours();
  let min = date.getMinutes();
  let sec = date.getSeconds();
  console.log("Hour: " + hr + " Minute: "+ min + " Second: " + sec)

  let hrPosition = hr * 360 / 12 + (360 / 60 * min) / 12;
  let minPosition = min / 60 * 360 + (sec*(360/60)/60);
  let secPosition = sec / 60 * 360;

  HOURHAND.style.transform = "rotate(" + hrPosition + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minPosition + "deg)";
  SECONDHAND.style.transform = "rotate(" + secPosition + "deg)";
}
