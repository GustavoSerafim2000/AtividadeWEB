import { getAllStudents } from "./index.js";

function showAllStudentsResult() {
    const allStudents = getAllStudents();
    $("#result").html(JSON.stringify(allStudents));
}

export { showAllStudentsResult }