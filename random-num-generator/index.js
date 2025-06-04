const random = Math.round(Math.random() * 100);

// why let cause it will change 
// input should number
let input = +prompt();

console.log("Input :", input);
console.log("Random Number :", random);

// Jab tak sahi answer nahi aaye tab tak keep looping


// function checkValue() {
//  if (random === input) {
//     console.log(`Yeah, you are correct: ${random}`);
//   } else if (input > random) {
//     console.log(`you are too high: ${input}`);
//      input = prompt()
//   } else if (input < random) {
//     console.log(`you are too low: ${input}`);
//     input = prompt()
//   } 
// }

while (input !== random) {
   if (random === input) {
    console.log(`Yeah, you are correct: ${random}`);
  } else if (input > random) {
    console.log(`you are too high: ${input}`);
     input = +prompt()
  } else if (input < random) {
    console.log(`you are too low: ${input}`);
    input = +prompt()
  } 
}
// checkValue();
// input



// If you can't explain me without code you can't solve:
// Code will execute then a random number willl be generated
// then prompt will be open now you have to guess that number
// if guessed number === random number then show you are correct
