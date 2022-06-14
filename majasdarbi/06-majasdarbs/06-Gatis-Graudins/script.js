let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k,', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

let arrayId = prompt("Ievadiet skaitli no 0 lidz 25");

let output = document.getElementById('main');
output.innerText = characters[arrayId];

let getValue = () => {
    arrayId = Number(prompt("Ievadiet skaitli no 0 lidz 25"));

    if (arrayId < 0 || arrayId > 25) {
        alert(`Tavs skaitlis ${arrayId} nav robežās no 0 līdz 25! Mēģini vēlreiz!`);
        getValue();
    } else if (arrayId >= 0 && arrayId < 25) {
        printValues();
    } else {
        alert("Nemānies, tas nav skaitlis!");
        getValue();
    };
}

let printValues = () => {
    output.innerText = characters[arrayId];
    alert(`OK, tūlīt apskatīsiemies, kādam burtam atbilst skaitlis ${arrayId} ?`)
}

getValue();

// alert (`nospied taustiņu`)

// let showPrompt = alert("nospied uz klaviatūras šo burtu") .... tā ar neatkodu, kā likt
// pēc burta izvades, lai paziņojuma logā būtu uzraksts - tagad nospied uz klaviatūras šo burtu?

document.addEventListener("keypress", (eventObject) => {

    if (eventObject.key === characters[arrayId]) {
        alert("Pareizi!")
        getValue();
    } else {
        alert("Nepareizi!")
        getValue();
    }
})