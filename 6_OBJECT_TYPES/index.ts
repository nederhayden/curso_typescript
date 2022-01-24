// 1 - tipo de objeto para funcao com interface

interface Product {
  name: string;
  price: number;
  isAvailable: boolean;
}

function showProductDetails(product: Product) {
  console.log(
    `O nome do produto e product ${product.name} e seu preco e R$${product.price}`
  );

  if (product.isAvailable) {
    console.log("O produto esta disponivel");
  }
}

const shirt: Product = {
  name: "Camisa",
  price: 19.99,
  isAvailable: true,
};

showProductDetails(shirt);
showProductDetails({ name: "Camisa", price: 19.99, isAvailable: false });

// 2 - propriedades opcionais em interfaces
interface User {
  email: string;
  role?: string;
}

function showUserDetails(user: User) {
  console.log(`O usuario tem o e-mail: ${user.email}`);

  if (user.role) {
    console.log(`A funcao do usuario e ${user.role}`);
  }
}

const u1: User = { email: "neder@email.com", role: "admin" };
const u2: User = { email: "murillo@email.com" };

showUserDetails(u1);
showUserDetails(u2);

// 3 - propriedades readonly
interface Car {
  brand: string;
  readonly wheels: number;
}

const fusca: Car = {
  brand: "VW",
  wheels: 4,
};

console.log(fusca);

// 4 - index signature
interface CoordObject {
  [index: string]: number;
}

let coords: CoordObject = {
  x: 10,
};

coords.y = 15;

console.log(coords);

// 5 - extending types
interface Human {
  name: string;
  age: number;
}

interface SuperHuman extends Human {
  superpowers: string[];
}

const neder: Human = {
  name: "Neder",
  age: 30,
};

console.log(neder);

const goku: SuperHuman = {
  name: "Goku",
  age: 50,
  superpowers: ["Kamehameha", "Genki Dama"],
};

console.log(goku);
console.log(goku.superpowers[1]);

// 6 - intersection types
interface Character {
  name: string;
}

interface Gun {
  type: string;
  caliber: number;
}

type HumanWithGun = Character & Gun;

const arnold: HumanWithGun = {
  name: "Arnold",
  type: "Shotgun",
  caliber: 12,
};

console.log(arnold);
console.log(arnold.caliber);

// 7 - readonly array
let myArray: ReadonlyArray<string> = ["Maca", "Laranja", "Banana"];

console.log(myArray);

myArray.forEach((item) => {
  console.log("Fruta: " + item);
});

myArray = myArray.map((item) => {
  return `Fruta: ${item}`;
});

console.log(myArray);

// 8 - tuplas
type fiveNumbers = [number, number, number, number, number];

const myNumberArray: fiveNumbers = [1, 2, 3, 4, 5];

console.log(myNumberArray);

type nameAndAge = [string, number];

const anotherUser: nameAndAge = ["Neder", 30];

console.log(anotherUser[0]);

anotherUser[0] = "Hayden";

console.log(anotherUser[0]);

// 9 - tuplas com readonly
function showNumbers(number: readonly [number, number]) {
  console.log(number[0]);
  console.log(number[1]);
}

showNumbers([1, 2]);
