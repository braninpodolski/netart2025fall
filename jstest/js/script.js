let heading = document.getElementById('heading');
let button = document.getElementById('colorButton');
let clickCounter = document.getElementById('clickCount');
let clicks = 0;

let colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A', '#98D8C8', '#F7DC6F', '#BB8FCE', '#85C1E2'];

function changeColor() {
    clicks++;
    clickCounter.textContent = `Times clicked: ${clicks}`;

    heading.style.color = colors[(clicks) % colors.length];

}

button.addEventListener('click', changeColor);
