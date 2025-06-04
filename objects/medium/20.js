// 1. 
let user = {
  name: "Sam",

//   greet is key and value is whole function 
  greet() {
    // THIS getting scope of user object so it will refer to user object
    return `Hello, ${this.name}`;
  }
};

// Here we are copying in variable so it will copy exactly and point to the same value
let greetFunc = user.greet;
// so function will execute 
console.log(greetFunc());
// ANSWER: hello Sam

// 2. 
let obj = {
  value: 10,
  double: function () {
    // this.value = 10
    this.value *= 2;
    return this;
  }
};

// object.double will execute = 10*2 = 20 
// again object.double so 20*2 = 40 
obj.double().double();
console.log(obj.value);
// ANSWER: 40

// 3. 
let a = { foo: "bar" };
// Here we are using deep copy so nothing 
// will happen in original object
let b = JSON.parse(JSON.stringify(a));
b.foo = "baz";
console.log(a.foo);
// ANSWER: bar

// 4. 
let obj1 = {
  name: "Test",
  nested: {
    value: 42
  }
};

// we are using shallow copy so 
let shallow = Object.assign({}, obj1);
shallow.nested.value = 100;
// value will change in nested prop in original object
console.log(obj1.nested.value);
// ANSWER: 100


// 5. 
const obj2 = { name: "A" };
// when we freeze the object
//  then it's keys:value become immutable can't change so 
Object.freeze(obj2);
obj.name = "B";
console.log(obj2.name);
// ANSWER: A

// 6. 
const obj = {
  a: 1,
  b: {
    c: 2
  }
};

// here we are dstructuring so 
const { a, b: { c } } = obj;
console.log(c);
// ANSWER: 2


// 7. 
const obj = {};
// define property define the keys:value in the original obj
Object.defineProperty(obj, "secret", {
  value: "hidden",
  enumerable: false
});

console.log(Object.keys(obj));
// ANSWER: value then enumerable



// 8. 
let counter = {
  value: 0,
  inc() {
    this.value++;
    return this;
  }
};

// counter.inc() = 0+1 =1 then again so  0 +1 +1 =
console.log(counter.inc().inc().value);
// ANSWER: 2 


// 9. 
let obj = { a: 1 };
let copy = obj;
// here we are copying the object hen adding value of a:2 
// but we are using shallow copy so I don't think anything happen in original object
copy = { ...obj, a: 2 };
console.log(obj.a);
// ANSWER: 1



// 10. 
let obj = {};
// were are adding key:slef and value:obj
obj.self = obj;
console.log(obj.self.self.self === obj);
// so: TRUE cause obj.slef == obj 
// it will look like this: let obj = { slef:{slef:obj ....}}


