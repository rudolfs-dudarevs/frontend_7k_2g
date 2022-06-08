const characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
let arrayId = 0;
let output = document.getElementById('main');

let getValue = () => {
    arrayId = Number(prompt("Ievadiet skaitli no 1 lidz 26"));
        if (isNaN(arrayId)) {
        alert("Ievadītā vērtība nav skaitlis!");
        getValue();
    } else if (arrayId >= 0 && arrayId <= characters.length + 1) {
        printValues();
    } else {
        alert("Ievadītā vērtība nav intervālā no 1-26!");
        getValue();
    };
}

let printValues = () => {
    arrayId -= 1;
    output.innerText = characters[arrayId];
};

getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        console.log('yes');
        alert(`Bingo!`)
    } else {
        console.log('no');
        alert(`Pamēģini vēl reiz!`)
    }
})




