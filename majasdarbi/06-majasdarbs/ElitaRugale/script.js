// Izveidot massīvu ar burtiem.
let characters = ['a','b','c','d','e','f','g','h','i','j','k,','l','m','n','o','p','q','r','s','t','u','v','w','x,','y','z'];

//let arrayId = prompt("Ievadiet skaitli no 0 lidz 25", );
let arrayId;

// Izveidot mainīgo "output". 
let output = document.getElementById('main');

// Izveidot funkciju getValue().
let getValue = () => {
    arrayId = prompt("Ievadiet skaitli no 0 lidz 25");
 
    if (isNaN(arrayId)) {
        alert("Ievadītā vērtība nav skaitlis! Mēģiniet vēlreiz.");
        getValue();
    }
     else if (arrayId >= 0 && arrayId < 25){
         printValues();
     }
     else {
         alert("Skaitlis nav intervālā no 0 līdz 25! Mēģiniet vēlreiz.");
         getValue();
     };
 }


  let printValues = () => {
    output.innerText = characters[arrayId];
}

//Izsaukt funkciju getValue().
getValue();

document.addEventListener("keypress", (eventObject) => {
    if (eventObject.key === characters[arrayId]) {
        alert('Pareizi')
        console.log('yes');
        getValue();
    } else {
        alert('Nepareizi')
        console.log('no');

    }
})
