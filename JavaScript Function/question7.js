// Q7 ATM
const validateWithdrawal = (amount, balance) => {
  if (amount % 500 !== 0) {
    return false;
  }
  if (amount + 25 > balance) {
    return false;
  }
  return true;
};

const withdrawMoney = (amount, balance, callback) => {
  console.log("Account Balance: Rs." + balance);
  console.log("Withdrawal Amount: Rs." + amount);

  if (callback(amount, balance)) {
    balance = balance - amount - 25;
    console.log("Withdrawal Successful!");
    console.log("Transaction Fee: Rs. 25");
  } else {
    console.log("Withdrawal Failed! Invalid amount or not enough balance.");
  }
  console.log("Remaining Balance: Rs." + balance);
};

withdrawMoney(3000, 10000, validateWithdrawal);