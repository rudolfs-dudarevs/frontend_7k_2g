// TODO app (dienas plānotajs)
// Nokopējiet šo mapi savā mājas darba mapē VardsUzvards
// Aplikācijas darbības principu var apskatit video appDemo.mp4

/* Mums nepieciešams izviedot nelielu todo aplikaciju ar iespēju pievienot, izdzēst un atzīmēt izdarīto ierakstu
    Mums nepieciešams 4 funkcijas
        addTask() - pievienot notikumu
            1 - iegūt input lauka vērtību
            2 - izveido object priekš ieraksta, kas satur input vērtību un done statu
            3 - izsaukt funkciju saveToLocalStorage
            4 - izsaukt renderTasks() funkciju

        saveToLocalStorage() - saglabā ierakstu
            1 - jāizmanto JSON.stringify
            2 - jāsaglabā masīvs ar ierakstiem taskList

        renderTask() - izvada sarakstu notikumu
            1 - jāizmanto innerHTML
            2 - jāizmanto vienu no cikliem lai iziet cauri visam localstorage taskList ierakstiem
            3 - šis html palidzes izvadit datus
                    `<li class="list-group-item">
                        <input class="form-check-input" onclick="toggleDone(event)" data-index="${i}" type="checkbox" ${isTaskChecked}>
                        <span class="task-text">${item.taskText}</span>
                        <button class="btn btn-secondary" onclick="removeTask(event)" data-index="${i}">Remove</button>
                    </li>`;`;
            4 - Gadijuma ja elements ir apziments ka izdarits mums nepiecišams to atzīmēt vizuāli. Ja izmantojam checkbox, tad ar checked atribūtu
                Lidz ar to nepieciešams izveidot parbaudi if else lai parbaudit task.done === 'true'

        toggleDone() - atzimet ka izdarito
            1 - nomainam elementam done vertibu done: false --> done: true un izsaucam renderTask funkciju lai atjauno sarakstu


*/
let taskAdder;
let myTasksContainer;
let taskList;

window.onload = () => {
    // piešķiram globālajiem mainīgajiem vērtības, kas būs DOM atrastie HTML elementi
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById('addBtn');
    myTasksContainer = document.getElementById('myTasks');
    taskList = JSON.parse(localStorage.getItem('taskList'));

    // veicam pārabaudi vai taskList ir ticis atrast local storgae
    // jeb vai taskList ir true Boolean kontekstā

    if(!taskList) {
        taskList = [];
    }

    addBtn.addEventListener('click', addTask);
    renderTasks();
}

const addTask = () => {
    // izveido object priekš ieraksta, kas satur input vērtību un done statu
    if (!taskInput.value) {
        alert('Input cannot be empty!');
        return;
    }
    else{
        const task = {
            taskText: taskInput.value,
            done: false
        }
        taskInput.value = "";
        taskList.push(task);
        saveToLocalStorage();
        renderTasks();
    }
}
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
    saveToLocalStorage();
    // tā kā taskList masīvā ir izmaiņas, tās nepieciešams attēlot lietotājam
    renderTasks();
}


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
    saveToLocalStorage();
}

const saveToLocalStorage = () => {
    localStorage.setItem('taskList' , JSON.stringify(taskList));
}

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
         <button class="btn btn-danger" onclick="removeTask(event)" data-index="${i}">Remove</button>
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

