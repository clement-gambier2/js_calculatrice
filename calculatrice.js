//Selecteurs
const screen = document.querySelector('.screen>span')
const digits = Array.from(document.querySelectorAll('.number'))
const operators = Array.from(document.querySelectorAll('.main_operators'))
const allClear = document.querySelector('.clear')

//Variables
let temp = ''

const nums = {
    num1: 0,
    num2: 0,
    operator: null
}

let fontSize = 3
screen.style.fontSize = '3em'

digits.map(digit => {
    digit.addEventListener('click', saveDigit)
})

operators.map(operator => {
    operator.addEventListener('click', operation)
})

allClear.addEventListener('click', function () {
    clear()
    screen.innerText = '0.00'
})

function clear () {
    temp = 0
    nums.num1 = 0
    nums.num2 = 0
    nums.operator = null
}

function operation () {
    const operator = this.getAttribute('data-key')

    if (operator === '=') {
        result(nums)
        clear()
    }

    if (!nums.num2) {
        nums.num2 = nums.num1
        nums.num1 = 0
        temp = 0
    } else if (!nums.num1) {
        nums.operator = operator
    } else {
        result(nums)
    }

    nums.operator = operator
}

function result ({ num1, num2, operator }) {
    let sum = 0

    if (operator === '+') {
        sum = num1 + num2
    } else if (operator === '-') {
        sum = num2 - num1
    } else if (operator === '*') {
        sum = num2 * num1
    } else if (operator === '/') {
        sum = num2 / num1
    }

    nums.num1 = 0
    nums.num2 = sum
    temp = 0
    write(sum)
}

function saveDigit () {
    const digit = this.getAttribute('data-key')

    if (digit === '.' && temp.includes('.')) return

    temp += digit

    nums.num1 = parseFloat(temp)

    write(temp)
}

function write (num) {
    // console.log(typeof formatNum(num))
    screen.innerText = formatNum(num)
}

function formatNum (num) {
    if (screen.clientWidth > window.innerWidth * 0.8) {
        fontSize *= 0.8
        screen.style.fontSize = `${fontSize}em`
    }

    return parseFloat(num)
        .toFixed(2)
        .replace(/(\d)(?=(\d{3})+\.)/g, '$1 ')
}
