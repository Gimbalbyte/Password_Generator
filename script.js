// Assignment Code
var generateBtn = document.querySelector("#generate");

// Variables
var lowercaseChar = "abcdefghijklmnopqrstuvwxyz";
var uppercaseChar = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numberChar = "0123456789";
var specialChar = "!@#$%^&*()_-+={}[];:'`~<,>.?/|"
var passwordLength;
var uppercaseCheck;
var numberCheck;
var specialCheck;

// Function to determine length of password
function determineLength(){
  passwordLength = prompt("Choose how many characters long you'd like your password to be (between 8-128 characters): ");

    if (passwordLength<8){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (passwordLength>128){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else if (isNaN(passwordLength)){
      alert("Password length must be a number between 8-128 characters");
      determineLength();
    }else{
    alert("The next prompts will ask what characters you want in your password.\nIf all prompts are 'N' then the password will only have lowercase letters.");
    }
    return passwordLength;
}

// Function to determine if the user wants uppercase characters
function determineUppercase(){
  uppercaseCheck = prompt("Do you want to include uppercase letters in your password? \n(Y or N)");
    uppercaseCheck = uppercaseCheck.toLowerCase();

    if (uppercaseCheck === null || uppercaseCheck === ""){
      alert("Please answer Yes or No");
      determineUppercase();

    }else if (uppercaseCheck === "yes" || uppercaseCheck ==="y"){
      uppercaseCheck = true;
      return uppercaseCheck;

    }else if (uppercaseCheck === "no" || uppercaseCheck ==="n"){
      uppercaseCheck = false;
      return uppercaseCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineUppercase();
    }
    return uppercaseCheck;
}

// Function to determine if the user wants numbers
function determineNumbers(){
  numberCheck = prompt("Do you want to include numbers in your password? \n(Y or N)");
    numberCheck = numberCheck.toLowerCase();

    if (numberCheck === null || numberCheck === ""){
      alert("Please answer Yes or No");
      determineNumbers();

    }else if (numberCheck === "yes" || numberCheck ==="y"){
      numberCheck = true;
      return numberCheck;

    }else if (numberCheck === "no" || numberCheck ==="n"){
      numberCheck = false;
      return numberCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineNumbers();
    }
    return numberCheck;
}

// Function to determine if the user wants special characters
function determineSpecial(){
  specialCheck = prompt("Do you want to include special characters in your password? \n(Y or N)");
    specialCheck = specialCheck.toLowerCase();

    if (specialCheck === null || specialCheck === ""){
      alert("Please answer Yes or No");
      determineSpecial();

    }else if (specialCheck === "yes" || specialCheck ==="y"){
      specialCheck = true;
      return specialCheck;

    }else if (specialCheck === "no" || specialCheck ==="n"){
      specialCheck = false;
      return specialCheck;
    
    }else {
      alert("Please answer Yes or No");
      determineSpecial();
    }
    return specialCheck;
}

// Function which takes all the previous functions and generates a random password
function generatePassword(){
  determineLength();
  console.log(passwordLength);
  determineUppercase();
  console.log(uppercaseCheck);
  determineNumbers();
  console.log(numberCheck);
  determineSpecial();
  console.log(specialCheck);

  var characters = lowercaseChar;
  var password = "";
  if (uppercaseCheck && numberCheck && specialCheck){
    characters += uppercaseChar + numberChar + specialChar;

  }else if (uppercaseCheck && numberCheck){
    characters += uppercaseChar + numberChar;

  }else if (numberCheck && specialCheck){
    characters += numberChar + specialChar;

  }else if (uppercaseCheck && specialCheck){
    characters += uppercaseChar + specialChar;

  }else if (uppercaseCheck){
    characters += uppercaseChar;

  }else if(numberCheck){
    characters += numberChar;

  }else if (specialCheck){
    characters += specialChar;

  }else{
    characters === lowercaseChar;
  }

  for(var i = 0; i < passwordLength; i++){
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return password;
}

// Write password to the #password input
function writePassword() {
  var password1 = "";
  password1 = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password1;
}

// Function to reset text
function resetText(){
document.getElementById("password").value = "Your Secure Password";
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);