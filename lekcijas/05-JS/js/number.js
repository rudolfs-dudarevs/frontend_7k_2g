// number mainīgie satur skaitliskas vērtības
let intiger = 3;
let decimalNumber = 3.14;
console.log("Whole number:", intiger);
console.log("Decimal number:", decimalNumber);

let scientificNumber = 123e2; // 123e2 = 123 * 10 * 10;
console.log("Scientific number value:", scientificNumber);

// atšķirībā no citām programmēšanas valodām, JavaScript nav vairāki atšķirīgi datu tipi skaitļiem.
// darbības ar skaitļiem JavaScript ir ne sevišķi uzticamas, ja nepieciešama augsta precizitāte.
// Līdz 15 ciparu garumam JavaScript izvadīs precīzu veselu skaitli
let acceptableIntigerValue = 999999999999999; 
// Virs 15 ciparu garuma JavaScript sāks veselo skaitli noapaļot  
let faultyIntigerValue = 9999999999999999;  
console.log("Number with up to 15 digits:", acceptableIntigerValue);
console.log("Number with more than 15 digits", faultyIntigerValue);

// darbības ar decimālskaitļiem ir sevišķi neprecīzas
let specialJavaScriptMath = 0.2 + 0.1;
console.log("What is this JavaScript?", specialJavaScriptMath);
console.log("Type of 'special math':", typeof specialJavaScriptMath);

// toFixed() ļauj izveidot fiksēta garuma aiz komata decimālskaitli - bet atgriež string vērtību
let fixedJavaScriptMath = specialJavaScriptMath.toFixed(1); 
console.log("Fixed length value:", fixedJavaScriptMath);
console.log("Type of 'fixed math':", typeof fixedJavaScriptMath);

let possibilitiesWithFrontend = 1e999;
console.log("Where's the limit of possibilities with Frontend?:", possibilitiesWithFrontend);

let possibilietiesWithoutFrontend = possibilitiesWithFrontend * 0; // Not a number
console.log("What possibilities are there without Frontend?:", possibilietiesWithoutFrontend); 
console.log(typeof possibilietiesWithoutFrontend); // number 
console.log(isNaN(possibilietiesWithoutFrontend)); // noskaidrot vai vērtība ir NaN