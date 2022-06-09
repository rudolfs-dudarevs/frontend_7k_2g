// Lai pārbaudītu api darbību, varam vienkārši izsaukt fetch() funkciju ar attiecīgo URL.
// Atvērt DevTools -> Network cilni un apskatīt requests.
fetch("https://randomuser.me/api/");

// aiz ? simbola iekš URL, sākam definēt filtrēšanas parametrus jeb search query
// katrs search query parametrs ir key/value pair. keyName=Value
// results=50 atgriezīs 50 ierakstus no datubāzes.
fetch("https://randomuser.me/api/?results=50");

// ar gender=female tiks atgriezti ieraksti ar sieviešu profilu datiem
fetch("https://randomuser.me/api/?gender=female")

// search query parametrus var kombinēt, izmantojot & simbolu
// šajā gadījumā results=50&gender=female atgriezīs 50 ierakstus ar sieviešu profilu datiem
fetch("https://randomuser.me/api/?results=50&gender=female")

// tā kā nezinām, kad saņemsim atbildi no servera, bet vēlamies turpināt pārējā koda izpildi
// varam izmantot to, ka fetch() metode atgriež Promise objektu. 
// Tas mums ļauj aiz fetch izmantot then() metdodi, kuras kods izpildīsies tikai, kad būsim ieguvuši atbildi no servera
fetch("https://randomuser.me/api/?results=50&gender=female").then((response) => {
    // tā kā atbilde no servera ir ReadableStream, jo dati tiek atgriezti nelielās daļās (chunks),
    // mums nepieciešams sagaidīt, kad visi dati tiks saņemti un tos pārvērst no JSON objekta uz Javascroipt objektu.
    // tad mēs izmantojam vēl vienu asinhronu metodi json(), kas arī atgriež Promise.
    return response.json();
}).then((data) => {
    // tā kā iepriekšējā then() metode atgriež return response.json() jeb json() metodes atgriezto vērtību,
    // varam turpināt then() ķēdīti un pievienot vēl vienu then(), kurā varēsim piekļūt json() atgrieztajiem datiem.
    // Kad Promise objekts ir izpildīts (resolved), tas vairs nav Promise objekts, bet gan gaidītā vērtība.
    console.log(data);
})

// definējam konstanti, kas būs API URL
const apiURL = "https://randomuser.me/api/";
// atrodam iekš mūsu HTML visus nepieciešamos elementus.
const submitBtn = document.getElementById("submit-btn");
const personGrid = document.getElementById("person-grid");

const genderInput = document.getElementById("gender");
const resultsInput = document.getElementById("results");
const nationalityInput = document.getElementById("nationality");

// funkcija, lai izveidotu un atgrieztu html elementu priekš personas kartītes konteinera
// šim elementam vēlāk pievienosim attēlu un tekstu
const createPersonCard = () => {
    const cardContainer = document.createElement("div");
    // izveidotajam elementam pievienojam CSS klasi, lai varētu to nofromēt.
    cardContainer.classList.add("person-card");

    return cardContainer
}

// funkcija, lai izveidotu un atgrieztu personas kartītes attēlu
// Funkcija sagaida vienu parametru, kas būs dati no API, kuros varam atrast attēla URL
const createImg = (data) => {
    const imgEl = document.createElement("img");
    // aplūkojam API atbildi un secinam, ka nepieciešamais url atrodās response objektā data.picture.large 
    imgEl.src = data.picture.large;
    imgEl.classList.add("person-image");

    return imgEl
}

// funkcija, lai izveidotu un atgrieztu personas kartītes pilnā vārda elementu
const createFullName = (data) => {
    const fullNameEl = document.createElement("p");
    fullNameEl.classList.add("person-name");
    // apvienojam no api atbildes laukus data.name.first un data.name.last vienā string mainīgajā
    fullNameEl.innerHTML = `${data.name.first} ${data.name.last}`;
    
    return fullNameEl   
}

