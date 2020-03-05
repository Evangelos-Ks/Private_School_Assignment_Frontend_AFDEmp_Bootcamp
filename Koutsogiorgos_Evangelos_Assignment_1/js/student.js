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
    formData["firstName"] = document.getElementById("firstName").value;
    formData["lastName"] = document.getElementById("lastName").value;
    formData["dateOfBirth"] = document.getElementById("dateOfBirth").value;
    formData["tuitionFees"] = document.getElementById("tuitionFees").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("entityList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.firstName;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.lastName;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.dateOfBirth;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.tuitionFees;
    cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a id="edit" onClick="onEdit(this)">Edit</a>
                       <a id="delete" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("firstName").value = "";
    document.getElementById("lastName").value = "";
    document.getElementById("dateOfBirth").value = "";
    document.getElementById("tuitionFees").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
    document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
    document.getElementById("dateOfBirth").value = selectedRow.cells[2].innerHTML;
    document.getElementById("tuitionFees").value = selectedRow.cells[3].innerHTML;
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
    selectedRow.cells[0].innerHTML = formData.firstName;
    selectedRow.cells[1].innerHTML = formData.lastName;
    selectedRow.cells[2].innerHTML = formData.dateOfBirth;
    selectedRow.cells[3].innerHTML = formData.tuitionFees;
}