// Password Generator JS Code
var lowerCharacters = ["abcdefghijklmnopqrstuvwxyz"];
var upperCharacters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var numbers = ["0123456789"];
var symbols = ["!@#$%^&*_-+="];

var passwordTxt = document.getElementById("password");
var incUpper = document.getElementById("upper");
var inLower = document.getElementById("lower");
var incNumbers = document.getElementById("numbers");
var incSymbols = document.getElementById("symbols");
var generateBtn = document.getElementById("generate");
var length = prompt("Enter a number from 8 to 128");

generateBtn.addEventListener("click", () => {
    let characters = alpha;
    incNumbers.checked ? (characters += numbers) : "";
    incSymbols.checked ? (characters += symbols) : "";
    passwordTxt.value = generatePassword(length.value, characters);
  });

  var generatePassword = (length, characters) => {
    let password = "";
    for (let i = 0; i < length; i++) {
      password += characters.charAt(
        Math.floor(Math.random() * characters.length)
      );
    }
    return password;
  };

var copyBtn = document.getElementById("copy");
copyBtn.addEventListener("click", () => {
  passwordTxt.select();
  document.execCommand("copy");
  alert("Password Copied");
});

