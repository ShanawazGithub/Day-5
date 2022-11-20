//Rotate an array by k times using IIFE
// Creating one variable and defining the array 
let arr = [4, 8, 10, 6, 11, 6, 1, 9, 10, 12, 13];
// defining the k value with one variable
let k = 7;
// by using the array length counting the array with the k value it is doing division and giving remainder
k = arr.length % k;
// defining the the function 
(function(num) {
    // Iterating over the array and taking the values
    for (let i = 0; i < k + 1; i++) {
        // by using unshift it will do right rotation and by using pop it will remove las adding value
        arr.unshift(arr.pop());
    }
    // after doing operation giving the final output in the print format
    console.log(num);
// calling the function with parenthesis i.e IIFE
})(arr);
