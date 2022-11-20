//Return all the palindromes in an array using anonymous function
// defining one array with strings and numbers
const arr = ['carecar', 1344, 12321, 'did', 'cannot', 'track', 99, 143341];
// creating one arrow function for checking the array
const isPalindrome = function(el) {
    // converting each number or word to string
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   // writing while loop for iterating over array
   while(i < j) {
       // writing if condition string of i is equal to string og j then if condition executes and return true otherwise return false
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;
};
// created another arrow function for filtering the array after checking the array
const findPalindrome = function(arr) {
   return arr.filter(el => isPalindrome(el));
};
// calling the function
console.log(findPalindrome(arr));


 

//Return all the palindromes in an array using IIFE
// creating one arrow function for checking the array
(function(el) {
    // for every iteration of checking it will check, filter the string and print it.
    console.log("The palindromes are: " + el.filter(function(el) {
    // converting each number or word to string
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   // writing while loop for iterating over array
   while(i < j) {
       // writing if condition string of i is equal to string og j then if condition executes and return true otherwise return false
      if(str[i] === str[j]) {
        // it will increment and decrement the i and j if the condition is true
         i++;
         j--;
      }
      else {
         return false;
      }
   }

   return true;
}));
// calling the function with the parenthesis i.e IIFE     
})(['carecar', 1344, 12321, 'did', 'cannot', 'track', 99, 143341]);

 

