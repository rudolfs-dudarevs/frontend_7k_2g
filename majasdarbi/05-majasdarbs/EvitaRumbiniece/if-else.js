let darbaDiena = 'Piektdiena';

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

switch (darbaDiena) {
    case darbaDiena === "Pirmdiena":
        console.log('1')
        break;
        case darbaDiena === "Otrdiena":
        console.log('2')
        break;
        case darbaDiena === "Trešdiena":
        console.log('3')
        break;
        case darbaDiena === "Ceturtdiena":
        console.log('4')
        break;
        case darbaDiena === "Piektdiena":
        console.log('5')
        break;
        case darbaDiena === "Sestdiena":
        console.log('6')
        break;
        case darbaDiena === "Svētdiena":
        console.log('7')
        break;
        default:
        console.log('Error');
        break;   
}