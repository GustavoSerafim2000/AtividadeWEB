function returnValues() {
    const id = $("#id").val();
    const data = $("#data").val();
    const horaini = $("#horaini").val();
    const horater = $("#horater").val();
    const name = $("#name").val();
    const descricao = $("#descricao").val();
    const status = $("#status").val();
    return {
        id,
        data,
        horaini,
        horater,
        name,
        descricao,
        status
    }
}

export { returnValues }