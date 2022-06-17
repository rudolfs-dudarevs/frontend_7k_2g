// local variables:
let output   = document.getElementsByClassName("output")[0];
let equation = "";
let number   = "";
let id       = "";
let type     = "";
let mathCount = localStorage.length || 0


// button click:
let buttons = document.getElementsByClassName("btn");

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        id = this.getAttribute("data-id");
        type = this.getAttribute("data-type");

        switch (type) {
            case "clear":
                Clear();
                break;

            case "operator":
                Operator();
                break;

            case "symbol":
                Symbol();
                break;

            case "equal":
                Equal();
                break;

            default:
                Default();
                break;
        }
    }, false);
}

function SaveToLocalStorage(equation) {
    localStorage.setItem(mathCount , `${equation} = ${eval(equation)}`);
    mathCount = mathCount +1;
}

function LoadFromLocalStorage() {
    document.getElementById('history').innerHTML = ''

    if (localStorage.length > 0) {
        for(let i = 0; i < localStorage.length; i++) {
            document.getElementById('history').innerHTML += 
            `
                <li class="history__item">${localStorage.getItem(i)}</li>
            `
        }
    }
}

// clear:
function Clear() {
    number = "";
    equation = "";
    output.innerHTML = 0;
}


// operator:
function Operator() {
    equation += id;
    output.innerHTML = number + " " + id;
    number = "";
}


// symbol:
function Symbol() {
    number += id;
    equation += id;
    output.innerHTML = number;
}


// equal:
function Equal() {
    number = eval(equation);

    SaveToLocalStorage(equation)

    equation = number;
    output.innerHTML = number;

    LoadFromLocalStorage()
}


// default:
function Default() {
    number += id;
    equation += id;
    output.innerHTML = number;
}


// keyword enter:
document.addEventListener("keyup", function(event) {
    if (event.keyCode != 13) {
        for (let i = 0; i < buttons.length; i++) {
            let id = buttons[i].getAttribute("data-id");

            if (id == event.key) {
                buttons[i].click();
            }
        }
    }
    else {
        document.getElementById("equal").click();
    }
}, false);
