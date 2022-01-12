// 1 - type guard
function sum(a: number | string, b: number | string) {
  if (typeof a === "string" && typeof b === "string") {
    console.log(parseFloat(a) + parseFloat(b));
  } else if (typeof a === "number" && typeof b === "number") {
    console.log(a + b);
  } else {
    console.log("Impossivel realizar a soma");
  }
}

sum("4", "10");
sum(5, 10);
sum("8", 10);

// 2 - checando se valor existe
function operations(arr: number[], operation?: string | undefined) {
  if (operation) {
    if (operation === "sum") {
      const sum = arr.reduce((i, total) => i + total);
      console.log(sum);
    } else if (operation === "multiply") {
      const multiply = arr.reduce((i, total) => i * total);
      console.log(multiply);
    }
  } else {
    console.log("Por favor, defina uma operacao");
  }
}

operations([1, 2, 3]);
operations([1, 2, 3], "sum");
operations([2, 4, 8], "multiply");

// 3 - instance of
class User {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

class SuperUser extends User {
  constructor(name: string) {
    super(name);
  }
}

const jhon = new User("Jhon");
const paul = new SuperUser("Paul");

console.log(jhon);
console.log(paul);

function userGreeting(user: object) {
  if (user instanceof SuperUser) {
    console.log(`Ola ${user.name}, deseja ver os dados do sistema?`);
  } else if (user instanceof User) {
    console.log(`Ola ${user.name}`);
  }
}

userGreeting(jhon);
userGreeting(paul);

// 4 - operator in
class Dog {
  name;
  breed;

  constructor(name: string, breed?: string) {
    this.name = name;
    if (breed) {
      this.breed = breed;
    }
  }
}

const turca = new Dog("Turca");
const bob = new Dog("Bob", "Pastor Alemao");

function showDogDetails(dog: Dog) {
  if ("breed" in dog) {
    console.log(`O cachorro e da raca ${dog.breed}`);
  } else {
    console.log("O cachorro e um SRD");
  }
}

showDogDetails(turca);
showDogDetails(bob);

// DESAFIO 3
type Review = number | boolean;

function userReview(review?: Review) {
  if (!review) {
    console.log("Nenhuma avaliacao");
  }
  console.log(`A nota que voce deu foi: ${review}, obrigado`);
}

userReview(false);
userReview(5);
userReview(2);
