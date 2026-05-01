//  Expression
//  1. Assignment Operator 
//  Assignment operator in programming are sysmbols used to assign values to variables. 
// They take the value on the right side of the operator and 
//  assign it to the variable on the left hand side.


var myName = 'adnan'  // in which = sign is assignment operator
console.log(myName)


// 2. Arithmetic operation
// In programming perform basic mathematical operation
//  like tha addition , multiplicaiton , subtraction , modulus
// ADDITION
var plus = 3+4
console.log(plus)
 
// SUBTRACTION
var sub = 9 - 9
console.log(sub)

// MULTIPLICATION
var multi = 44*2
console.log(multi)

// DIVISION
var divis = 55/ 5
console.log(divis)

// MOUDULUS
var modu = 34 % 3
console.log(modu)


// 3. STRING OPERATION
//  There are a few ways to concatenate strings in javascript. The most common way is to use the operator. 

var str1 = 'hello'
var str2 = 'adnan'
var str3 = str1 + str2
console.log(str3)

// 4. Comparison operator
// Comparison operator in programming are used to compare two values and return a boolean value (true or false) based on the comparison. 
// They are commonly used in conditional statements and loops to control the flow of the program.

console.log(5 == 5);
console.log(5 != 5);
console.log(5 > 3);
console.log(5 < 3);
console.log(5 >= 5);
console.log(5 <= 4);

// Strict equality operator
// The strict equality operator (===) is used to compare two values for equality, but it also checks for type. 
// It returns true if the values are equal and of the same type, and false otherwise.
console.log(5 === 5); // true
console.log(5 === '5');

let a = 10;
let b = 20;
let c = 10;

if (a === c) {
    console.log("a and c are equal");
}
else {    console.log("a and c are not equal");
}

// 5. Logical operator
// Logical operators in programming are used to combine multiple conditions and return a boolean value (true or false) based on the evaluation of those conditions.
// The most common logical operators are AND (&&), OR (||), and NOT (!).
let x = 5;
let y = 10;
let z = 15;
if (x < y && y < z) {
    console.log("x is less than y and y is less than z");
}
if (x < y || y < z) {
    console.log("x is less than y or y is less than z");
}
if (!(x > y)) {
    console.log("x is not greater than y");
}