let students = {};

function addStudent(id, data, horaini, horater, name, descricao, status) {
    students[id] = { data, horaini, horater, name, descricao, status }
}

function findStudent(id) {
    if (students[id]) {
        return students[id]
    } else {
        return null;
    }
}

function updateStudent(id, data, horaini, horater, name, descricao, status) {
    if (students[id]) {
        students[id] = { data, horaini, horater, name, descricao, status};
    } else {
        return null;
    }
}
function alterarStatus(id, status){
    if(students[id]){
        students[id].status = status;
        return true;
    } else {
        return false;
    }
}
function removeStudent(id) {
    if (students[id]) {
        delete students[id];
        return true;
    }
    return false;
}

function getAllStudents() {
    return students;
}

function dataLoad() {
    addStudent("123456", "06/12/22", "19:00", "23:00", "WebGis", "Atividade Final","Não concluido");
    addStudent("234567", "02/12/22", "19:00", "22:00", "PTCC", "Atividade Final","Concluido");
    addStudent("345678", "01/12/22", "21:00", "23:00", "Inglês", "Prova Final","Concluido");
    addStudent("234569", "01/12/22", "19:00", "21:00", "Infra-Urbana", "Atividade Final","Concluido");
}

export { addStudent, findStudent, updateStudent,alterarStatus, removeStudent, getAllStudents, dataLoad }