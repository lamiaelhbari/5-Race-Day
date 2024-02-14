// Challenge 2 : Race Day ----->

// 1- initialize a random number between 0 and 999 :

let raceNumber = Math.floor(Math.random() * 1000);

// 2- added 1000 to raceNumber if age>18 and registered early  :
const registeredEarly = true;
// const registeredEarly = false;
const age = 28;
if (age > 18 && registeredEarly) {
  raceNumber += 1000;
}

// 3- race start time  :

if (age > 18 && registeredEarly) {
  console.log("Race StartTime : 9:30am ");
} else if (age > 18 && registeredEarly !== true) {
  console.log("Race StartTime : 11:00am ");
} else if (age < 18) {
  console.log(`The runner number ${raceNumber} Your Race StartTime : 12:30pm `);
} else {
  console.log("Please go to the registration office");
}
