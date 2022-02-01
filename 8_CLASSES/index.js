"use strict";
// 1 - campos em classe
class User {
}
const neder = new User();
console.log(neder);
neder.name = "Neder";
console.log(neder);
// 2 - constructor
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
}
const simoes = new NewUser("Neder", 30);
console.log(simoes);
// 3 - campos readonly
class Car {
    constructor(name) {
        this.wheels = 4;
        this.name = name;
    }
}
const fusca = new Car("Fusca");
console.log(fusca);
console.log(fusca.wheels);
fusca.name = "Fusca Turbo";
// 4 - heranca e super
class Machine {
    constructor(name) {
        this.name = name;
    }
}
const trator = new Machine("Trator");
class KillerMachine extends Machine {
    constructor(name, guns) {
        super(name);
        this.guns = guns;
    }
}
const destroyer = new KillerMachine("Destroyer", 4);
console.log(trator);
console.log(destroyer);
// 5 - metodos
class Dwarf {
    constructor(name) {
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
    constructor(model, hp) {
        this.model = model;
        this.hp = hp;
    }
    showDetails() {
        console.log(`Caminhao do modelo: ${this.model}, que tem ${this.hp} cavalos de potencia`);
    }
}
const volvo = new Truck("Volvo", 400);
const scania = new Truck("Scania", 500);
volvo.showDetails();
scania.showDetails();
// 7 - getters
class Person {
    constructor(name, surname) {
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
    set fillX(x) {
        if (x === 0) {
            return;
        }
        this.x = x;
        console.log("X inserido com sucesso");
    }
    set fillY(y) {
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
class blogPost {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo do post é: ${this.title}`;
    }
}
const myPost = new blogPost("Hello World");
console.log(myPost.itemTitle());
class TestingInterface {
    constructor(title) {
        this.title = title;
    }
    itemTitle() {
        return `O titulo é: ${this.title}`;
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
    constructor() {
        this.x = 10;
    }
}
class D extends c {
    constructor() {
        super(...arguments);
        this.x = 10;
    }
}
const cInstance = new c();
console.log(cInstance.x);
const dInstance = new D();
console.log(dInstance.x);
// 12 - visibilidade: protected
class E {
    constructor() {
        this.x = 10;
    }
    protectedMethod() {
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
    constructor() {
        this.name = "Private";
    }
    showName() {
        return this.name;
    }
    privateMethod() {
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
    static staticMethod() {
        console.log("Este e um metodo estatico");
    }
}
StaticMembers.prop = "Teste Static";
console.log(StaticMembers.prop);
StaticMembers.staticMethod();
// 15 - generic class
class Item {
    constructor(first, second) {
        this.first = first;
        this.second = second;
    }
    get showFirst() {
        return `O first é: ${this.first}`;
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
    constructor(name, qty, price) {
        this.name = name;
        this.qty = qty;
        this.price = price;
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
const myClass = class {
    constructor(name) {
        this.name = name;
    }
};
const pessoa = new myClass("Neder");
console.log(pessoa);
console.log(pessoa.name);
// 18 - abstract class
class AbstractClass {
}
class AbstractExample extends AbstractClass {
    constructor(name) {
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
}
class Cat {
}
const doguinho = new Cat();
console.log(doguinho);
