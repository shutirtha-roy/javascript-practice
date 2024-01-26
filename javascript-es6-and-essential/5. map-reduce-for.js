//map
var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.map((num) => {
    return 2 * num
});

console.log(result);

//reduce
var reduceNumList = [1, 2, 3, 4, 5, 6];

var sum = reduceNumList.reduce((prevValue, currentValue, currentIndex, arr) => {
    return prevValue + currentValue;
}, 0); //Here 0 is the initial prevValue

console.log(sum);

//for in
const myObj = {
    name: 'JavaScript',
    established: '1995',
    founder: 'Brendan Eich'
}

for (property in myObj) {
    console.log(property);
}

//for of
const myArray = [1, 2, 3, 4, 5];

for (element of myArray) { //If we use 'in' instead of 'of' we will get the index
    console.log(element);
}

const myString = "Hello World";

for (element of myString) {
    console.log(element);
}