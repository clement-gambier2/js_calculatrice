//Le toggle
var darkMode = document.getElementById('switcher');
//Toggle background
var moon_back = document.getElementById("dark_mode_selector")
//Background
var back = document.getElementsByTagName('body')[0];
//Le menu
var selectors = document.getElementById('selectors');
//Les boutons
var buttons = Array.from(document.querySelectorAll('.button'))


//Event listener
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('night')
    back.classList.toggle('night');
    selectors.classList.toggle('night');
    moon_back.classList.toggle('night');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.toggle('night');
    }



})

