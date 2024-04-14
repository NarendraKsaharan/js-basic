const score = 100;

// console.log(score);

const balance = new Number(100);

// console.log(balance);

console.log(balance.toString()); //convert into string
console.log(balance.toString().length); //3

console.log(balance.toFixed(2)); // 100.00 always add property in function like 2
console.log(balance.toFixed(1)); // 100.0   

const otherNum = 12.8976;
console.log(otherNum.toPrecision(2)); // output => 13 
console.log(otherNum.toPrecision(3)); // output => 12.9
const otherNums = 123.8976;
console.log(otherNums.toPrecision(2)); // output => 1.2e+2


const hundrends = 1000000;

console.log(hundrends.toLocaleString()); //1,000,000  us standered
console.log(hundrends.toLocaleString('en-IN')); //10,00,000  indian standered

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MIN_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER);


// +++++++++++++++++++ MATH +++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4)); // 4
console.log(Math.round(3.4)); // 3 round of value
console.log(Math.round(3.8)); // 4

console.log(Math.ceil(4.2)); // 5 always choose round after decimal value consider 1
console.log(Math.floor(4.2)); // 4 always choose round after decimal value not consider

console.log(Math.max(1, 6, 7, 3)); // 7 max value
console.log(Math.min(1, 6, 7, 3)); // 1 min value

console.log(Math.random());
console.log((Math.random() * 10) + 1);
console.log(Math.floor((Math.random() * 10) + 1));

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min);