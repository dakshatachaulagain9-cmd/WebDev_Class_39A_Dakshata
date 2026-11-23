// Q9 recharge
const calculateRechargeBonus = (amount) => {
  if (amount >=1000) return amount * 0.15;
  if (amount>=500) return amount * 0.1;
  if (amount>= 100) return amount * 0.05;
  return 0;
};

const calculateTotalBalance = (amount, bonus) => {
  return amount + bonus;
};

const recharge =(number, amount, callback) => {
  let bonus =calculateRechargeBonus(amount);
  let total =callback(amount, bonus);
  console.log("Mobile Number:" + number);
  console.log("Recharge Amount: Rs." + amount);
  console.log("Bonus Received: Rs." + bonus);
  console.log("Total Balance: Rs." + total);
};

recharge("9800000000", 1000, calculateTotalBalance);
