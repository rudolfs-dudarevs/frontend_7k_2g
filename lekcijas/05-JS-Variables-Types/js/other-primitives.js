// BigInt
let starsInObservableUniverse = 457309583495083450934859043853095839058340583045834n; // ārkārtīgi lieliem skaitļiem izmantojam BigInt datu tipu
console.log("Number of stars in observable universe:", starsInObservableUniverse);
console.log("");

// Boolean - patiesa vai nepatiesa vērtība
let isJavaScriptAwesome = true;
let isAboveStatementNotTrue = false;

let yearInventedHTML = 1991;
let yearInventedJS = 1995;
// < operātors salīdzina divu vērtību lielumu un atgriež boolean vērtību
let isHTMLolderthanJS = yearInventedHTML < yearInventedJS; 

console.log("HTML is older than JavaScript:", isHTMLolderthanJS);
console.log(typeof isHTMLolderthanJS);

// Symbol
let uniqueSymbol1 = Symbol('xyz');
let uniqueSymbol2 = Symbol('xyz');

// === ir salīdzināšanas operators, atgriež boolean vērtību
let areBothUniqueValuesIdentical = uniqueSymbol1 === uniqueSymbol2; 
console.log("Are both symbols made from same value identical:", areBothUniqueValuesIdentical);
console.log("");

// null - vērtība ko izmantojam, lai apzināti un mērķtiecīgi iestatītu mainīgajam tukšu vērtību.
let plansForToday = "Do homework.";
let bingeNetflix = true;
plansForToday = null;
console.log("My plans for today:", plansForToday);

// Undefined - vērtība kas tiks atgriezta, ja mainīgais nav inicializēts jeb tam nav piešķirta vērtība.
let plansForTomorrow;
console.log("What are your plans for tomorrow?:", plansForTomorrow);