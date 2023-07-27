// Task 1 : Create a function that takes a string as input and returns the reversed version of the string without using the built-in reverse() method. 

// Example Input: "hello world" Example Output: "dlrow olleh"


function reverseString(input) {
    let reversed = '';
    for (let i = input.length - 1; i >= 0; i--) {
        reversed += input[i];
    }
    return reversed;
}

// console.log(reverseString('hello world'));

// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// Task 2 : Create a function that takes an array of numbers as input and returns the sum of all positive numbers in the array. 

// Example Input: [2, -5, 10, -3, 7] Example Output: 19

function positiveSum(array) {
    let sum = 0;
    array.map(a => {
        if (a >= 0) {
            sum += a;
        }
    })
    return sum;
}

// const array = [2, -5, 10, -3, 7];
// console.log(positiveSum(array));


// ---------------------------------------------------------------------------------------------------------------------------------------------------------



