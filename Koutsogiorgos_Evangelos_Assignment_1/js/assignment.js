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
    formData["title"] = document.getElementById("title").value;
    formData["description"] = document.getElementById("description").value;
    formData["subDateTime"] = document.getElementById("subDateTime").value;
    formData["oralMark"] = document.getElementById("oralMark").value;
    formData["totalMark"] = document.getElementById("totalMark").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("entityList").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.title;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.description;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.subDateTime;
    cell4 = newRow.insertCell(3);
    cell4.innerHTML = data.oralMark;
    cell5 = newRow.insertCell(4);
    cell5.innerHTML = data.totalMark;
    cell5 = newRow.insertCell(5);
    cell5.innerHTML = `<a id="edit" onClick="onEdit(this)">Edit</a>
                       <a id="delete" onClick="onDelete(this)">Delete</a>`;
}

function resetForm() {
    document.getElementById("title").value = "";
    document.getElementById("description").value = "";
    document.getElementById("subDateTime").value = "";
    document.getElementById("oralMark").value = "";
    document.getElementById("totalMark").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("title").value = selectedRow.cells[0].innerHTML;
    document.getElementById("description").value = selectedRow.cells[1].innerHTML;
    document.getElementById("subDateTime").value = selectedRow.cells[2].innerHTML;
    document.getElementById("oralMark").value = selectedRow.cells[3].innerHTML;
    document.getElementById("totalMark").value = selectedRow.cells[3].innerHTML;
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
    selectedRow.cells[0].innerHTML = formData.title;
    selectedRow.cells[1].innerHTML = formData.description;
    selectedRow.cells[2].innerHTML = formData.subDateTime;
    selectedRow.cells[3].innerHTML = formData.oralMark;
    selectedRow.cells[4].innerHTML = formData.totalMark;
}