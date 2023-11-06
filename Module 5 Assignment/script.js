// async function getHoliday(){
//   const key = "dd855144b16848f3a731a78839e13ac3";

//   var holiday = document.getElementById("holiday");
//   var countrydd = document.getElementById("country");
//   var selectedCountry = countrydd.value;
//   var month = document.getElementById("month");
//   var day = document.getElementById("day");
//   var year = document.getElementById("year");

//   // const response = await fetch('https://holidays.abstractapi.com/v1/?api_key=' + key + '&country=' + selectedCountry + '&year=' + year + '&month=' + month + '&day=' + day);
//   const response = await fetch('https://holidays.abstractapi.com/v1/?country=US&api_key=dd855144b16848f3a731a78839e13ac3&year=2021&month=01&day=01')
//   const result = await response.json();

//   holiday.innerHTML = result.name;
// }

function getHoliday(){
  $.getJSON("https://holidays.abstractapi.com/v1/?api_key=dd855144b16848f3a731a78839e13ac3&country=US&year=2020&month=12&day=25", function(data) {
    console.log(data);
    console.log('hello');
    document.getElementById("holiday").innerHTML = data;
  })
  
}