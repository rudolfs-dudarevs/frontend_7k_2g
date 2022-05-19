// lai regiģētu mājaslapas cookie, piekļūstam caur document.cookie
document.cookie = "username=Student123"; 

let cookies = document.cookie;
console.log("Cookies:", cookies);

// izveudot datuma objektu
let date = new Date();
console.log("Current date:", date);
// iestatīt datuma objektu kā šī brīža dienu + 5 dienas
date.setDate(date.getDate() + 5);
console.log("Expiry date:", date);

// iestatīt cookie derīguma termiņu
document.cookie = `username=Student123; expires=${date}`; 

// lai dzēstu cookie, jāiestate derīguma termiņš no pagājuša datuma
// iestatīt datuma objektu kā šī brīža dienu - 10 dienas
date.setDate(date.getDate() - 10);
console.log("Expired date:", date);
document.cookie = `username=Student123; expires=${date}`; 