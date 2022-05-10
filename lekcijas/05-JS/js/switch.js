// switch() sintaktiski atšķirās no if() else, bet funkcionāli veic tādas pašas darbības.
// pārbauda nosacījumus un izpilda attiecīgo koda bloku.
const myName = "Slim Shady";

switch (myName) {
    case "What?": // pārbaudīs vai myName vērtība ir "What?"
        console.log("What?");
        break; // break; nepieciešams, lai nepieļautu nākamā koda bloka izpildi
    case "Who?": // ja myName vērtība nav "What?", secīgi izpildās nākamā case nosacījuma pārbaude - vai myName ir "Who?"
        console.log("Who?");
        break;
    case "Huh?": // ja myName vērtība nav nedz "What?", nedz "Who?", secīgi izpildās nākamā case nosacījuma pārbaude - vai myName ir "Huh?"
        console.log("Huh?")
        break;
    default:
        // default koda bloks izpildās, ja neviens no iepriekšējiem case nosacījumiem nav bijis true
        console.log("Chika-chika, Slim Shady.");
        break;
} // *reference uz Eminem dziesmu 


// Analogs if else pieraksts iepriekšējam piemēram būtu šāds
if(myName === "What?") {
    console.log("What?");
} else if(myName === "Who?") {
    console.log("Who?");
} else if(myName === "Huh?") {
    console.log("Huh?")
} else {
    console.log("Chika-chika, Slim Shady.");
}