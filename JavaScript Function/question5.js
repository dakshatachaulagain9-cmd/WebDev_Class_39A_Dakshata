// Q5 salary
const calculateBonus = (salary) => {
  if (salary >= 40000) {
    return salary * 0.1;
  }
  return salary * 0.05;
};

const calculateTax = (salary) => {
  return salary * 0.05;
};

const calculateNetSalary = (salary, bonusCallback, taxCallback) => {
  let bonus = bonusCallback(salary);
  let tax = taxCallback(salary);
  return salary + bonus - tax;
};

const generatePayslip = (name, salary, callback) => {
  let net = callback(salary, calculateBonus, calculateTax);
  console.log("Employee:" + name);
  console.log("Basic Salary: Rs." + salary);
  console.log("Bonus: Rs." + calculateBonus(salary));
  console.log("Tax: Rs." + calculateTax(salary));
  console.log("Net Salary: Rs." + net);
};

generatePayslip("Ram", 50000, calculateNetSalary);