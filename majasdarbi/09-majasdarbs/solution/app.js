/* 
    Šajā majasdarba mes izveidosim nelielu aplikāciju, kura izvadīs uz ekrāna izvēlēto suņa šķirnes bildi.
    Apkskatiet DogApiDemo.mp4 

    Izmantosim API https://dog.ceo/dog-api/

    1)  Apskatiet failu data.js tur piejami visi dati par suņu šķirnēm.
        Mums ir piejajams <select id='dogSelector'> kurā nepiecišams pievienot vairākus <option value="value">name</option>
        Mēs varētu katru <option> elementu ierakstīt HTML, bet labak izmantot ciklu kurš izies cauri visiem datiem un izveidos mums nepiecišamos elementus

        Implementācija: 
        - Izvejdosim mainīgo dogSelector kurā saglabāsim mūsu <select> element var izmantot elementa id 'dogSelector' un getElementById() metodi
        - izveidosim funkciju renderDogData(data) kura saņems suņa šķirnes datus 
        - izmantojot cilku forEach() izesiem cauri datiem un pievienosim mūsu dogSelector elementam ar innerHTML nepiecišamo html:
            `<option value=${breed.value}>${breed.name}</option>`
        - izsaucam renderDogData() funkciju un rezultātā iegūsim visas iespejamāss suņu šķirnes iekš <select> elementa kā <options>.




    2)  Izmantojot addEventListener('change', getDogImg) notikumu priekš dogSelector elementa, piesaistam šim notikumam funkciju kura kā parametru saņemt suņa attēlu.

        Implementācija:
        - pievienojam addEventListener pie dogSelector uz un piesaistām tam funkciju getDogImg
        - pievinojam funkciju getDogImg
        - fukcijā izveidojam string tipa mainīgo, kas saturēs API url priekš konkrētās suņa šķirnes. Šajā string vērtībā dinamiski jāievieto suņa šķirnes nosaukums no <select> elementa value attiecīgajā URL daļā. 
            https://dog.ceo/api/breed/SUŅA-ŠKIRNE/images/random
        - iegūstam nepieciešamo suņa šķirnes nosaukumu, izmantojot elementa dogSelector.value
          tālak izmantojot fetch() metodi izvejdojam request priekš servera
            fetch(url)
                .then(response => response.json())
                .then(data => renderDogData(data))
                .catch(error => alert(error));



    3)  Izvadit suņa bildi 
        
        Implementācija:
        - izvedojam funkciju renderDogData() kurai kā parametru padosim mūsu data objektu 
        - ivejdosim vēl vienu selektoru lai dabūt mūsu dogImg elementu 
        - izmantojot innerHTML pievienot img tag ar src=${data.message}
*/



const dogSelector   = document.getElementById('dogSelector');
const dogimg        = document.getElementById('dogImg');

function renderSelectOptions(data) {
    data.forEach(breed => {
        dogSelector.innerHTML += `<option value=${breed.value}>${breed.name}</option>`
    })
} 

function renderDogData(data) {
    dogImg.innerHTML = `<img src='${data.message}'>`
}

function getDogImg() {
    const url = `https://dog.ceo/api/breed/${dogSelector.value}/images/random`;

    fetch(url)
        .then(response => response.json())
        .then(data => renderDogData(data))
        .catch(error => alert(error));
}

renderSelectOptions(data);
dogSelector.addEventListener('change', getDogImg);
