let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

let arrayId = prompt("Ievadiet skaitli no 0 lidz 26", );

let output = document.getElementById('main');
output.innerText = characters[arrayId];

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        console.log('yes');
    } else {
        console.log('no');
    }
})




