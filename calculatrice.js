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


//Récupérer la valeur de ce qu'on a cliqué
digits.map(digit => {
    digit.addEventListener('click',saveDigit)
})

function write(num) {
    screen.innerText=num;
}

function saveDigit (){
    const digit = this.getAttribute('data-key');
    temp += digit;
    write(temp)


}

operators.map(operator => {
    operator.addEventListener('click',operation)
})

function operation() {
    console.log(this.innerText)
}

allClear.addEventListener('click',function () {
    console.log("clear");
    screen.innerText = "0.00";
})

//console.log(digits);

//Afficher cette valeur


//Réaliser le calcul 
