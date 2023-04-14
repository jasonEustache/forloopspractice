// EXERCISE 10
// Return an array of account holders names that contains a given letter
// Array example: bankAccounts in /data/data.js
// getClientsWithLetterInName(bankAccounts, 'e') => ['Kevin', 'Steven', ...]

export function getClientsWithLetterInName(array, letter) {
  let holder = [];
  for (let i = 0; i < array.length; i++) {
    let name = array[i].name;
    for (let j = 0; j < name.length; j++) {
      if (name[j].toLowerCase() === letter.toLowerCase()) {
        holder.push(name);
        console.log(holder);
      }
    }
  }
  return holder;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-10"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
