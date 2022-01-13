"use strict";
// 1 - void
function whitoutReturn() {
    console.log("Esta funcao nao tem retorno!");
}
whitoutReturn();
// 2 - callback como argumento
function greeting(name) {
    return `Ola ${name}`;
}
function preGreeting(f, userName) {
    console.log("Preparando a funcao!");
    const greet = f(userName);
    console.log(greet);
}
preGreeting(greeting, "Neder");
// 3 - generic function
function firstElement(arr) {
    return arr[0];
}
console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));
function mergeObjects(obj1, obj2) {
    return {
        ...obj1,
        ...obj2,
    };
}
const newObject = mergeObjects({ name: "Neder" }, { age: 30, job: "Programmer" });
console.log(newObject);
// 4 - constraints
function biggestNumber(a, b) {
    let biggest;
    if (+a > +b) {
        biggest = a;
    }
    else {
        biggest = b;
    }
    return biggest;
}
console.log(biggestNumber(5, 3));
console.log(biggestNumber("3", "6"));
// 5 - especificar tipo de argumento
function mergeArray(arr1, arr2) {
    return arr1.concat(arr2);
}
console.log(mergeArray([1, 2, 3], [5, 6]));
console.log(mergeArray([1, 2, 3], ["teste", "testando"]));
// 6 - parametros opcionais
function modernGreeting(name, greet) {
    if (greet) {
        return `Ola ${greet}${name}, tudo bem?`;
    }
    return `Ola ${name}, tudo bem?`;
}
console.log(modernGreeting("Neder"));
console.log(modernGreeting("Neder", "Dr."));
// 7 - parametros default
function somaDefault(n, m = 10) {
    return n + m;
}
console.log(somaDefault(10));
console.log(somaDefault(5, 25));
// 8 - unknown
function doSomething(x) {
    if (Array.isArray(x)) {
        console.log(x[0]);
    }
    else if (typeof x === "number") {
        console.log("x é um numero");
    }
}
doSomething([1, 2, 3]);
doSomething(1);
// 9 - never
function showErrorMessage(msg) {
    throw new Error(msg);
}
// showErrorMessage("Algum erro");
// 10 - rest operator
function sumAll(...n) {
    return n.reduce((number, sum) => sum + number);
}
console.log(sumAll(1, 2, 3, 4, 5));
console.log(sumAll(5, 348, 2348));
// 11 - destructuring como parametro
function showProductDetails({ name, price, }) {
    return `O nome do produto é ${name} e ele custa R$ ${price}`;
}
const shirt = { name: "Camisa", price: 49.99 };
console.log(showProductDetails(shirt));
