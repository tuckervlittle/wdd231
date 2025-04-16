import displayEvents from "../utils/displayEvents.mjs";
import { events } from "../data/events.mjs";
console.log(events);

const upcoming = document.getElementById("events");


function getUpcomingEvents(events, count = 3) {
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