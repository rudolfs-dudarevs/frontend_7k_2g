// Objekts ļauj vienā mainīgajā saglabāt datu struktūru ar dažādiem datu tipiem. 
// Katrai objekta īpašībai ir nosaukums un vērtība - key/value pair
const person = {
    firstName: "Elon", // string
    lastName: "Musk",
    age: 50, // number
    companiesFounded: [ // array with string elements
        "X.com", 
        "PayPal", 
        "SpaceX", 
        "The Musk Foundation", 
        "Tesla", 
        "SolarCity", 
        "Neuralink", 
        "The Boring Company"
    ],
    rolesInCompanies: { // objekts iekš objekta
        twitter: {
            role: "Potential business owner",
            isFounder: false // boolean
        },
        tesla: {
            role: "Business owner",
            isFounder: true
        }
    }
}

// objekta īpašībām piekļūst norādot mainīgā nosaukumu (objekta nosaukumu) person.
// Lai piekļūtu kādai no objekta īpašībām (mainīgie iekš objekta), rakstam pilnu hierarhijas ceļu līdz šai īpašībai.
// piem., ar person.firstName var piekļūt objekta "person" īpašībai "firstName"
console.log("Person full name:", person.firstName + person.lastName); 
console.log(`Age of ${person.firstName} ${person.lastName}:`, person.age);
console.log("Person role at Twitter:", person.rolesInCompanies.twitter.role);

// tieši tā pat norādot pilnu hierarhijas ceļu, varam piekļūt jebkurai dziļāk objektā atrodamai īpašībai.
person.rolesInCompanies.twitter.role = "Business owner";

console.log("Person new role at Twitter:", person.rolesInCompanies.twitter.role);
console.log("");