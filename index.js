var seconds = 00;
var tens = 00;
var secTimer = document.querySelector(".seconds");
var tenTimer = document.querySelector(".tens");
var start = document.querySelectorAll("button")[0];
var stop = document.querySelectorAll("button")[1];
var reset = document.querySelectorAll("button")[2];
var Interval;

start.onclick = function(){
    clearInterval(Interval);
    Interval = setInterval(function(){
        tens++;
        if(tens<9){
            tenTimer.innerHTML = "0"+tens;
        }
        else if(tens>=9){
            tenTimer.innerHTML = tens;
        }
        if(tens>99){
            seconds++;
            tens = 00;
            tenTimer.innerHTML="00";
            secTimer.innerHTML="0"+seconds;
        }
        if(seconds>9){
            secTimer.innerHTML = seconds;
        }
    },10);
}
stop.onclick = function(){
    clearInterval(Interval);
}
reset.onclick = function(){
    clearInterval(Interval);
    tens = 00;
    seconds = 00;
    secTimer.innerHTML = "00";
    tenTimer.innerHTML = "00";
}