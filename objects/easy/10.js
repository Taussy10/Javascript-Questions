
// Read this: https://dev.to/chintanonweb/mastering-javascript-memory-a-beginners-guide-to-stack-and-heap-57nj

//1. Accessing object property using dot notation
let person = { name: "Alice" };
console.log(person.name);
// what will be output ? 

// Ans: Alice  


//2. Adding a new property to an object
let car = { brand: "Toyota" };
car.model = "Corolla";
console.log(car);
// what will be output ? 

// Ans: Dude there is no such thing as model key oh we are adding model key so 
// key and value will be add in the last cause js memory uses stack in which LIFO
// ans will be {brand:"Toyota", model:"Corolla"}


//3.
let user = { age: 25 };
user.age = 30;
console.log(user.age);

// what will be output ? 

// Ans: Here age key is already has value of 25 but we are again giving value to age key
// so basically by this we update the value so
//  answer will be {age:30}

