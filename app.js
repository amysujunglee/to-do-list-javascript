const value = document.querySelector('.value');
const lists = document.querySelector('.to-do-list');
const addBtn = document.getElementById('add-btn');
const resetBtn = document.getElementById('reset-btn');

value.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        getItem();
    }
});

function getItem() {
    lists.innerHTML += `<div id="item"><span class="to-do">${value.value}</span> <button id="edit-btn">Edit</button> <button id="del-btn">X</button></div><hr />`;
    value.value = '';
    deleteItem();
    editItem();
}

function deleteItem() {
    const delBtns = document.querySelectorAll('#del-btn');
    delBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            e.target.parentNode.remove();
        });
    });
}

function editItem() {
    const editBtns = document.querySelectorAll('#edit-btn');
    editBtns.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
            let toDoItem = e.target.parentNode.querySelector('.to-do');
            toDoItem.setAttribute('contenteditable', true);
            toDoItem.focus();
        });
    });
}

resetBtn.addEventListener('click', function () {
    lists.innerHTML = '';
});