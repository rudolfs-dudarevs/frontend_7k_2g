// Array jeb masīvs ļauj vienā mainīgajā saglabāt sarakstu ar elementiem. 
// Array elementi var būt dažāda datu tipa, bet ieteicams vienā Array izmantot tikai viena datu tipa elementus.
// Atšķirībā no object, elementi iekš array nav key/value pair, proti, nevaram tiem piekļūt izmantojot elementa nosaukumu.
// Katrs masīva elements nav sasaistīts ar nosaukumu, tomēr katram tiek piešķirts index jeb kārtas skaitlis sākot no 0 pirmajam array elementam.
let listOfFrontendTools = []; // inicializējam tukšu masīvu, kurā varēsim ievietot elementus
listOfFrontendTools = ["React", "Bootstrap", "CSS", "HTML"];

console.log("Some frontend tools you might use:", listOfFrontendTools);

listOfFrontendTools = []
console.log("Reset array to empty:", listOfFrontendTools);

// push() - ievieto jaunu elementu array beigās
listOfFrontendTools.push("React");
console.log("Pushed element 0", listOfFrontendTools);

listOfFrontendTools.push("Bootstrap");
console.log("Push element 1", listOfFrontendTools);

listOfFrontendTools.push("CSS");
console.log("Push psh element 2", listOfFrontendTools);

listOfFrontendTools.push("HTML");
console.log("Push element 3", listOfFrontendTools);
console.log("");

// unshift() - ievieto jaunu elementu array sākumā, visi pārējie elementi pabīdās jeb maina savu index. 
// 0 index elements "React" tagad būs ar index 1 un jaunais elements "Vue" būs ar index 0
listOfFrontendTools.unshift("Vue");
console.log("Add an elemento the beginning on array:", listOfFrontendTools);
console.log("");

// pop() - izņem pēdējo masīva elementu no beigām un atgriež tā vērtību
console.log("Remove last element from end of array and get its value:", listOfFrontendTools.pop());
// listOfFrontendTools.pop() vatgriezto vērtību varētu arī saglabāt mainīgajā - let someVariable = listOfFrontendTools.pop();
console.log("Array after pop():", listOfFrontendTools);
console.log("");

// includes() - veic pārbaudi vai masīvs satur kādu elementu, atgriež boolean tipa vērtību true vai false
console.log("Does the array include 'Angular'?:", listOfFrontendTools.includes("Angular"));
console.log("Does the array include 'Vue'?:", listOfFrontendTools.includes("Vue"));
console.log("");

// indexOf() - ļauj noskaidrot kāda elementa indexu
console.log("What is the index of 'React' element?:", listOfFrontendTools.indexOf("React"));

// Masīva elementiem var piekļūt norādot tā indexu.
console.log("What is the first element of the array?:", listOfFrontendTools[0]);
console.log("What is the second element of the array?:", listOfFrontendTools[1]);
// Varam uzzināt cik elementu ir iekš array ar .lengt īpašību, kas piemīt visiem array tipa mainīgajiem
console.log("How many elements are in the array?:", listOfFrontendTools.length);
// Tā kā mēs varam arī precīzi nezināt cik elementu ir masīvā, pēdējam masīva elementa varam piekļūt izmantojot .length īpašību.
// Tā kā indeksācija sākās no 0, bet iekš array dotajā brīdī ir 4 elementi - pēdējā elementa index būs 3.
// Lai piekļūtu masīva pēdējam elementam, varam veikt aprēķinu array.length - 1
console.log("What is the last element of the array?", listOfFrontendTools[listOfFrontendTools.length -1])