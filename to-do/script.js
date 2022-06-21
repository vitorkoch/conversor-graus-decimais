const input = document.querySelector('#todo-input');
const button = document.querySelector('#todo-button');
const list = document.querySelector('#todo-list');
button.addEventListener('click', addTodo);
function addTodo() {
    console.log('Add button clicked');
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todoDiv');
    const newTodo = document.createElement('li');
    newTodo.classList.add('item');
    newTodo.innerText = 'working';
    todoDiv.appendChild(newTodo);
    list.appendChild(todoDiv);
}
