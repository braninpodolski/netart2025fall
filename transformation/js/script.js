document.body.addEventListener('click', function() {
    document.body.classList.add('chaos');
    document.getElementById('title').textContent = 'CHAOS';

    var shapes = document.querySelectorAll('.shape');
    for (var i = 0; i < shapes.length; i++) {
        var randomX = Math.random() * window.innerWidth;
        var randomY = Math.random() * window.innerHeight;
        shapes[i].style.left = randomX + 'px';
        shapes[i].style.top = randomY + 'px';
    }
});
