import { addEvent } from "./addEvent.js";
import { findEvent } from "./findEvent.js";
import { updateEvent } from "./updateEvent.js";
import { removeEvent } from "./removeEvent.js";

function loadEvents() {
    addEvent();
    findEvent();
    updateEvent();
    removeEvent();
}
export { loadEvents }