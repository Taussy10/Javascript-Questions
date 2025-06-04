// DEEP COPY VS SHALLOW COPY 

// both copy the object but how much ? Yeah there is 
// a level of copy why ? cause there is a level in object 
// basicallly object nesting 


// This object have two levels 

const user = {
    // level 1(flatten object)
    name: "John",
    age: 34,
    address:{
        // level 2(for more than level 1 called nested objects)
        houseNo: 15, 
        city: "Delhi", 
    } 
}
console.log("User :",user); 
// User : { name: 'John', age: 34, address: { houseNo: 15, city: 'Delhi' } }



// This copy the object exactly same: if you change anything inside this(copied)
//  then user(original) will also change  
const copied = user

// copied.address.city= "Tausif"
console.log("Copied :",copied); 
// User : { name: 'John', age: 34, address: { houseNo: 15, city: 'Delhi' } }



// This copy the object exactly same but if you change anything inside this(copied)
//  then it won't reflect in the user(original) object
const spreadCopy = {...user}
// spreadCopy.address.city= "Mumbai"
// spreadCopy.name= "Tausif"
console.log("copy by spread operator :",spreadCopy);

// After using spreadCopy, if you change anything in the spreadCopy object,
// then in the original object (user), only the nested level (like address.city) will change,
// but the top-level (flattened) properties like name, age will not be affected.
//
// This happens because the spread operator {...user} creates a shallow copy.
//
// In spreadCopy (copied object), top-level changes are safe (independent),
// but nested objects are still shared between user and spreadCopy.

console.log("After spread copy :",user); 
// original Object After spread copy :
// only nested one change not flatten one 
//  { name: 'John', age: 34, address: { houseNo: 15, city: 'Mumbai' } }

// This is called Shallow Copy: REMEBER BY shallow means khaali all objects don't copied 
// Also remember only nested objects changes 



// It copies everything and create an independent object from original object 
// and if you change anything in deep then it won't reflect in original object
const deep = JSON.parse(JSON.stringify(user));
console.log("DeepCopy :",deep);
// Now let's try to change 
deep.name = "Hello"
deep.address.city = "Lucknow"

console.log("DeepCopy after changes :",deep);

console.log("User object after deep copy :",user);


// Learning from this
// 1. Deep Copy
// Bilkul independent copy banata hai.
// Agar copied object mein kuch bhi change karega, original object par koi effect nahi padega — chahe wo flatten property ho ya nested object.
// Example: JSON.parse(JSON.stringify(obj))


// 2. Shallow Copy
// if you copy original object then if you try to change anything in copied 
// object then in original object only nested objects will change
// not the flatten properties
// To implement Shallow Copy: Spread operator { ...obj } or Object.assign({}, obj)


// 3. Reference Copy (Just copying reference)
// Copy nahi hota, sirf reference copy hota hai.
// Dono variables (original aur copied) ek hi object ko point karte hain.
// Agar copied mein kuch bhi change kiya, original mein bhi wohi change reflect hota hai, chahe flatten ho ya nested.
// Example: const copied = obj
