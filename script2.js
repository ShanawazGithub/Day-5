//Convert all the strings to title case in a string array using anonymous function
// defining the array of strings to
var arr = ["red", "blue", "black", "white", "pink"];
// creating the variable with name and defining the function in it
var TitleCase = function() {
    //  creating the for loop over the array and iterating
    for (var i = 0; i < arr.length; i++) {
        //for every iteration convert to title case and printing every string
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
};
// calling the function
TitleCase();

 

//Convert all the strings to title case in a string array using IIFE
// defining the array of strings to
var arr = ["red", "blue", "black", "white", "pink"];
// creating the variable with name and defining the function in it
(function() {
    //  creating the for loop over the array and iterating
    for (var i = 0; i < arr.length; i++) {
        //for every iteration convert to title case and printing every string
        console.log(arr[i][0].toUpperCase() + arr[i].substr(1));
 }
})();
// calling the function

 

