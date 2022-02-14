const radiologia = [
    { paciente: "Francisca Rojas", especialista: "ignacio shulz", hora: 11, rut: 11354987 - 9, prevision: "fonasa" }, { paciente: "Patricia Suazo", especialista: "Federico Subercaseaux", hora: 9, rut: 15354987 - 9, prevision: "isapre" }, { paciente: "Ana Maria Godoy", especialista: "Fernando wurthz", hora: 12, rut: 10354987 - 9, prevision: "fonasa" }, { paciente: "Fernando Urrutia", especialista: "Armando Luna", hora: 8, rut: 35354987 - 9, prevision: "fonasa" }, { paciente: "Francisco Lopez", especialista: "Ramon Ulloa", hora: 13, rut: 5354987 - 9, prevision: "isapre" },


];
const traumatologia = [
    { paciente: "Francisca Rojas", especialista: "ignacio shulz", hora: 11, rut: 11354987 - 9, prevision: "fonasa" }, { paciente: "Patricia Suazo", especialista: "Federico Subercaseaux", hora: 9, rut: 15354987 - 9, prevision: "isapre" }, { paciente: "Ana Maria Godoy", especialista: "Fernando wurthz", hora: 12, rut: 10354987 - 9, prevision: "fonasa" }, { paciente: "Fernando Urrutia", especialista: "Armando Luna", hora: 8, rut: 35354987 - 9, prevision: "fonasa" }, { paciente: "Francisco Lopez", especialista: "Ramon Ulloa", hora: 13, rut: 5354987 - 9, prevision: "isapre" },


];
const dental = [
    { paciente: "Francisca Rojas", especialista: "ignacio shulz", hora: 11, rut: 11354987 - 9, prevision: "fonasa" }, { paciente: "Patricia Suazo", especialista: "Federico Subercaseaux", hora: 9, rut: 15354987 - 9, prevision: "isapre" }, { paciente: "Ana Maria Godoy", especialista: "Fernando wurthz", hora: 12, rut: 10354987 - 9, prevision: "fonasa" }, { paciente: "Fernando Urrutia", especialista: "Armando Luna", hora: 8, rut: 35354987 - 9, prevision: "fonasa" }, { paciente: "Francisco Lopez", especialista: "Ramon Ulloa", hora: 13, rut: 5354987 - 9, prevision: "isapre" },


];


const radiologiaID = document.querySelector("#radiologiaID");
const traumatologiaID = document.querySelector("#traumatologiaID");
const dentalID = document.querySelector("#dentalID");
const tabla = document.querySelector("#tabla");
const tabla1 = document.querySelector("#tabla1");
const tabla2 = document.querySelector("#tabla2");






radiologia.forEach((item) => {
    tabla.innerHTML += `
    <tr>
        <th scope="row">${item.hora}</th>
            <td>${item.especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
    </tr>
    `;
});



traumatologia.forEach((item) => {
    tabla1.innerHTML += `
    <tr>
        <th scope="row">${item.hora}</th>
            <td>${item.especialista}</td>
            <td>${item.paciente}</td>
            <td>${item.rut}</td>
            <td>${item.prevision}</td>
    </tr>
    `;
});


dental.forEach((item) => {
    tabla2.innerHTML += `
    <tr>
    <th scope="row">${item.hora}</th>
        <td>${item.especialista}</td>
        <td>${item.paciente}</td>
        <td>${item.rut}</td>
        <td>${item.prevision}</td>
</tr>
    `;
});