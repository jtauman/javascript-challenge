//appending data table to webpage
// from data.js
var tableData = data;

//Reference table body
var tbody = d3.select("tbody");

//loop through the data and get each ufoData object
data.forEach((ufoData) => {
    //append a row to tbody for each ufoData object
    var row = tbody.append("tr");
    //for each ufoData object get the key value pair
    Object.entries(ufoData).forEach(([key, value]) => {
        //append data cells for each row as table data
        var cell = row.append("td");
        //put in the ufoData object values into cells
        cell.text(value);
    });
});


//Search and filtering table on date/time

//select button
var button = d3.select("#filter-btn");

//select the form
var form = d3.select("form");

// Create event handlers 
button.on("click", runEnter);
form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");

    console.log(inputValue);
    console.log(tableData);

    // Use the form input to filter the data by datetime
    var filteredInput = tableData.filter(data => data.datetime === inputValue);

    console.log(filteredInput);

    
    d3.select("tbody").selectAll("tr").remove();
    //return the filtered values in the table
    filteredInput.forEach((ufoData) => {
        //append a row to tbody for each ufoData object
        var row = tbody.append("tr");
        //for each ufoData object get the key value pair
        Object.entries(ufoData).forEach(([key, value]) => {
            //append data cells for each row as table data
            var cell = row.append("td");
            //put in the ufoData object values into cells
            cell.text(value);
        });
    });



};

