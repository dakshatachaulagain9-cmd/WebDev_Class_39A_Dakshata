// Q8 restaurant
const getFoodPrice = (foodName) => {
  if (foodName=== "Burger") return 250;
  if (foodName ==="Pizza") return 500;
  if (foodName=== "Momo") return 150;
  if (foodName ==="Chowmein") return 180;
  return 0; 
};

const calculateServiceCharge = (total) => {
  return total * 0.05;
};

const calculateOrder = (foodName, quantity, callback) => {
  return callback(foodName) * quantity;
};

const generateReceipt = (customerName, foodName, quantity, callback) => {
  let foodAmount = callback(foodName, quantity, getFoodPrice);

  if (foodAmount ===0) {
    console.log("Invalid food item");
    return;
  }

  let serviceCharge = calculateServiceCharge(foodAmount);
  console.log("Customer:" + customerName);
  console.log("Food:" + foodName);
  console.log("Quantity:" + quantity);
  console.log("Food Amount: Rs." + foodAmount);
  console.log("Service Charge: Rs." + serviceCharge);
  console.log("Final Amount: Rs." + (foodAmount + serviceCharge));
};

generateReceipt("Suman", "Burger", 2, calculateOrder);
