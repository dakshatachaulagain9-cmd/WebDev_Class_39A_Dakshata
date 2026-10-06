let units=50; 

if(units <=50) {
  rate=5;
} else if(units <=100) {
  rate =7;
} else if(units <=200) {
  rate =10;
} else{
  rate = 12;
}

let bill = units * rate;

console.log("Units consumed:", units);
console.log("Rate per unit: Rs.", rate);
console.log("Total bill: Rs.", bill); 