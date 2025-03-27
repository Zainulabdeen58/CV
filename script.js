document.addEventListener("DOMContentLoaded", function() {
    var menu = document.querySelector('#menu');
    menu.addEventListener('click', function() {
        this.classList.toggle('fa-times');
        document.querySelector('header').classList.toggle('toggle');
    });
});

window.addEventListener('scroll', function() {
    var menu = document.querySelector('#menu');
    var header = document.querySelector('header');
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');
});

window.addEventListener('load', function() {
    var menu = document.querySelector('#menu');
    var header = document.querySelector('header');
    menu.classList.remove('fa-times');
    header.classList.remove('toggle');
});
