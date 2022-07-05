// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest


// --------------------1) Create a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.

// a) Create a test with expect statements for each of the variables provided.


describe("fibonacciSequence", () => {
    const fibLength1 = 6
    const fibLength2 = 10
   it("a function that takes in a number (greater than 2) and returns an array that length containing the numbers of the Fibonacci sequence.", () => {
     expect(fibonacciSequence(fibLength1)).toEqual([1, 1, 2, 3, 5, 8])
     expect(fibonacciSequence(fibLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
   })
})
 

// b) Create the function that makes the test pass.

// Pseudocode
// Write a variable (fibonacciSequence) and assign it a param (numbers)
// Create a second variable to store the new arrays (newArray). Write the 2 first numbers of the fibonacci sequence so that the rest will start from index position 2.
// Use a for loop to iterate over the array (starting at index position 2)
// Use .push to send results to the end of newArray
// Use fibonaci logic to produce the numbers of the Fibonaci sequence. (newArray[i - 2] + newArray[i - 1])
// The fibonacci sequence is achieved by adding the last 2 numbers of the seuqence i.e. 1, (1+1) 2, (1+2) 3, (2+3) 5, (3+5) 8, (5+8) 13 and so on the above logic removes the number that no longer needs to factor into the addition equation.
// return the new array.

let fibonacciSequence = (number) => {
    let newArray = [1, 1]
    for (let i = 2; i < number; i++) {
         newArray.push(newArray[i - 2] + newArray[i - 1])
    }
    return newArray
}

// --------------------2) Create a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

describe("onlyOddNums", () => {
const fullArr1 = [4, 9, 0, "7", 8, true, "hey", 7, 199, -9, false, "hola"]
const fullArr2 = ["hello", 7, 23, -823, false, 78, null, "67", 6, "number"]
  it("a function that takes in an array and returns a new array of only odd numbers sorted from least to greatest", () => {
    expect(onlyOddNums(fullArr1)).toEqual([-9, 7, 9, 199])
    expect(onlyOddNums(fullArr2)).toEqual([-823, 7, 23])
  })
})
// b) Create the function that makes the test pass.

// pseudoCode
// Initialize a hof and give it params (array)
// Write a new variable and  set it to equal array and a method (.filter) to iterate over the array and filter out anything that isn't an odd number.
// I'll do the above using "number" and modulo
// The return will use .sort and (a,b) => a-b to make each value greater than the one to it's left (thereby arranging the new array from least to greatest).

  const onlyOddNums = (array) => {
    let newArray = array.filter(oddNumsSortedArray => {
      return typeof oddNumsSortedArray === "number" && oddNumsSortedArray % 2 !== 0
    })
    return newArray.sort((a, b) => a - b)
  }

// // --------------------3) Create a function that takes in an array and returns an array of the accumulating sum. An empty array should return an empty array.

// // a) Create a test with expect statements for each of the variables provided.

describe("accumulatedArray", () => {
const numbersToAdd1 = [2, 4, 45, 9]
const numbersToAdd2 = [0, 7, -8, 12]
const numbersToAdd3 = []
  it("a function that takes in an array and returns an array of the accumulating sum", () => {
    expect(accumulatedArray(numbersToAdd1)).toEqual([2, 6, 51, 60])
    expect(accumulatedArray(numbersToAdd2)).toEqual([0, 7, -1, 11])
    expect(accumulatedArray(numbersToAdd3)).toEqual([])
  })
})


// b) Create the function that makes the test pass.

// pseudoCode
// Initialize a hof (accumulatedArray)
// Give it an 'array' parameter
// put an empty array in the funtion (result)
// Write a conditional statement if else statement that will make each element in the array the sum of the elements up to that point. 
// Return the new array (result)
  
const accumulatedArray = (array) => {
  const result = [];
  array.forEach((num, index) => {
    if (index === 0) {
      result[index] = num;
    } else {
      result[index] = num + result[index - 1];
    }
  })
  return result
}