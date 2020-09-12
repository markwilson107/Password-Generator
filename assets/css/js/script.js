//Assignment Code
//Variables
var generateBtn = document.querySelector("#generate");
var passLength = "";
var charType = "";
var charTypeArray = ["l", "u", "n", "s"];
var charSet = "";
var charSetInit = "";
var passwordValue = "";

//Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.textContent = password;
}

//Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

//Generate Password Function
function generatePassword() {

  //prompt user for password length
  passLength = prompt("What length should the password be? (8-128)");
  //repeat prompt until correct criteria is met or cancel is pressed
  while (passLength != null && passLength < 8 || passLength > 128) {
    //prompt user for password length
    passLength = prompt("What length should the password be? (8-128)\nPlease enter valid length. ");
  }
  //if user presses cancel end function
  if (passLength === null) {
    return "";
  }

  //prompt user for character type(s)
  charType = prompt("What character type(s) would you like?\nlowercase(l), uppercase(u), numeric(n), and/or special(s)\nList as many letters as you like.");
  //converts string to lowercase
  if (charType != null) {
    charType = charType.toLowerCase();
  }
  //repeat prompt until correct criteria is met or cancel is pressed
  while (charType != null && !charTypeArray.some(v => charType.includes(v))) {
    //prompt user for character type(s)
    charType = prompt("What character type(s) would you like?\nlowercase(l), uppercase(u), numeric(n), and/or special(s)\nPlease enter valid character types.");
    //converts string to lowercase
    if (charType != null) {
      charType = charType.toLowerCase();
    }
  }
  //if user presses cancel end function
  if (charType === null) {
    return "";
  }

  //create character set for password generation
  //clear any previous value
  charSet = "";
  passwordValue = "";
  //checks if user selected "lowercase"
  if (charType.includes(charTypeArray[0])) {
    //adds lowercase characters to character set
    charSetInit = "abcdefghijklmnopqrstuvwxyz";
    charSet += charSetInit;
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length);
  }
  //checks if user selected "uppercase"
  if (charType.includes(charTypeArray[1])) {
    //adds uppercase characters to character set
    charSetInit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charSet += charSetInit;
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length);
  }
  //checks if user selected "numeric"
  if (charType.includes(charTypeArray[2])) {
    //adds numbers to character set
    charSetInit = "0123456789";
    charSet += charSetInit;
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length);
  }
  //checks if user selected "special"
  if (charType.includes(charTypeArray[3])) {
    //adds numbers to character set
    charSetInit = "!@#$+-*&_";
    charSet += charSetInit;
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length);
  }

  //generate password
  //loops through password length 
  for (var i = 0, n = charSet.length; i < passLength; ++i) {
    //adds random characters from charSet
    passwordValue += charSet.charAt(Math.floor(Math.random() * n));
  }
  //returns shuffled final password
  return passwordValue.split('').sort(function(){return 0.5-Math.random()}).join('');
}