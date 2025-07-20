const todoinput = document.getElementById('todoInput')
const addTodoBtn = document.getElementById('addTodoBtn')
const todolist = document.getElementById('todolist')
   
addTodoBtn.addEventListener('click',addtodo);
todoinput.addEventListener('keypress', function(e){
    if(e.key==='Enter'){
        addtodo();
    }
})
function addtodo() {
    const todoText = todoinput.value.trim();
    if (todoText !== '') {
        const li = document.createElement('li');
        li.textContent = todoText;

        
        const deleteBtn = document.createElement('span');
        deleteBtn.textContent = '❌';
        deleteBtn.classList.add('delete-btn');
        li.appendChild(deleteBtn);

        todolist.appendChild(li);
        todoinput.value = "";

       
        deleteBtn.addEventListener('click', () => {
            li.remove();
        });
    }
}
