/*
    Task 1
    - Create a function that would swap the value of x and y using only x and y as variables.
    - x and y must be numeric.
    - return -1 if x and y is not numeric.
    - print the swapped values in the console

    Task 2
    - invoke the function "swap"
*/

function swap(x, y){
    // Task 1: Add code here
    if(Number.isInteger(x) && Number.isInteger(y)){
        let a = x;
        let b = y;
        console.log(b, ',',a)
    }else{
        console.log(-1)
    } 
}

// Task 2: Add code here
swap(221,1)
module.exports = swap;
