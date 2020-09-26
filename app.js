const value = document.querySelector('.value');
const addBtn = document.getElementById('add-btn');
const lists = document.querySelector('.to-do-list')
console.log(value, addBtn, lists);

addBtn.addEventListener('click', function () {
    lists.innerHTML += `<p>${value.value}</p>`
})