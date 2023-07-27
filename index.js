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



// Task 3: Write a JavaScript program to find the most frequent element in an array and return it. 

// Example Input: [3, 5, 2, 5, 3, 3, 1, 4, 5] Example Output: 3


function findMostFrequentElement(array) {
    // Create an object to store the frequency of each element
    const frequencyMap = {};

    // Loop through the array to count the frequency of each element
    array.forEach(element => {
        if (frequencyMap[element]) {
            frequencyMap[element]++;
        } else {
            frequencyMap[element] = 1;
        }
    });

    // Find the most frequent element
    let mostFrequentElement;
    let maxFrequency = 0;
    for (const element in frequencyMap) {
        if (frequencyMap[element] > maxFrequency) {
            maxFrequency = frequencyMap[element];
            mostFrequentElement = element;
        }
    }

    return parseInt(mostFrequentElement);
}

// const array = [3, 5, 2, 5, 3, 3, 1, 4, 5];
// console.log(findMostFrequentElement(array)); 

