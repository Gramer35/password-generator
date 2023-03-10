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

numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"]
lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
uppercase = lowercase.join().toUpperCase().split("")
specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"]

function generatePassword() {
  let passLength = parseInt(prompt("How many characters would you like your password?"));
  while (passLength < 8 || passLength > 128) {
    alert('Length needs to be between 8 and 128 characters');
    passLength = prompt("How long would you like your password?");
  } if (!passLength) {
    alert('Please enter a number');
    return;
  }
  
  confirmNumb = confirm("Do you want numbers included in your password?")
  confirmUp = confirm("Do you want uppercase letters included in your password?")
  confirmLow = confirm("Do you want lowercase letters included in your password?")
  confirmSpec = confirm("Do you want special characters included in your password?")


  if (!confirmNumb && !confirmUp && !confirmLow && !confirmSpec) {
    alert("You need to select character types!");
    return;

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

  } else if (confirmNLow && confirmSpec) {
    var choices = lowercase.concat(specialChar);

  } else if (confirmNLow && confirmUp) {
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

  var password = []

  for (var i = 0; i < passLength; i++) {
    const pwoptions = choices[Math.floor(Math.random() * choices.length)];
    password.push(pwoptions)
  }

  const pass = password.join("");
  UserSelect(pass);
  return pass;
}

function UserSelect(pass) {
  document.querySelector("#password").textContent = pass ;
}


// -----------------------------other option----------------------------------------------------

// function generatePassword() {
//   var password = "";

//   let passwordLength = parseInt(prompt("How long would you like your password?"));
//   while (passwordLength < 8 || passwordLength > 128) {
//     alert('Length needs to be between 8 and 128 characters');
//     passwordLength = prompt("How long would you like your password?");
//   }
//   var confirmNumb = confirm("Do you want numbers included in your password?")
//   var confirmUp = confirm("Do you want uppercase letters included in your password?")
//   var confirmLow = confirm("Do you want lowercase letters included in your password?")
//   var confirmSpec = confirm("Do you want special characters included in your password?")

//   return password;
// }