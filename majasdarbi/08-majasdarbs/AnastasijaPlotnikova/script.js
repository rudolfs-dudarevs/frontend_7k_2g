function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv: [ '^(LV-)?\\d{4}$', "Latvian ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007"],
      ee: [ '^(EE-)?\\d{5}$', "Estonian ZIPs jabut 5 simboliem un jasakas ar EE-: e.g. EE-10112 or 10112"],
      lt: [ '^(LT-)?\\d{5}$', "Lithuanian ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. LT-02189 or 02189"],
      it: [ '^(IT-)?\\d{5}$', "Italian ZIPs jabut 5 simboliem un jasakas ar IT-: e.g. IT-24050 or 24050"],
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
  var matches = [];
    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
  var inputs = document.getElementsByTagName('input'); 
    // ar for ciklu priekš katra no vertibam var key in inputs
  for (var key in inputs) {
    // dabujam vertibas inputs[key].value
    var value = inputs[key].value;
    // ja value eksiste 
    // pievinojam vertibu masiva .push(value);
        matches.push(value);
    }  
    // izvadam masivu vertibas uz ekrana alert();
  alert(matches);
}

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    // pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
    document.getElementById("form").addEventListener('submit', printValues);
}

