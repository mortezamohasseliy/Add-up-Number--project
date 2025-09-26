let input = document.querySelector('input');
let button = document.querySelector('button');
let result = document.querySelector('p');

button.addEventListener('click', addUp);


function addUp() {
    let number = 0;
    for (let i = 1; i <= input.value; i++){
        number += i;
    }
    result.innerHTML = `Result : ${number}`;
    document.querySelector('p').style.color = 'white';
}
