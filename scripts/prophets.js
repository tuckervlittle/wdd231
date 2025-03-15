const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector("#cards");
let prophetArray = [];

const all = document.getElementById("all");
const utah = document.getElementById("utah");
const nonus = document.getElementById("nonus");
const old = document.getElementById("old");
const child = document.getElementById("child");
const long = document.getElementById("long");
const button = "button";

getProphetData();

all.addEventListener('click', () => {
    clearClasses(button);
    displayProphets(prophetArray);
    all.classList.add("active");
});

utah.addEventListener('click', () => {
    const filtered = prophetArray.filter(prophet => prophet.birthplace === "Utah");
    clearClasses(button);
    displayProphets(filtered);
    utah.classList.add("active");
});

nonus.addEventListener('click', () => {
    const filtered = prophetArray.filter(prophet => prophet.birthplace === "England");
    clearClasses(button);
    displayProphets(filtered);
    nonus.classList.add("active");
});

old.addEventListener('click', () => {
    const filtered = prophetArray.filter(prophet => getDeathAgeInYears(prophet.birthdate, prophet.death) >= 95);
    clearClasses(button);
    displayProphets(filtered);
    old.classList.add("active");
});

child.addEventListener('click', () => {
    const filtered = prophetArray.filter(prophet => prophet.numofchildren >= 10);
    clearClasses(button);
    displayProphets(filtered);
    child.classList.add("active");
});

long.addEventListener('click', () => {
    const filtered = prophetArray.filter(prophet => prophet.length >= 15);
    clearClasses(button);
    displayProphets(filtered);
    long.classList.add("active");
});

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    prophetArray = data.prophets;
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    cards.innerHTML = "";

    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let date = document.createElement("p");
        let place = document.createElement("p");
        let portrait = document.createElement("img");
        
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        date.textContent = `Date of birth: ${prophet.birthdate}`;
        place.textContent = `Place of birth: ${prophet.birthplace}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute('alt', `Portrait of ${fullName.textContent} - ${numberSuffix(prophet.order)} Latter-Day President`);
        portrait.setAttribute('loading', 'lazy');
        portrait.setAttribute('width', '340');
        portrait.setAttribute('height', '440');

        card.classList.add("card");
        card.appendChild(fullName);
        card.appendChild(date);
        card.appendChild(place);
        card.appendChild(portrait);
        cards.appendChild(card);
    });    
}

function getDeathAgeInYears(birthdate, deathdate) {
	let birth = new Date(birthdate);
	let death = new Date(deathdate);
	if (deathdate === null) {
		death = new Date();
	}
    let age = Math.floor((death - birth) / (365 * 24 * 60 * 60 * 1000));
	return age;
}

function numberSuffix(i) {
    let j = i % 10;
    let k = i % 100;
    if (j === 1 && k !==11) {
        return i + "st";
    }
    if (j === 2 && k !== 12) {
        return i + "nd";
    }
    if (j === 3 && k !== 13) {
        return i + "rd";
    }
    return i + "th";
}

function clearClasses(elementType) {
    filterbuttons = document.querySelectorAll(elementType);
    filterbuttons.forEach(element => element.className="");
}