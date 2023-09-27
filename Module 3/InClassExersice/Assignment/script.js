function Validate(){
    var word = document.getElementById("word").value;
    var algo = document.getElementById("algorithm").value;
    var errorList = "";

    if (word.length < 1) {
        errorList += "Please Enter a Word.";
    }
    
    if (algo.length < 1) {
        errorList += " Please Enter a Algorithm.";
    }

    if (algo != "1" && algo != "2" && algo != "3" && algo != "4"){
        errorList += " Please Enter a Valid Algorithm Number.";
    }

    return errorList;
}

function ClearTable(){
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var table3 = document.getElementById("table3");
    var table4 = document.getElementById("table4");
    table4.innerHTML = "";
    table1.innerHTML = "";
    table3.innerHTML = "";
    table2.innerHTML = "";
}

function AddToList(){
    var alerts = Validate();
    var table1 = document.getElementById("table1");
    var table2 = document.getElementById("table2");
    var word = document.getElementById("word").value;
    var algo = parseInt(document.getElementById("algorithm").value);

    if (alerts.length < 1){
        if (algo == "1"){
            var row = table1.insertRow(-1);
            var cell1 = row.insertCell(0);
            if (Algorithm1(word) == true){
                cell1.innerHTML = word + ":" + " is a palindrome";
            } else {
                cell1.innerHTML = word + ":" + " is not a palindrome";
            }
            }
    
        if (algo == "2"){
            var row2 = table2.insertRow(-1);
            var cell2 = row2.insertCell(0);
            if (Algorithm2(word) == true){
                cell2.innerHTML = word + ":" + " is a palindrome";
            } else {
                cell2.innerHTML = word + ":" + " is not a palindrome";
            }
        }
    
        if (algo == "3"){
            var row3 = table3.insertRow(-1);
            var cell3 = row3.insertCell(0);
            if (Algorithm3(word) == true){
                cell3.innerHTML = word + ":" + " is a palindrome";
            } else {
                cell3.innerHTML = word + ":" + " is not a palindrome";
            }
        }
    
        if (algo == "4"){
            var row4 = table4.insertRow(-1);
            var cell4 = row4.insertCell(0);
            if (Algorithm4(word) == true){
                cell4.innerHTML = word + ":" + " is a palindrome";
            } else {
                cell4.innerHTML = word + ":" + " is not a palindrome";
            }
        }
    } else {
        alert(alerts);
    }
    
}

// Creates two strings, one reversed and one unmodified. Indexes and compares the two strings.
// working
function Algorithm1(str){
    var lowerStr = str.toLowerCase();
    var word1 = lowerStr;
    var word2 = lowerStr.split('').reverse().join('');
    var counter = 0;
    
    for (var i = 0; i < word2.length; i++) {
        if (word2[i] != word1[i]) {
            counter++;
        }
    }
    if (counter != 0){
        return false;
    } else {
        return true;
    }
}

//Function reverses string and compares against the original string.
//working
function Algorithm2(str){
    var lowerStr = str.toLowerCase();
    var reverseStr = lowerStr.split('').reverse().join('');
    if(lowerStr == reverseStr){
        return true;
    } else {
        return false;
    }
}

//Function indexes string from first index and last index moving to the midpoint.
//working
function Algorithm3(str){
    var lowerStr = str.toLowerCase();
    var len = str.length;
    for (var i = 0; i < len/2; i++) {
        if (str[i] !== str[len - 1 - i]) {
            return false;
        } else {
            return true;
        }
    }
}

function Algorithm4(str){
    lowerStr = str.toLowerCase();

    const length = lowerStr.length;
    const halfLength = Math.floor(length / 2);

    for (let i = 0; i < halfLength; i++) {
        if (lowerStr[i] !== lowerStr[length - 1 - i]) {
            return false;
        }
    }

    return true;
}