//Selecteurs
const screen = document.querySelector('.screen>span')
const digits = Array.from(document.querySelectorAll('.number'))
const operators = Array.from(document.querySelectorAll('.main_operators'))
const allClear = document.querySelector('.clear')

//Variables
let temp = '';

const nums = {
    num1: 0,
    num2:0,
    operator: null
}

let fontsize = '3em'
screen.style.fontsize = '3em'


//Récupérer la valeur de ce qu'on a cliqué pour les nombres
digits.map(digit => {
    digit.addEventListener('click',saveDigit)
})

function saveDigit (){
    const digit = this.getAttribute('data-key');
    temp += digit;
    write(temp)
}

function write(num){
    //console.log(formatNumber(num))
    screen.innerText=formatNumber(num);
}

//Met des espaces entre les nombres
function formatNumber(num) {
    //Ca sort de l'écran
    if (screen.clientWidth > window.innerWidth * 0.8){
        fontsize *= 0.8
        screen.style.fontSize = '${fontSize}em'
    }


    //On recoit une string or il nous faut un nombre
    return parseFloat(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
}

//Récupérer la valeur de ce qu'on a cliqué pour les opérations
operators.map(operator => {
    operator.addEventListener('click',operation)
})

function operation() {
    console.log(this.innerText)
}

//Récupérer l'ordre d'effacer
allClear.addEventListener('click',function () {
    console.log("clear");
    temp = 0;
    write(temp)
})
