let darbaDiena = "Ceturtdiena";

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

const expr = "Ceturtdiena";

switch (expr) {
    case "Pirmdiena":
        console.log("1")
        break;
    case "Otrdiena":
        console.log("2")   
        break;
    case "Trešdiena":
        console.log("3")
        break;
    case "Ceturtdiena":
        console.log("4")
        break;
    case "Piektdiena":
        console.log("5")
        break;
    case "Sestdiena":
        console.log("6")
        break;
    case "Svētdiena":
        console.log("7")   
        break;
    default:
        console.log("Error")   
}