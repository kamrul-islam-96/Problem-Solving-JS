var inputContainer = document.querySelector(".input-box");
var inputField = document.getElementById("input-field");
var taskContainer = document.querySelector(".task-box");
var addBtn = document.querySelector(".add-btn");
var taskName = document.querySelector ('.task-name');
var editBtn = document.querySelector (".edit-btn");



function addTask () {  
    if (inputField.value.trim() === '') {
        alert ('You must write something');
        return;
    }


    var div = document.createElement("div");
    div.className = "task";
    div.innerHTML = `
                    <div class="contents">
                        <input type="checkbox" id="check-box">
                        <span id="list-num">
                            1
                        </span>
                        <div class="task-name">
                            <li>
                                ${inputField.value}
                            </li>
                        </div>
                    </div>

                    <div class="edit-trash-btn">
                        <div class="edit-btn">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </div>
                        <div class="trash-btn">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
                    `;

    taskContainer.appendChild(div);
        div.querySelector (".trash-btn").addEventListener ("click", function() {
            div.remove();
        });
      

    


    inputField.value = "";

    var checkBox = div.querySelector("input[type='checkbox']");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
        div.style.background = this.checked? "#c8e6c9": "";
    });

}



addBtn.addEventListener("click", function () {
    if (inputField.value.trim() === '') {
        alert ('You must write something');
        return;
    }
    else {
        addTask();
    }
});


inputField.addEventListener("keydown", function(e) {
    if (e.key === "Enter") {
        addTask();
    }   
});


function clearInput () {
    inputField.value = "";
}

















var inputField = document.querySelector('#input-field');
var addBtn = document.querySelector('.add-btn');
var taskContainer = document.querySelector('.task-box');
var taskCountElement = document.getElementById('count');
var taskCount = 0;







function addTask () {
    if(inputField.value === '') {
        alert('Please Enter a Task')
        return
    }



    var taskDiv = document.createElement('div');
        taskDiv.classList.add('task')
        taskDiv.innerHTML = `
                    <div class="contents">
                        <input type="checkbox" id="check-box">
                        <div class="task-name">
                            <li>
                                ${inputField.value}
                            </li>
                        </div>
                    </div>

                    <div class="edit-trash-btn">
                        <div class="edit-btn">
                            <i class="fa-regular fa-pen-to-square"></i>
                        </div>
                        <div class="trash-btn" onclick="deleteTask (this)">
                            <i class="fa-solid fa-trash"></i>
                        </div>
                    </div>
        `
    taskContainer.appendChild(taskDiv);


    /* task remove addEventListener diye */

    taskDiv.querySelector('.trash-btn').addEventListener('click', function() {
        taskDiv.remove();

        taskCount--;
        taskCountElement.textContent = taskCount;

        alertTask()
    })


    /* task editable addEventListener diye */

    taskDiv.querySelector('.edit-btn').addEventListener('click', function() {
        var li = taskDiv.querySelector('.task-name li');
        li.contentEditable = true;
        li.focus();
    })


    /* checkbox */ 

    var checkBox = taskDiv.querySelector("input[type='checkbox']");
    checkBox.type = "checkbox";
    checkBox.addEventListener("change", function () {
        taskDiv.style.background = this.checked? "#c8e6c9": "" ;
    });




    /* task added er por auto input clear */

    inputField.value = '';


    /* increase task count header */

    taskCount++;

    taskCountElement.textContent = taskCount;
}




/* cross button e click korle task input clear hbe */

function clearInput () {
    inputField.value = '';
}


/* task add addEventListner diye */ 

addBtn.addEventListener ('click', addTask);



/* onclick event attribute use kore task deleted */

// function deleteTask (e) {
//     e.closest('.task').remove();
// }



/* Enter key press kore task added */

inputField.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
        addTask();
    }
});



function alertTask() {
    if (taskCount === 0) {
        var taskDiv = document.createElement('div');
        taskDiv.classList.add('task')
        taskDiv.innerHTML = `There is no Task for Today`

        taskContainer.appendChild(taskDiv)
    }
}

