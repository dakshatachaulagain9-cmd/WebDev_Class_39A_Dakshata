// Q4 movie ticket
const getTicketPp=  (age) => {
  if (age< 12) return 150;
  if (age<= 17) return 200;
  if (age<= 59) return 300;
  return 200;
};

const calculateTotal= (price, quantity) => {
  return price*quantity;
};

const applyDiscount= (total, quantity) => {
  if (quantity>= 5) {
    return total * 0.1;
  }
  return 0;
};

const bookTicket = (name, age, quantity, callback) => {
  let price = getTicketPp(age);
  let total = calculateTotal(price, quantity);
  let discount = callback(total, quantity);
  console.log("Customer:"+name);
  console.log("Age:"+age);
  console.log("Tickets:" + quantity);
  console.log("Total Before Discount: Rs."+total);
  console.log("Discount: Rs." + discount);
  console.log("Final Amount: Rs."+(total-discount));
};

bookTicket("Hari", 25, 5, applyDiscount);