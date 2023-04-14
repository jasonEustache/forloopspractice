// EXERCISE 14
// The balance is supposed to equal the difference of all deposits and all withdrawals.
// Check every bank account balance and return the array of bank accounts with a wrong balance
// Array example: bankAccounts in /data/data.js
// getClientsWithWrongBalance(bankAccounts) => [{ name: 'Name1', balance: 32, ... }, { name: 'Name2', balance: 3523, ... }]

export function getClientsWithWrongBalance(array) {
  let bankAccounts = [];

  for (let i = 0; i < array.length; i++) {
    let withDepDiff;
    let sumDeposits = 0;
    let sumWithdrawals = 0;
    if (array[i].deposits !== undefined) {
      for (let x = 0; x < array[i].deposits.length; x++) {
        sumDeposits += array[i].deposits[x];
      }
    }
    if (array[i].withdrawals !== undefined) {
      for (let j = 0; j < array[i].withdrawals.length; j++) {
        sumWithdrawals += array[i].withdrawals[j];
      }
    }
    withDepDiff = sumDeposits - sumWithdrawals;
    if (array[i].balance !== withDepDiff) {
      bankAccounts.push(array[i]);
    }
  }
  return bankAccounts;
}

// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-14"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
