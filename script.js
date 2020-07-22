// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword(params) {
  //initialize character arrays and split them
  let lowers="abcdefghijklmnopqrstuvwxyz".split("");
  let uppers="ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
  let numerics="1234567890".split("");
  let specChars="!@#$%^&*()_+-=|?".split("");
let pw="";
var availableChars=[];
let pwLength=parseInt(prompt("Password Length"));
// Check that user entered a valid password length
if(pwLength<8 || pwLength > 128 || isNaN(pwLength)){
  return "Please choose a length between 8 and 128 characters";
}
let lc=confirm("Use lowercase letters?");
if(lc){
  //add one character from this string to PW to ensure there is at least one in the password
  pw += lowers[Math.floor(Math.random() * lowers.length)];
  //Add lowercase letters to array of usable data types
  availableChars.push(lowers);
}
//same steps repeated for uppercase, lowercase, special characters
let uc=confirm("use uppercase letters?");
if(uc){
  pw += uppers[Math.floor(Math.random() * uppers.length)];
  availableChars.push(uppers);
}
let nums=confirm("use numbers?");
if(nums){
  pw += numerics[Math.floor(Math.random() * numerics.length)];
  availableChars.push(numerics);
}
let special =confirm("use special characters?");
if(special){
  pw += specChars[Math.floor(Math.random() * specChars.length)];
  availableChars.push(specChars);
}
//check that at least one data type was selected
if(!lc && !uc && !nums && !special){
  return "Please choose at least one character type";
}
//assign the rest of the password. i starts at availablechars.length because we already assigned some letters
for(let i=availableChars.length; i<pwLength; i++ ){
  //selects an array of data types at random from available
  let n= availableChars[Math.floor(Math.random() * availableChars.length)];
  //selects a random character from chosen data type
  pw += n[Math.floor(Math.random() * n.length)];
}
return pw;
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
