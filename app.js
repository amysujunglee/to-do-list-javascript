const value = document.querySelector('.value');
const addBtn = document.getElementById('add-btn');
const lists = document.querySelector('.to-do-list')

value.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        getList()
    }
});

function getList() {
    lists.innerHTML += `<p>${value.value} <button class="del-btn">Edit</button> <button class="del-btn">X</button></p>`;
    value.value = '';
}