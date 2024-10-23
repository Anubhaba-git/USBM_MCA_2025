// Task-1: Generate a random number between 1 and 100.
let randomNumber = Math.floor(Math.random() * 100) + 1;
console.log(randomNumber);

// Task-2: Round the number 6.75 down to the nearest integer.
let roundedNumber = Math.floor(6.75);
console.log(roundedNumber); // Output: 6

// Task-3: Round the number 9.12 up to the nearest integer.
let roundeedNumber = Math.ceil(9.12);
console.log(roundeedNumber); // Output: 10

// Task-4: Generate a random number between 5 and 27 (inclusive).
const randoomNumber = Math.floor(Math.random() * (27 - 5 + 1)) + 5;
console.log(randoomNumber);

// Task-5: Add 5 days to the current date.
let currentDays = new Date();
console.log(currentDays.getDay()); //3
console.log(currentDays.getDay() + 5); //8
currentDays.setDate(currentDays.getDate() + 5);
console.log(currentDays);

// Task-6: Get the number of milliseconds between January 1, 2023, and today.
let givenDate = new Date('2023-01-01');
console.log(givenDate);
let curDate = new Date();
console.log(curDate);
let difference = curDate - givenDate;
console.log(difference);

// Task-7: Get the current hour.
let currentDate = new Date();
let currentHour = currentDate.getHours();
console.log(currentHour);

// Task-8: Create a date for January 1, 2025.
let futureDate = new Date('2025-01-01');
console.log(futureDate);

// Task-9: Get the current day of the week (0 for Sunday, 6 for Saturday).
let currentDay = new Date();
let currentDateOfWeek = currentDay.getDay();
console.log(currentDateOfWeek);

// Task-10: Get the current month (0-11).
let currenttDate = new Date();
let currentMOnth = currentDate.getMonth();
console.log(currentMOnth);

// Task-11: What is the difference between getDate() and getDay()?
// getDate() gives you the day of the month (1-31).
// getDay() gives you the day of the week (0-6).
// These two methods are useful for different types of date manipulations and information retrieval in JavaScript.












