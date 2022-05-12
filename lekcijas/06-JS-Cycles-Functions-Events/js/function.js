// Before ES6
// funkcijas deklerācija - kods netiek izpildīts, deklarējot funkciju.
// šai funkcijai ir nepieciešami 2 parametri to izaucot - x un y.
function sumBeforeES6(x, y) {
    let sum = x + y;
    console.log(`${x} and ${y} sum =`, sum);
}

// funkcijas izsaukšana (call) - deklerācijā definētais kods tiek izpildīts
// funkcijas deklerācijā norādījām divus parametrus ko tai nepieciešams saņemt, izsaucot funkciju.
// šajā brīdī funkcijas deklerācijā parmaetrs x saņems vērtību 4 un parametrs y vērtību 5.
sumBeforeES6(4,5);

// ES6
// analogs piemērs funkcijas deklerācijai 4 rindiņā sumBeforeES6().
// šis funkcijas deklerācijas pieraksts ir ieteicamais kopš ES6.
let sumAfterES6 = (x, y) => {
    let sum = x + y;
    console.log(`${x} and ${y} sum =`, sum);
    console.log("");
}

sumAfterES6(4,5);

// funciju, kas atgriež vērtību ar return, varam izmantot, lai piešķirtu vērtību citiem mainīgajiem.
let sumReturnValue = (x, y) => {
    let sum = x + y;

    return sum
}

// tā kā funkcija sumReturnValue atgriež vērtību - varam atgriezto vērtību piešķirt, piem., kādam mainīgajam.
let numberSum = sumReturnValue(6,3);


// funkcijas, kas saņem kā parametru epasta adresi (sagaida string tipa mainīgo)
// un atgriež epasta adresi, kas ir pareizi formatēta
let formatEmail = (email) => {
    console.log("Unformatted email address:", email);
    let trimmedEmail = email.trim();
    let formattedEmail = trimmedEmail.toLowerCase();

    return formattedEmail
}

// tā kā funkcija formatEmail() atgriež vērtību - varam izsaukt funkciju piešķirot mainīgajam vērtību.
// mainīgā email vērtība būs vienāda ar funkcijas formatEmail() atgriezto vērtību.
let email = formatEmail("   Dita.Zemene@Gmail.Com ");
console.log("Formatted email:", email)

// gluži kā varma izmantot funkcijas, kas atgriež vērtību, lai piešķirtu atgriezto vērtību kādam mainīgajam
// varam šo atgriezto vērtību piešķirt arī objekta īpašībai
let person = {
    firstName: "Dita",
    lastName: "Zemene",
    email: formatEmail("   Dita.Zemene@Gmail.Com ")
}
console.log("Person object with formatted email:", person);

// funkcijas, kas kā parametrus saņem firstName un lastName - atgriež apvienotus šos abus parametrus vienā string
let personFullName = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}
// kaut arī īpašība fullName neeksistē objekta person deklerācijā
// ja mēs piešķirsim vērtību neeksistējošai objekta īpašībai - šī īpašība tiks izveidota objektā
// un saturēs funkcijas personFullName() atgriezto vērtību
person.fullName = personFullName(person.firstName, person.lastName);
console.log("Person object with full name:", person);
console.log("");

// bieži vien darbosimies ar nevis vienu vērtību, bet veselu masīvu. 
// un katram elementam būs nepieciešama formatēšana vai citas darbības.
let emailList = ["  Egija.mellene@Gmail.Com ", "   Dita.Zemene@Gmail.Com ", undefined, "Laura.Upene@Inbox.LV", null];
console.log("Unformatted email list:", emailList);

// varam definēt funkciju, kas ir gatava apstrādāt jebkādu string masīvu un to formatēt
// šajā funkcijā paredzēsim arī to, ka kāds masīva elements varētu nebūt string un centīsiies noķert kļūdu
// try catch bloka - pirms tā ir nekontrolēta izvadīta konsolē un apturējusi tālāku koda izpildi
let formatList = (list) => {
    list.forEach((item, index) => {
        try {
            // katrā forEach() ciklā šis koda bloks tiks mēģināts izpildīt
            list[index] = item.trim();
            list[index] = list[index].toLowerCase();
            console.log(`Formatted list itme index ${index}`, list[index]);
        }
        catch(err) {
            // ja try blokā definētais kodš kāda iemesla dēļ atgriež kļūdu, tas tiks izpildīts šajā catch koda blokā
            // parocīgi, jo varam ar izvdīto kļūdu rīkoties un turpināt koda izpildi.
            // šajā piemērā sagaidam, ka viena no masīva vērtībām būs undefined un, pielietojot uz to string metodes - būs kļūda.
            console.log(`Not able to format array item - ${item}:`, err);
        }      
    })
    console.log("");
}

formatList(emailList);
console.log("Formatted email list:", emailList);

// analogs funkcijai 79 rindiņā, bet šis funkcijas variants atgriež vērtību
let formatEmailList = (list) => {
    // šis masīvs saturēs pēc katra forEach() cikla formatētās epasta vērtības 
    let formattedEmailList = [];
    
    list.forEach((item) => {
        try {
            // dažādās metodes JavaScript iespējams "saķēdēt" vienu pēc otras, piem., dažādas string metodes, kas izpildīsies secīgi.
            let formattedItem = item.trim().toLowerCase();
            // ievietot masīva formattedEmailList beigās tikko formatēto epastu
            formattedEmailList.push(formattedItem);
        }
        catch(err) {
            console.log(`Not able to format array item - ${item}:`, err);
        }      
    })    

    return formattedEmailList
}

// tā kā funkcija formatEmailList() atgriež vērtību - varam to piešķirt mainīgajam.
let formattedEmailList = formatEmailList(emailList);
console.log("Formatted email list:", formattedEmailList);



