// definējam globālus mainīgos 
let taskAdder;
let myTasksContainer;
let taskList;


// izmantojam onload notikumu, lai sagaidītu līdz DOM ir ielādēts 
window.onload = () => {

    // piešķiram globālajiem mainīgajiem vērtības, kas būs DOM atrastie HTML elementi
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById('addBtn');
    myTasksContainer = document.getElementById('myTasks');

    taskList = JSON.parse(localStorage.getItem('taskList'));

    // ja taskList nav atrasts (nav local storage), izveidojam tam tukšu masīvu
    if (!taskList) {
        taskList = [];
    }

    // pievienojam add pogai klausītāju uz klikšķi.
    addBtn.addEventListener('click', addTask);

    // pievienojam opciju ievadīt uzdevumus arī ar Enter taustiņa nospiešanas notikumu taskInput laukā
    taskInput.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            addTask()
        }
    });

    // attēlot sarakstu ar uzdevumiem no masīva
    renderTasks();
}

// izveidojam jaunu task objektu, pievienojam to taskList masīvam, saglabājam izmaiņas local storage un attēlojam lietotājam uz ekrāna
const addTask = () => {
    //ja tukšs uzdevums, neļaujam tādu uzdevumu saglabāt
    if (!taskInput.value) {
        alert('Ievadi uzdevuma aprakstu!');
        return;
    }

    // objekta reprezentācija katram jaunizveidotajam task
    const task = {
        taskText: taskInput.value,
        done: false
    }

    // pēc task objekta izveides notīrām inputa lauka vērtību
    taskInput.value = "";
    // ieliekam task masīvā taskList
    taskList.push(task);
    // saglabājam papildināto taskList masīvu local storage
    saveStorage();
    // tā kā taskList masīvā ir izmaiņas, tās nepieciešams attēlot lietotājam
    renderTasks();
}

// izņemt task no taskList masīva, saglabāt izmaiņas local storage un attēlot izmaiņas
const removeTask = (event) => {
    // izveidojot katra jauna task HTML remove pogas atribūtā data-index ievietojām katra attiecīgā taskList masīva elementa indeksu jeb kārtas skaitli
    // nospiežot uz šīs pogas, tā mums ir pieejama kā elements caur event.target
    // savukārt jebkura elementa data-... atribūtam varam piekļūt ar .dataset
    // tātad event.target.dataset.index - mums atgriezīs šo elementa kārtas skaitli
    let taskIndex = event.target.dataset.index;
    // ar iegūto indeksu varam atrast konkrēto elementu taskList masīvā 
    // un ar metodi splice() to izgriezt no masīva
    // splice() saņemt divus parametrus - 1. kur sākt griezt, 2. cik elementus griezt
    // šajā gadījumā norādām, ka sākt griezt līdz ar dzēšamā elementa indeks un izgriezt tikai 1 elementu
    taskList.splice(taskIndex, 1);

    // saglabājam papildināto taskList masīvu local storage
    saveStorage();
    // tā kā taskList masīvā ir izmaiņas, tās nepieciešams attēlot lietotājam
    renderTasks();
}



// ļauj rediģēt uzdevumu - kad nospiež rediģēšanas ikonu, nofokusē ievadi uz konkrētā uzdevuma aprakstu un padara to contentEditable
const editTask = (event) => {
    let taskIndex = event.target.dataset.index;
    const taskDescription = document.getElementById(`task${taskIndex}`);
    taskDescription.contentEditable = "true";
    
       // ja rediģējot tiek  nospiests Enter taustiņš
       taskDescription.addEventListener("keypress", function (event) {
        if (event.key === "Enter") {
            changeItemText(event)
        }
    });


    setTimeout(function () {
        taskDescription.focus();
  
    }, 0);

}

// piefiksē, kad rediģēšana pabeigta (onblur notikums), pārbauda, vai nav tukšums, saglabā izmaiņas attiecīgā uzdevuma aprakstā, deaktivizē contentEditable īpašību un visu atjauno

const changeItemText = (event) => {
    
    let taskIndex = event.target.dataset.index;
    const taskDescription = document.getElementById(`task${taskIndex}`);

    if (!taskDescription.innerText) {
        alert('Uzdevuma apraksta lauks nevar būt tukšs! Izmaiņas netiks saglabātas.');

        // uzliekam atpakaļ iepriekšējo tekstu 
        //par šo es domāju - kā labāk tikt pie iepriekšējā teksta...  bet nu neizdomāju neko labāku kā vēlreiz attēlot visus taskus uz ekrāna
        renderTasks();
        taskDescription.contentEditable = "false";
    }
    else {
        taskList[taskIndex].taskText = taskDescription.innerText;
        taskDescription.contentEditable = "false";
        saveStorage();
    };
}

// mainīt task statusu done starp true un false, classList taskdone maina krāsiņu izpildītīem/neizpildītiem uzdevuemiem
const toggleDone = (event) => {
    taskIndex = event.target.dataset.index;
    task = document.getElementById(`task${taskIndex}`);

    // veicam pārbaudi vai konkretā task elementa status done = true
    if (taskList[taskIndex].done) {
        // ja esam nospieduši uz checbox taskam, kurš atzīmēts kā done - mainām tā done statusu uz false
        taskList[taskIndex].done = false;
        task.classList.remove("taskdone");
    } else {
        // savukārt, ja esam nospieduši checkbox taskam, kurš nav atzīmēts kā done - mainām tā done statusu uz true
        taskList[taskIndex].done = true;
        task.classList.add("taskdone");
    }

    saveStorage();
}

