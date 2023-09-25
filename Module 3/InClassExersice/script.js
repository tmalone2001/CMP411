function addInput() {
    // Get the table by its ID
    var table = document.getElementById("myTable");

    // Create a new row
    var row = table.insertRow();

    // Create cells for the input elements
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);

    // Create input elements (e.g., text input and button)
    var inputElement = document.createElement("input");
    inputElement.type = "text"; // You can change the input type as needed

    var addButton = document.createElement("button");
    addButton.textContent = "Remove";
    addButton.onclick = function () {
        // Remove the row when the "Remove" button is clicked
        table.deleteRow(row.rowIndex);
    };

    // Append the input elements to the cells
    cell1.appendChild(inputElement);
    cell2.appendChild(addButton);
}
