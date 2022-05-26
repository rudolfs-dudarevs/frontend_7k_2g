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
let taskInput
let addBtn;
let myTasksContainer;
let taskList;

window.onload = () => {
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById('addBtn');
    myTasksContainer = document.getElementById('myTasks');

    //taskList = JSON.parse(localStorage.getItem('taskList'));

    let storageItem = localStorage.getItem("taskList");
    let parsedStorageItem = JSON.parse(storageItem);

    if(parsedStorageItem) {
        taskList = parsedStorageItem;
    } else {
        taskList = [];
    }

    addBtn.addEventListener('click', addTask);
    renderTasks();
};

const addTask = () => {
    //console.log("Task description", taskInput.value)
    const task = {
    taskText: taskInput.value,
    done: false
    };

    taskList.push(task);
    console.log("Task list:", taskList);
    saveToLocalStorage()
    renderTasks()
};

const saveToLocalStorage = () => {
    localStorage.setItem("tasklist", taskList);
    let taskListAsJSON = JSON.stringify(taskList);

    //localStorage.setItem("taskList", taskListAsJSON);
};

const renderTasks = () => {
    let tasksToRender = [];

    taskList.forEach((item, i) => {
        let isTaskChecked;
        
        if(item.done){
            isTaskChecked = "checked";
        } else {
            isTaskChecked = "";
        };

        let task = `<li class="list-group-item">
        <input class="form-check-input" onclick="toggleDone(event)" data-index="${i}" type="checkbox" ${isTaskChecked}>
        <span class="task-text">${item.taskText}</span>
        <button class="btn btn-secondary" onclick="removeTask(event)" data-index="${i}">Remove</button></li>`;

        tasksToRender.push(task);
    }),

    myTasksContainer.innerHTML = tasksToRender.join("");
};

const removeTask = (event) => {
    let index = event.target.dataset.index;
    taskList.splice(index, 1);

    saveToLocalStorage();
    renderTasks();

};

const toggleDone = (event) => {
    let index = event.target.dataset.index;

    if(taskList[index].done) {
        taskList[index].done = false;
    } else {
        taskList[index].done = true;
    };

    saveToLocalStorage();
}



