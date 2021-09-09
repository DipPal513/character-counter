const input = document.querySelector('textarea');
const count = document.querySelector('#count');


function charCount() {
    let value = input.value.length;
    count.innerHTML = value;
}