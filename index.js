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



// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// Task 5: Implement a simple JavaScript calculator. The calculator should take two numbers and an operator (+, -, *, /) as input and return the result of the operation.

function calculate(num1, operator, num2) {
    switch (operator) {
        case '+':
            return num1 + num2;
        case '-':
            return num1 - num2;
        case '*':
            return num1 * num2;
        case '/':
            if (num2 === 0) {
                return "Error: Cannot divide by zero";
            }
            return num1 / num2;
        default:
            return "Error: Invalid operator";
    }
}

// console.log(calculate(5, '+', 3)); 
// console.log(calculate(10, '-', 4));
// console.log(calculate(6, '*', 7)); 
// console.log(calculate(15, '/', 5)); 


// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// Task 6: Create a program that generates a random password of a specified length. The password should include a mix of uppercase letters, lowercase letters, numbers, and special characters.

function generateRandomPassword(length) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const specialChars = "!@#$%^&*()-_+=~`[]{}|;:,.<>?";

    const allChars = uppercaseChars + lowercaseChars + numberChars + specialChars;
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * allChars.length);
        password += allChars[randomIndex];
    }

    return password;
}

// const passwordLength = 12;
// const randomPassword = generateRandomPassword(passwordLength);
// console.log(randomPassword);


// ---------------------------------------------------------------------------------------------------------------------------------------------------------


// Task 7: Implement a function that converts a Roman numeral to an integer. The function should take a Roman numeral string (e.g., "IX" or "XXI") as input and return the corresponding integer value.

function romanToInteger(romanNumeral) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    for (let i = romanNumeral.length - 1; i >= 0; i--) {
        const currentChar = romanNumeral[i];
        const currentValue = romanValues[currentChar];

        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

// console.log(romanToInteger("IX"));
// console.log(romanToInteger("XXI"));
// console.log(romanToInteger("IV"));
// console.log(romanToInteger("XLII"));
// console.log(romanToInteger("CMXCIX"));

