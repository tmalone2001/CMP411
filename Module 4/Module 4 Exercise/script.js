function getData() {
    var dd = document.getElementById("dd");
    var apiURL = "";
    if (dd.value == 1) {
        apiURL = "https://baconipsum.com/api/?type=meat-and-filler&paras=1";
    }
    if (dd.value == 2) {
        apiURL = "https://baconipsum.com/api/?type=meat-and-filler&paras=2";
    }
    if (dd.value == 3) {
        apiURL = "https://baconipsum.com/api/?type=meat-and-filler&paras=3";
    }
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            var jsonString = JSON.stringify(data, null, 2);
            var jsonOutput = document.getElementById("raw");
            var paraOutput = document.getElementById("formatted");
            paraOutput.innerHTML = "";

            jsonOutput.innerHTML = jsonString;
            for(var para in data){
                paraOutput.innerHTML += "<p>" + data[para] + '/<p>';
            }
        })
}