
//this is where we will place our input element
const value = 'kelvinmuriithi'; //place here your name or what you wanna convert
//we create uppercase store
const uppercase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
//lets create our lowercase storage
const lowercase = 'abcdefghijklmnopqrstuvwxyz';
//this is where we will place our result
const result = [];

//check in through each character
for (let x = 0; x < value.length; x++) {
  // Check if the character is an uppercase
  //we go through index of each string step by step
  if (uppercase.indexOf(value[x]) !== -1) {
    // Convert the uppercase letter to lowercase and add it to the result array
    result.push(value[x].toLowerCase());
  }
  // Check if the current character is a lowercase letter
  else if (lowercase.indexOf(value[x]) !== -1) {
    // Convert the lowercase letter to uppercase and add it to the result array
    result.push(value[x].toUpperCase());
  }
  // If the current character is neither uppercase nor lowercase, add it to the result array as is
  else {
    result.push(value[x]);
  }
}

// Output the joined result array as a string
console.log(result.join(""));
