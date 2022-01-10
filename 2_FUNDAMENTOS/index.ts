// 1 - numbers
let x: number = 10;

console.log(x)

x = 16

console.log(typeof x)

const y: number = 15.5555

console.log(typeof y)

console.log(y)

console.log(y.toPrecision(3))

// 2 - strings
const firstName: string = "Neder"

console.log(firstName.toUpperCase())

let fullName: string 

const lastName: string = "Hayden"

fullName = firstName + " " + lastName

console.log(fullName)

console.log(typeof fullName)

// 3 - boolean
let a: boolean = false

console.log(a)
console.log(typeof a)

a = true

console.log(a)

// 4 - inference e annotation
let ann: string = "Teste"

let inf = "Teste"

console.log("testando hot reload com o comando tsc -w")
