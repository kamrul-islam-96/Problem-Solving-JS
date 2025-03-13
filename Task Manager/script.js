var taskCountElement = document.getElementById ('count');
var taskText = document.getElementById ('input-field');
var taskCount = 0;
var taskBox = document.querySelector('.task-box');
var addBtn = document.querySelector('.add-btn')


function addTask () {
    document.getElementById('input-field').value;

    if (taskText.value.trim() === "") {
        alert ('Please Enter a Task');
        return;
    }

    createTask (taskCount + 1, taskText.value);
    taskCount++;
    taskCountElement.textContent = taskCount;

    document.getElementById('input-field').value = "";

    taskBox.classList.add('has-tasks');
}


function clearInput () {
    taskText.value = "";
}


function createTask (taskNumber, taskText) {
    var taskDiv = document.createElement ('div');
    taskDiv.classList.add ('task');


    var contentsDiv = document.createElement ('div');
    contentsDiv.classList.add ('contents');


    var checkBox = document.createElement ('input');
    checkBox.type = 'checkBox';
    checkBox.addEventListener("change", function() {
        if (this.checked) {
            taskDiv.style.background = "#c8e6c9";
        } else {
            taskDiv.style.background = "";
        }
    });



    var taskNum = document.createElement ('span');
    taskNum.textContent = taskNumber;


    var taskNameDiv = document.createElement ('div');
    taskNameDiv.classList.add ('task-name');


    var taskItem = document.createElement ('li');
    taskItem.textContent = taskText;


    taskNameDiv.appendChild (taskItem);
    contentsDiv.appendChild (checkBox);
    contentsDiv.appendChild (taskNum);
    contentsDiv.appendChild (taskNameDiv);


    var editTrashDiv = document.createElement ('div');
    editTrashDiv.classList.add ('edit-trash-btn');


    var editDiv = document.createElement ('div');
    editDiv.classList.add ('edit-btn');
    editDiv.innerHTML = `<i class="fa-regular fa-pen-to-square"></i>`;
    editDiv.addEventListener("click", function () {
        taskItem.contentEditable = true;
        taskItem.focus();
        taskItem.addEventListener('blur', function () {
            taskItem.contentEditable = false;
        });
    });


    var trashDiv = document.createElement ('div');
    trashDiv.classList.add ('trash-btn');
    trashDiv.innerHTML = `<i class="fa-solid fa-trash"></i>`;
    trashDiv.addEventListener("click", function () {
        taskDiv.remove();
        taskCount--;
        taskCountElement.textContent = taskCount;

        if (taskCount === 0) {
            taskBox.classList.remove('has-tasks');
        }
    });


    editTrashDiv.appendChild (editDiv);
    editTrashDiv.appendChild (trashDiv);

    taskDiv.appendChild (contentsDiv);
    taskDiv.appendChild (editTrashDiv);

    document.querySelector('.task-box').appendChild(taskDiv);
}


// Enter key press to add the task

addBtn.addEventListener("click", function () {
    if (taskText.value.trim() === '') {
        return;
    }
    else {
        addTask();
    }
});


taskText.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }   
});