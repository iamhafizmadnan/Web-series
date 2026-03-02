// Data Types in JavaScript
// 1. Number
var age = 30;
console.log(age);

// 2. String
var name = "John Doe";
console.log(name);

// 3. Boolean
var isStudent = true;
console.log(isStudent);

// 4. Null
var emptyValue = null;
console.log(emptyValue);

// 5. Undefined
var notDefined;
console.log(notDefined);

// big int
var bigIntValue = 1234567890123456789012345678901234567890n;
console.log(bigIntValue);

// 6. Symbol
var uniqueId = Symbol('id');
console.log(uniqueId);


//  covert the number to string using + operator
var num = 42;
var strNum = num + "";
console.log(strNum); // Output: "42"


//  # parseInt() method to convert string to number
var str = "123";
var numFromString = parseInt(str);
console.log(numFromString); // Output: 123         

//  # parseFloat() method to convert string to floating-point number
var floatStr = "3.14";
var floatNum = parseFloat(floatStr);
console.log(floatNum); // Output: 3.14
