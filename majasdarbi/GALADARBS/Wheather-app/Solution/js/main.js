let inputval = document.querySelector('#cityinput')
let btn = document.querySelector('#add');
let city = document.querySelector('#cityoutput')
let descrip = document.querySelector('#description')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind')


apik = "3045dd712ffe6e702e3245525ac7fa38"

function toCelcius(val){
    //kelvin to celcious. 1 Kelvin is equal to -272.15 Celsius.
    return (val - 273).toFixed(2)
}

btn.addEventListener('click', function(){
  fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputval.value+'&appid='+apik)
  .then(response => response.json())
  .then(data => {
    let descrip = data['weather']['0']['description']
    let tempature = data['main']['temp']
    let wndspd = data['wind']['speed']
    temp.innerHTML = `Temperature: <span>${ toCelcius(tempature)} C</span>`
    description.innerHTML = `Sky Conditions: <span>${descrip}<span>`
    wind.innerHTML = `Wind Speed: <span>${wndspd} km/h<span>`
  })

  .catch(err => alert('You entered Wrong city name'))
})
