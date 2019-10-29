// from data.js
var tableData = data;
console.log(data)

// Get button with id="filter-btn" as D3 object
filterButton = d3.select('#filter-btn')

// Use D3 "on" method that listens for a button click to id="filter-btn"
filterButton.on("click", function(){
    
    console.log("got a click")
    // Use D3 to get value of the input field with id="datetime" as text
    userTime = d3.select('#datetime').property("value")

    // Create a new array from the dataset only with data with the user's datetime
    filtData = data.filter(datum => datum.datetime == userTime)

    // Clear everyhing for the tag with id "table-data"
    d3.select("#table-data").html("")

    // For each data that has matches the user's date, add an elemen to the table
    filtData.forEach(function(datum){

        // Use D3 to append rows to the tag with id "table-data"
        newRow = d3.select("#table-data").append("tr")
        newData = newRow.append("td").text(datum.datetime)
        newData = newRow.append("td").text(datum.city)
        newData = newRow.append("td").text(datum.state)
        newData = newRow.append("td").text(datum.country)
        newData = newRow.append("td").text(datum.shape)
        newData = newRow.append("td").text(datum.durationMinutes)
        newData = newRow.append("td").text(datum.comments)

    });
});


