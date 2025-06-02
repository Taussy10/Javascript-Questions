
// Read this: https://dev.to/chintanonweb/mastering-javascript-memory-a-beginners-guide-to-stack-and-heap-57nj


let person = { name: "Alice" };
console.log(person.name);
// what will be output ? 

// Ans: Alice  


let car = { brand: "Toyota" };
car.model = "Corolla";
console.log(car);
// what will be output ? 

// Ans: Dude there is no such thing as model key oh we are adding model key so 
// it will be add in last position  
// ans will be {brand:"Toyota", model:"Corolla"}


//3.
let user = { age: 25 };
user.age = 30;
console.log(user.age);

// what will be output ? 

// Ans: Here age key is already has value of 25 but we are again giving value to age key
// so basically by this we update the value so
//  answer will be {age:30}

// CORRECTION: asked output value not object structure so
// user.age updated value will be 30 

//4.
let obj = {};
obj["key"] = "value";
console.log(obj["key"]);

// what will be output ? 

// Ans: 
// Look firstly we have empty object then 
// we are adding a key value pair named as "Key" and "value" using bracket notion 
// btw you should know that we can add it using bracket notation and also write key in string 
// cause under the hoood keys are string in js

// So answer will be just like we access values using dot notioations:
// Answer: "Value"

//5.
let fruit = { name: "Mango" };
delete fruit.name;
console.log(fruit.name);

// what will be output ? 

// Ans: We have deleted so it js by defaul put undefined value so  undefined 

//6.
let a = { val: 5 };
let b = a;
b.val = 10;
console.log(a.val);


// what will be output ? 

// Ans: You should know about copying in refrence data type: it's a ref data type
// what is refrence means that's this value is refering to a then you copy then that value refer to b  
// then if you make change copied then that will refer to b
// then why it's start refering to a ? 

// Actually value created by ref data types becomes ref pointer(A pointer(thing) that refers to a particular variable 
// think like a TV(thing) as refrence pointer and variable as two remotes a and b then if a se 10 par valume kar to b par 
// bhi show 10 valume agar b se +20 kara = 10 +20 =30 so a par value 30 show karega  )

// so answer will be: 10 


//7.
let book = {
  title: "JS Basics",
  pages: 100
};
console.log(Object.keys(book));

// what will be output ? 

// Ans: Don't know what Object.keys() method does but may it returns keys of an object 
// so answer will be: title then pages  

//8.
let student = { name: "Ravi", marks: 90 };
for (let key in student) {
  console.log(key);
}

// Ans: IT loops all over the keys then key variable represent all the keys in object
// so value will be: name then marks 


//9.
let x = { a: 1 };
console.log("a" in x);
// may be in key word is use for in(exist or not) but for what ? key or value may be value 
// so answer will be: False 

// CORRECTION: Actually it checks key so TRUE 


//10.
let obj = { name: "Tom" };
console.log(obj.age || "Not found");
// look we don't have obj.age so it's false and it's OR operator so go to second 
// return it: "Not found"

