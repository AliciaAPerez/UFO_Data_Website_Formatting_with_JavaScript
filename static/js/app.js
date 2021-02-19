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
let form1 = d3.select("#date-form");
let form2 = d3.select("#city-form");
let form3 = d3.select("#state-form");
let form4 = d3.select("#country-form");
let form5 = d3.select("#shape-form");
button.on("click", filterdata);
form1.on("submit", filterdata);
form2.on("submit", filterdata);
form3.on("submit", filterdata);
form4.on("submit", filterdata);
form5.on("submit", filterdata);

function filterdata(){
    d3.event.preventDefault();
    let inputElement1 = d3.select("#datetime");
    let inputElement2 = d3.select("#city");
    let inputElement3 = d3.select("#state");
    let inputElement4 = d3.select("#country");
    let inputElement5 = d3.select("#shape");
    let inputValue1 = inputElement1.property("value");
    let inputValue2 = inputElement2.property("value");
    let inputValue3 = inputElement3.property("value");
    let inputValue4 = inputElement4.property("value");
    let inputValue5 = inputElement5.property("value");
    //blank forms to pull back all data
    if (inputValue1.length + inputValue2.length + inputValue3.length + inputValue4.length + inputValue5.length === 0){
        tbody.html("");
        console.log("no info given");
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
    console.log(`${inputValue1}, ${inputValue2}, ${inputValue3}, ${inputValue4}, ${inputValue5}`);
    
    filteredData = tableData.filter(tableData => tableData.datetime === inputValue1);
    filteredData = filteredData.filter(filteredData => filteredData.city === inputValue2);
    filteredData = filteredData.filter(filteredData => filteredData.state === inputValue3);
    filteredData = filteredData.filter(filteredData => filteredData.country === inputValue4);
    filteredData = filteredData.filter(filteredData => filteredData.shape === inputValue5);
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