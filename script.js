const add = function (a, b) {
    return a + b;
}

const subtract = function (a, b) {
    return a - b;
}

const multiply = function (a, b) {
    return a * b;
}

const divide = function (a, b) {
    return a / b;
}

const negative = function (a) {
    return a * (-1);
}

const remainder = function (a, b) {
    return a % b;
}

const operate = function (operation, a, b) {
    return operation(a, b);
}

// DISPLAY NUMBERS | LEFT = PAST | RIGHT = CURRENT
const numberRight = document.getElementById("number-right");
const numberLeft = document.getElementById("number-left");

// ALL BUTTONS CAPTURE
const negativeBtn = document.getElementById("btn-negative");
const clearBtn = document.getElementById("btn-clear");
const remainderBtn = document.getElementById("btn-remainder");
const divideBtn = document.getElementById("btn-divide");
const multiplyBtn = document.getElementById("btn-multiply");
const subtractBtn = document.getElementById("btn-subtract");
const addBtn = document.getElementById("btn-add");
const pointBtn = document.getElementById("btn-point");
const equalBtn = document.getElementById("btn-equal");
const zeroBtn = document.getElementById("btn-zero");
const oneBtn = document.getElementById("btn-one");
const twoBtn = document.getElementById("btn-two");
const threeBtn = document.getElementById("btn-three");
const fourBtn = document.getElementById("btn-four");
const fiveBtn = document.getElementById("btn-five");
const sixBtn = document.getElementById("btn-six");
const sevenBtn = document.getElementById("btn-seven");
const eightBtn = document.getElementById("btn-eight");
const nineBtn = document.getElementById("btn-nine");

// STRINGS
let valLeft = "";
let valRight = "";
let valTemp;

// a and b for functions
let a = 0;
let b = 0;

// stop point decimal repeat
let pointVer = false;
let twoInputs = false;

const zeroDisplay = function (number) {
    number.innerHTML = "";
    valRight = "";
    valLeft = "";
}

const onloadDisplay = function (number) {
    number.innerHTML = "insert numbers :)";
}

const updateDisplay = function () {
    numberRight.innerHTML = valRight;
    numberLeft.innerHTML = valLeft;
}

function decision() {
    valTemp = valLeft.split(" ");
    if (twoInputs !== true) {
      valLeft += " =";
      zeroDisplay(numberLeft);
    }
    b = parseFloat(valTemp.pop());

    switch (valTemp[1]) {
        case '+':
            valRight = add(a, b);
            break;
        case '-':
            valRight = subtract(a, b);
            break;
        case 'x':
            valRight = multiply(a, b);
            break;
        case ':':
            valRight = divide(a, b);
            break;
        case '%':
            valRight = remainder(a, b);
            break;
        default:
            zeroDisplay(numberLeft);
            zeroDisplay(numberRight);
            pointVer = false;
    }
    
    updateDisplay();
    twoInputs = false;
}

// NUMBER BUTTONS FUNCTIONS
zeroBtn.addEventListener('click', e => {
    valLeft += '0';
    console.log(valLeft);
    updateDisplay();
})
oneBtn.addEventListener('click', e => {
    valLeft += '1';
    console.log(valLeft);
    updateDisplay();
})
twoBtn.addEventListener('click', e => {
    valLeft += '2';
    console.log(valLeft);
    updateDisplay();
})
threeBtn.addEventListener('click', e => {
    valLeft += '3';
    console.log(valLeft);
    updateDisplay();
})
fourBtn.addEventListener('click', e => {
    valLeft += '4';
    console.log(valLeft);
    updateDisplay();
})
fiveBtn.addEventListener('click', e => {
    valLeft += '5';
    console.log(valLeft);
    updateDisplay();
})
sixBtn.addEventListener('click', e => {
    valLeft += '6';
    console.log(valLeft);
    updateDisplay();
})
sevenBtn.addEventListener('click', e => {
    valLeft += '7';
    console.log(valLeft);
    updateDisplay();
})
eightBtn.addEventListener('click', e => {
    valLeft += '8';
    console.log(valLeft);
    updateDisplay();
})
nineBtn.addEventListener('click', e => {
    valLeft += '9';
    console.log(valLeft);
    updateDisplay();
})
pointBtn.addEventListener('click', e => {
    if (pointVer == true) {
        return
    }
    valLeft += '.';
    console.log(valLeft);
    updateDisplay();
    pointVer = true;
})
negativeBtn.addEventListener('click', e => {
    valLeft = negative(valLeft);
    updateDisplay();
})

// CLEAR FUNCTION
clearBtn.addEventListener('click', e => {
    zeroDisplay(numberLeft);
    zeroDisplay(numberRight);
    pointVer = false;
    twoInputs = false;
})

// OPERATION FUNCTIONS
addBtn.addEventListener('click', e => {
    if (twoInputs == true) {
        decision();
    }
    a = parseFloat(valLeft);
    valLeft += ' + ';
    updateDisplay();
    twoInputs = true;
})
subtractBtn.addEventListener('click', e => {
    if (twoInputs == true) {
        decision();
    }
    a = parseFloat(valLeft);
    valLeft += ' - ';
    updateDisplay();
    twoInputs = true;
})
multiplyBtn.addEventListener('click', e => {
    if (twoInputs == true) {
        decision();
    }
    a = parseFloat(valLeft);
    valLeft += ' x ';
    updateDisplay();
    twoInputs = true;
})
divideBtn.addEventListener('click', e => {
    if (twoInputs == true) {
        decision();
    }
    a = parseFloat(valLeft);
    valLeft += ' : ';
    updateDisplay();
    twoInputs = true;
})
remainderBtn.addEventListener('click', e => {
    if (twoInputs == true) {
        decision();
    }
    a = parseFloat(valLeft);
    valLeft += ' % ';
    updateDisplay();
    twoInputs = true;
})

// EQUALS
equalBtn.addEventListener('click', e => {
    decision();
})


window.onload = onloadDisplay(numberRight), onloadDisplay(numberLeft);