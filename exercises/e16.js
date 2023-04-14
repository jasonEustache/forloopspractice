// EXERCISE 16
// Please, read the exercise-info/flat.md to get the initial data of what is the expected result of this exercise.
// Array example: flatArraysData in /data/data.js
// flatArrays([['d', 'r'], 'z', 'b', ['f', 'y']]) => ['d', 'r', 'z', 'b', 'f', 'y']
// NOTE: You can NOT use the array.flat() method in your code

export function concatArrays(arr1, arr2) {
  let concat = [];

  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i]) {
      concat.push(arr1[i]);
    }
  }

  for (let j = 0; j < arr2.length; j++) {
    if (arr2[j]) {
      concat.push(arr2[j]);
    }
  }
  return concat;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-16"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
