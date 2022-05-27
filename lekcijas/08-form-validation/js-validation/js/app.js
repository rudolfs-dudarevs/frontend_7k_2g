// Atrodam DOM mums nepieciešamo formas elementu no kura varēsim iegūt visus ievadlakus,
// tādējādi mums nebūs 
let userForm = document.getElementById("user-form");
// Izveidojam masīvu ar visiem formas ievadlauku elementiem. Tas gan iekļaus arī <button> elementu.
let formInputs = Array.from(userForm.elements);

// Objekts, kas satur validācijas nosacījumus.
// Katra objekta īpašība ir funkcijas, kas pielāgota kāda konkrēta ievadlauku pārbaudei.
// Objekta īpašības nosaukums sakrīt ar attiecīgā ievadlauka name atribūtu, lai varētu ērtāk piekļūt nepieciešamajai validācijas metodei
const validationRules = {
    // šī objekta īpašība - kā arī visas pārējās - ir funkcijas, kas veiks lauka vērtības validāciju
    // funkcija sagaida 1 parametru - value
    speciality: (value) => {
        // šī ir vienkārša validācija, kur Boolean kontekstā apskatam value. 
        // Izmantojam Boolean() konversiju, lai pārvērstu ievadlauka string vērtību uz boolean - true vai false
        // Īsās un analogs pieraksts būtu:
        // let isValid = !!value;
        let isValid = Boolean(value);

        // atgriežam true vai false - vai ievadlauka vērtība ir pareiza attiecīgajam validācijas nosacījumam
        return isValid
    },
    firstname: (value) => {
        // šī funkcija veiks RegEx pārbaudi - vai vārs sākās ar lielo burtu
        // izveidojam RegEx objektu, pēc kura meklēsim sakrtiību iekš value
        let regEx = /[A-Z]\w+/;
        // funkcijas test() ir pieejama visiem RegEx objektiem un atgriež true vai false.
        // Tiek pārbaudīta string vērtība, kas šai funkcijai tiek padota kā parametrs - value.
        let isValid = regEx.test(value);

        return isValid
    },
    poNumber: (value) => {
        // let isValid = !!value;
        let isValid = Boolean(value);

        return isValid
    },
    poPattern: (value, country) => {
        let isValid;

        // priekš PO number (pasta indeksa) valdiācijai nepieciešams variēt attiecībā pret to, kāda valsts ir izvēlēta 
        // veiksim pārbaudi ar regEx tikai tad, ja value eksistē - lauks nav tukšs.
        // šī validācijas metode tiek izsaukta tikai tad, kad tiek nomainīta vērtība <select> elementā - tiek izvēlēta valsts(country).
        // bet tiek validēts cits ievaldlauks - PO number (pasta indeskss)
        // Šis if else priekš tā vai value eksistē parūpējās par situāciju, kad vispirms izvēlamies country, bet PO number lauks ir tukšs
        // proti nevalidēsim tukšu PO number lauku, kad tiek izvēlēts countru - lai uzlabotu lietotāja pieredzi
        if(value) {
            // definējam objektu ar visu valstu iespējamajiem RegEx pattern nosacījumiem
            // objekta īpašību nosaukumi sakrīt ar <select> elepenta <option> value atrtibūtu vērtībām, lai varam tiem piekļūt izmantojot kā parametru šo te country value
            const regEx = {
                lv: /^(LV-)?\d{4}$/,
                lt: /^(LT-)?\d{4}$/,
                ee: /^(EE-)?\d{4}$/,
            };
            
            // analogs veids kā piekļūt objekta īpašībām ir ar computed value jeb dinamisku objekta īpašības nosaukumu
            // ierasti regEx objekta īpašībām piekļūtu, piem., regEx.lt
            // bet tā kā šī funkcija ir dinamiska un der visu valstu validācijām, arī objekta īpašībām ieteicam piekļūt dinamiski
            // tad varam izmantot sintaksi, kas atgādina to kā piekļūstam elementiem masīvā regEx["propertyName"]
            // tikai masīvā mēs izmantojām elementa indeksu jeb kārtas skaitli
            // objektā mēs izmantojam property name jeb īpašības nosaukumu
            // regEx[country] koda izpildē darbotos kā regEx["lv"], regEx["lt"] vai regEx["ee"] - atkārībā no tā attiecībā pret kuru valsti tiek validēts PO number vērtība.
            // un tas būtu tieši tas pats, kas piekļūt šīm objekta īpašībām ar regEx.lv, regEx.lt vai regEx.ee.
            isValid = regEx[country].test(value);
        } else {
            // šis koda bloks nostrādā, ja PO number value ir tukšs strings jeb "" - lietotājs tajā vēl neko nav ievadījis.
            // tāpēc, ka tieši šī validationsRules.poPattern funkcija tiek izsaukta tikai priekš <select> elementa uz "change" notikumu jeb event
            // 165. koda rindiņā ir definēts event listener, kuram piesaistīta šī funkcija.
            // pašam PO number laukam jau ir definēta validācija vai tas nav tukšs - validationRules.poNumber, kas ir piesaistīta pašam PO number ievadlaukam un nostrādās uz blur event.
            isValid = true;
        }

        return isValid
    }
}


