let characters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x,', 'y', 'z'];

const quotes = ['We are the chempions :-)', 'Just do it!', 'Never let the fear of striking out keep you from playing the game!', 'You got to always look on the bright side of things!', 'There is nothing impossible to they who will try' ]

let arrayId = 0;
let output = document.getElementById('main');
let quotePlace = document.getElementById('quote');

let printValue = () => {
    quotePlace.innerText = 'Nospied uz klaviatūras zemāk redzamo simbolu!';
    output.innerText = characters[Number(arrayId) - 1];
    
}

let printQuote = () => {
    let k=Math.floor(Math.random() * 5);
    quotePlace.innerText = quotes[k]; 
}

printQuote();
let endBtn = document.getElementById("end-btn");
let startBtn = document.getElementById("start-btn");

startBtn.onclick = () => 
{
printQuote();
startBtn.style.display = 'none';
getValue();
endBtn.style.display = 'inline-flex';
}


endBtn.onclick = () => 
{
startBtn.style.display = 'none';
endBtn.style.display = 'none';
quotePlace.innerText='Atā!'
output.style.display = 'none';
}

// masīvā ir 26 burti - indeksi sanāk no 0 līdz 25 vai no 1 līdz 26. Lietotājam draudzīgāk ir pirmais alfabēta burts, ne nultais :-) tāpēc liku no 1-26 //

let getValue = () => {
    while (true) {
        printQuote ();
        arrayId = prompt("Ievadi skaitli no 1 lidz 26!");
        if (isNaN(Number(arrayId))) {
            alert("Tas nav skaitlis! Lūdzu, ievadi veselu skaitli no 1 lidz 26!");
        }
        else if (Number(arrayId) === 0) {
            alert("Nullīte vai NEKAS galīgi neder, vajag ko vairāk! :-)");
        }
        else if (Number(arrayId) < 1 || Number(arrayId) > characters.length) {
            alert("Ievadītais skaitlis nav robežās no 1 lidz 26! Pamēģini vēlreiz!");
        }
        else if (Number.isInteger(Number(arrayId))) {

            alert(`Labs darbs! Man patīk tavs skaitlis ${arrayId}! Tūliņ paskatīšos burtu masīvā :-) `);
            arrayId = Number(arrayId);
            printValue();
            break;
        }
        else {
            alert("Ievadītais skaitlis nav vesels skaitlis! Ievadi vēlreiz!");
        }
    }
}



document.addEventListener("keypress", (eventObject) => {
    printQuote();
    if (eventObject.key.toLowerCase() !== output.innerText) {
        alert(`Simbols '${eventObject.key}' nav īstais :-( Tev jānospiež klaviatūras taustiņš ar ekrānā redzamo burtu!`);
    }
    else {
        alert(`Tieši desmitniekā! PAREIZI! Spēlējam vēlreiz!`);
        getValue();
    }
})


