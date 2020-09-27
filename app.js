const value = document.querySelector('.value');
const addBtn = document.getElementById('add-btn');
const lists = document.querySelector('.to-do-list')

value.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        getList()
    }
});

function getList() {
    return lists.innerHTML += `<p>${value.value}</p>`;
}