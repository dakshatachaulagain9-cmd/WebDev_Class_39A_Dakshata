// Q6 food delivery
const calculateDelivery = (distance) => {
  if (distance <=2) {
    return 30;
  }
  return 30 + (distance-2) * 15;
};

const checkFreeDelivery = (orderAmount) => {
  return orderAmount >= 1000;
};

const getCharge = (distance, orderAmount) => {
  if (checkFreeDelivery(orderAmount)) {
    return 0;
  }
  return calculateDelivery(distance);
};

const processOrder = (customer, distance, orderAmount, callback) => {
  let charge = callback(distance, orderAmount);
  console.log("Customer:" + customer);
  console.log("Order Amount: Rs." + orderAmount);
  console.log("Distance:" + distance + " km");
  console.log("Delivery Charge: Rs." + charge);
};

processOrder("Shyam", 5, 800, getCharge);
 