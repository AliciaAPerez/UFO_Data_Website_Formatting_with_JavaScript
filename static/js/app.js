// from data.js
var tableData = data;
// console.log(tableData)

let tbody = d3.select("tbody");
let table = d3.select("#ufo-table");

tableData.forEach(([datetime, city, state, country, shape, durationMinutes, comments]) =>{
    let row = tbody.append("tr");
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
});


// YOUR CODE HERE!
