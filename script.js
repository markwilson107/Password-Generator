// Assignment Code
//Variables
var generateBtn = document.querySelector("#generate");
var passLength = "";
var charType = "";
var charTypeArray = ["l", "u", "n", "s"];
var charSet = "";
var passwordValue = "";

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;

}

//Generate Password
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
  charType = prompt("What character types would you like?\nlowercase(l), uppercase(u), numeric(n), and/or special(s)\nList as many letters as you like.");
  //converts string to lowercase
  if (charType != null) {
    charType = charType.toLowerCase();
  }
  //repeat prompt until correct criteria is met or cancel is pressed
  while (charType != null && !charTypeArray.some(v => charType.includes(v))) {
    //prompt user for character type(s)
    charType = prompt("What character types would you like?\nlowercase(l), uppercase(u), numeric(n), and/or special(s)\nPlease enter valid character types.");
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
  //checks if user selected "lowercase"
  if (charType.includes(charTypeArray[0])) {
    //adds lowercase characters to character set
    charSet += "abcdefghijklmnopqrstuvwxyz";
  }
  //checks if user selected "uppercase"
  if (charType.includes(charTypeArray[1])) {
    //adds uppercase characters to character set
    charSet += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  }
  //checks if user selected "numeric"
  if (charType.includes(charTypeArray[2])) {
    //adds numbers to character set
    charSet += "0123456789";
  }
  //checks if user selected "special"
  if (charType.includes(charTypeArray[3])) {
    //adds numbers to character set
    charSet += "!@#$+-*&_";
  }

  //generate password
  //clear any previous value
  passwordValue = "";
  //loops through password length 
  for (var i = 0, n = charSet.length; i < passLength; ++i) {
    //adds random characters from charSet
    passwordValue += charSet.charAt(Math.floor(Math.random() * n));
  }
  //returns the final password
  return passwordValue;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
