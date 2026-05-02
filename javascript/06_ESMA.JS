// VAR is function scoped and can be re-declared and updated 
// LET is block scoped and can be updated but not re-declared
// CONST is block scoped and cannot be updated or re-declared

// now we mostly use LET and CONST in our code because they provide better scoping and immutability.

let name = 'adnan';
name = 'adnan khan';
console.log(name);

let age = 18;

let show = `My name is ${name} and I am ${age} years old.`;
console.log(show);

// fat arrow function

let add = (a, b) => a + b;
console.log(add(5, 10));

let sum = (a, b) => {
    let result = a + b;
    return result;
}
console.log(sum(59, 10));