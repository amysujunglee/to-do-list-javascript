const value = document.querySelector('.value');
const addBtn = document.getElementById('add-btn');
const lists = document.querySelector('.to-do-list')
console.log(value, addBtn, lists);

value.addEventListener('keyup', function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        lists.innerHTML += `<p>${value.value}</p>`;
        addBtn.click();
    }
});