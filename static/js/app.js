// from data.js
var tableData = data;
// console.log(tableData)

let tbody = d3.select("tbody");
//let table = d3.select("#ufo-table");
let table = d3.select("#ufo-table")

tableData.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) =>{
    let row = tbody.append("tr");
    row.append("td").text(datetime);
    row.append("td").text(city);
    row.append("td").text(state);
    row.append("td").text(country);
    row.append("td").text(shape);
    row.append("td").text(durationMinutes);
    row.append("td").text(comments);
});

let button = d3.select("#filter-btn");
let form = d3.select("#date-form");
button.on("click", filterdata);
form.on("submit", filterdata);

function filterdata(){
    d3.event.preventDefault();
    let inputElement = d3.select("#datetime")
    let inputValue = inputElement.property("value");
    if (inputValue.length === 0){
        tbody.html("");
        console.log("no date given");
        console.log(tableData)
        tableData.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) =>{
            let row = tbody.append("tr");
            row.append("td").text(datetime);
            row.append("td").text(city);
            row.append("td").text(state);
            row.append("td").text(country);
            row.append("td").text(shape);
            row.append("td").text(durationMinutes);
            row.append("td").text(comments);
        
    })}
    else {
    tbody.html("");
    console.log(inputValue);

    filteredData = tableData.filter(tableData => tableData.datetime === inputValue);
    console.log(filteredData);
    filteredData.forEach(({datetime, city, state, country, shape, durationMinutes, comments}) =>{
        let row = tbody.append("tr");
        row.append("td").text(datetime);
        row.append("td").text(city);
        row.append("td").text(state);
        row.append("td").text(country);
        row.append("td").text(shape);
        row.append("td").text(durationMinutes);
        row.append("td").text(comments);
    });}
}