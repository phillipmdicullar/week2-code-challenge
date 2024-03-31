
function checkprime(num) {
if (num <= 1) {
    return false;
} 
 //5 is larger than 1, so we continue with the function
 if (num === 2){ 
    return true;
}
 //5 is not 2, so we continue with the function
 for (let i= 2; i < num; i++) {
  if (num % i === 0) {
  return false;
   }
 }
 return true;
}
//place the value we want to check
console.log(checkprime(9))













