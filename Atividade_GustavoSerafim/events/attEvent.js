import { alterarStatus } from "../students/index.js";
import { returnValues } from "../students/returnValues.js";
import { showAllStudentsResult } from "../students/showAllStudentsResult.js";
import { clearForm } from "../utils/clearForm.js";

function attEvent() {
    $("#attstatus").on("click", function() {
        const returnedValues = returnValues();
        alterarStatus(returnedValues.id, returnedValues.status);
        showAllStudentsResult();
        clearForm();
    })
}

export { attEvent }

