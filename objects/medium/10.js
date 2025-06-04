
// Learn about this keywrod 
// to mujhe proptype then deep copy shallow copy  then Chaining & Circular References and  aankhe khuli rakhni padegi
// 1.
let car = {
  brand: "Honda",
  year: 2020,
  getAge: function(currentYear) {
    return currentYear - this.year;
  }
};
console.log(car.getAge(2025)); 

// Answer: 2025 -2020 = 5  



// 2.
let user = {
  name: "Sam",
  address: {
    city: "Delhi",
    country: "India"
  }
};
console.log(user.address.city);

// Answer: "Delhi" 

// 3.
let obj = { a: 1, b: 2 };
for (let key in obj) {

  if (obj.hasOwnProperty(key)) {
    console.log(key, obj[key]);
  }
}

// Answer: has own property just checks whether that key exist or not so: a then b , 1 then 2 


// 4.
let person = {
  firstName: "John",
  lastName: "Doe"
};
let fullName = person.firstName + " " + person.lastName;
console.log(fullName);

// Answer: "John Doe"


// 5.
let book = {
  title: "JS Guide",
  author: "Anna",
  year: 2021
};
delete book.year;
console.log(book.year);

// Answer: undefined cause there is no key book.year so js will return undefined  



// 6.
let colors = ["red", "green", "blue"];
let colorObj = {};

colors.forEach((color, index) => {
  colorObj[index] = color;
});
console.log(colorObj);

// Answer: Array par forEach lagay then: value add colorObj me index(start from0) as key
//  and value as color
// so Answer will be: colorObj = {0:"red" , 1:"green", 2:"blue"} 


// 7.
let settings = {
  theme: "dark",
  notifications: true
};

let copySettings = Object.assign({}, settings);

copySettings.theme = "light";
console.log(settings.theme);

// Answer: actually this assign method will take settings object will add it empty object then return the newly created object
// that is stroed by copySettings then change the value as we know that 
// objects are ref data type so pointer changes according to variable so answer: "light"

// CORRECTION: Flatten props won't change cause we are doing shallow copy
//  yeah by assign method objects are copied only shallow  
// so answer: "dark"


// 8.
const obj1 = { val: 1 };
const obj2 = { val: 2 };
const obj3 = obj1;
obj3.val = 3;
console.log(obj1.val, obj2.val);

// Answer: Ref data type so value will change: 3 then 2

// 9.
let data = {
  1: "one",
  2: "two",
  3: "three"
};
console.log(data["2"]);

// Answer: "two"


// 10.
let obj4 = {};
// we are adding value(obj4) in key(a)
obj4.a = obj4;
console.log(obj4.a.a.a.a === obj4);


// Answer: False case obj4 is empty object
// CORRECTION: Actually it's TRUE

// WHY ? cause by obj.a = obj4
obj4 = {a: obj4}
// BTW value obj4 have obj4.a so 
obj4 = {a: obj4 ={ a: obj4}}
// if you do obj4.a = obj4 then obj4.a.a = obj4 
// for each key obj4.a.a.a will always obj4 
// That's why it's true 

