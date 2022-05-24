let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k,', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x,', 'y', 'z'];

let arrayId = prompt("Ievadiet skaitli no 0 lidz 26", );

let output = document.getElementById('main');
output.innerText = characters[arrayId];

let getValue = () => {
    arrayId = Number(prompt("Ievadiet skaitli no 0 lidz 25"));

    if (arrayId < 0 || arrayId > 25) {
        alert("Skaitlis nav no 0 līdz 25! Mēģini vēlreiz:");
        getValue();
    } else if (arrayId >= 0 && arrayId < 26) {
        printValues();
    } else {
        alert("Nav ievadīts skaitlis! Mēģini vēlreiz:");
        getValue();
    };
}

let printValues = () => {
    output.innerText = characters[arrayId];
}

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert("Pareizi!")
        console.log('yes');
        getValue();
    } else {
        alert("Nepareizi!")
        console.log('no');
    }
})