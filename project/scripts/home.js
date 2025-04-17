import displayEvents from "../utils/displayEvents.mjs";
import { events } from "../data/events.mjs";
// console.log(events);

const upcoming = document.getElementById("events");


function getUpcomingEvents(events, count = 2) {
    const today = new Date();


    const parsedEvents = events
        .map(event => {

            const rawDate = event.date.includes("to")
                ? event.date.split("to")[0].trim()
                : event.date;

            const [month, day, year] = rawDate.split("-").map(str => parseInt(str.trim()));
            const eventDate = new Date(year, month - 1, day);

            return { ...event, parsedDate: eventDate };
        })
        .filter(event => event.parsedDate >= today)
        .sort((a, b) => a.parsedDate - b.parsedDate)
        .slice(0, count);

    return parsedEvents;
}

const upcomingEvents = getUpcomingEvents(events);
const header = "h3";

displayEvents(upcomingEvents, upcoming, header);

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