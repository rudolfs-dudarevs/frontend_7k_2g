let Diena = "Piektdiena";

// mistiski, bet ja uzlieku darbaDiena - man console met ārā error Uncaught SyntaxError: Identifier 'darbaDiena' has already been declared (at switch.js:1:1)
// tapēc lai strādātu switch.js pārsaucu par DIENA

switch (Diena) {
    case "Pirmdiena":
        console.log("1");
        break;
    case "Otrdiena":
        console.log("2");
        break;
    case "Trešdiena":
        console.log("3");
        break;
    case "Ceturtdiena":
        console.log("4");
        break;
    case "Piektdiena":
        console.log("5");
        break;
    case "Sestdiena":
        console.log("6");
        break;
    case "Svētdiena":
        console.log("7");
        break;
    default:
        console.log("Error");
        break;
};