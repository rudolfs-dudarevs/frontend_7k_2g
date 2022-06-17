let ticketNameInput = document.getElementById("name");
let ticketEmailInput = document.getElementById("email");
let ticketCountInput = document.getElementById("tickets-count-input")
let ticketCountEl = document.getElementById("tickets-count");
let decrementBtn = document.getElementById("decrement-btn");
let incrementBtn = document.getElementById("increment-btn");
let ticketsCount = document.getElementById("tickets-count-input");
let buyTicketsBtn = document.getElementById("buy-tickets-btn");

let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')

apik = "3045dd712ffe6e702e3245525ac7fa38";

function toCelcius(val){
    //kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.
    return (val - 273).toFixed(2)
}

fetch('https://api.openweathermap.org/data/2.5/weather?q=Tukums&appid='+apik)
  .then(response => response.json())
  .then(data => {
    let descrip = data['weather']['0']['description']
    let tempature = data['main']['temp']
    let wndspd = data['wind']['speed']
    temp.innerHTML = `${ toCelcius(tempature)} C`
    description.innerHTML = `${descrip}`
    wind.innerHTML = `${wndspd} km/h`
  })

buyTicketsBtn.addEventListener("click", () => {
    let ticketOrder = {
        name: ticketNameInput.value,
        email: ticketEmailInput.value,
        count: ticketCountInput.value
    }

    let orderJSON = JSON.stringify(ticketOrder);

    localStorage.setItem("ticketOrder", orderJSON);
})
decrementBtn.addEventListener("click", () => {
    if (ticketCountInput.value > 1) {
        ticketCountInput.value = Number(ticketCountInput.value) - 1;
    }

    ticketCountEl.innerText = ticketCountInput.value;
})
incrementBtn.addEventListener("click", () => {
    ticketCountInput.value = Number(ticketCountInput.value) + 1;
    ticketCountEl.innerText = ticketCountInput.value;
})