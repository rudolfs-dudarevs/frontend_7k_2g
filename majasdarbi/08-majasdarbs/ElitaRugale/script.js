function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIP jābūt 5 simboliem un jāsākas ar LT-, piemēram, LT-30010 vai 30070"],
    };
  
    var country = document.getElementById("Country").value;
    var ZIPField = document.getElementById("ZIP");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // Parbaude
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
      // Izvada kļudas paziņojumu
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

function printValues() {
    // izveidtot tukšu masivu kura saglabam vertibas

    var formValues = [];

    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus

    var formInputs = document.getElementsByTagName('input');

    // ar for ciklu priekš katra no vertibam var key in inputs
    // dabujam vertibas inputs[key].value
    // ja value eksiste 
    // pievinojam vertibu masiva .push(value);

   for (var key in Inputs) {
    var value = Inputs[key].value;
    formValues.push(value);
  }
    // izvadam masivu vertibas uz ekrana alert();
    alert(formValues);
};

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;

    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
    
    document.getElementById("form").addEventListener('submit', printValues);
};