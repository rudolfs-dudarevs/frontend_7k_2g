// Mainīgo deklarējam izmantojot let vai const - var ir novecojusi (deprecated) deklerācija un nav ieteicams izmantot.
var companyName;
let rocketsLaunched;
// Inicializējam mainīgo tam piešķirot vērtību. Kad mainīgais jau ir deklarēts, to pierakstām bez let, const vai var deklerācijas.
companyName = "Space X";
rocketsLaunched = 11;
// Varam mainīgo arī deklarēt un uzreiz inicializēt (piešķirt tam vērtību). const tipa mainīgie obligāti jāinicializē tiklīdz tie itek deklarēti.
const yearCompanyFounded = 2002;

console.log("Company name:", companyName);
console.log("Rockets launched:", rocketsLaunched);
console.log("Year company was founded:", yearCompanyFounded);
console.log("");

// Mainīgo vērtības varam mainīt tiem piešķirot citu vērtību.
companyName = "Space XY";
console.log("Company name:", companyName)

rocketsLaunched = 12;
console.log("Rockets launched:", rocketsLaunched);

// const mainīgie ir konstantes. Kopš to deklerācijas un inicializācijas nav iespējams mainīt to vērtību.
// Zemāk izkomentētais kods, kurā mēģinam kontantei yearCompanyFounded piešķirt citu vērtību,
// radīs error, kas apturēs tālāku koda izpldi

// yearCompanyFounded = 2012;
// console.log("Year company was founded:", yearCompanyFounded);
console.log("");