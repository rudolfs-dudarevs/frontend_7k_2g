function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIPs jābūt 5 simboliem un jasakas ar LT-: e.g. LT-00001 or 60001" ],
      ee : [ '^(EE-)?\\d{5}$', "Zviedrijas ZIPs jābūt 5 simboliem un jasakas ar EE-: e.g. EE-10000 or 15000" ],
      fin : [ '^(FIN-)?\\d{5}$', "Zviedrijas ZIPs jābūt 5 simboliem un jasakas ar FIN-: e.g. FIN-00001 or 70000" ],
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
  var matches = [];
    var inputs = document.getElementsByTagName('input');

    for(var key in inputs) {
        var value = inputs[key].value;
        matches.push(value);
    }

    alert(matches);
}
    // izveidtot tukšu masivu kura saglabam vertibas
    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
      // ar for ciklu priekš katra no vertibam var key in inputs
    
    // dabujam vertibas inputs[key].value
    
    // ja value eksiste 
    
    // pievinojam vertibu masiva .push(value);

    // izvadam masivu vertibas uz ekrana alert();

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;

    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
    document.getElementById("form").addEventListener('submit', printValues);
}
