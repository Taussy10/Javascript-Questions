
// 8.
let name = "Alice";
let Name = "Bob";
console.log(name, Name);
// Learning
// Always open your eyes: one with capital letter and other is small later 

// 9. 
console.log(y);
let y = 5;
// Learning 
// How does variable stored in js
// 1. Variables are declared 
// 2.  Memroy space is created in js 
// 3. Then you can access the value of variable from memory space 

// And you were trying acces value of variable before storing in memory so will give 
// ReferenceError (Cannot access 'y' before initialization). 


// Hoisting
// But I've heard that there is a concept in JS called hoisting according to it
//  you can even acces the variable even before declration of variable

// Mearning of hoisting: To Lifting(something above)
// Firstly, It's all about storing something inside variable
//  As we know that there are two type of variable block scope and not block scope

// BTW this will work for anything function , array , object if you are storing them in variable

// Non Block scope: 
console.log(a);
var a = 5;
// In NBS if you trying to access variable fore declaring it 
// will give undefined 

// Block scope: 
console.log(b());
const b = function yo() {
    console.log("Hello");
};
// In BS if you trying to access variable fore declaring it 
// will give Refrence error 

// If you don't store something in variable then it will work fine
so()
function so() {
    console.log("Hello");
};

// In short 
// Block Scope (let, const) → Pehle access karne par error (TDZ).

// Non-Block Scope (var) → Pehle access karne par undefined.

// Agar direct function likha hai (function declaration), toh usko kahin bhi call kar sakte ho.