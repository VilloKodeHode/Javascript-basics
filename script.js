import { evenOrOdd } from "./OddorEven"


// console.log skriver ut til consollen i developer tools på nettsiden
console.log("hello world!")


// let definerer en variabel som får lov til å endres på senere
let ord1 = "hello"

const ord2 = "World!"

console.log(ord1 + " " + ord2)

// hvordan å finne lengden av objekter (i dette tilfelle bokstaver):
console.log((ord1 + ord2).length)

let setning = ord1 + " " + ord2

console.log(setning)


let nummer = 1
const nummer2 = 2

// forventer sum skal være = 3
let sum = nummer + nummer2 

console.log("nummer er: " + nummer)
console.log("summen er: " + sum + " (før nummer øker med 1)")

// øker nummer med 1:
nummer++

console.log("resultatet skal være 2: " + nummer)

let nySum = nummer + nummer2

console.log("summen er: " + nySum + " (etter nummer øker med 1)")

// Hvordan å få et tilfeldig tall mellom 1 og 10:
const randomNumber = Math.random() * 9 + 1
console.log(randomNumber)
const roundedNumber = Math.round(randomNumber)
console.log(roundedNumber)


// datatyper:
// String: "Hello world!"
// Integer/number: Alle heltall (1, 2, 3, 548237)
// Float: Alle tall med desimaler (1,65)
// Boolean: True eller false
// Array: f.eks let fruit = ["kiwi", "apple", "pear"]
// Object: 
// Undefined: const person = {firstName: "Jokka", lastName: "Bolle", age: "65" }


let fruitsArray = ["banan", "jordbær", "tomat", "kiwi"]

console.log(fruitsArray)

console.log(fruitsArray[1])

// hvordan å legge til et element på slutten av et array:
fruitsArray.push("eple")

console.log(fruitsArray)
// hvordan å fjerne det siste elementet i et array:
fruitsArray.pop()
console.log(fruitsArray)
console.log(fruitsArray.length)

// nytt i JS. Man behøver ikke definere variabler, men allikevel GJØR DET
ord3 = "halla på deg!"

console.log(ord3)


// Dette er et eksempel på et objekt med 4 keys (firstName, lastName, age og hobbies) og 5 values (Joakim, Villo, 35 og verdiene i hobbies), og hvordan å hente ut en av disse:
const persons = [{

    firstName: "Joakim",
    lastName: "Villo",
    age: 35,
    hobbies: ["Gaming", "Trening", "Filmer"]
},
{
firstName: "Bob",
lastName: "Dylan",
age: 80,
hobbies: ["Music", "MJ", "Jamaican food"]}
]

const Joakim = persons[0]
const Bob = persons[1]

const BobAge = Bob.age

console.log(Joakim.firstName)
console.log(Bob.firstName)
console.log(BobAge)


















