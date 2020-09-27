const value = document.querySelector('.value');
const lists = document.querySelector('.to-do-list');
const addBtn = document.getElementById('add-btn');

value.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        getItem()
    }
});


function getItem() {
    lists.innerHTML += `<p>${value.value} <button id="edit-btn">Edit</button> <button id="del-btn">X</button></p>`;
    value.value = '';
    deleteItem();
}

function deleteItem() {
    const delBtn = document.getElementById('del-btn');
    delBtn.addEventListener('click', function () {
        console.log('delete!');
    })

}