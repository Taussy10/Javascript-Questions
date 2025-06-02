// Only those question that are not very hard for me 

// 7.
let obj = { };
console.log(obj.nonExistent || "Default Value");
// I don't know what is obj.nonExistent 
// so I loose here but by google I got to know that 
// will return undefined 
// now obj is empy object so answer: undefined

// DUDE undefined is falsey value so it will move to 2nd value and returns it 
// Imagine that console.log(false || undefined); then both falsey value 
// so it will return last value which is undefined 


8.
let person = { greet: function() { return "Hi"; } };
console.log(person.greet());
// we are calling the function and it's returing "HI"
// so console will "HI" 
// btw if it's not return then it will be undefined


// 10. 
let animal = {
  type: "dog",
  sound: function() {
    return "Woof!";
  }
};
console.log(typeof animal.sound);

// Answer: function cause animal.sound is function