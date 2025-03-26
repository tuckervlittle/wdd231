import { temples, url } from "../data/temples.js";
console.log(temples, url);

const showHere = document.getElementById("showHere");
const mydialog = document.getElementById("mydialog");
const myTitle = document.querySelector("#mydialog h2");
const myClose = document.querySelector("#mydialog button");
const myinfo = document.querySelector("#mydialog p");

myClose.addEventListener("click", () => {
    mydialog.close();
});

function displayItems(data) {
    console.log(data)
    data.forEach(i => {
        console.log(i);
        const photo = document.createElement('img');
        photo.src = `${url}${i.path}`;
        photo.alt = i.name;

        photo.addEventListener("click", () => showStuff(i));
        showHere.appendChild(photo);
    });
};

displayItems(temples)

function showStuff(i) {
    myTitle.innerHTML = i.name;
    myinfo.innerHTML = `Dedicated ${i.dedicated} by ${i.person} as temple number ${i.number}`
    mydialog.showModal();
};