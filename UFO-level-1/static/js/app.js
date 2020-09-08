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
