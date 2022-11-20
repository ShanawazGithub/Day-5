//Print odd numbers in an array using anonymous function
var nums = [1,2,3,4,5,6,7,8,9,10];
var odds = [];
var numbers = function(nums) {
    for (var i = 0; i < nums.length; i++) {
        if ((nums[i] % 2) !== 0) {
            odds.push(nums[i]);
        }
    }

};
numbers(nums);
console.log(odds);

 
(function(nums) {
    var odds = [];
    for (var i = 0; i < nums.length; i++) {
        if ((nums[i] % 2) !== 0) {
            odds.push(nums[i]);
        }
    }
console.log(odds);
})([11,25,36,47,54,63,78,81,999,100]);
