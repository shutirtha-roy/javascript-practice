//Slice
let numbers = [1, 2, 3, 4, 5];
//var result = numbers.slice(1, 3);
var result = numbers.slice(-2, 4);
console.log(result);

//Splice
let numerals = [71, 52, 33, 14, 25];
var result = numerals.splice(1, 2, 10, 12, 13 , 19);
console.log(result); //1 and 2 removed will be shown 
//It changes the main array
console.log(numerals);

//Concat
let numbersOne = [1, 2, 3, 4, 5];
let numbersTwo = [6, 7, 8, 9, 10];
let numbersThree = [11, 12, 13, 14, 15];
var result = numbersOne.concat(numbersTwo, numbersThree);
console.log(result);

//Push
let numList = [1, 2, 3, 4, 5];
numList.push(6, 7, 8);
console.log(numList);