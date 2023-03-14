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

// characters the password can contain
numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
uppercase = lowercase.join("").toUpperCase().split("")
specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

// function we are creating to generate a password based on prompted needs
function generatePassword() {
  // parseInt is used to determine if the input is a integer. While statement will loop until we have characters between 8-128. After the while loop, we have an if statement that IF the entry is not 
  // an integer, it will tell the user the entry needs to be a number. 
  let passLength = parseInt(prompt("How many characters would you like your password?"));
  while (passLength < 8 || passLength > 128) {
    alert('Length needs to be between 8 and 128 characters');
    passLength = parseInt(prompt("How long would you like your password?"));
      if (!passLength) {
        alert('Please enter a number');
        return;
      }
  } 
  
  
  // After we know how many characters are requested, series of prompts are asked to the user for what the password needs. 
  confirmNumb = confirm("Do you want numbers included in your password?")
  confirmUp = confirm("Do you want uppercase letters included in your password?")
  confirmLow = confirm("Do you want lowercase letters included in your password?")
  confirmSpec = confirm("Do you want special characters included in your password?")

// Once selections have been made, our function needs to know how to include the options. If all options are denied, a message will appear stating the user needs to select character types. 
  if (!confirmNumb && !confirmUp && !confirmLow && !confirmSpec) {
    alert("You need to select character types!");
    return;
// options the user could select and if selected, characters are assigned and joined into an array. 
  } else if (confirmNumb && confirmLow && confirmUp && confirmSpec) {
    var choices = numbers.concat(lowercase, uppercase, specialChar);

  } else if (confirmNumb && confirmLow && confirmUp) {
    var choices = numbers.concat(lowercase, uppercase);

  } else if (confirmNumb && confirmLow && confirmSpec) {
    var choices = numbers.concat(lowercase, specialChar);

  } else if (confirmNumb && confirmSpec && confirmUp) {
    var choices = numbers.concat(uppercase, specialChar);

  } else if (confirmLow && confirmUp && confirmSpec) {
    var choices = lowercase.concat(uppercase, specialChar);

  } else if (confirmNumb && confirmLow) {
    var choices = numbers.concat(lowercase);

  } else if (confirmNumb && confirmUp) {
    var choices = numbers.concat(uppercase);

  } else if (confirmNumb && confirmSpec) {
    var choices = numbers.concat(specialChar);

  } else if (confirmLow && confirmSpec) {
    var choices = lowercase.concat(specialChar);

  } else if (confirmLow && confirmUp) {
    var choices = lowercase.concat(uppercase);

  } else if (confirmUp && confirmSpec) {
    var choices = uppercase.concat(specialChar);

  } else if (confirmNumb) {
    var choices = numbers;

  } else if (confirmUp) {
    var choices = uppercase;

  } else if (confirmLow) {
    var choices = lowercase;

  } else if (confirmSpec) {
    var choices = specialChar;

  }
// Now that we have our user selection made - we need to put them into an array. password is the empty array the password will go into
  var password = []
// for loop that will take into account the length the user requested and the choices the user selected for what they want included in the password. 
  for (var i = 0; i < passLength; i++) {
    const pwoptions = choices[Math.floor(Math.random() * choices.length)];
    password.push(pwoptions)
  }
// choices and options are then joined into the password text. From here, this ends the function we needed. The second half of the starting function will complete and push the password to the screen. 
  const passwordText = password.join("");
  return passwordText;
}
