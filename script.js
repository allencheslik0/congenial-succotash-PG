// Assignment Code
var generateBtn = document.querySelector("#generate");


//Assigning Variables */
// var uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
// var lowercase = "abcdefghijklmnopqrstuvwxyz";
// var number = "0123456789";
// var Scharacter = "~!@#$%^&*()_+-=<>{}[]";
// var Characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789~!@#$%^&*()_+-=<>{}[]";
//Built out Variables in an array, above variables didnt return as I wanted (string)
var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialChar = ["!", "%", "&", ",", "*", "+", "-", ".", "/", "<", ">", "?","~"];
var letterLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var letterUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var actualCharacters = ""; //This is where the characters are stored

//Declaration of Major Vars
var length;
var confirmSpecialChar;
var confirmNumChar;
var confirmUpper;
var confirmLower;

// Write password to the #password input
function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
  }


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

function generatePassword() {
    
//Initial Confirmation for password creation/Determination of length
var length = prompt("How many characters would you like your password to be? (Must be between 8-128 characters)")
if(length < 8 || length > 128) {
    alert("You must choose between 8-128 characters. Please Re-Enter")
    return  generatePassword()
}
//this fixes issue of users inputing "strings of letters" into the length prompt
if(isNaN(length)) {
    alert("Please enter number's only.");
    return generatePassword();
};

//This is where you assign the required parameters of your password
var confirmSpecialChar = confirm("Select OK to confirm if you would like to include the special characters parameter or cancel if you don't");
var confirmNumChar = confirm("Select OK to confirm if you would like to include numeric characters parameter or cancel if you dont't");    
var confirmLower = confirm("Select OK to confirm if you would like to include lowercase characters paremeter or cancel if you don't");
var confirmUpper = confirm("Select OK to confirm if you would like to include uppercase characters parameter or cancel if you don't");

 if(!confirmUpper && !confirmLower && !confirmSpecialChar && !confirmNumChar) {
    alert("You must choose at least one parameter");
    var confirmSpecialChar = confirm("Select OK to confirm if you would like to include the special characters parameter or cancel if you dont't");
    var confirmNumChar = confirm("Select OK to confirm if you would like to include numeric characters parameter or cancel if you dont't");    
    var confirmLower = confirm("Select OK to confirm if you would like to include lowercase characters parameter or cancel if you dont't");
    var confirmUpper = confirm("Select OK to confirm if you would like to include uppercase characters parameter or cancel if you dont't");   
};

var passwordCharacters = [];
      
if (confirmSpecialChar) {
  passwordCharacters = passwordCharacters.concat(specialChar)
};

if (confirmNumChar) {
  passwordCharacters = passwordCharacters.concat(number)
};
  
if (confirmLower) {
  passwordCharacters = passwordCharacters.concat(letterLower)
};

if (confirmUpper) {
  passwordCharacters = passwordCharacters.concat(letterUpper)
};
//moved var result from line 38 to assist in creation of for loop
var result = ""; 

for (var i=0; i < length; i++) {
   result += passwordCharacters[Math.floor(Math.random() * passwordCharacters.length)];
}
return result;

}