// EXERCISE 20
// Return and array of 2 arrays
// (1 - an array of names that contain "a" in name, 2 - an array of names that don't have 'a' in name)
// separateNamesWithAFromRest(["jon", "alice", "andrew", "mark", "jimmy"]) -> [["alice", "andrew", "mark"], ["jon", "jimmy"]]
// NOTE: You MUST use double/nested FOR loop to solve this exercise. The array.includes() method is NOT allowed.
//let arr =[bob, jack];
export function separateNamesWithAFromRest(array) {
  let namesWithA = [];
  let noNamesWithA = [];
  for (let i = 0; i < array.length; i++) {
    let boolA = false;
    let name = array[i];
    for (let j = 0; j < name.length; j++) {
      if (name[j].toLowerCase() === "a") {
        boolA = true;
      }
    }
    if (!boolA) {
      noNamesWithA.push(name);
    }
    if (boolA) {
      console.log(name, boolA, "this is cool");
      namesWithA.push(name);
    }
  }

  console.log([namesWithA, noNamesWithA]);
  return [namesWithA, noNamesWithA];
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-20"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
