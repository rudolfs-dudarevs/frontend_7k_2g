function checkZIP() {
    // Pievinot vel 3 valstis
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvijas ZIPs jābūt 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIPs jābūt 5 simboliem un jasakas ar LT-: e.g. LT-30001 or 30007" ],
      se : [ '^(SE-)?\\d{5}$', "Zviedrijas ZIPs jābūt 5 simboliem un jasakas ar LT-: e.g. SE-30001 or 30007" ],
      fi : [ '^(FI-)?\\d{5}$', "Lietuvas ZIPs jabut 5 simboliem un jasakas ar LT-: e.g. FI-30001 or 30007" ],
    };
  
    var country = document.getElementById("country").value;
    var ZIPField = document.getElementById("ZIPcode");
  
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
  };

function printValues() {
    // izveidtot tukšu masivu kura saglabam vertibas
  var formValues = [];
    // izmantojot getElementsByTagName('input') dabut visus ievadlaukus
  var formInputs = document.getElementsByTagName('input');
    // ar for ciklu priekš katra no vertibam var key in inputs
    // dabujam vertibas inputs[key].value    
    // ja value eksiste  
    // pievinojam vertibu masiva .push(value);
  for (var key in formInputs) {
    var value = formInputs[key].value;
    formValues.push(value);
  }
    // izvadam masivu vertibas uz ekrana alert();
  alert(formValues);
};

window.onload = function () {
  document.getElementById("country").onchange = checkZIP;
  document.getElementById("ZIPcode").oninput = checkZIP;
  document.getElementById("form").addEventListener('submit', printValues);

  //pievienot addEventListener priekš formas submit notikumam un izvadit funkciju printValues()
};