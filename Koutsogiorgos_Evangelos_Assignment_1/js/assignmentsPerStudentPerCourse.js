var selectedRow = null;

function onFormSubmit() {
    document.getElementById("addButton").value = "add";
    var formData = readFormData();
    if (selectedRow == null)
        insertNewRecord(formData);
    else
        updateRecord(formData);
    resetForm();
}

function readFormData() {
    var formData = {};
    formData["course"] = document.getElementById("course").value;
    formData["assignment"] = document.getElementById("assignment").value;
    formData["student"] = document.getElementById("student").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("entityList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.course;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.assignment;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.student;
    cell3 = newRow.insertCell(3);
    cell3.innerHTML = `<a id="edit" onClick="onEdit(this)">Edit</a>
                       <a id="delete" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("course").value = "";
    document.getElementById("assignment").value = "";
    document.getElementById("student").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("course").value = selectedRow.cells[0].innerHTML;
    document.getElementById("assignment").value = selectedRow.cells[1].innerHTML;
    document.getElementById("student").value = selectedRow.cells[1].innerHTML;
    document.getElementById("addButton").value = "update";
}

function onDelete(td) {
    if (confirm('Are you sure to delete this record ?')) {
        row = td.parentElement.parentElement;
        document.getElementById("entityList").deleteRow(row.rowIndex);
        resetForm();
    }
    document.getElementById("addButton").value = "add";

}

function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.course;
    selectedRow.cells[1].innerHTML = formData.assignment;
    selectedRow.cells[2].innerHTML = formData.student;
}