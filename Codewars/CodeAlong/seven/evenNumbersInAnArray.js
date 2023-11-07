// DESCRIPTION:
// Given an array of numbers, return a new array of length number containing the last even numbers from the original array (in the same order). The original array will be not empty and will contain at least "number" even numbers.

// For example:

// ([1, 2, 3, 4, 5, 6, 7, 8, 9], 3) => [4, 6, 8]
// ([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2) => [-8, 26]
// ([6, -25, 3, 7, 5, 5, 7, -3, 23], 1) => [6]

// Poyla 4 steps of problem solving

// Step 1: Understand the problem
// Step 2: Devise a plan

// lastEvenNums = []
// Iterate through the array backwards
// Are you even?
// Push to lastEvenNums
// If length of array is equal to or greater than the param "number"
// Break
// Return lastEvenNums

// Accumulator Pattern:
// **
// Step 1: Create an accumulator variable
// Step 2: Loop
// Step 3 (inside loop): Accumulate
// Step 4: return accumulator
// **

// Step 3: Code
// Step 4: Look back

function evenNumbers(array, number) {
    // Create Accumulator
    let lastEvenNums = [];
    // Iterate through the array backwards
    for (let i = array.length - 1; i >= 0; i--) {
        // Are you even?
        if (array[i] % 2 == 0) {
            // Push to lastEvenNums
            lastEvenNums.unshift(array[i]);
            // If length of array is equal to or greater than the param "number"
            if (lastEvenNums.length >= number) {
                // Break
                break;
            }
        }
    }
    // Return lastEvenNums
    return lastEvenNums;
}

// Practice your Google Fu
// Organizing yourself when planning/ writing code
// Iterating backwards, for i loops
// Modulo / remainder operations
// Ways to add elements to an array / unshift, push, shift, pop
// More practice accumulator pattern


let result1 = evenNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9], 3); // [4,6,8]
let result2 = evenNumbers([-22, 5, 3, 11, 26, -6, -7, -8, -9, -8, 26], 2); // [-8,26]
let result3 = evenNumbers([6, -25, 3, 7, 5, 5, 7, -3, 23], 1); // [6]

console.log(result1, result2, result3);
