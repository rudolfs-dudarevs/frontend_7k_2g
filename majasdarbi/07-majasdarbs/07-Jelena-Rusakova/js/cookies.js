
document.cookie = "username=Student123";

let cookies = document.cookie;
console.log("Cookies:", cookies);


let date = new Date();
console.log("Current date:", date);

date.setDate(date.getDate() + 5);
console.log("Expiry date:", date);


document.cookie = `username=Student123; expires=${date}`;


date.setDate(date.getDate() - 10);
console.log("Expired date:", date);
document.cookie = `username=Student123; expires=${date}`; 