//truthy falsy
let myVar = true; 
//Some some specific values it is falsy.
//False, 0, "", Null, Undefined, NaN
//If I use ! before a boolean true or false, the result becomes the opposite.

if(myVar) {
    console.log("I am truthy");
} else {
    console.log("I am falsy");
}

//ternary operator
var age = 18;
var type = (age >= 18) ? "adult" : (age < 10) ? "child" : "young";
console.log(type);

//Use ternary operator for 1-2 level or else it becomes complex.

var isLoggedIn = true;
var access = isLoggedIn ? true : false; // for these class we can just directly write access = isLoggedIn

var x = 7;
var newAccess = x > 9;

console.log(access);
console.log(newAccess);