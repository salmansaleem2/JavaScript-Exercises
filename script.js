// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38

const date = new Date();
// const days = [
//   "Sunday",
//   "Monday",
//   "Tuesday",
//   "Wednesday",
//   "Thursday",
//   "Friday",
//   "Saturday",
// ];

// console.log(`Today is : ${days[date.getDay()]}`);

// console.log(
//   `Current time is ${
//     date.getHours() > 12 ? date.getHours() - 12 + " pm" : date.getHours() + "am"
//   } : ${date.getMinutes()} : ${date.getSeconds()}`
// );

// 2. Write a JavaScript program to print the current window contents.

// console.log(window.print());

// 3. Write a JavaScript program to get the current date.
// Expected Output :
// mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

// console.log(
//   `${
//     String(date.getMonth()).length === 1
//       ? "0" + date.getMonth()
//       : date.getMonth()
//   }-${
//     String(date.getDay()).length === 1 ? "0" + date.getDay() : date.getDay()
//   }-${date.getFullYear()}, ${
//     String(date.getMonth()).length === 1
//       ? "0" + date.getMonth()
//       : date.getMonth()
//   }/${
//     String(date.getDay()).length === 1 ? "0" + date.getDay() : date.getDay()
//   }/${date.getFullYear()} `
// );

// 4. Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.
// formula = √[s × (s – a) × (s – b) × (s – c)].

// const semiParameter = (5 + 6 + 7) / 2;
// const area = Math.sqrt(s * (s - 5) * (s - 6) * (s - 7));

// 5. Write a JavaScript program to rotate the string 'w3resource' in the right direction. This is done by periodically removing one letter from the string end and attaching it to the front

let rotateString = "w3resource";
setInterval(() => {
  const a =
    rotateString[rotateString.length - 1] +
    rotateString.substring(0, rotateString.length - 1);
  rotateString = a;
  console.log(a);
}, 500);
