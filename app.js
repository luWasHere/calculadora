const sum = document.getElementById('+');
const res = document.getElementById('-');
const div = document.getElementById('÷');
const mul = document.getElementById('x');
const del = document.getElementById('←');
const ac = document.getElementById('ac');
const result = document.getElementById('=');
const parent1 = document.getElementById('(');
const parent2 = document.getElementById(')');
const point = document.getElementById('pnt');
const zero = document.getElementById('0');
const one = document.getElementById('1')
const two = document.getElementById('2');
const three = document.getElementById('3');
const four = document.getElementById('4');
const five = document.getElementById('5');
const six = document.getElementById('6');
const seven = document.getElementById('7');
const eight = document.getElementById('8');
const nine = document.getElementById('9');
const placeholderText = document.getElementById('placeholder');
const button = document.querySelector('.btn');
const screenInput = document.getElementById('input');

const buttons = [
    sum,
    res,
    div,
    mul,
    del,
    ac,
    result,
    parent1,
    parent2,
    point,
    zero,
    one,
    two,
    three,
    four,
    five,
    six,
    seven,
    eight,
    nine
];

let screenOp = "";
let evalOp = "";

document.addEventListener('click', (c) => {

    let getButton = buttons.some(btn => btn === c.target);

    if(getButton) {
        const pressedButton = buttons.filter(b => {
            let pressedButton = b === c.target;
            return pressedButton;
        });

        function addChar(charSc, charEv) {
            screenOp += `${charSc}`;
            screenInput.innerHTML = screenOp;

            evalOp += `${charEv}`;

            if (placeholderText.style.display = 'flex') {
                placeholderText.style.display = 'none'
            }

        }

        switch (pressedButton[0].id) {
            case '(':
                addChar('(', '(')
                break;
            case ')':
                if(!evalOp.includes('(')) {
                    break;
                }
                addChar(')', ')')
                break;
            case '+':
                addChar('+', '+')
                break;
            case '-':
                addChar('-', '-')
                break;
            case '7':
                addChar('7', '7')
                break;
            case '8':
                addChar('8', '8')
                break;
            case '9':
                addChar('9', '9')
                break;
            case '÷':
                addChar('÷', '/')
                break;
            case '4':
                addChar('4', '4')
                break;
            case '5':
                addChar('5', '5')
                break;
            case '6':
                addChar('6', '6')
                break;
            case 'x':
                addChar('x', '*')
                break;
            case '1':
                addChar('1', '1')
                break;
            case '2':
                addChar('2', '2')
                break;
            case '3':
                addChar('3', '3')
                break;
            case 'pnt':
                addChar('.', '.')
                break;
            case '0':
                addChar('0', '0')
                break;
            case 'ac':
                screenOp = "";
                screenInput.innerHTML = screenOp;
                evalOp = "";
                placeholderText.style.display = 'flex';
                break;
            case '←':
                screenOp = screenOp.substring(0, screenOp.length - 1);
                screenInput.innerHTML = screenOp;
                evalOp = evalOp.substring(0, evalOp.length - 1);
                if (evalOp.length == 0) {
                    placeholderText.style.display = 'flex'
                }
                break;
            case '=':
                let result = eval(evalOp);
                if(result === undefined) {
                    break;
                }
                screenInput.innerHTML = `${result}`;
                screenOp = `${result}`;
                break;

        }
        
    }


})



