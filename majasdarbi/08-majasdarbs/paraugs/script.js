function checkZIP() {
    // Pievinot vel 3 valsti
    var constraints = {
      lv : [ '^(LV-)?\\d{4}$', "Latvias ZIPs jabut 4 simboliem un jasakas ar LV-: e.g. LV-3001 or 3007" ],
    };
  
    // Read the country id
    var country = document.getElementById("Country").value;
  
    // Get the NPA field
    var ZIPField = document.getElementById("ZIP");
  
    // Build the constraint checker
    var constraint = new RegExp(constraints[country][0], "");
      console.log(constraint);
  
    // Check it!
    if (constraint.test(ZIPField.value)) {
      // The ZIP follows the constraint, we use the ConstraintAPI to tell it
      ZIPField.setCustomValidity("");
    }
    else {
      // The ZIP doesn't follow the constraint, we use the ConstraintAPI to
      // give a message about the format required for this country
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

window.onload = function () {
    document.getElementById("Country").onchange = checkZIP;
    document.getElementById("ZIP").oninput = checkZIP;
    document.getElementById("form").addEventListener('submit', printValues);
}