const renderTodo = (todo) => {
    const {id, completed, title} = todo;

    const todoEl = document.createElement('div');
    const todoTitle = document.createElement('p');
    const todoStatus = document.createElement('span');

    todoEl.className ='todo';
    todoTitle.className = 'todo-title';
    todoStatus.className = completed ? 'todo-status done' : 'todo-status';
    todoTitle.className = completed ? 'todo-title done' : 'todo-title' ;


    todoTitle.textContent = title;

    todoStatus.addEventListener('click', () => {
        
        todoStatus.classList.toggle('done');
        todoTitle.classList.toggle('done');
        todoStatus.completed = !todoStatus.completed;
        
        console.log(completed);
    })
    
    todoEl.append(todoTitle, todoStatus);
    document.querySelector('.todo-container').prepend(todoEl);

    
};

   

fetch('https://jsonplaceholder.typicode.com/todos')
    .then(resp => resp.json())
    .then((response) => {
        const todos = response.slice(0, 5);
        
        todos.forEach((todo) => renderTodo(todo));
    })
    .catch((error) => {
        console.error(error);
    });


   const handleAddTodo = () => {
    const todoText = document.querySelector('input[name="todo-text')
    
    const newTodo = {title: todoText.value, completed: false};

    const params = {
        method: 'POST',
        body: JSON.stringify(newTodo),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
          }
    };

    fetch('https://jsonplaceholder.typicode.com/todos',params)
    .then(resp => resp.json())
    .then((response) => {
        renderTodo(response);
        todoText.value = '';
        console.log(response);
    })
    .catch((error) => {
        console.error(error)
    });

};
    // renderTodo(newTodo);
    // todoText.value = '';


   const addButton= document.querySelector('.add-button');
   addButton.addEventListener('click', handleAddTodo);









    // Sukurti addEventListener su handlerliu onClick
// Nuspaudus ant elemento pakeisti todoStatus klasę (jeigu klasė yra done, pakeisti į undone. Jeigu klasė yra undone, pakeisti į done)
// Pakeisti todo status į priešinga, kaip su klase. jeigu buvo todo.completed = true, pakeisti i todo.completed = false;
// Pakeisti teksto sviesuma/tamsuma kai yra done/undone
// Follow dizaina, datas: menesis, diena, metai
