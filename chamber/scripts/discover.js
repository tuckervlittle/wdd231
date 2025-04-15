import { items } from "../data/discover.mjs";
console.log(items);

const discover = document.getElementById("discover");

function displayItems(items) {
    items.forEach(item => {

        const card = document.createElement("div")
        card.classList.add("card")

        const title = document.createElement("h2")
        const image = document.createElement("img")
        const address = document.createElement("address")
        const desc = document.createElement("p")
        const button = document.createElement("button")

        title.innerText = item.name

        image.src = `images/${item.image}.webp`
        image.alt = item.name
        image.loading = `lazy`

        address.innerText = item.address

        desc.innerHTML = `${item.description}`

        button.innerText = "Learn More"

        card.appendChild(title)
        card.appendChild(image)
        card.appendChild(address)
        card.appendChild(desc)
        card.appendChild(button)

        discover.appendChild(card)
    });
}
displayItems(items)

function showVisitDialog() {
    const dialog = document.getElementById("visit");

    const messageP = document.getElementById("message");
    

    
    const lastVisit = localStorage.getItem("lastVisit");
    const now = Date.now();
    let message = "";
    
    if (!lastVisit) {
        message = "Welcome! Let us know if you have any questions.";
    } else {
        const daysBetween = Math.floor((now - parseInt(lastVisit)) / (1000 * 60 * 60 * 24));
        
        if (daysBetween < 1) {
            message = "Back so soon! Awesome!";
        } else if (daysBetween === 1) {
            message = "You last visited 1 day ago.";
        } else {
            message = `You last visited ${daysBetween} days ago.`;
        }
    }

    messageP.textContent = message;
    dialog.showModal();

    document.getElementById("closeModal").addEventListener("click", () => {
        dialog.classList.add("closing");

        setTimeout(() => {
            dialog.close();
            dialog.classList.remove("closing");
        }, 740);
    });

    localStorage.setItem("lastVisit", now);
}

showVisitDialog();