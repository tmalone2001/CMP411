function getData() {
    var dd = document.getElementById("dd");
    var selectedMeat = document.getElementById("meatdd");
    var selectedParas = dd.value;
    var apiURL = "https://baconipsum.com/api/?type=" + selectedMeat + "&paras=" + selectedParas;
    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            var jsonString = JSON.stringify(data, null, 2);
            var jsonOutput = document.getElementById("raw");
            var paraOutput = document.getElementById("formatted");
            var encOutput = document.getElementById("encrypted");
            var subOutput = document.getElementById("substituted");
            paraOutput.innerHTML = "";

            jsonOutput.innerHTML = jsonString;
            for(var para in data){
                paraOutput.innerHTML += "<p>" + data[para] + '/<p>';
            }

            encOutput.innerHTML = ceasarCipher(paraOutput.innerHTML, 3);

            subOutput.innerHTML = encryptWithSubstitution(paraOutput.innerHTML)


        })
    }

function ceasarCipher(text, shift) {
    var encryptedText = "";

    for (var i = 0; i < text.length; i++) {
        var char = text[i];

        if (char.match(/[a-zA-Z]/)) {
            const isUpperCase = char === char.toUpperCase();
            const offset = isUpperCase ? 65 : 97;
            const charCode = char.charCodeAt(0); - offset;
            const encryptedCharCode = (charCode + shift) % 26;
            const encryptedChar = String.fromCharCode(encryptedCharCode + offset);
            encryptedText += isUpperCase ? encryptedChar : encryptedChar.toLocaleLowerCase();
        } else {
            encryptedText += char
        }
    }
    return encryptedText;
}

const substitutionKey = {
    'a': 'x',
    'b': 'q',
    'c': 'y',
    'd': 'z',
    'e': 'm',
    'f': 'n',
    'g': 'o',
    'h': 'p',
    'i': 'a',
    'j': 'b',
    'k': 'c',
    'l': 'd',
    'm': 'e',
    'n': 'f',
    'o': 'g',
    'p': 'h',
    'q': 'i',
    'r': 'j',
    's': 'k',
    't': 'l',
    'u': 'r',
    'v': 's',
    'w': 't',
    'x': 'u',
    'y': 'v',
    'z': 'w'
  };
  
  // Function to encrypt a message using the substitution cipher
  function encryptWithSubstitution(text) {
    const encryptedText = text.split('').map(char => substitutionKey[char] || char).join('');
    return encryptedText;
  }
  
  
  
  
  
  
  
  