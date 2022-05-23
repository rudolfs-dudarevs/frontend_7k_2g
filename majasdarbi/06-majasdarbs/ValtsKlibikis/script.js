// Izveidot massīvu ar burtiem. Katrs elements ir viens burts.
let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

// Izveidot mainīgo "arrayId". Šis mainīgas saturēs lietotāja ievadīto skaitli prompt dialogā. 
let arrayId;

// Izveidot mainīgo "output".  Šis mainīgais satur DOM elementu kurš attēlos  izvēlēto burtu (izmantot getElementById(), lai atrastu un iegūtu šo elementu no DOM). 
let output = document.getElementById('main');


// Izveidot funkciju getValue(). Funkcijas īpašības:Nesaņem parametrus.

let getValue = () => {
// Izmantojot prompt() medoti (https://www.w3schools.com/jsref/met_win_prompt.asp), piešķirt prompt dialogā ievadīto vertību mainīgajam arrayId.   
    arrayId = prompt("Ievadiet skaitli no 0 lidz 25")
// Izveidot pārbaudi if else un pārliecināties, ka ievietotais skatlis pieder intervālam no 0 līdz characters.lenght - 1. 
//Jeb ievadītais skaitlis nepārsniedz pēdējā masīva elementa indeksu.  
    if(arrayId >= 0 && arrayId < (characters.length)-1){
        printValue();
    }
// Kļūdas rezultātā, ja promt dialogā ievadītā vērtība nv valīda, izvadīt kļūdas paziņojomu. Pēc tam izsaukt funkciju getValue() vēlreizi. 
    else{
        alert("Value is not valid. Please enter only digits from 0 to 25.")
        getValue();
    }

}
// Izveidot funkciju printValues(). Funkcijas īpašības:  Nesaņem parametrus.
let printValue = () =>{
// Izmaina jau definētā mainīgā output teksta vērtību (innerText) ar izvēlēto burtu no masīva (characters[arrayId]). 
output.innerText = characters[arrayId];
}

//Izsaucam funkciju getValue() .
getValue();

// Pievienot klausītāju(event listener) notikumam keyPress un parbaudīt no nospiestā taustiņa vērtību ar izvēleto vertību.  
document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert("PAREIZI!")
        console.log('yes');
        getValue();
    } else {
        alert("NEPAREIZI!")
        console.log('no');
    }
})