// šī funkcija tiek piesaistīta visiem formas ievadlauku elementiem, kam nepieciešama validācija
// tās galvenais uzdevums ir secināt kāds ievadlauks tiek validēts un kādu validācijas funkciju vai kļūdas paziņojumu piešķirt attiecīgajam laukam
const validateField = (event) => {
    // tā kā ši funkcija tiek izmantota kā parametrs addEventListener funkcijai.
    // jeb tā tiks izsaukta pie katra attiecīgā event notikuma, kā pirmais parametrs šia funkcijai ir pieejams pats event objekts.
    // event objektā mēs varam piekļūt elementam, kurš ir izsaucis šo te event jeb notikumu ar event.target
    let inputField = event.target;
    
    // switch() mums palīdz pēc iedlauka name attribūta secināt kurš ievadlauks ir izsaucis notikumu(event) 
    // un piemērot attiecīgo validācijas funkciju tieši šim laukam.
    switch(inputField.name) {
        case "speciality":
            handleValidity(inputField, "Speciality field must contain a value.");
            break;
        case "firstname":
            handleValidity(inputField, "Firstname must start with a capital letter.");
            break;
        case "poNumber":
            handleValidity(inputField, "PO number field must contain value.");
            // šis lauks ir sarežģītāks un papildus pārbaudei par to vai lauks satur vērtību
            // mēs vēleamies pārbaudīt vai šis lauks atbilst arī attiecīgās valsts pasta indeksa standartam
            // tāpēc šim ievadlaukam tiek piemēroti divas funkcijas jeb validācijas nosacījumi
            handlePoValidity("Wrong format PO number for selected country");
            break;
        case "country":
            handlePoValidity("Wrong format PO number for selected country");
            break;
        default:
            console.log("Not matching input field validation case found. Make sure the input element name attribute has correct value.");
            break;
    }
}

// Vienkārš funkcija, kas piekļūt validationRules objekta kādai īpašībai pēc ievadlauka name attribūta vērtības.
// Definējot validationRules objektu un nosaucot tā vērtības, apzināti izvēlējāmies nosaukumus, kas sakrīt ar katra
// validējamā ievadlauka name attribūta vērtību.
// validationRules[inputField.name] analoga sintakse būtu validationRules.speciality, validationRules.firstname, validationRules.poNuber vai validationRules.poPattern
// tomēr mēs vēlamies lai šī funkcija ir dinamiska, tāpēc piekļūstam objekta īpašībām izmantojot computed properties sintaksi
// jeb validationRules[inputField.name],
// kas koda izpildes brīdī būs validationRules["speciality"], validationRules["firstname"], validationRules["poNumber"] vai validationRules["poPattern"],
const isValid = (inputField) => {
    // tā kā jebkura validationRules objekta īpašība ir funkcija
    // un katra no šīm funkcijām atgriež vērtību true vai false - vai ievadlauka vērtība ir derīga, valīda -,
    // mums nepieciešams izsaukt šo funkciju jeb validationRules objekta attiecīgo īpašību.
    // (inputField.value) daļa šajā koda rindā parūpējās, lai mēs esam ne tikai piekļuvuši validationRules objekta īpašībai, kas ir funkcija, bet arī to izsaukuši.
    // Tā kā ši izsauktā funkcija atgriež rezultātu true vai false un mēs vēlamies lai funkcija isValid() arī atgriež šo vērtību - ar return atgriežam no validationRules objekta izsauktos validācijas funkciju.
    return validationRules[inputField.name](inputField.value)
}


// Šī funkcija iestata laukua kā valid vai invalid atkarībā no tā vai ievadlauks ir izturējis validācijas pārbaudi
const handleValidity = (inputField, errorMsg) => {
    // if() nosacījumā pārbaudām isValid() funkcijas atgriezto vērtību, kas būs validationRules objekta
    // kādas no īpašībām atgrieztā vērtība.
    // validationRules objekta katra īpašība ir funkcija, kas izpilda validācijas pārbaudi un atgriež true vai false.
    if(isValid(inputField)) {
        setFieldValid(inputField);
    } else {
        setFieldInvalid(inputField, errorMsg);
    }
}