// funkcijas, lai izveidotu un atgrieztu personas kartītes email elementu
const createEmail = (data) => {
    const emailEl = document.createElement("a");
    emailEl.classList.add("person-email")
    // tā kā esam izveidojuši <a> elementu, varam tam pievienot href atribūtu un norādīt tajā epasta adresi.
    emailEl.href = `mailto:${data.email}`;
    emailEl.innerHTML = data.email;

    return emailEl
}

// funkcija, lai izveidotu un atgrieztu elementu ar personas nacionalitāti
const createNationality = (data) => {
    const nationalityEl = document.createElement("p");
    nationalityEl.classList.add("person-nationality");
    nationalityEl.innerHTML = `Country: ${data.nat}`;

    return nationalityEl
}

// funkcija, lai apvienotu visus izveidotos HTML elementus
// funckija tiks izsaukt katram servera response objekta ierakstam un tiks izveidota personas kartīte.
const renderUserData = (data) => {
    // izmantojot iepriekš definētās funkcijas elementu izveidei,
    // saglabājam to atgrieztos rezultātus jeb HTML elementus iekš mainīgajiem.
    const personCard = createPersonCard();
    const img = createImg(data)
    const fullName = createFullName(data);
    const email = createEmail(data);
    const nationality = createNationality(data);
    
    // kad esam izveidojuši attiecīgās kartītes visus nepieciešamos elementus,
    // pievienojam tos personCard elementam.
    personCard.append(img);
    personCard.append(fullName);
    personCard.append(nationality);
    personCard.append(email);

    // kad person kard ir izveidots un satur visus elementus - attēls, vārds, nacionalitāte, epasts -,
    // pievienojam personas kartīti personGrid (definēts 36. koda līnijā)
    personGrid.append(personCard);
}


// funkcija, kas izveidos URL ar search query parametriem
const fetchPersonData = () => {
    // kaut arī mūsu API url jau ir saglabāts kā string, mainīgais,
    // labāk no tā izveidot jaunu URL objektu ar ko būs vieglāk mijiedarboties un papildināt.
    // tam varam izmantot klasi URL(), ko iznicializējot ar new URL(apiURL), iegūsim URL objektu. 
    const url = new URL(apiURL);

    // izveidojam objektu, kas satur no ievadlaukiem igūstās vērtības
    const queryParams = {
        gender: genderInput.value,
        results: resultsInput.value,
        nationality: nationalityInput.value
    }

    // lai pārvērstu queryParams objektu par search query string ar pareizo formatējumu,
    // izmantojam klasi URLSearchParams. To inicializējot ar new URLSearchParams(queryParams) iegūsim search query objektu.
    // tomēr to vēl ir nepieciešams pārvērst par string - izmantojam metodi toString().
    const searchParams = new URLSearchParams(queryParams).toString();
    // pievienojam izveidoto search query string mūsu URL objekta serach īpašībai
    url.search = searchParams;

    // fetch varam padot ne tikai URL string, bet arī mūsu izveidoto URL objektu,
    // kas satur nepieciešamos URL un search query, lai veiktu pareizu request serverim.
    fetch(url)
        .then(response => response.json())
        .then(data => {
            // pēc katra request atbildes saņemšanas, notīrām personGrid ar innerHTML kā tukšu string.
            personGrid.innerHTML = "";
            // tā kā API atgriež masīvu ar ierakstiem, iterējam tam cauri ar forEach ciklu
            // un katram ierakstam izsaucam funkciju renderUserData, kas izveidos personas katrīti un pievienos to iekš personGrid.
            data.results.forEach((result) => renderUserData(result))
        })
        // gluži kā try {} catch {} bloks no lekcijas par cikliem - varam sagaidīt arī kādu kļūdas paziņojumu no servera vai mūsu koda
        // un ar to apieties kontrolētā veidā, lai netiktu apturēta koda izpilde.
        .catch((error) => alert(error));
}

// pievienojam metodi fetchPersonData katram klikšķim uz submit pogas
submitBtn.addEventListener("click", fetchPersonData);