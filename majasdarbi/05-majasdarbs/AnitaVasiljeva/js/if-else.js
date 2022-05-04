const darbaDiena = 'Trešdiena';

if (darbaDiena === 'Pirmdiena') {
    console.log('1');
} else if (darbaDiena === 'Otrdiena') {
    console.log('2');
} else if (darbaDiena === 'Trešdiena') {
    console.log('3');
} else if (darbaDiena === 'Ceturtdiena') {
    console.log('4');
} else if (darbaDiena === 'Piektdiena') {
    console.log('5');
} else if (darbaDiena === 'Sestdiena') {
    console.log('6');
} else if (darbaDiena === 'Svētdiena') {
    console.log('7');
} else {
    console.log('Error');
}

/* pie reizes vajadzētu pielikt arī to, ka nav svarīgi lielie/mazie burti :-) */
/* un parbaudīt vairākām dienām uzreiz */
const darbaDienas = ['SVĒTDIENA', 'otrDiena', 'Trešdiena', 'SESTdiena', 'piektdiena', 'CITAdiena','ceTurTdiena', 'pirmDIENA'];

for (let i = 0; i < darbaDienas.length; i++) {
    switch (darbaDienas[i].toLowerCase()) {
        case 'pirmdiena':
            console.log(`${darbaDienas[i]} - 1`);
            break;
        case 'otrdiena':
            console.log(`${darbaDienas[i]} - 2`);
            break;
        case 'trešdiena':
            console.log(`${darbaDienas[i]} - 3`);
            break;
        case 'ceturtdiena':
            console.log(`${darbaDienas[i]} - 4`);
            break;
        case 'piektdiena':
            console.log(`${darbaDienas[i]} - 5`);
            break;
        case 'sestdiena':
            console.log(`${darbaDienas[i]} - 6`);
            break;
        case 'svētdiena':
            console.log(`${darbaDienas[i]} - 7`);
            break;
        default:
            console.log(`${darbaDienas[i]} - tādas dienas nav!`);
            break;
    };
}