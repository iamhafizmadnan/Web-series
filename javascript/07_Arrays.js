// Array is a data structure that can hold more than one value at a time. It is a collection of elements, each identified by an index or key. Arrays are used to store multiple values in a single variable, making it easier to manage and manipulate data.

// 1. Creating an array
var myArray = [1, 2, 3, 4, 5];
console.log(myArray)

// 2. Accessing array elements
console.log(myArray[0]); // 1
console.log(myArray[1]);
// print -1 value from the array
console.log(myArray[myArray.length - 1]); // 5

// array constructor
let fruits = new Array('apple', 'banana', 'orange');
console.log(fruits);


// array literal
let vegetables = ['carrot', 'broccoli', 'spinach'];
console.log(vegetables);

console.log(vegetables[0]); // carrot


// inserting an element in the array
vegetables.push('potato');
console.log(vegetables);


// for of loop to iterate over the array
for (let vegetable of vegetables) {
    console.log(vegetable);
}

// for in loop to iterate over the array
for (let index in vegetables) {
    console.log(vegetables[index]);
}


// forEach loop to iterate over the array
vegetables.forEach((vegetable, index, array) => {
    console.log(`${index}: ${vegetable}`);
    
});


// for map loop to iterate over the array
vegetables.map((vegetable, index, array) => {
    console.log(`${index}: ${vegetable}`);
});

// push method to add an element at the end of the array
vegetables.push('cucumber');
console.log(vegetables);

// pop method to remove the last element from the array
vegetables.pop();
console.log(vegetables);

// shift method to remove the first element from the array
vegetables.shift();
console.log(vegetables);

// unshift method to add an element at the beginning of the array
vegetables.unshift('lettuce');
console.log(vegetables);


// splice method to add or remove elements from the array
// to add an element at index 1
vegetables.splice(1, 0, 'tomato');
console.log(vegetables);

// to remove an element at index 2
vegetables.splice(2, 1);
console.log(vegetables);

// SEARCHING AND FILTRERS IN ARRAY
// indexOf method to find the index of an element in the array
console.log(vegetables.indexOf('tomato')); // 1

// includes method to check if an element is present in the array
console.log(vegetables.includes('tomato')); // true 

// LAST INDEX OF method to find the last index of an element in the array
vegetables.push('tomato');  
console.log(vegetables.lastIndexOf('tomato')); // 2

