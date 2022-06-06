function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvijas ZIP jābūt 4 simboliem un jāsākas ar LV-, piemēram, LV-3001 vai 3007" ],
      lt : [ '^(LT-)?\\d{5}$', "Lietuvas ZIP jābūt 5 simboliem un jāsākas ar LT-, piemēram, LT-30010 vai 30070"],
      ee : [ '^([0-9]{5})$', "Igaunijas ZIP jābūt 5 cipariem, piemēram, 30010"],
      fi : [ '^([0-9]{5})$', "Somijas ZIP jābūt 5 cipariem, piemēram, 30010"]
    };
  
    var country = document.getElementById("valsts").value;
    var ZIPField = document.getElementById("zip");
  
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // Pārbaude
    if (constraint.test(ZIPField.value)) {
      ZIPField.setCustomValidity("");
    }
    else {
      // Izvada kļudas paziņojumu
      ZIPField.setCustomValidity(constraints[country][1]);
    }
  }

function printValues() {
      var formValues = [];
      var inputs = document.getElementsByTagName('input');
    for(var key in inputs) {
      if(inputs[key].value) {
        formValues.push(inputs[key].value)
      };
    };
    let formValuesText = formValues.join(", ");
    alert(formValuesText);
}

document.getElementById("valsts").onchange = checkZIP;
document.getElementById("zip").oninput = checkZIP;
document.getElementById("form").addEventListener("submit", printValues)