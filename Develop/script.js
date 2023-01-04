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

function generatePassword(){
  var passwordLength = window.prompt("How many characters will your password contain? (8-128 characters) ");
  
  console.log(passwordLength);

  if(passwordLength < 8 || passwordLength > 128) {
    alert('Please choose a number between 8 and 128.');
    generatePassword();
  }
  else if(isNaN(passwordLength)) {
    console.log (false);
    alert('Please choose a valid number.');
    generatePassword();
  } 
  else {

    var capitalLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    var lowerCaseLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    var digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    var specialCharacters = ["!", "#", "$", "%", "&", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"];
  
    var allChars = [];
    var userCapital = window.confirm("Should your password include capital letters?");
    console.log(userCapital);
  
    var userLowerCase = window.confirm("Should your password include lower case letters?");
    console.log(userLowerCase);
      
    var userDigits = window.confirm("Should your password include digits?");
    console.log(userDigits);
    
    var userCharacters = window.confirm("Should your password include special characters?");
    console.log(userCharacters);

    console.log(allChars)

  if(userCapital === false && 
    (userLowerCase === false) && 
    (userDigits === false) && 
    (userCharacters === false) 
  ){
    alert('Please choose at least one of Capital Letters, Lower Case Letters, Digits, or Special Characters.');
    generatePassword();
  }
  
  if (userCapital === true) {
    allChars = allChars.concat(capitalLetters)
    console.log(allChars)
  }

  if (userLowerCase === true) {
    allChars = allChars.concat(lowerCaseLetters)
    console.log(allChars)
  }

  if (userDigits === true) {
    allChars = allChars.concat(digits)
    console.log(allChars)
  }

  if (userCharacters === true) {
    allChars = allChars.concat(specialCharacters)
    console.log(allChars)
  }  

  // var shuffledChars = allChars.sort(() => 0.5 - Math.random());
  // console.log(shuffledChars)
  var password = [];

  // if (allChars.length < passwordLength) {
  for(var i = 0; i < passwordLength; i++) {
    password.push(allChars.sort(() => 0.5 - Math.random())[0])
    console.log(password)

  } 
  // }else{
   //
  
  }
  
  console.log(password)
  alert('Your new password is: ' + password.join(""));
}
    

  // console.log(passwordLength)
    
  // var index = [allChars]+Math.random();


// var newPassword = shuffledChars.slice(0, passwordLength);
// }
  // var allCharsClone = allChars.concat(allChars, allChars, allChars, allChars, allChars, allChars, allChars);
  // console.log(allCharsClone)
// console.log(allChars)



  

// function getPassword () {
// console.log(index)
// }
// var newPassword = allChars; 
// console.log(getPassword(passwordLength));
// alert('Your new password is: ' + newPassword.join(""));
// }

// Trying to figure out a way to put all of the user choices into one bank
// var newPassword;
// if (userCapital === false) {
//   return;
// }else{
// }

// function 

// newPassword = allChars[math.floor(math.random() * groceries.length)]
// console.log(newPassword)


//   return;
//  }else if (askCapital === "N") {
//   return;
//  }

//   }
  
  
  
 // return passwordString;


// for loop will be somewhere in here

  // must return a string value that is the password.
  // prompt user to choose num btwn 8 and 128
    // var to save length
    // validate user num
  // confirm user upper, lower, num, special characters (4 confirm prompts)
  // 4 vars to save T/F to included characters
    // validate that at least one cat was chosen
  // vars that include all user options of each category. array of string for each category
  // var upper = [" A", "B", ]
  // if user says yes to include that category, choose random(math.random) elements from array
    // how to decide how many elements to choose from each array
    // ?create a new array with all characters from each chosen category?
  // join chosen elements into a string