// saglabāt aktuālo taskList masīvu masīva elementu HTML rezprezentācijas iekš local storage
const saveStorage = () => {
    localStorage.setItem('taskList', JSON.stringify(taskList));
}

// izveidot un attēlot taskList masīva elementu HTML rezprezentācijas
const renderTasks = () => {
    // izveidojam tukšu masīvu, kas saturēs HTML kā string katram taskList masīva elementam
    let tasksToRender = [];

    // mainīgais task jāveido kā HTML string formātā

    // iterējam caur taskList masīvu ar forEach() ciklu
    taskList.forEach((item, i) => {
        // pārbaudām  katra taskList masīva elementa satusu - vai konkrēts task ir done ir true vai false
        let isTaskChecked = item.done ? "checked" : "";

        // pievonojam klasi taskdone - zaļa krāsa pabeigtajiem uzdevumiem
        let doneclass = item.done ? "taskdone" : "";

        // data-index pievienojam gan checkbox, gan remove un edit ikonām, un paša uzdevuma teksta laukam - tas ļaus iegūt taskList masīva elementa indeksu jeb kārtas skaitli
        // ar šo indeksu varēsim identificēt konkrēto elementu un rediģēt tā stāvokli, spiežot uz checbox vai remove un edit ikonām, vai teksta lauka - lai varētu drag-and-drop veikt
        // pievienojam visus atribūtus un notikumu rekcijas

        let task = `
        
        <li class="list-group-item">
            <input class="form-check-input" 
            onclick="toggleDone (event)" data-index="${i}" type="checkbox" ${isTaskChecked} >
            <span class="task-text ${doneclass}"
            draggable="true"
        ondragstart="drag (event)"
        ondrop="drop (event)"
        ondragover="allowDrop (event)"
        id="task${i}" 
        data-index="${i}"
        contentEditable = "false" onblur="changeItemText (event)">
        ${item.taskText}
        </span>
        <span data-tooltip="rediģēt"><i class="fa-solid fa-pen-to-square fa-lg" onclick="editTask(event)" data-index="${i}"></i></span>
        <span data-tooltip="dzēst"><i class="fa-solid fa-trash-can fa-lg" onclick="removeTask (event)" data-index="${i}"></i></span>
        </li>
        `;
        // kad HTML strings ir izveidots, ievietojam to tasksToRender masīvā
        tasksToRender.push(task);
    })


    // lai apvienotu visus masīva elementus kā vienu kopīgu string un varētu to iestatīt innerHTML,
    // izmantojam masīvu metodi .join(), kur kā parametru norādām '', lai visi masīva element tiktu apvienoti bez jebkādām atstarpēm vai simboliem
    // mums būtu iespēja norādīt arī ';' un izveidot vienu string, kur katrs masīva elements atdalīts ar semikolu, bet tas šoreiz nebūtu pareizi
    // mums nepieciešams viens string no vairākiem stringiem, bet bez izmaiņām tajos
    myTasksContainer.innerHTML = tasksToRender.join('');
}


//ļauj iemest (ievilkt) elementā saturu
function allowDrop(ev) {
    ev.preventDefault();
}

// piefiksē pārvilkšanai paņemto elementu
function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);

}
// apstrādā paņemtā satura "nomešanu" vajadzīgajā vietā un task saraksta pārstrukturēšanu
function drop(ev) {
    ev.preventDefault();

    //pārvietojamais task elements
    const data = ev.dataTransfer.getData("text");
    const taskToMove = document.getElementById(data);

    // droši vien labāk par skaitli pārvērst - for ciklam
    const taskToMoveIndex = parseInt(taskToMove.dataset.index);

    // task elements, uz kura nostrādā drop events - pirms šī elemeta task sarakstā liksim pārvietojamo task elementu 
    const targetTask = document.getElementById(ev.target.id);
    const moveBeforeIndex = parseInt(targetTask.dataset.index);

    // ev.target.appendChild(document.getElementById(data))- šis bija piemērā, kurā skatījos drag-and-drop, bet īsti neder manam gadījumam

    //maina task masīva uzdevumu secību - gadījumā, ja uzdevumu velk zemāk sarakstā. Maina vietām divus task elementus pa vienam solītim - no augšas uz leju
    if (taskToMoveIndex < moveBeforeIndex) {
        for (let i = taskToMoveIndex; i < moveBeforeIndex - 1; i++) {
            [taskList[i], taskList[i + 1]] = [taskList[i + 1], taskList[i]]
        }
    };
    //maina task masīva uzdevumu secību - gadījumā, ja uzdevumu velk augstāk sarakstā. Maina pa vienam - no lejas uz augšu
    if (taskToMoveIndex > moveBeforeIndex) {
        for (let i = taskToMoveIndex; i > moveBeforeIndex; i--) {
            [taskList[i], taskList[i - 1]] = [taskList[i - 1], taskList[i]]
        }
    };

    saveStorage();
    // uzreiz attēlojam izmainito sarakstu
    renderTasks();
}


