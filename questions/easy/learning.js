
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

// But ye NBS undefined deta hai lekin BS error aakhi q ?
// Firstly understand declartiona and intilization of variable

// Delartion: Variable is declared 
const c;
// Intialzation: variable got the value 
const d =25;

// How does JS enginer works ?
const e = 12
// 1. Value is declared: const e; which means undefined 
// 2. variable gets intialized: const e = 12 

// Hoisting for Var
// Let's take an example of this
console.log(f);
var f = 5;

// Step1: Hoist kr de 
var f;
//// Step2: Access it: but we didn't get the value so console.log(f) = undefined 
console.log(f);

// these thing won't run but I should write
//Step3: Value gets intialized
f = 5
// Step4: then if again console then will give value but that won't happen
console.log(f);

// Hoisting for let and const
console.log(f);
var g = 5;




// Step1: Hoist kr de
// let aur const bhi hoist hote hain, Temporal Dead Zone (TDZ) me chale jaate hain.
// Matlab JS declare toh kar deti hai, par tab tak us variable ko access nahi karne deti jab tak uski value assign nahi hoti.
let g;

// Step2: Access it: Ab chunki TDZ me access nahi jab tak value assign nahi ho jaati so face the error 
console.log(g);

// these thing won't run but I should write
//Step3: Value gets intialized
g = 5
// Step4: then if again console then will give value but that won't happen
console.log(g);


// In short 
// Block Scope (let, const) → Pehle access karne par error (TDZ).

// Non-Block Scope (var) → Pehle access karne par undefined.

// Agar direct function likha hai (function declaration), toh usko kahin bhi call kar sakte ho.



// const vs let
// you you have to assign the variable in const
const h;
// If you don't assign vairable in let it will work fine
let i; 


// why string is more powerfull than number ?
// 14. console.log("123" + 4);
//Ans: we are adding the string and number and as so = 1234

// Not operator (!) returns true or false console.log(!"helo") = false