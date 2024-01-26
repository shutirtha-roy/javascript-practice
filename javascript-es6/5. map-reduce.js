//map
var numbers = [1, 2, 3, 4, 5, 6];

var result = numbers.map((num) => {
    return 2 * num
});

console.log(result);

//reduce
var reduceNumList = [1, 2, 3, 4, 5, 6];

var sum = reduceNumList.reduce((prevValue, currentValue) => {
    return prevValue + currentValue;
}, 0); //Here 0 is the initial prevValue

console.log(sum);