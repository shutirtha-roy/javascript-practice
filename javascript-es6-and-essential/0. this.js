//implicit binding
let person = {
    name: 'John',
    age: 12,
    printPersonName: function () {
        console.log(this.name);
    }
}

person.printPersonName();


let printPlayerNameFunction = function(obj) {
    obj.printPlayerName = function() {
        console.log(this.name);
    }
};

var peter = {
    name: "Peter",
    age: 14
};

var jerry = {
    name: 'Jerry',
    age: 25
};

printPlayerNameFunction(peter);
printPlayerNameFunction(jerry);

peter.printPlayerName();
jerry.printPlayerName();


var Person = function (name, age) {
    return {
        name: name,
        age: age,
        printName: function () {
            console.log(this.name);
        },
        parent: {
            name: 'Mr. Roy',
            printName: function() {
                console.log(this.name);
            }
        }
    };
};

var roy = Person("Roy", 24);
//roy.printName();
//roy.parent.printName();

//explicit binding

//call tells who will be this

let printName = function (virtueOne, virtueTwo) {
    console.log(`${this.name} is ${virtueOne} and ${virtueTwo}.`);
}

var rafi = {
    name: 'Rafi',
    age: 25
};

var virtueOne = 'Awesome';
var virtueTwo = 'Cool';

// printName.call(rafi);

var virtueList = [virtueOne, virtueTwo];

//apply takes the array
//printName.apply(rafi, virtueList);

//bind works exactly like call, just its directly does call the function. 
//It returns the instance of function, basically it returns the function.

var newFunc = printName.bind(rafi, virtueOne, virtueTwo);
newFunc();

//new binding
//Below we have a constructor function
function newPerson(name, age) {
    this.name = name;
    this.age = age;
    console.log(`${this.name} is ${this.age} years old`);
}

var samin = new Person("Samin", 24);
console.log(samin.name);

//window binding (this uses JS global window)
"use strict";

var testPrintName = function() {
    //console.log(window === this);
    console.log(this.name);
};

var fahim = {
    name: 'Fahim'
};

testPrintName();