// const date = new Date(); //It is class in ES6 in 2015 it was called constructor in ES5

// console.log(date.getDate()); //From Object I Call method

// const months = ["Jan", "Feb", "March", "Apr", "May", "June"];
// const date = new Date();
// const rdate = (months[date.getMonth()]); 
// console.log(rdate);

// const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];

// const d = new Date();
// let name = month[d.getMonth()];

// console.log(name);

// console.log(date.getFullYear());
// console.log(date.getDay());

// date.setDate(12);
// date.setMonth(10)
// date.setFullYear(2025)
// date.setHours(0)
// console.log(date); 

// const date = new Date();

// const doomsDay = new Date();
// doomsDay.setDate(15);
// doomsDay.setMonth(10);
// doomsDay.setFullYear(2025);
// doomsDay.setHours(0);
// doomsDay.setMinutes(0);

// const date = new Date();

// let diff = doomsDay.getTime() - date.getTime();

// console.log((diff / (1000 * 60 * 60 * 24 * 365.25)).toFixed(1)); //==> 1970 sein lekar jitna second guzar gya hein wo bta rha hota hein we can see dooms day sec as well

//Digital Clock is here

// const hoursElem = document.getElementById("hours");
// const minutesElem = document.getElementById("minutes");
// const secondsElem = document.getElementById("seconds");
// const amPmElem = document.getElementById("amPm");


// setInterval( function  () {

//     const date = new Date();
//     let hours = date.getHours();
//     let amPm = "AM";
//     if(hours > 11){
//         amPm = "PM";
//         if(hours > 12){
//             hours -= 12;
//         }
//     }



//     hoursElem.innerText = date.getHours();
//     minutesElem.innerText = date.getMinutes();
//     secondsElem.innerText = date.getSeconds();
//     amPmElem.innerText = amPm;

// }, 1000);


// Hackerrank is a website to built logics

// One of the thing I have to do on this digital clock is to change 0 to 00 in seconds


const hoursElem = document.getElementById('hours')
const minutesElem = document.getElementById('minutes')
const secondsElem = document.getElementById('seconds')
const amPmElem = document.getElementById('amPm')

setInterval(function () {
    const date = new Date()
    let hours = date.getHours();
    let amPm = 'AM'

    if(hours > 11){
        amPm = 'PM'
        if(hours > 12){
            hours -= 12
        }
    }

    hoursElem.innerHTML = date.getHours()
    minutesElem.innerHTML = date.getMinutes()
    secondsElem.innerHTML = date.getSeconds()
    amPmElem.innerHTML = amPm

})
