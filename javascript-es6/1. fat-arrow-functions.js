//ES6 fat arrow function

// let number = () => {
//     return 10;
// };

// let number = () => 10;

// console.log(number());

// let secondNumber = num => num * 2;

// let thirdNumber = (valueOne, valueTwo) => valueTwo - valueOne;

// console.log(secondNumber(20));

// console.log(thirdNumber(20, 40));

let javascript = {
    name: 'JavaScript',
    libraries: ['Angular', '.NET', 'Spring'],
    printLibraries: function() {
        this.libraries.forEach((x) => {
            console.log(`${this.name} loves ${x}`)
        })
    }
};

//forEach -> this is different since inside forEach it takes another this.
//But after forEach if we use a fat arrow function [() => {}] then we can access instead  of function()

javascript.printLibraries();

//Sometimes fat arrow function will not work, so use function if we have to use this.

//new keyword in fat arrow function
function Person(name) {
    this.name = name;
}

var abrar = new Person("Abrar"); 

//if we use fat arrow here, it will not work