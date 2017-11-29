const secondHand = document.querySelector('.second-hand');
const minsHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate(){
const now = new Date();

//secs
const seconds = now.getSeconds();
const secDegree = (seconds * 6) + 90;
secondHand.style.transform = `rotate(${secDegree}deg)`;

//mins
const minutes = now.getMinutes();
const minDegree = minutes * 6 + 90;
minsHand.style.transform = `rotate(${minDegree}deg)`;

//hour
const hours = now.getHours();
const hourDegree = hours * 30 + 90 ;
hourHand.style.transform = `rotate(${hourDegree}deg)`;

}

setInterval(setDate,1000);