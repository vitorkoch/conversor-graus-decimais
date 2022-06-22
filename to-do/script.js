const input = document.querySelector('#todo-input');
const addButton = document.querySelector('#todo-button');
const list = document.querySelector('#todo-list');
addButton.addEventListener('click', addTodo);
input.addEventListener('', addTodo);
function addTodo() {
    let inputValue = input instanceof HTMLInputElement ? input.value : '';
    if (inputValue != '') {
        console.log('Add button clicked');
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        const newTodo = document.createElement('li');
        newTodo.innerText = inputValue;
        newTodo.classList.add('item');
        todoDiv.appendChild(newTodo);
        const completedButton = document.createElement('button');
        completedButton.innerHTML = '<i class="fas fa-check"></i>';
        completedButton.classList.add('complete-btn');
        todoDiv.appendChild(completedButton);
        const trashButton = document.createElement('button');
        trashButton.innerHTML = '<i class="fas fa-trash"></i>';
        trashButton.classList.add('trash-btn');
        todoDiv.appendChild(trashButton);
        list.appendChild(todoDiv);
    }
    input instanceof HTMLInputElement ? (input.value = '') : '';
    input instanceof HTMLElement ? input.focus() : '';
}
