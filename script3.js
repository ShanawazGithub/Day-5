//Sum of all numbers in an array using anonymous function
var nums = [1,2,3,4,5,6,7,8,9,10];
//creating one variable with sum as 0
var sum = 0;
//creating a function with one variable i.e., nothing but anonymous function
var numbers = function(nums) {
    //creating for loop for the given array of numbers to iterate all the numbers
    for (var i = 0; i < nums.length; i++) {
        //adding the values for every iteration and storing in sum variable
        sum +=nums[i];
    }

};
//calling the function 
numbers(nums);
console.log(sum);

 

//Sum of all numbers in an array using IIFE
(function(nums) {
    //creating one variable with sum as 0
    var sum = 0;
    //creating for loop for the given array of numbers to iterate all the numbers
    for (var i = 0; i < nums.length; i++) {
        //adding the values for every iteration and storing in sum variable
        sum +=nums[i];
    }
//printing the total sum value after completing the iteration over the array
console.log(sum);
})([15,23,39,46,50,66,79,86,99,10]);
//calling the function

 

