// definējam globālus mainīgos - tādus, kas būs pieejami pilnīgi no jebkuras metodes, vietas kodā.
let taskAdder;
let myTasksContainer;
let taskList;

// izmantojam onload notikumu, lai sagaidītu līdz DOM ir ielādēts 
// un varam tajā meklēt elementus un tos izmantot
window.onload = () => {
    // piešķiram globālajiem mainīgajiem vērtības, kas būs DOM atrastie HTML elementi
    taskInput = document.getElementById("taskInput");

    addBtn = document.getElementById('addBtn');
    console.log("Task adder element:", taskAdder);

    myTasksContainer = document.getElementById('myTasks');
    console.log("My task container:", myTasksContainer);

    taskList = JSON.parse(localStorage.getItem('taskList'));

    // veicam pārabaudi vai taskList ir ticis atrast local storgae
    // jeb vai taskList ir true Boolean kontekstā
    if(taskList) {
        // ja task list ir ticis atrast, varm neveikt darbību
        // šis gan nav labākais veids kā to pierakstīt, bet dotajam momentam saprotamāk/
        // zemāk ir izkomentēts labāks piemērs kā veikt šo pārbaudi
    } else {
        // ja taskList nav ticis atrast, izveidojam tukšu masīvu
        taskList = [];
    }

    // šajā piemērā ar !taskList mēs nosakām, ka if nosacījums izpildīsies tieši tad,
    // ja pārbaudāmā vertība būs false, nevis true kā parasti
    // if(!taskList) {
    //     taskList = [];
    // }

    console.log("Task list:", taskList);

    // pievienojam add pogai klausītāju uz klikšķi.
    // pirmais parametrs ir notikuma nosaukums 'click',
    // otrais ir funkcija, kura tiks izsaukta uz katru klikšķi
    addBtn.addEventListener('click', addTask);

    // attēlot sarakstu ar taskiem no masīva
    renderTasks();
}

// pievienot task objektu taskList masīvam, saglabāt izmaiņas local storage un attēlot izmai'bnas
const addTask = () => {
    console.log("Task description:", taskInput.value);

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
    taskList.splice(taskIndex,1);

    // saglabājam papildināto taskList masīvu local storage
    saveStorage();
    // tā kā taskList masīvā ir izmaiņas, tās nepieciešams attēlot lietotājam
    renderTasks();
}


// mainīt task statusu done starp true un false
const toggleDone = (event) => {
    // izveidojot katra jauna task HTML checkbox pogas atribūtā data-index ievietojām katra attiecīgā taskList masīva elementa indeksu jeb kārtas skaitli
    // nospiežot uz šīs checkbox, tas mums ir pieejama kā elements caur event.target
    // savukārt jebkura elementa data-... atribūtam varam piekļūt ar .dataset
    // tātad event.target.dataset.index - mums atgriezīs šo elementa kārtas skaitli
    taskIndex = event.target.dataset.index;

    // veicam pārbaudi vai konkretā task elementa status done = true
    if(taskList[taskIndex].done) {
        // ja esam nospieduši uz checbox taskam, kurš atzīmēts kā done - mainām tā done statusu uz false
        taskList[taskIndex].done = false;
    } else {
        // savukārt, ja esam nospieduši checkbox taksam, kurš nav atzīmēts kā done - mainām tā done statusu uz true
        taskList[taskIndex].done = true;
    }

    // saglabājam izmaiņas local storage
    saveStorage();
}

// saglabāt taskList masīvu local storage
const saveStorage = () => {
    localStorage.setItem('taskList' , JSON.stringify(taskList));
}

// izveidot un attēlot taskList masīva elementu HTML rezprezentācijas
const renderTasks = () => {
    // izveidojam tukšu masīvu, kas saturēs HTML kā string katram taskList masīva elementam
    let tasksToRender = [];

    // iterējam caur taskList masīvu ar forEach() ciklu
    taskList.forEach((item, i) => {
        // pārbaudām vai katra taskList masīva elementa satus ir done ir tru vai false
        // šo vērtību izmantosim, lai iestatītu checkbox stāvokli - checked vai nē
        let isTaskChecked = item.done ? "checked" : "";
        // mainīgais task satur HTML string formātā
        // data-index attribūtā gan checkbox, gan remove pogai norādām katra taskList masīva elementa indeksu jeb kārtas skaitli
        // ar šo indeksu varēsim identificēt konkrēto elementu un rediģēt tā stāvokli, spiežot uz checbox vai remove pogas
        // lai checbox būtu ieķeksēts, nepieciešams norādīt attribūtu "checked"
        let task = `
        <li class="list-group-item">
            <input class="form-check-input" onclick="toggleDone(event)" data-index="${i}" type="checkbox" ${isTaskChecked}>
            <span class="task-text">${item.taskText}</span>
            <button class="btn btn-secondary" onclick="removeTask(event)" data-index="${i}">Remove</button>
        </li>`;

        // kad HTML strings ir izveidots, ievietojam to tasksToRender masīvā
        tasksToRender.push(task);
    })

    console.log("Tasks to render:", tasksToRender);

    // lai apvienotu visus masīva elementus kā vienu kopīgu string un varētu to iestatīt innerHTML,
    // izmantojam masīvu metodi .join(), kur kā parametru norādām '', lai visi masīva element tiktu apvienoti bez jebkādām atstarpēm vai simboliem
    // mums būtu iespēja norādīt arī ';' un izveidot vienu string, kur katrs masīva elements atdalīts ar semikolu, bet tas šoreiz nebūtu pareizi
    // mums nepieciešams viens string no vairākiem stringiem, bet bez izmaiņām tajos
    myTasksContainer.innerHTML = tasksToRender.join('');
}