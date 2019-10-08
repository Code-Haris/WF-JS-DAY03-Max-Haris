tasks = 0;
createPage();
function createPage(){
    let header = document.createElement("header");
    let heading = document.createElement("h1");
    heading.textContent = "TO-DO-LIST";
    header.appendChild(heading);
    document.getElementById("body").appendChild(header);

    let createTask = document.createElement("div");
    createTask.id= "createTask";
    let inputField = document.createElement("input");
    inputField.type = "text";
    inputField.placeholder = "New Task here";
    inputField.id = "newTask";
    let addTaskButton = function (){
        addTask();
    }
    inputField.addEventListener("keyup", function(event) {
        if (event.keyCode === 13) {
          commitButton.click();
        }
      });
    createTask.appendChild(inputField);

    let commitButton = document.createElement("button");
    commitButton.textContent = "Add Task";
    commitButton.addEventListener("click", addTaskButton, false);
    createTask.appendChild(commitButton);
    document.getElementById("body").appendChild(createTask);
    
    let taskList = document.createElement("div");
    taskList.id = "taskList";
    let taskListHead = document.createElement("h2");
    taskListHead.textContent = "Tasks";
    taskList.appendChild(taskListHead);
    document.getElementById("body").appendChild(taskList);
}

function addTask(){
    let newTask = document.createElement("div");
    newTask.className = "task";

    let task = document.createElement("span");
    task.textContent= document.getElementById("newTask").value;
    document.getElementById("newTask").textContent = "";
    newTask.appendChild(task);

    let doneButton = document.createElement("button");
    doneButton.textContent = "\u2713";
    doneButton.className = "done";
    let taskDone = function(){
        newTask.className="task done";
        newTask.removeChild(doneButton);
    }
    doneButton.addEventListener("click", taskDone, false);
    newTask.appendChild(doneButton);

    let removeButton = document.createElement("button");
    removeButton.textContent = "\u2573";
    removeButton.className = "remove";
    let removeItem = function(){
        newTask.parentNode.removeChild(newTask);
    }
    removeButton.addEventListener("click", removeItem, false)
    newTask.appendChild(removeButton);

    document.getElementById("taskList").appendChild(newTask);
}