var listElement  = document.querySelector('#app ul');
var inputElement  = document.querySelector('#app input');
var buttonElement  = document.querySelector('#app button');

var todos = [
    'Fazer café',
    'Estudar javascritp',
    'Acessar comunidade da Rocketseat',
];

function renderTodos(){
    for(todo of todos){
        var todoElemnt = document.createElement('li');
        var todoText = document.createTextNode(todo);

        todoElemnt.appendChild(todoText);
        listElement.appendChild(todoElemnt);

    }
}

renderTodos();