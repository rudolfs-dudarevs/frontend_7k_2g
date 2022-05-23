let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arrayId = 0;
let output = document.getElementById('main');

let getValue = () => {
    arrayId = Number(prompt("Ievadiet skaitli no 0 līdz 25"));
    if (isNaN(arrayId)) {
        alert("Ievadītā vērtība nav skaitlis. Mēģiniet vēlreiz.");
        getValue();
    };

    if (arrayId >= 0 && arrayId <= characters.length - 1) {
        printValue();
    } else {
        alert("Ievadītais skaitlis nav intervālā no 0 līdz 25. Mēģiniet vēlreiz.");
        getValue();
    };
}

let printValue = () => {
    output.innerText = characters[arrayId];
}

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert('pareizi');
        getValue();
    } else {
        alert('nepareizi');
    }
})