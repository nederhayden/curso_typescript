"use strict";
// 1 - tipo de objeto para funcao com interface
function showProductDetails(product) {
    console.log(`O nome do produto e product ${product.name} e seu preco e R$${product.price}`);
    if (product.isAvailable) {
        console.log("O produto esta disponivel");
    }
}
const shirt = {
    name: "Camisa",
    price: 19.99,
    isAvailable: true,
};
showProductDetails(shirt);
showProductDetails({ name: "Camisa", price: 19.99, isAvailable: false });
function showUserDetails(user) {
    console.log(`O usuario tem o e-mail: ${user.email}`);
    if (user.role) {
        console.log(`A funcao do usuario e ${user.role}`);
    }
}
const u1 = { email: "neder@email.com", role: "admin" };
const u2 = { email: "murillo@email.com" };
showUserDetails(u1);
showUserDetails(u2);
const fusca = {
    brand: "VW",
    wheels: 4,
};
console.log(fusca);
let coords = {
    x: 10,
};
coords.y = 15;
console.log(coords);
const neder = {
    name: "Neder",
    age: 30,
};
console.log(neder);
const goku = {
    name: "Goku",
    age: 50,
    superpowers: ["Kamehameha", "Genki Dama"],
};
console.log(goku);
console.log(goku.superpowers[1]);
const arnold = {
    name: "Arnold",
    type: "Shotgun",
    caliber: 12,
};
console.log(arnold);
console.log(arnold.caliber);
// 7 - readonly array
let myArray = ["Maca", "Laranja", "Banana"];
console.log(myArray);
myArray.forEach((item) => {
    console.log("Fruta: " + item);
});
myArray = myArray.map((item) => {
    return `Fruta: ${item}`;
});
console.log(myArray);
const myNumberArray = [1, 2, 3, 4, 5];
console.log(myNumberArray);
const anotherUser = ["Neder", 30];
console.log(anotherUser[0]);
anotherUser[0] = "Hayden";
console.log(anotherUser[0]);
// 9 - tuplas com readonly
function showNumbers(number) {
    console.log(number[0]);
    console.log(number[1]);
}
showNumbers([1, 2]);
