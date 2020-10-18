// from data.js
var tableData = data;

// Get a reference to the table body
var tbody = d3.select("tbody");

// Console.log the ufo data from data.js
console.log(data);

// // Use d3 to update each cell's text with ufo sighting values
data.forEach(function (uforeport) {
  console.log(uforeport);
  var row = tbody.append("tr");
  Object.entries(uforeport).forEach(function ([key, value]) {
    console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo sighting
    var cell = row.append("td");
    cell.text(value);
  });
});

// Select the button
var button = d3.select("#filter-btn");


// var form = d3.select("#form-control");

// Create event handlers
button.on("click", runEnter);
// form.on("submit",runEnter);

// Complete the event handler function for the form
function runEnter() {

  // Prevent the page from refreshing
  d3.event.preventDefault();

  //   Clear the table
  tbody.html("");

  // Select the input element and get the raw HTML node
  var inputElement = d3.select("#datetime");

  // Get the value property of the input element
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);

//   Filter the table based on inputted value
  var filteredData = data.filter((d) => d.datetime === inputValue);

  console.log(filteredData);

  // // Use d3 to update each cell's text with filtered ufo sighting values
  filteredData.forEach(function (results) {
    console.log(results);
    var row = tbody.append("tr");
    Object.entries(results).forEach(function ([key, value]) {
      console.log(key, value);
    // Append a cell to the row for each value
    // in the ufo sighting
      var cell = row.append("td");
      cell.text(value);
    });
  });
};