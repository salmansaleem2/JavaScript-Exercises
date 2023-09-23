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

// let rotateString = "w3resource";
// setInterval(() => {
//   const a =
//     rotateString[rotateString.length - 1] +
//     rotateString.substring(0, rotateString.length - 1);
//   rotateString = a;
//   console.log(a);
// }, 500);

// 6. Write a JavaScript program to determine whether a given year is a leap year in the Gregorian calendar.

// console.log(isLeapYear % 100 !== 0);
// const isLeapYear = (isLeapYear) => {
//   return isLeapYear % 100 === 0 ? isLeapYear % 400 === 0 : isLeapYear % 4 === 0;
// };
// console.log(isLeapYear(2016));
// console.log(isLeapYear(2000));
// console.log(isLeapYear(1700));
// console.log(isLeapYear(1800));
// console.log(isLeapYear(100));

// write a function that counts the occurrences of both letters and numbers in a given string?
const occurance = (string1, string2) => {
  // how many times  each char ocurrance in stirng
  const obj1 = {};
  const obj2 = {};

  for (item of string1) {
    obj1[item] = (obj1[item] || 0) + 1;
  }

  for (item of string2) {
    obj2[item] = (obj2[item] || 0) + 1;
  }

  // console.log(JSON.stringify(obj1) === JSON.stringify(obj2));

  // Compare the two objects
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  if (keys1.length !== keys2.length) {
    console.log(false);
    return;
  }

  for (const key of keys1) {
    if (obj1[key] !== obj2[key]) {
      console.log(false);
      return;
    }
  }
  console.log(true);

  // console.log(obj1, obj2);
};

occurance("aazx", "xzaa");
