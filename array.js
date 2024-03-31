//lets create a function that takes in two inputs 
function createArray(begin, last) {
  let result = [];
  //for each element in the array create a new array element and increment the counter 
  for (let i = begin; i <= last; i++) {
    //create a new array element and increment the counter with the new element value 
    result.push(i);
  }
  //return the result array 
  return result;
}

console.log(createArray(2, 8)); //lets create an output
console.log(createArray(-9, 6)); //lets an output that prints from -9 to 0 then to 6