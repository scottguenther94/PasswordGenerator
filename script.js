// Password Generator JS Code
var generateBtn = document.querySelector("#generate");

// Write password 
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
}
function generatePassword() {
    var lowerCharacters = ["a", "b", "c", "d", "e"];
    var numCharacters = prompt("Enter a number from 8 to 128");
    var output = "";
    console.log(numCharacters);
    for (let i = 0; i < numCharacters; i++){
        returnString += lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)]
    }
    return returnString;
}
console.log(generatePassword());
