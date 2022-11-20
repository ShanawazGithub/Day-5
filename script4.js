//Return all the prime numbers in an array using anonymous function
// creating one array of numbers with variable
const newArray = [1, 3, 2, 5, 10, 11, 13, 15, 16, 18];
//with one variable we are creating function and doing filter after iteration
const myPrimeArray = newArray.filter(function(num){
    //creating for loop for checking array of numbers and iterating over it
  for (let i = 2; i < num; i++) {
      //if condition is equal to zero return false otherwise return true
    if (num % i === 0) return false;
  }
  return num !== 1;
});
// printing the final output in the array
console.log(myPrimeArray);




 

//Return all the prime numbers in an array using IIFE
//creating the IIFE and defining the one arugument int it for filtering the array
(function prime(arr){
    // for every iteration check the array numbers printing the numbers
    console.log("The prime numbers are: " + arr.filter((number) => {
        //Iterating over the loop and doing every number to the square root check the numbers
        for (var i = 2; i <= Math.sqrt(number); i++) {
            // if the number is divided by 2 is equal to zero return the false otherwise returns the true
            if (number % i === 0) return false;
        }
        return true;
    }));
// calling the function by parenthesis and giving the input array in it.
})([1, 2, 3, 5, 7, 10, 12, 13, 15, 2]);

 


