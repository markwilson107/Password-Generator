//Assignment Code
//Set variables
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
    passLength = prompt("What length should the password be? (8-128)\nPlease enter valid length. ");
  }
  //if user presses cancel then end function
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
  //if user presses cancel then end function
  if (charType === null) {
    return "";
  }

  //Create character set for password generation
  //clear any previous values
  charSet = "";
  passwordValue = "";
  //checks if user selected "lowercase(l)"
  if (charType.includes(charTypeArray[0])) {
    //adds lowercase characters to charSet
    charSetInit = "abcdefghijklmnopqrstuvwxyz";
    charSet += charSetInit;
    //adds 1 random lowercase character to password
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length));
    //reduces length by 1
    passLength--;
  }
  //checks if user selected "uppercase(u)"
  if (charType.includes(charTypeArray[1])) {
    //adds uppercase characters to charSet
    charSetInit = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    charSet += charSetInit;
    //adds 1 random uppercase character to password
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length));
    //reduces length by 1
    passLength--;
  }
  //checks if user selected "numeric(n)"
  if (charType.includes(charTypeArray[2])) {
    //adds numbers to charSet
    charSetInit = "0123456789";
    charSet += charSetInit;
    //adds 1 random numeric character to password
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length));
    //reduces length by 1
    passLength--;
  }
  //checks if user selected "special(s)"
  if (charType.includes(charTypeArray[3])) {
    //adds numbers to charSet
    charSetInit = "!@#$+-*&_";
    charSet += charSetInit;
    //adds 1 random special character to password
    passwordValue += charSetInit.charAt(Math.floor(Math.random() * charSetInit.length));
    //reduces length by 1
    passLength--;
  }

  //Generate password
  //loops through remaining password length 
  for (var i = 0, n = charSet.length; i < passLength; ++i) {
    //adds random characters from charSet
    passwordValue += charSet.charAt(Math.floor(Math.random() * n));
  }

  //returns shuffled final password
  return passwordValue.split('').sort(function () { return 0.5 - Math.random() }).join('');

}