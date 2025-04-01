
// Data types 
// 1. 
let a = {};
let b = a;
b = { key: "value" };
console.log(a);

// Ans : As we know that refrence data types value changes if we copy it
a = {} // why not a = {key: "value"} cause we aren't adding anything a 
// b will still contains {key: "value"} but a will {}
// Revision is very important

// 2. 
let c = NaN;
// Object.is method tells whether both are object are not and returns true/false
let d = Object.is(NaN, c);
console.log(d);
// Ans : True

// 3. 
let x = "5";
let y = 5;
console.log(x === y);
console.log(x == y);

// Ans : False , True



// 4. 
function test() {
    var a = 10;
    if (true) {
        var a = 20;
    }
    console.log(a);
}
test();

// Ans : As we know that var follows function block scope rules
//  and if statement will execute cause it's true
// So , value wiil will cahnge = 20


// 5. 
var a = 5;
function test() {
    console.log(a);
    var a = 10;
}
test();

// Ans : As we know that var follows Function block scops rules
//  value should 5 cause it's consoling before change value 


// 6. 
let str = "javascript";
console.log(str.slice(-3, -1));

// Ans : negetive index slice end of array and returns it doesn't start from 0 cause 0 = first index
//  ip

// 7. 
let str = "  Hello World  ";
console.log(str.trim().toUpperCase());

// Ans : "HELLO WORLD"

// 8. 
let message = "Hello World";
console.log(message.charAt(message.length - 1));
// Ans : d

// 8. 
let str = "javascript";
console.log(str.split("a"));

// Ans : As you know that split method divides a string wherever that params is 
// a is params so wherver string will divide
// "j" "av" "ascript" 

//9. 
//  console.log(Math.floor(Math.random() * 100) + 1);

// Ans: by math.random: number will generate between 0 to 1 
// then multiply by 100 so number 0 to 100(with float points)
//  now math.floor will make sure that if number 1.5 then number will
// become interger  = 2 and + so number gets + 1
// Number will always integer    

//9. 
let x = NaN;
let y = NaN;
console.log(x == y);
console.log(Object.is(x, y));

// Ans: Firstly 2nd question: True cause NAN is object
// Second question: False why ? cause object is ref type 
// and if both refrence type of object diff way  

//9. 
let a = [];
let b = [];
console.log(a == b);  
// why false ? A new memory space creates ref types and 
// new address will be created then we compare with addresss 

// For primitves value 
let a = "s";
let b = "s";
console.log(x== y);  // true
// Ans: 


//9. Most important:
// Logical opearatros returns truthy or false value
let a = null;
let b = undefined;
console.log(a || b); 
// Firstly check a ? false then move to b false then b(undefined) will print   
console.log(a && b); 
// firstly checka  false ? yeah so print it


