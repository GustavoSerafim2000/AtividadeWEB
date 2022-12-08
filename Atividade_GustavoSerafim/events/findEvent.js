import { findStudent } from "../students/index.js";
import { returnValues } from "../students/returnValues.js" ;
import { clearForm } from "../utils/clearForm.js";

function findEvent() {
    $("#find").on("click", function() {
        const returnedValues = returnValues();
        const found = findStudent(returnedValues.id);
        if (found) {
            $("#result").html(JSON.stringify(found));
        } else {
            $("#result").html(`Erro - Id Não localizado `);
        }
        clearForm();
    })
}

export { findEvent }