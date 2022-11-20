//Remove duplicates from an array using anonymous function
//defining the one array with one variable
let chars = ['A', 'B', 'A', 'C', 'B', 'C', 'D', 'E'];

//with the filter and anonymous function we are removing duplicates in an array
//In the function we are defining two variables one is for holding the value and other for index number. 
let uniqueChars = chars.filter(function(c, index){
    //if the c is the array name and index is the value if one is their it will come true otherwise it will come false
    return chars.indexOf(c) === index;
});
//finally printing the array without duplicates
console.log(uniqueChars);


 




//Removing all duplicates from an Array using anonymous function 
//Defining the function with one variable
var colors = function(arr){
    var newArr = [];
    //creating for loop for the array length
    for(var i=0; i < arr.length; i++){
        // if the same word is came it will not push the string to the array otherwise it will push the each string to the newarray
        if(newArr.indexOf(arr[i]) === -1) {
            newArr.push(arr[i]);
        }
    }
    console.log(newArr);
};
//calling the function using the variable
colors(["red","blue","green","yellow","red","blue"]);

 

//Removing all duplicates from an Array using IIFE 
//Defining the array with one variable
var colors = ["red","blue","green","yellow","red","blue"];
//defining the IIFE
(function(){
    var newArr = [];
    //creating for loop for the array length
    for(var i=0; i < colors.length; i++){
        // if the same word is came it will not push the string to the array otherwise it will push the each string to the newarray
        if(newArr.indexOf(colors[i]) === -1) {
            newArr.push(colors[i]);
        }
    }
    console.log(newArr);
})();
//calling the function by parenthesis

 
