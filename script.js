let input = document.querySelector('input'),
    btn = document.querySelector('button'),
    list = document.querySelector('ol');


btn.addEventListener('click', () => {
    if (input.value != '') {
        todo();
    }
})


function todo() {
    let li = document.createElement('li');
    li.textContent = input.value;
    li.style = `color:rgb(223, 202, 202);font-size: 30px;`;
    input.value = '';
    list.append(li);
}

input.addEventListener('keydown', function(el) { if (el.keyCode === 13) { if (input.value != '') { todo() } } else { '' } })