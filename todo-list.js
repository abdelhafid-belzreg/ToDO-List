const todoList = []; 

function renderTodoList() {
  let todoListHtml = '';

  // Generate HTML for each todo item
  for (let i = 0; i < todoList.length; i++) {
    const todoObject = todoList[i];
    const { name, date } = todoObject;
    
    const html = `
      <div>${name}</div>
      <div>${date}</div>
      <button class="delete-button" onclick="
        todoList.splice(${i}, 1);
        renderTodoList();
      ">Delete</button>
      
    `;
    todoListHtml += html;
  }

  document.querySelector('.js-todo-list').innerHTML = todoListHtml;
}

renderTodoList();

function addToDo(){
  const mission = document.querySelector('input').value;
  const date = document.querySelector('.js-date').value;
  todoList.push({
  name:mission,
  date:date});
  console.log(todoList)
  document.querySelector('input').value = '';
  renderTodoList();
}