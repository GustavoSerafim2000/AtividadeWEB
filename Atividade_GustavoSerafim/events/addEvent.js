import { addStudent } from "../students/index.js";
import { returnValues } from "../students/returnValues.js" ;
import { showAllStudentsResult } from "../students/showAllStudentsResult.js";
import { clearForm } from "../utils/clearForm.js";

function addEvent() {
    $("#add").on("click", function() {
        console.log ("botão clicado")
        const returnedValues = returnValues();
        if (returnedValues.id) {
            addStudent(returnedValues.id, returnedValues.data, returnedValues.horaini, returnedValues.horater, returnedValues.name, returnedValues.descricao , returnedValues.status);
        }
        showAllStudentsResult()
        clearForm();
    })
}

export { addEvent }