// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


function generatePassword() {
  var password = "";
  // THEN I am presented with a series of prompts for password criteria

  // THEN I select which criteria to include in the password
  // WHEN prompted for the length of the password
  // THEN I choose a length of at least 8 characters and no more than 128 characters
  const passwordLength = prompt("How long would you like your password?");

  // WHEN asked for character types to include in the password
  // THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
  var lowercase = confirm("Do you want lowercase?");
  var uppercase = confirm("Do you want uppercase?");
  var numeric = confirm("Do you want numeric?");
  var special = confirm("Do you want special?");

  // THEN my input should be validated and at least one character type should be selected

  // THEN a password is generated that matches the selected criteria

  // THEN the password is either displayed in an alert or written to the page
  return password;
}