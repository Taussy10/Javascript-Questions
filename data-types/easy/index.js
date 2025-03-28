// 1. What is data type ?
// in teaching method like learn by asking questions



// Basic questions 

// 1. What are the five primitive data types in JavaScript?
// Ans: number , string , boolean , null , undefined 
// 2 more are bignInt and symbol

// 2. What is the data type of 42 in JavaScript?
// Ans: Number



// 3. What is the data type of "Hello" in JavaScript?
// Ans: String



// 4.. What is the data type of true and false?
// Ans: Boolean



// 5. What is null in JavaScript?
// Ans: Null is data type in javascript that represenet intentional 
// absence of of any value  
// Intentional absence means ? jaan bujh kr value empty rkhna


// 6. What is undefined in JavaScript?
// Ans: Data type in js that is 
// assigned by js when a variable is declare but value is not assigned 


// 7. What is the difference between null and undefined?
// Ans: Developer sets intentionally
// Typeof object(historical quirk)

// When we want value to be empty   
// JS assigned value 
// Typeof undefined 
// 

// 8. What is the data type of NaN?
// Ans: Number

// 9. How do you check the type of a variable in JavaScript?
// Ans:  use typeof expression then data type 
// For example: typeof 5


// 10. What is a symbol in JavaScript?
// Ans:  It's A unique and immutable(change nahi ho skta) data type
// that is mostly use for object props to prevent  name conflicts 

// Inside Symbol(Can be used any datat ype)
let id1 = Symbol("id");
let id2 = Symbol("id");

console.log(id1 === id2); // Output: false (Symbols are always unique)

// Number and String questions

// 11. What will typeof NaN return?
// Ans:  Number


// 12. What is the output of typeof Infinity?
// Ans:  Number

// 13. What is the result of typeof "123"?
// Ans:  string

// 14. What is the result of typeof (5 + "5")?
// Ans:  As we know that string > number so , "55"

// Question: As we know that +"string" then it converts to 
// number then why not this should be 10 ? 

// For , that you have to understand two things 

// Terminalogy: // Element can be any data type 
// 1. Unary(single): jab bhi single element hai agar uske saamne + lagata 
// to convert will in number 
// string = convert in Number(agar wo "+sfsd" hoga to NAN(stil number nut not valid)) 
// boolean ? true = 1 , false = 0 console.log(+true)
// null = 0 
// undefined = NAN
// symbol and bigInt will give error: that cannon convert a symbol value to number

// all ref types will give NAN 



// 2. concatenate(connecting ): here we add things
// Always remeber string>number so "4"+5 = 45


// 15. How do you convert a string "10" to a number?
// Ans: parseInt("10")

// 16. How do you check if a value is a number in JavaScript? 
// Ans: typeof expression 
// It's good method but what about typeof Nan ? it will give number and that's wrong
// so use isNan(number) == true which means it's not number
// whereas isNaN(33) = false which it's a number


// 17. What is the difference between parseInt() and parseFloat()?
// Ans: parseInt is for integers such 13,4,4 and 
// parseFloat is for float 1.5,43.22

// 18. How do you round a number to the nearest integer in JavaScript?
// Ans: There is Math object in js that provides round method 
// Math.round(45)



// 19. What will "5" - 3 return in JavaScript?
// Ans: you may think yeha par concatenate ho reha hai and string>number = 53
// but answer is if expression except + then it will convert in number 
// concatenetae(only works for Addition btw concateneate means connect(add) )
// so ,answer = 2

// 20. What will Boolean("") return?
// Ans: As we know that empty string is falsey value so it should return 0

// 21. What will Boolean(0) return?
// Ans: False cause 0 is false value

// 22. What will Boolean("false") return?
// Ans: Boolean() method check expression is true or not and 
// return true/false so value will be cause it's a truethy value = true


// 23. What is the result of 5 == "5"?
// Ans: True cause we are not checking typeof 

// 24. What is the result of 5 === "5"?
// Ans: False, cause we are checking typeof 

// 25. What is the data type of an array in JavaScript?
// Ans: Object

// 26. How do you check if a variable is an array?
// Ans: to check variable is array then const a = ["df",4]
Array.isArray(a)
true

// 27. What is the data type of { name: "John", age: 30 }?
// Ans: Object

// 28. What will typeof [] return?
// Ans: Object

// 29. What will typeof null return?
// Ans: Object

// 30. What is the difference between typeof and instanceof in JavaScript?
// Ans: typeof gives type of data type and instanceof I don't know man
