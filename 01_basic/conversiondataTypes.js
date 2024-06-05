let age = "23";
console.log(typeof age);
let shouldBeNumber = Number(age);
console.log(typeof shouldBeNumber);

let score = "33aa"
let shouldBeIntger = Number(score);
console.log(typeof shouldBeIntger);
console.log(shouldBeIntger)


// javascript convert 33aa into a number but it is not call number because the value inside it is NaN

let temperature = null;
let changeIntoNumber = Number(temperature);
console.log(typeof changeIntoNumber);
console.log(changeIntoNumber);


// javascript convert  null into a number but it is convert into 0 


let state = false;
let booleanintoNum = Number(state);
console.log(typeof booleanintoNum);
console.log(booleanintoNum);

// javascript convert  boolean into a number but it is convert into 0 and 1
// javascript convert  number and sring  into a boolean datatype but empty string will give you a false value
// javascript convert  number into a string  datatype and type of value beacame string