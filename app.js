//Selector
const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-btn");
const todoList = document.querySelector(".todo-list");
const filterOption = document.querySelector(".filter-todo");

//Event Listener
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', editDeleteCheck);
filterOption.addEventListener('click', filterTodo)

//Functions
function addTodo(event) {
    if(todoInput.value != "") {
        //Prevent form from refreshing
        event.preventDefault();
        
        //Todo Div
        const todoDiv = document.createElement("div");
        todoDiv.classList.add('todo');

        //Create Li
        const newTodo = document.createElement("li");
        newTodo.innerText = todoInput.value;
        newTodo.classList.add('todo-item');
        todoDiv.appendChild(newTodo);

        //Add Edit Button
        const editButton = document.createElement("button");
        editButton.innerHTML = '<i class="fas fa-edit"></i>';
        editButton.classList.add('edit-btn');
        todoDiv.appendChild(editButton);

        //Add Check Mark Button
        const completedButton = document.createElement("button");
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);

        //Add Check Trash Button
        const trashButton = document.createElement("button");
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);

        //Append to List
        todoList.appendChild(todoDiv);

        //Clear To Do Input Value
        todoInput.value = "";
    }
}



function editDeleteCheck(e) {
    const item = e.target;

    //Edit Todo
    if(item.classList[0] === 'edit-btn') {
        console.log(item);

        const todo = item.parentElement;
        console.log(todo);

        todoInput.value = todo.firstElementChild.innerText;
        todo.remove();
    }

    //Delete Todo
    if(item.classList[0] === 'trash-btn') {
        console.log(item);
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        //Remove todo after it finishes transition
        todo.addEventListener('transitionend', function() {
         todo.remove();
        });
    }

    //Check Mark
    if(item.classList[0] === 'complete-btn') {
        console.log(item)
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}
