// If, Else if un Else mums ļauj izpildīt atšķirīgus koda blokus pie konkrētiem nosacījumiem
let isTrafficLightGreen = true;

// if () satur nosacījumu ko pārbaudīt boolean kontekstā.
// visas vērtības starp iekavām tiks interpretētas kā boolean (implicit coercion).
// ja if() pārbaudītā vertība būs false boolean kontekstā - izpildīsies else koda bloks  
if (isTrafficLightGreen) {
    // izpildīsies tikai šis koda bloks, jo isTrafficLightGreen ir true
    console.log("Cross the road.") 
} else {
    console.log("Wait for a green light.")
}

isTrafficLightGreen = false;

if (isTrafficLightGreen) {
    console.log("Cross the road.")
} else {
    // izpildīsies tikai šis koda bloks, jo isTrafficLightGreen nav true
    console.log("Wait for a green light.") 
}

// else if() ļauj mums kombinēt nosacījumus ko secīgi pārbaudīt. Katrs else if() darbojās gluži kā if()
let isTrafficLightYellow = false;
let isTrafficLightRed = true;

if (isTrafficLightGreen) {
    console.log("Cross the road.");
} else if (isTrafficLightYellow) {
    console.log("Wait for the next traffic light.")
} else if (isTrafficLightRed) {
    // izpildīsies šis koda bloks, jo isTrafficLightGreen un isTrafficLightYellow nav true
    console.log("Wait for a green light.") 
} else {
    console.log("Traffic light must not be working.")
}

console.log("")

isTrafficLightRed = false;

if (isTrafficLightGreen) {
    console.log("Cross the road.");
} else if (isTrafficLightYellow) {
    console.log("Wait for the next traffic light.")
} else if (isTrafficLightRed) {
    console.log("Wait for a green light.") 
} else {
    // izpildīsies šis koda bloks, jo isTrafficLightGreen, isTrafficLightYellow un isTrafficLightRed nav true
    console.log("Traffic light must not be working.") 
}

console.log("")