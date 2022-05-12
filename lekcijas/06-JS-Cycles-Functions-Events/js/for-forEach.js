// šis for cikls izpildīsies 10 reizes
// sintaktiski for cikls ir ļoti līdzīgs for cikliem citās programēšanas valodās
// izteiksme 1 - tiek deklarēts mainīgais cikla izveides brīdī
// izteiksme 2 - nosacījums pie kura cikls pārstāj darboties
// izteiksme 3 - darbība, kas tiek veikta pēc katra cikla
// i++ ir saīsināts pieraksts izteiksmei i = i + 1;
for(let i = 0; i < 10; i++) {
    console.log("Current index:", i);
};
console.log("");
// for loops, kurš sāk ar i vērtību 10 un samazina to par 1 pēc katras iterācijas(cikla)
for(let i = 10; i > 0; i--) { 
    console.log("Current index:", i);
};

let frontendTools = ["CSS", "HTML", "JS", "React", undefined, "Angular"];

// masīva elementiem varam piekļūt manuāli, ārpus cikla. Norādot masīvu un elementa indeksu, kuram vēlamies piekļūt. 
// tomēr tas ir neuzturams kods un laikietilpīgi, ja ir jāveic darības ar katru masīva elementu.

// console.log("Array element index 0:", frontendTools[0]);
// console.log("Array element index 1:", frontendTools[1]);
// console.log("Array element index 2:", frontendTools[2]);

// for cikls, kurš iterē cauri katram masīva elementam un pārvērš tā string elementus uz mazajiem burtiem
// nosacījums pie kura cikls beidz darboties - i < frontendTools.length. Jeb ne vairāk reizes kā masīvā ir elementu.
for(let i = 0; i < frontendTools.length; i++) {
    console.log(`Array element index ${i}:`, frontendTools[i]);
    
    // if(typeof frontendTools[i] === "string") {
    //     frontendTools[i] = frontendTools[i].toLowerCase();
    //     console.log("Element after text transformation:", frontendTools[i]);
    // } else {
    //     console.log(`Element ${i} is not a string:`, frontendTools[i])
    // }

    // boolean kontekstā string vērtība ar jebkādu tekstu ir true. 
    if(frontendTools[i]) {
        // aizvietojam dotās iterācijas elementu ar tieši šo pašu elementu, bet pārvērstu uz mazajiem burtiem.
        // i vērtība vienmēr norādīs uz iterācijas kārtas skaitli un līdz ar to arī masīva elementa kārtas skaitli jeb indeksu.
        frontendTools[i] = frontendTools[i].toLowerCase();
        console.log("Element after text transformation:", frontendTools[i]);
    } else {
        // gadījumā, ja masīva elements boolean kontekstā ir false - izvadīt kļūdas paziņojumu.
        console.log(`Element ${i} is not a valid value:`, frontendTools[i])
    }

    console.log("");
};

// tikai pēc iepriekš nodefinētā for cikla pilnas izpildes izvadīsies šis console.log(). 
// Proti, pirms tam katrs masīva elements būs formatēts.
console.log("Frontend tools lower-case:", frontendTools);


// darbam ar masīviem ir pieejams ērtāks cikls - forEach().
// šis cikls iterēs caur katru masīva elementu un līdz ar katru elementu izpildīs definēto kodu.
// šis cikls kā parametu saņem funkciju ko izpildīt pie katra masīva elementa. (callback function)
// savukārt funkcija, kas ir kā parametrs cikla - saņem parametru no cikls, kas ir aktuālais nākamais masīva elements.
// parametrus funkcijām var nosaukt brīvi, pēc ieskatiem.
frontendTools.forEach((item) => {
    console.log("Array element:", item);
});

// otrais parametrs ko saņems cikla funkcija (callback function), ja šis parametrs ir norādīts - aktuālā elementa indeks masīvā.
frontendTools.forEach((item, i) => {
    console.log(`Array element index ${i}:`, item);
});

// analogs piemērs for ciklam 27 rindiņā, bet ar forEach() cikla metodi.
frontendTools.forEach((item, i) => {
    console.log(`Array element index ${i}:`, item);

    if(item) {
        frontendTools[i] = item.toLowerCase();
    } else {
        console.log(`Element ${i} is not a string:`, item);
    }    

    console.log("Element after text transformation:", frontendTools[i]);
});

console.log("Frontend tools lower-case:", frontendTools);

// šis ir nested loop jeb cikls iekš cikla.
// pie katra frontendTools masīva elementa tiks izpildīts for cikls 10 reizes.
frontendTools.forEach((item) => {
    console.log("frontendTools array item", item);

    for(let i = 0; i < 10; i++) {
        console.log("Nested loop iteration:", i + " - " + item);
    };
    console.log("");
});
