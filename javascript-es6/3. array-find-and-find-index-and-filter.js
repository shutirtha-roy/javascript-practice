//array find
var numbers = [1, 2, 3, 4, 5, 6, 10];

var result = numbers.find(function(currentValue, currentIndex, arr) {
    return currentValue > 4;
}, this);

console.log(result);

//Sometimes we need to use this like this in array.find(function() {}}, this);
class Student {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    test() {
        console.log("hello");
    }
    exampleFunction() {
        let array = [1, 2, 3];
        // array.find(function () {
        //     this.test();
        // }, this);
        //If we convert this as arrow function, it solves it.
        array.find(() => {
            this.test();
        });
    }
}

let student = new Student("Rafi", 25);
student.exampleFunction();

//Array findIndex()
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var result = numbers.findIndex((currentValue, index, arr) => {
    return currentValue > 6;
});

console.log(result);

//Array filter
var result = numbers.filter((currentValue, index, arr) => {
    console.log(index);
    console.log(arr);
    return currentValue > 4;
});

console.log(result);