// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(`Today is : ${days[date.getDay()]}`);

console.log(
  `Current time is ${
    date.getHours() > 12 ? date.getHours() - 12 + " pm" : date.getHours() + "am"
  } : ${date.getMinutes()} : ${date.getSeconds()}`
);
