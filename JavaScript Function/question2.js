// Q2 student result
const calculateAverage = (m1, m2, m3) => {
  return (m1 + m2 + m3) / 3;
};

const getDivision = (average) => {
  if (average >= 70) return "First Division";
  if (average >= 60) return "Second Division";
  if (average >= 50) return "Third Division";
  return "Fail";
};

const processResult = (name, m1, m2, m3, callback) => {
  let average = calculateAverage(m1, m2, m3);
  let division = callback(average);
  console.log("Student:" + name);
  console.log("Average:" + average);
  console.log("Division:" + division);
};

processResult("Sita", 80, 75, 70, getDivision);
