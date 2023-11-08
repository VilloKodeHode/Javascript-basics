let x = 10;

if (x == 10) {
    console.log("sant")
}


//Bar sjekk system logikk:
let age = 18

age >= 18 ? console.log("Du er myndig") : console.log("Du er ikke myndig")


let drikke = age >= 18 ? "øl" : "juice"

//** Alternativ måte å skrive dette på: */
// let drikke;

// if (age >= 18) {
//     drikke = "øl";
// } else {
//     drikke = "juice";
// }

console.log(drikke)


//Hvordan bruke randomNumber med if/else:
let randomNumber = Math.random() * 9 + 1
let roundedNumber = Math.round(randomNumber)
if (roundedNumber >= 5) {
    console.log("Tallet er større eller lik 5")
} else {    
    console.log("Tallet er mindre enn 5")
}
console.log(`Tallet er ${roundedNumber}`)


// Hvordan å forekle randomNumber generator og bruke callback funksjon:
function simpleFunction(maxNumber) {
    
    // math.round runder av til nærmeste heltall, math.floor runder ned til nærmeste heltall, math.ceil runder opp til nærmeste heltall:
    return Math.round(Math.random() * maxNumber);
}
console.log(simpleFunction(10));

// Kompliment funksjon:
function giveCompliment() {
    const compliments = [
        "You're awesome!",
        "You're a star!",
        "You make the world brighter!",
        "You're a superhero!",
        "You're the best!",
    ];

    // lage en variabel som henter et tilfeldig tall mellom 0 og 4 (fordi det er 5 elementer i arrayet)):
    const randomIndex = Math.floor(Math.random() * compliments.length);
    const compliment = compliments[randomIndex];

    return compliment;
}

// kjøre en callback for å faktisk kjøre funksjonen:
const randomCompliment = giveCompliment();
console.log(randomCompliment);
// dette fungerer også:
// console.log(giveCompliment());





