let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k,', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let arrayId = prompt("Ievadi skaitli no 0 lidz 25");

let output = document.getElementById('main');
output.innerText = characters[arrayId];

let getValue = () => {
    arrayId = Number(prompt("Ievadi skaitli no 0 lidz 25"));

    if (arrayId < 0 || arrayId > 25) {
        alert(`Nav pareizi ${arrayId} kaut ko sajauci! Teicu no 0 līdz 25! Atkārto!`);
        getValue();
    } else if (arrayId >= 0 && arrayId < 25) {
        printValues();
    } else {
        alert("Nu, nu! Nezini kas ir skailis? Mēģini atkal!");
        getValue();
    };
}

let printValues = () => {
    output.innerText = characters[arrayId];
    alert (`Vai zini, kāds burts atbilst šim skaitlim? ${arrayId} ?`)
}

getValue();

document.addEventListener("keypress", (eventObject) => {
  if (eventObject.key === characters[arrayId]) {
    alert('O, sanāca!');
  } else {
    alert('GARĀM');
  }
})