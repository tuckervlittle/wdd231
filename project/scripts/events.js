import displayEvents from "../utils/displayEvents.mjs";
import { events } from "../data/events.mjs";

console.log(events);

const eventDisplay = document.getElementById("events");
const header = "h2";

displayEvents(events, eventDisplay, header);