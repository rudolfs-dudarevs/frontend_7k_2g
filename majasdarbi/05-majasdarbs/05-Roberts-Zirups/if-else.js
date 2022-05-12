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

switch (new Date().getDay()) {
    case 1:
        text = "Pirmdiena";
        break;
    case 2:
        text = "Otrdiena";
        break;
    case 3:
        text = "Trešdiena";
        break;
    case 4:
        text = "Ceturdiena";
        break;
    case 5:
        text = "Piektdiena";
        break;
    case 6:
        text = "Sestdiena";
        break;
    case 7:
        text = "Svetdiena";
        break; 
  default:
    text = "Error";