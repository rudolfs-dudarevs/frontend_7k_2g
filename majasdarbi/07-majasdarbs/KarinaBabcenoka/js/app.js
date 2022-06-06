let taskAdder;
let myTasksContainer;
let addBtn;

let taskList;

window.onload = () => {
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById("addBtn");
    myTasksContainer = document.getElementById("myTasks");
    
    taskList = JSON.parse(localStorage.getItem("taskList"));

    if(!taskList) {
        taskList = [];
    }

    addBtn.addEventListener('click', addTask);
    renderTasks();
};

const addTask = () => {
    const task = {
        taskText: taskInput.value,
        done:false
    };

    taskList.push(task);
    saveToLocalStorage();
    renderTasks();
};

const removeTask = (event) => {
    let index = event.target.dataset.index;
    taskList.splice(index, 1);

    saveToLocalStorage();
    renderTasks();
};

const toggleDone = (event) => {
    let index = event.target.dataset.index;
    if (taskList[index].done) {
        taskList[index].done = false;
    } else {
        taskList[index].done = true;
    }

    saveToLocalStorage();
};

const saveToLocalStorage = () => {
    let taskListAsJSON = JSON.stringify(taskList);

    localStorage.setItem("taskList", taskListAsJSON);
};

const renderTasks = () => {
    let taskToRender = [];

    taskList.forEach((item, i) => {
        let isTaskChecked;
        if(item.done) {
            isTaskChecked = "checked";
        } else {
            isTaskChecked = "";
        }


        let task = `
            <li class="list-group-item">
                <input class="form-check-input" onclick="toggleDone(event)" data-index="${i}" type="checkbox" ${isTaskChecked}/>
                <span class="task-text">${item.taskText}</span>
                <button class="btn btn-secondary" onclick="removeTask(event)" data-index="${i}">Remove</button>
            </li>
        `
        taskToRender.push(task);        
    });

    myTasksContainer.innerHTML = taskToRender.join("");
};