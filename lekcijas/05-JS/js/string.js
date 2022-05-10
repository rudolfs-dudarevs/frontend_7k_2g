// string ir mainīgā tips, kas satur tekstu
let companyDescription = "Space X is an American aerospace manufacturer, a provider of space transportation services, and a communications corporation headquartered in Hawthorne, California.";
console.log("Company description:", companyDescription);
// typeof ir ļoti vērtīgs rīks, lai noskaidrotu datu tipu
console.log("Type of 'companyDescription' variable:", typeof companyDescription);
// companyDescription.length atgriež teksta garumu, simbolu skaitu. Ieskaitītas ir arī atstarpes.
console.log("Character count (length):", companyDescription.length); 
console.log("");

// replace() - ļauj iekš string teksta meklēt konkrētu vērtību un to aizvietot ar citu.
let newCompanyDescription = companyDescription.replace("Space X", "Space XY");
console.log("New company description:", newCompanyDescription);
console.log("");

// epasti var būt ievadīti ar liekām atstarpēm to sākumā un beigās. Backend par to var nebūt priecīgs.
let founderEmail = "  Elon.Musk@SpaceX.com "
console.log("Founder email:", founderEmail);

// trim() - ļauj noņemt visas atstarpes no string vērtības sākuma un beigām
let trimmedEmail = founderEmail.trim();
console.log("Trimmed email:", trimmedEmail);

// toLocaleLowerCase() - ļauj pārvērst visus string teksta vērtības simbolus uz mazajiem burtiem
let lowercaseEmail = founderEmail.toLocaleLowerCase();
console.log("Formatted email (lowercase):", lowercaseEmail);

// toLocaleUpperCase() - ļauj pārvērst visus string teksta vērtības simbolus uz lielajiem burtiem
let uppercaseEmail = founderEmail.toLocaleUpperCase();
console.log("Formatted email (uppercase):", uppercaseEmail);
console.log("");

let firstName = "Elon";
let surname = "Musk";

// varam arpvienot vairāku string datu tipa mainīgos vienā, izmantojot + operatoru
let fullName = firstName + surname;
console.log("Full name 1:", fullName);
// līdzīgi ar + operatoru varam ievietot string vērtību ar atstarpi, lai vērtības ir atdalītas
fullName = firstName + " " + surname;
console.log("Full name 2:", fullName);

// concat() - ļauj apvienot vienu vai vairākus string mainīgos, norādot string vērtību starp tiem - šajā gadījumā atstarpi jeb " ".
fullName = firstName.concat(" ", surname); 
console.log("Full name 3", fullName);
console.log("");

let companyPostalCode = "CA 90250";
// splice() kopē daļu no kādas string vērtības un atgriež šīs vērtības kopiju. 
// Pirmais parametrs ir string vērtības simbola index no kura sākt un otrais parametrs ir simbola index LĪDZ kuram kopēt. 
// JavaScript indeksācija, uzskaitīšana (indexing) sākās no 0 proti primais simbols ar index 0 iekš mainīgā companyPostalCode ir "C".
// slice(0, 2) nozīmē, ka vēlamies kopēt no 0 simbola LĪDZ 2 - tas ir 0 simbolu un 1 simbolu, neieskaitot 2 simbolu jeb tikai simbolus "CA".
let postalCodeState = companyPostalCode.slice(0, 2); 
console.log("Company postal code:", companyPostalCode);
console.log("Postal code state:", postalCodeState);
console.log("");

// Pieraksta veidi
let singleQuote = 'someText';
let doubleQuote = "someText";
// string pieraksta veids, kurā varam ievietot mainīgā vērtību.
let stringLiteral = `This text can contain a variable value: ${companyName}`; 

console.log("String value with a dynamic value from variable:", stringLiteral);

// let incorrectString = "Do not use unescaped double quotes ("") inside a string.";
// console.log(incorrectString);


// rakstot string vērtību ar single quotes '', tajā var izmantot double quotes 'Ja nepieciešamas double quotes("") iekš single quotes.' 
let correctEscapedString = "Use escape characters for double qotes (\"\")";
console.log(correctEscapedString);

let correctUnescapedString = "Or use single quotes inside double quoted string ('')"; 
console.log(correctUnescapedString);