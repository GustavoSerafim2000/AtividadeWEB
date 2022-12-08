import { dataLoad } from "./students/index.js";
import { loadEvents } from "./events/index.js";

$(function() {
    dataLoad();
    loadEvents();
});

