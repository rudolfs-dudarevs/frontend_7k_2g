let Burti = ['r', 'm', 'o', 's', 'i', 'u', 'n', 'h', 't', 'j'];
let burtuVieta = prompt("Ievadiet skaitli no 0 lidz 10");

let output = document.getElementById('main');
output.innerText = Burti[burtuVieta];

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === Burti[burtuVieta]) {
        console.log('pareizi');
        output.innerText = 'pareizi';
    } else {
        console.log('nepareizi');
        output.innerText = 'nepareizi';
    }
})
