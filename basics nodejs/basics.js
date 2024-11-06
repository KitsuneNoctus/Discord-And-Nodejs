console.log("Hello World!");
console.log("444");
console.log(444);
console.log(2 + 4 * 6 - 5 /3);

// Some basic variables - let, var, const
var firstName = "Hank";
let lastName = "Shaw";
const age = 21;
const superImportantValue = "secret"
let boolTrue = true;
let boolFalse = false;


firstName = "Mark";
lastName = "Beattle";
// superImportantValue = "not secret anymore"

console.log(firstName);
console.log(lastName);
console.log(superImportantValue);
console.log(boolTrue);
console.log(boolFalse);

// --- part 21

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

for (let i = 1; i <= 10; i += 2) {
  console.log(i);
}

// ---- part 22 Arrays
let arr = [1,2,3,4,5,6,7,8,9,10];
let wordArr = ["Hello","Hey","Hi",55,22,true,false];
let emptyArr = [];

for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}

for (let i = 0; i < wordArr.length; i++) {
  console.log(wordArr[i]);
  emptyArr[i] = i;
}

console.log(emptyArr);

// ------ part 24

if (5==5) {
  console.log("Numbers Match!");
}

if (5 != 5) {
  console.log("Nums");
}

let math = 2 + 2;
if (math == 2) {
  console.log("Value is 2");
}
else if (math == 4) {
  console.log("Value is 4");
}
else {
  console.log("Value is not 2 or 4");
}

// ---- lecture 26

function myFunction() {
  console.log("Inside a function");
}

myFunction();

function myMath(number) {
  // number = 4;
  console.log(number);
}

myMath("Hi there");

function manyParameters(x, y, z, health, damage, movementSpeed, name) {
  console.log(x*y*z);
  console.log("Your health is: " + health);
  if (damage == undefined) {
    console.log("You're in ...");
  }
}

manyParameters(10, 3, 17, 100, undefined, 10, undefined);
