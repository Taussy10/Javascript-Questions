// Just lil bit learning about objects

// It's a data structure where we store data 
// on the basis of key value pairs

// NOTE THAT: KEYS ARE STRING DATA-TYPE(YOU DON'T SEE UNDER THE HOOD that's when you use bracket notation with string
//  ) AND VALUES IT'S YOUR CHOICE DATA TYPE 
// Here we are storing a string and function
let person = {
  name: "Alice",
  greet: function() {
    console.log("Hello!");
  }
};

// How to create object ? Two methods 

// 1. Object Literal: Means defining objects in
//  curly braces without object constuctor  

let user = {
  name: "Alice",
  greet: "Hello"
};

// 2. Object constructor 
// what is constuctor ? 
// Will learn about this later it's out of topic that's why 
let car = new Object() 
car.name = "Maruti"
car.date = "5 June"














// HOW TO ACCESS VALUES INSIDE THE OBJECTS: THERE ARE TWO METHODS 

//1.  dot notation(REMEMBER that 
// you have to use equal sign to assign the value) 
user.age = 45

//2. Square bracket notation(REMEMBER that 
// you have to write key in string) 
// BUT why string is working for key ? Cause under the hood keys are string
user["class"] = 4

// It's useful if the key is written using cabab-case: cause in 
// cabab case we can't use dot notation(cause hyphen sperate the value) 
user["school-name"] = 4

// IF OBJECT IS VARIABLE THEN DON'T NEED TO USE STRING(WE DID IN FOR IN LOOPS)
user[key] = 4










// ADDING OBJECTS: Object will be added as last key 
user.height = "7 Feet"
















// For deleting values: BTW It returns boolean values whether it's delted or not 
delete user.name






// OBJECT METHODS 
let person1 = {
  name: "Alice",
  greet: function() {
    console.log("Hello!");
  }
};
// function inside object is valled object method: 
person1.greet()
// it doesn't return anything so will just console and show undefined: you should know about return statemtn in function 









// HOW TO ACCESS EACH KEY OF AN OBJECT: 
console.log(Object.keys(user)); // RETURNS KEYS IN ARRAY ["name", "greet"]

// HOW TO ACCESS EACH VALUE OF AN OBJECT 
console.log(Object.values(user)); //  RETURNS VALUES IN ARRAY  ["Alice", hello]











// FOR IN Loop

let user = {
  name: "John",
  age: 30,
};

for (let YEAH in user) {
    // YEAH IS VARIABLE THAT LOOPS ALL OVER THE KEYS OF USER OBJECT 
    // THEN TWO THINGS HAPPENS 
    // 1. ALL THE KYES BECOME STRING(THAT'S WHY HAVE TO BRACKET NOTATION NOT DOT NOTATION) 
    // 2. ON EACH ITERATION ALL KEYS ASSIGNED TO VARIABLE NAME 

    // then console it 
   console.log(YEAH); // name, age

// You can also access the user object by 
 console.log(user);
//  /then what's the user of it  when we can access user.name like this 

// YOU SHOULD KNOW ABOUT LOOPS THAT THEY ARE USE FOR DOING SOMETHING AGAIN AND AGAIN WITHOUT HUMAN INTERVENTION
// so this will keep printing values of keys till it ends 
console.log("HE", user[YEAH]);

// now we can do all sorts of things such as 
// WHY IF ELSE Cause we have one number and another string and slice method doesn't work on numbers that's why
if (typeof user[YEAH] === 'string') {
    console.log("HEs", user[YEAH].slice(0,2));
} else {
    console.log("HE", user[YEAH]);
}

}


// Actually value created by ref data types is ref pointer(thing) and variables is pointing to that pointer (A pointer(thing) that refers to a particular variable 
// think like a TV(thing) as refrence pointer and variable as two remotes a and b then if a se 10 par valume kar to b par 
// bhi show 10 valume agar b se +20 kara = 10 +20 =30 so a par value 30 show karega  )


let a = { val: 5 };
let b = a;
b.val = 10;
console.log(a.val); 
// value will be change answer will be: 10



// Typeof only works for variable values checking 
// like this  const a = "Tausif" so typof a
// NOT: typof function cause this is just a  keyword
