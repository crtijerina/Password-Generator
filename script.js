// these are global variables
var newPassword = ""
var UserSelection = ""
var SPArray = "!@#$%^&*()_+"
var NumArray = "1234567890"
var UCArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
var LCArray = "abcdefghijklmnopqrstuvwxyz"

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {


  //promts asking the questions. 
  var SP = confirm("Do you want special characters? Ok for yes, Cancel for no")
  if (SP === true) {
    UserSelection+=SPArray

  

    alert("Special Characters Added.")
  }
  else { alert("Special Characters Denied") }

  var num = confirm("Would you like numbers? (Again) Ok for yes, Cancel for no")
  if (num === true) {
    UserSelection+=NumArray

    alert("Numbers Added.")
  }
  else { alert("Numbers Denied") }
  var UC = confirm("How about uppercase? (Once more) Ok for yes, Cancel for no")
  if (UC === true) {
    UserSelection+=UCArray


    alert("Uppercase Added.")
  }
  else { alert("Uppercase  Denied") }
  var LC = confirm("How about lowercase? (Sorry last time...) Ok for yes, Cancel for no")
  if (LC === true) {
    UserSelection+=LCArray


    alert("Lowercase Added.")
  }
  else { alert("Lowercase Denied") }

  var HC = prompt("Plaese write the nunmber of characters between 8 characters minimum and 128 characters maximum in the text box.")
  if (HC !== null) {
    alert("your password will be " + HC + " characters long.")
  }
  else { alert("Lowercase Denied") }
  for (var i=0; i<HC; i++){
  newPassword+= UserSelection[ Math.floor(Math.random() * UserSelection.length)]}  
  return newPassword
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);