// Tā kā Po number ievadlauka validācija ir sarezģītāka, proti, tā ir atkarīga no cita lauka (country) vērtības
// izveiudojām šim gadījumam atsevišķu validācijas funkciju.
// tā ir diez gan līdziga handleValidity() funkcijai, bet šeit mums ir svarīgas 2 ievadlauku vērtība - country un poNumber.
const handlePoValidity = (errorMsg) => {
    // atrodam abus nepieciešamos ievadlaukus iekš DOM
    const poField = document.getElementById("po-number");
    const countryField = document.getElementById("country");

    // tā kā šeit mums ir nepieciešama tikai 1 konkrēta validācijas metode no validationRules objekta - tai piekļūstam ar sintaksi validationRules.poPattern
    // un šai validācijas funkcijai nepieciešami 2 vērtības jeb parametri - countru ievadlauka vērtība un poNumber ievadlauka vērtība.
    if(validationRules.poPattern(poField.value, countryField.value)) {
        setFieldValid(poField);
    } else {
        setFieldInvalid(poField, errorMsg);
    }
}

// gadījumā, ja lauks ir valid, dati ir pareizi - piešķiram šim laukam klasi "valid" un noņemama klasi "invalid"
// Ja laukam nemaz nebūs klase "invalid", kad mēģināsim to noņemt - kļūda nebūs, viss notiks bez aizķeršanās.
 const setFieldValid = (inputField) => {
    inputField.classList.remove("invalid");
    inputField.classList.add("valid");
    // setCustomValidity("") iestata paskaidrojošo kļūdas paziņojumu par lauka valīdumu.
    // tā kā esam kā parametru norādījuši tukšu string jeb "", tas norāda, ka lauks ir valīds.
    // un šim laukam tiks piešķirta pseidoklase :valid - ko mēs gan šajā validācijas piemērā praktiski neizmantojam.
    inputField.setCustomValidity("");
}

const setFieldInvalid = (inputField, errorMsg) => {
    inputField.classList.remove("valid");
    inputField.classList.add("invalid");
    // setCustomValidity("") iestata paskaidrojošo kļūdas paziņojumu par lauka valīdumu.
    // setCustomValidity(errorMsg) saturēs kādu string ar paskaidrojošu tekstu.
    // šajā brīdī lauks iegūst pseidoklasei :invalid, kas gan netiek praktiski izmantota šajā piemērā.
    inputField.setCustomValidity(errorMsg);
    // reportValidity() liek parādīt šo kļūdas paziņojumu.
    inputField.reportValidity();
}


// Brīdī kad lietotājs sāk ievadīt vērtību, vēlamies atiestatīt lauka kļūdas stāvokli, ja tāds ir no neizdevušās validācijas pirms tam.
const resetErrorState = (event) => {
    let inputField = event.target;

    inputField.classList.remove("invalid");
    inputField.classList.remove("valid");
    inputField.setCustomValidity("");
}


// Uz submit pogas nospiešanu vēlamies izvadīt alert dialogā visus key/value paris no formas ievadlaukiem
const handleFormSubmit = (event) => {
    // tā kā noklusētā uzvedība click notikumam uz submit pogas ir sūtīt datus serverim un pārlādēt labu,
    // bet mūsu piemērā mēs vienkārši vēlamies parādīt alert dialogu ar vērtībām,
    // izsaucot event.preventDefault() mēs apturam noklusēto pogas uzvedību.
    event.preventDefault();
    let keyValuePairs = [];

    // 5. koda rindiņā esam izveidojuši mainīgo, kas satur visus ievadlaukus
    // ar forEach() ciklu iterēsim cauri katram no šī ievadlauku masīva elementiem un iegūsim tā vērtību un name atribūta vērtību
    formInputs.forEach((inputField) => {
        // tā kā mūs neinteresē iegūt submit pogas vērtību, ar !== pārliecinamies vai dotās iterācijas jeb cikla elements nav submit poga ar !== operatoru - jeb tag name(birkas nosaukums) nav vienāds ar "SUBMIT".
        if(inputField.tagName !== "BUTTON") {
             let valuePairString = `${inputField.name}: ${inputField.value}`;      
    
            keyValuePairs.push(valuePairString)
        }
    });

    // Lai labāk attēlotu masīva vērtības, pārvērtīsim visus masīva elementus par vienu kopēju string, izmantojot masīva join() metodi.
    // Un katru masīva elementu, izveidojot šo string, apvienosim ar ;
    alert(keyValuePairs.join("; "));
}

// EVENT HANDLERS
// 5. koda rindiņā esam izveidojuši mainīgo, kas satur visus ievadlaukus.
// Ar forEach() ciklu iterēsim caur katram elementam un piešķirsim tam event listener un funckiju ko izsaukt katram event.
// Tā kā mums nedaudz atšķirās notikumi un funkcijas ko izsaukt pie katra notikuma, izmantojam if(), else if() nosacījumus, lai pēc ievadlauka tga nema(birkas) nosaukuma saprastu kādu event listener pievienot.
formInputs.forEach((inputField) => {
    if(inputField.tagName !== "BUTTON" && inputField.tagName !== "SELECT") {
        inputField.addEventListener("input", resetErrorState);
        inputField.addEventListener("blur", validateField);
    } else if(inputField.tagName === "SELECT") {
        inputField.addEventListener("change", handlePoValidity);
    }
})
userForm.addEventListener("submit", handleFormSubmit)