"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.5555;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - strings
const firstName = "Neder";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Hayden";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
let ann = "Teste";
let inf = "Teste";
console.log("testando hot reload com o comando tsc -w");
// DESAFIO 2
const n = 10;
const numbertoString = n.toString();
const printNumber = `Numero ${numbertoString}`;
console.log(printNumber);
