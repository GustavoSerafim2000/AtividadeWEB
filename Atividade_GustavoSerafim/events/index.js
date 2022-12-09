import { addEvent } from "./addEvent.js";
import { findEvent } from "./findEvent.js";
import { updateEvent } from "./updateEvent.js";
import {attEvent} from "./attEvent.js";
import { removeEvent } from "./removeEvent.js";

function loadEvents() {
    addEvent();
    findEvent();
    updateEvent();
    attEvent();
    removeEvent();
}
export { loadEvents }