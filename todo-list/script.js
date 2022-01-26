let addToDoButton = document.getElementById('addToDo');
let addToDoContainer = document.getElementById('toDoContainer');
let inputText = document.getElementById('inputText');
let allClearToDo = document.getElementById('clearToDo')

addToDoButton.addEventListener('click', function(){
    let paragraph = document.createElement('p');
    paragraph.classList.add('paragraph-styling');
    addToDoContainer.appendChild(paragraph);
    paragraph.innerHTML = inputText.value;
    inputText.value = "";

    paragraph.addEventListener('click', function(){
        paragraph.style.textDecoration = 'line-through'
    })

    paragraph.addEventListener('dblclick', function(){
        addToDoContainer.removeChild(paragraph)
    })

    allClearToDo.addEventListener('click', function(){
        paragraph.remove();
    })

})