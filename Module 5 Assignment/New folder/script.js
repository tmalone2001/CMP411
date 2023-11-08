async function getHoliday() {
    var key = "dd855144b16848f3a731a78839e13ac3"
    var holiday = document.getElementById("holidayName");
    var holidayType = document.getElementById("type");
    var holidayDay = document.getElementById("occursOn");
    var day = document.getElementById("day").value;
    var month = document.getElementById("month").value;
    var year = document.getElementById("year").value;

    let response = await fetch("https://holidays.abstractapi.com/v1/?api_key=" + key + "&country=US" + "&day=" + day + "&month=" + month + "&year=" + year);
    let data = await response.json();
    console.log(data.name);
    var error = JSON.stringify(data.error);
    if (error.length < 1) {
        var holiday1 = JSON.stringify(data[0].name);
        var holidayType1 = JSON.stringify(data[0].type);
        var holidayDay1 = JSON.stringify(data[0].week_day);

        holiday.innerHTML = holiday1.replace(/['"]+/g, '');
        holidayType.innerHTML = "Holiday Type: " + holidayType1.replace(/['"]+/g, '');
        holidayDay.innerHTML = "Occurs On: " + holidayDay1.replace(/['"]+/g, '');
    } else {
        holiday.innerHTML = error.replace(/['"]+/g, '');
    }
    
    

    
}