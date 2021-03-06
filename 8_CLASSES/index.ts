// 1 - campos em classe
class User {
  name!: string;
  age!: number;
}

const neder = new User();

console.log(neder);
neder.name = "Neder";
console.log(neder);

// 2 - constructor
class NewUser {
  name;
  age;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

const simoes = new NewUser("Neder", 30);

console.log(simoes);

// 3 - campos readonly
class Car {
  name;
  readonly wheels = 4;

  constructor(name: string) {
    this.name = name;
  }
}

const fusca = new Car("Fusca");

console.log(fusca);
console.log(fusca.wheels);

fusca.name = "Fusca Turbo";

// 4 - heranca e super
class Machine {
  name;

  constructor(name: string) {
    this.name = name;
  }
}

const trator = new Machine("Trator");

class KillerMachine extends Machine {
  guns;

  constructor(name: string, guns: number) {
    super(name);
    this.guns = guns;
  }
}

const destroyer = new KillerMachine("Destroyer", 4);

console.log(trator);
console.log(destroyer);

// 5 - metodos
class Dwarf {
  name;

  constructor(name: string) {
    this.name = name;
  }

  greeting() {
    console.log("Hey Stranger");
  }
}

const jimmy = new Dwarf("Jimmy");

console.log(jimmy.name);

jimmy.greeting();

console.log(jimmy);

// 6 - this
class Truck {
  model;
  hp;

  constructor(model: string, hp: number) {
    this.model = model;
    this.hp = hp;
  }

  showDetails() {
    console.log(
      `Caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`
    );
  }
}

const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);

volvo.showDetails();
scania.showDetails();

// 7 - getters
class Person {
  name;
  surname;

  constructor(name: string, surname: string) {
    this.name = name;
    this.surname = surname;
  }

  get fullName() {
    return this.name + " " + this.surname;
  }
}

const nederHayden = new Person("Neder", "Hayden");

console.log(nederHayden.name);
console.log(nederHayden.fullName);

// 8 - setters
class Coords {
  x!: number;
  y!: number;

  set fillX(x: number) {
    if (x === 0) {
      return;
    }

    this.x = x;

    console.log("X inserido com sucesso");
  }

  set fillY(y: number) {
    if (y === 0) {
      return;
    }

    this.y = y;

    console.log("Y inserido com sucesso");
  }

  get getCoords() {
    return `X: ${this.x} e Y: ${this.y}`;
  }
}

const myCoords = new Coords();

myCoords.fillX = 15;
myCoords.fillY = 10;

console.log(myCoords);
console.log(myCoords.getCoords);

// 9 - heranca de interfaces
interface showTitle {
  itemTitle(): string;
}

class blogPost implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O titulo do post ??: ${this.title}`;
  }
}

const myPost = new blogPost("Hello World");

console.log(myPost.itemTitle());

class TestingInterface implements showTitle {
  title;

  constructor(title: string) {
    this.title = title;
  }

  itemTitle() {
    return `O titulo ??: ${this.title}`;
  }
}

// 10 - override de metodos
class Base {
  someMethod() {
    console.log("Alguma coisa");
  }
}

class Nova extends Base {
  someMethod() {
    console.log("Testando outra coisa");
  }
}

const myObject = new Nova();

myObject.someMethod();

// 11 - visibilidade: public
class c {
  public x = 10;
}

class D extends c {
  public x = 10;
}

const cInstance = new c();

console.log(cInstance.x);

const dInstance = new D();

console.log(dInstance.x);

// 12 - visibilidade: protected

class E {
  protected x = 10;

  protected protectedMethod() {
    console.log("Este metodo e protegido");
  }
}

class F extends E {
  showX() {
    console.log("X: " + this.x);
  }

  showProtectedMethod() {
    this.protectedMethod();
  }
}

const fInstance = new F();

fInstance.showX();
fInstance.showProtectedMethod();

// 13 - visibilidade: private
class PrivateClass {
  private name = "Private";

  showName() {
    return this.name;
  }

  private privateMethod() {
    console.log("Metodo privado");
  }

  showPrivateMethod() {
    this.privateMethod();
  }
}

const pObj = new PrivateClass();

console.log(pObj.showName());

pObj.showPrivateMethod();

// 14 - static members
class StaticMembers {
  static prop = "Teste Static";

  static staticMethod() {
    console.log("Este e um metodo estatico");
  }
}

console.log(StaticMembers.prop);
StaticMembers.staticMethod();

// 15 - generic class
class Item<T, U> {
  first;
  second;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }

  get showFirst() {
    return `O first ??: ${this.first}`;
  }
}

const newItem = new Item("caixa", "supresa");

console.log(newItem);
console.log(newItem.showFirst);

const secondItem = new Item(12, true);
console.log(secondItem);
console.log(typeof secondItem.first);

// 16 - parameters properties
class ParameterProperties {
  constructor(public name: string, private qty: number, private price: number) {
    this.name = name;
    this.qty = qty;
    this.price = price;
  }

  get showQty() {
    return `Qtd total: ${this.qty}`;
  }

  get showPrice() {
    return `Valor: ${this.price}`;
  }
}

const newShirt = new ParameterProperties("camisa", 5, 19.99);

console.log(newShirt.name);
console.log(newShirt.showQty);
console.log(newShirt.showPrice);

// 17 - class expressions
const myClass = class<T> {
  name;

  constructor(name: T) {
    this.name = name;
  }
};

const pessoa = new myClass("Neder");

console.log(pessoa);
console.log(pessoa.name);

// 18 - abstract class
abstract class AbstractClass {
  abstract showName(): void;
}

class AbstractExample extends AbstractClass {
  name: string;

  constructor(name: string) {
    super();
    this.name = name;
  }

  showName() {
    console.log(`O nome e: ${this.name}`);
  }
}

const newAbstractObject = new AbstractExample("Neder");
newAbstractObject.showName();

// 19 - relacoes entre classes
class Dog {
  name!: string;
}

class Cat {
  name!: string;
}

const doguinho: Dog = new Cat();

console.log(doguinho);
