const firstName = "Neder";
const anotherName = 1;
const x = true;

function greeting(name: string) {
  console.log("Ola " + name);
}

greeting(firstName);
// greeting(anotherName)
// greeting(x)

// DESAFIO 1
function sum(a: number, b: number) {
  return a + b;
}

console.log(sum(1, 1));
