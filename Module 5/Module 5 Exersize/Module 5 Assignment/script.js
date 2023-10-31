const options = {method: 'GET'};
const key = "dd855144b16848f3a731a78839e13ac3";

var countrydd = document.getElementById("country");
var selectedCountry = countrydd.value;
var month = document.getElementById("month");
var day = document.getElementById("day");
var year = document.getElementById("year");

fetch('https://holidays.abstractapi.com/v1/' + key, options)
  .then(response => response.json())
  .then(response => console.log(response))
  .catch(err => console.error(err));