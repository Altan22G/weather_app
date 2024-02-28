"use strict";

const cityEl = document.querySelector(".country--city");
const dateEl = document.querySelector(".date");
const search = document.querySelector("input");

const date = new Date;

const day = date.getDate();
const month = date.getMonth() + 1;
const year = date.getFullYear();

dateEl.textContent = `${day}/${month}/${year}`;

// function getPosition() {
//     return new Promise((resolve, reject) => {
//         navigator.geolocation.getCurrentPosition(resolve, reject)
//             // err => reject(err)
        
//     })
// }

// getPosition().then(pos => {
//     const {latitude: lat, longitude: lng} = pos.coords;

//     return fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
// }).then(res => {
//     return res.json();
// }).then(data => {
//     cityEl.textContent = data.country + " " + data.city
// })

function getPosition() {
    navigator.geolocation.getCurrentPosition(
        pos => {
            console.log("Latitude:", pos.coords.latitude);
            console.log("Longitude:", pos.coords.longitude);
        },
        err => {
            console.error("Error getting location:", err);
        }
    );
}