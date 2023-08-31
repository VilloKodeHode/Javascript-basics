let x = 10

if (x === 10) {
    console.log("tallet er 10")
} else if (x < 10) {
    console.log("tallet er mindre enn 10")
} else if (x > 10) {
    console.log("tallet er større enn 10")
}
else {
    console.log("tallet ikke en integer")
}

x === 10 ? console.log("tallet er 10") : x < 10 ? console.log("tallet er ikke 10") : console.log("tallet er ikke en integer") 

// Bar logikk:

let age = 16

if (age >= 18) {
    console.log("Du er myndig og du får lov til å drikke alkohol")
} else {
    console.log("Du er ikke myndig og du får ikke lov til å drikke alkohol")
}

let drikke;

if (age >= 18) {
    drikke = "øl";
} else {
    drikke = "juice";
}

console.log(drikke)

console.log(age >= 18 ? "Ta deg en øl din voksne person" : "Ta deg en juice din unge!")


// Hvordan bruke randomNumberGenerator med if/else:

let randomNumber = Math.round(Math.random() * 9 + 1)
if (randomNumber < 5) {
    console.log("Tallet er mindre enn 5")
} else if (randomNumber > 5) {
    console.log("Tallet er større enn 5")
} else {
    console.log("Tallet er 5")
}
console.log(`Tallet er ${randomNumber}`)

function simpleFunction() {
return console.log("matte")
}
simpleFunction()

function getRandomNumber(maxNumber) {
    return Math.round(Math.random() * maxNumber) + 1
}

console.log(getRandomNumber(1337))

function giveCompliment() {
    const compliments = [
        "You're awesome!",
        "You're a star!",
        "You make the world brighter!",
        "You're a superhero!",
        "You're the best!",
    ];
const randomIndex = Math.round(Math.random() * (compliments.length - 1)) 
const compliment = compliments[randomIndex]
return compliment;
}

console.log(giveCompliment())