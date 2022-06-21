
let taskInput;
let addBtn; 
let listContainer;
let taskList;



window.onload = () => {
    taskInput = document.getElementById("taskInput");
    addBtn = document.getElementById("addBtn");
    listContainer = document.getElementById("myTasks");

    let storageItem = localStorage.getItem("taskList");
    let parsedStorage = JSON.parse(storageItem);

    taskList = parsedStorage || [];

    console.log(taskList)

    addBtn.addEventListener("click", addTask);

    renderTasks()
}

let addTask = () => {
    
    const task = {
        taskText: taskInput.value,
        done: false
    };
    
    taskList.push(task);
    saveStorage();
    renderTasks();
};

let removeTask = (event) => {
    let index = event.target.dataset.index;
    taskList.splice(index, 1);
    alert("Task has been succesfully removed!")

    saveStorage();
    renderTasks();

}

let toggleDone = (event) => {
    let index = event.target.dataset.index;
    
    if (taskList[index].done) {
        taskList[index].done = false;
    }  else {
        taskList[index].done = true;
    }
    
    saveStorage();
    
}

let saveStorage = () => {
    let taskListAsJSON = JSON.stringify(taskList); 
    localStorage.setItem("taskList", taskListAsJSON);
};

 let renderTasks = () => {
    let = tasksToRender = []; 
    
    taskList.forEach((item, i) => {
        let taskIsDone;

        if(item.done) {
            taskIsDone = "checked";
        } else {
            taskIsDone = "";
        }

        let task = `
            <li class="list-group-item">
               <input class="form-check-input" data-index="${i}" onclick="toggleDone(event)"type="checkbox" ${taskIsDone}/>
               <span class="task-text">${item.taskText}</span>
               <button class="btn btn-secondary" data-index="${i}" onclick="removeTask(event)">Remove task</button>
            </li>
        `
        tasksToRender.push(task);      
    })

    listContainer.innerHTML = tasksToRender.join("");
}; 




 /* const lis = document.createElement("li");
    let taskText.forEach()

    lis.innerHTML = `
        <li>
           <span>${taskText}</span>
        </li>
    `;
document.getElementById("myTasks").appendChild(lis);
*/



