// alternatīva <srcipt></script> ievietošanai pirms </body> birkas, lai JavaScript būtu pieejams DOM
// ir izpildīt JavaScript uz window objekta notikuma "load", piešķirot onload īpašībai funckiju, ko izpildīt līdz ar load.
window.onload = () => {
    // dažādas metodes, lai piekļūtu DOM elementiem
    // sīkāku aprakstu par katru no šīm mmetodēm meklēt lekcijā, W3Schools vai citos resursos.
    console.log("Get DOM elements by id:", document.getElementById("keyboard-text-input"));
    console.log("Get DOM elements by class:", document.getElementsByClassName("mb-3"));
    console.log("Get DOM elements by tag name:", document.getElementsByTagName("div"));
    console.log("Get DOM elements by query selector:", document.querySelector(".mb-3"));
    console.log("Get DOM elements by query selector:", document.querySelectorAll(".mb-3"));

    // ar metodi getElementById() norādam DOM elementa id un to meklējam.
    // atrasto elementu piešķiram mainīgajam textInput kā vērtību.
    let textInput = document.getElementById("keyboard-text-input");
    let textOutput = document.getElementById("keyboard-text-output");

    console.log("Text input field:", textInput);
    console.log("Text output element:", textOutput);
    // varam apskatīt kāda atrastā elementa atribūta class visas vērtības ar tā īpašību classList
    console.log("Text output element classList", textOutput.classList);

    // kā arī varam rediģēt classList vērtības ar metodēm add() un remove(), pievienotjot vai noņemot kādu klasi
    textOutput.classList.add("font-weight-bold");
    textOutput.classList.remove("test-class");
    console.log("Text output element classList", textOutput.classList);

    // ar innerText varam ierakstīt kāda elementa saturu
    textOutput.innerText = "Hard coded text value.";
    // textOutput.innerText = "";

    // viens no veidiem kā reaģēt uz notikumiem(events) ir izmantojot elementa metodi addEventListener() un norādīt event uz kuru reaģēt.
    // pirmais addEventListener() metodes parametrs ir event, ko gaidām - "keypress" jeb taustiņa nospiešana.
    // otrais parametrs addEventListener() metodē ir callback funkcion jeb funkcija, kas tiks izsaukt līdz ar notikuma piefiksēšanu.
    textInput.addEventListener("keypress", (event) => {
        console.log("Keypress event object:", event.key);
        console.log("Typeof key value:", typeof event.key);
        console.log("Convert key to number:", Number(event.key));
        console.log("Check is converted key is NaN:", isNaN(Number(event.key)))

        // cenšamies nospiestā taustiņa vērtību pārvērst par skaitli (explicit coercion)
        // event.key vienmēr būs string tipa mainīgais. Ja uz tastatūras nospiedīsim skaitli - viss kārtībā, tas tiks konvertēts uz attiecīgo skaitli.
        // ja uz tastatūras nospiedīsim kādu burtu - konvertācija neizdosies un tiks atgriezta vērtība NaN.
        let convertedKeyValue = Number(event.key);

        // pārbaudam vai convertedKeyValue tiešām ir skaitlis vai tomēr NaN
        if (isNaN(convertedKeyValue)) {
            // event.preventDefault() metode aptur event callback funkcijas default uzvedību.
            // šajā gadījumā tas nozīmē, ka nepareiza vērtība netiks piešķirta kā input lauka vērtība
            // nospiežot taustiņu jeb events "keypress" vēl neiestata input vērtību, kas tiek attēlota lietotājam
            // šādi varam parūpēties, lai NaN vērtības un burti netiktu parādīti input laukā lietotājam.
            event.preventDefault();
            // alert() izveidot paziņojuma dialogu. Kā parametru šī metode saņemt tekstu, ko parādīt lietotājam.
            alert("Value is not a number. Please enter only digits.")
        } else {
            // piešķirtot innerHTML vērtību uz "keypress" event, mēs neiegūsim patieso input lauka vērtību, ko tā vēl nav iestatīta.

            // textOutput.innerHTML = convertedKeyValue;
            // textOutput.innerHTML = event.target.value;
        }
    })

    // oninput event nostrādā brīdī, kas input lauka vērtība ir tikusi mainīta. 
    // šis ir piemērotāks brīdis, lai iestatītu innerHTML vērtību.
    textInput.oninput = (event) => {
        console.log("Input event target value:", event.target.value);
        textOutput.innerHTML = event.target.value;
    };

    // atrodam pogu iekš DOM ar id vērtību show-prompt-btn, saglabājam to mainīgajā showPromptBtn
    let showPromptBtn = document.getElementById("show-prompt-btn");
    console.log("BTN", showPromptBtn)
    // klausāmies eventu "click" un izpildām onclick piešķirto funkciju
    showPromptBtn.onclick = () => {
        console.log("CLICK")
        let text;
        let favDrink = prompt("What's your favorite drink?");
    
        switch (favDrink) {
            case "Coca-Cola":
                text = "Excellent choice. Coca-Cola is good for your soul.";
                break;
            case "Pepsi":
                text = "Pepsi is my favorite too!";
                break;
            case "Sprite":
                text = "Really? Are you sure the Sprite is your favorite?";
                break;
            default:
                text = "I have never heard of that one..";
        }
    
        // innerHTML vērtība atbildīs switch iestatītajai vērtībai.
        textOutput.innerHTML = text;
    }
}