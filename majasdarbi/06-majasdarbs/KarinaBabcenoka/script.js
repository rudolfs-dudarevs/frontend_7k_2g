let characters = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let arrayId;
let ouput;

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
      alert('PAREIZI');
    } else {
      alert('NEPAREIZI');
    }
})

function getValue() {
  arrayId = prompt("Ievadiet skaitli no 0 lidz 26", );

  if (arrayId >= 0 && arrayId <= characters.length - 1) {
    printValue();
  } else {
    alert('NEPAREIZI');
    getValue();
  }
}

function printValue() {
  output = document.getElementById('main');
  output.innerText = characters[arrayId];
}

getValue();