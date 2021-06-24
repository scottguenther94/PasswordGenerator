//Code copied, pasted, and modified from W3 Collective

//Characters to be allowed in Password Generator 
var alpha = "abcdefghijklmnopqrstuvwxyz";
var upper ="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = []
for (var i = 1; i <= 128; i++) {
    numbers.push(i)
}
var symbols = "!@#$%^&*_-+=";

//Declaring variables for DOM elements
var passwordTxt = document.getElementById("password");
var length = document.getElementById("length");
var incUpper = document.getElementById("upper");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");

//Click event for "Generate Password" button
generateBtn.addEventListener("click", () => {
    let characters = alpha;
    incUpper.checked ? (characters += upper) : "";
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    passwordTxt.value = generatePassword(length.value, characters);
  });

  //Function that generates the password
  var generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };
  //Copy button function
  var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});