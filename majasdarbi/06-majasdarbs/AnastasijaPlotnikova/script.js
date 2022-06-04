let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

let arrayId;

let output = document.getElementById('main');

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert("pareizi");
        getValue();
    } else {
        alert("nepareizi");
    }
})

function getValue() {
 arrayId = prompt("Ievadiet skaitli no 0 lidz 26",);

    if (0 <= arrayId && characters.length > arrayId) {
        printValue();
    }
    else {
        alert("Ievadita vertiba nav pareiza, meginiet velreiz");
        getValue();
        
    }
}

function printValue() {
    output.innerText = characters[arrayId];
}

getValue();


