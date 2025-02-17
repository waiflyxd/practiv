//1
"use strict"
let elem = document.querySelector('#elem');
elem.addEventListener('blur', func() );
function func(e) {
	console.log(square(elem.value) );
	function square(value) {
		return value * value;
	}
}

//2

let elem1 = document.querySelector('#elem1');
let elem2 = document.querySelector('#elem2');
let elem3 = document.querySelector('#elem3');


function func1() {
    console.log(this.value);
}

func1.call(elem1);
func1.call(elem2);
func1.call(elem3);

//3,4
let elem4 = document.querySelector('#elem4');
function func4(surname, name) {
	console.log(this.value + ', ' + name + ' ' + surname);
}
func4.call(elem4, 'Smit', 'John');
func4.apply(elem4, ['Smit', 'John']);
//5
let elem5 = document.getElementById('elem5');

function func5(name, surname) {
    console.log(this.value + ', ' + name + ' ' + surname);
}

let boundFunc5 = func5.bind(elem5);
boundFunc5('John', 'Smit');
boundFunc5('Eric', 'Luis');

//6
setInterval(() => {
    console.log('Таймер срабатывает каждые 3 секунды');
}, 3000);

//7
let number = 100;
let timer = setInterval(() => {
    number--;
    console.log(number);
}, 1000);

//8
let number8 = 10;
let timer8 = setInterval(() => {
    if (number8 <= 0) {
        clearInterval(timer8);
    } else {
        number8--;
        console.log(number8);
    }
}, 1000);

//9
document.getElementById('startButton').addEventListener('click', () => {
    let number9 = 100;
    let timer9 = setInterval(() => {
        console.log(number9);
        number9--;
        if (number9 < 0) {
            clearInterval(timer9);
        }
    }, 1000);
});

//10
let timer10;
document.getElementById('startButton').addEventListener('click', () => {
    if (timer10) return; 
    let number10 = 100;
    timer10 = setInterval(() => {
        console.log(number10);
        number10--;
        if (number10 < 0) {
            clearInterval(timer10);
            timer10 = null; 
        }
    }, 1000);
});

//11
let input11 = document.getElementById('inputNumber');
let timer11 = setInterval(() => {
    let value11 = parseInt(input11.value);
    if (value11 <= 0) {
        clearInterval(timer11);
    } else {
        value11--;
        input11.value = value11;
    }
}, 1000);

//12

document.getElementById('startButton12').addEventListener('click', () => {
    let countdownElement12 = document.getElementById('countdown');
    let number12 = parseInt(countdownElement12.innerText);
    let timer12 = setInterval(() => {
        if (number12 <= 0) {
            clearInterval(timer12);
        } else {
            number12--;
            countdownElement12.innerText = number;
        }
    }, 1000);
});
//13
let p = document.getElementById('colorChange');
setInterval(() => {
    p.style.color = p.style.color === 'red' ? 'green' : 'red';
}, 1000);

//14 
setTimeout(() => {
    document.getElementById('message').innerText = 'Сообщение через 10 секунд';
}, 10000);

//15
let count15 = 0;
setInterval(() => {
    console.log(count15);
    count15++;
}, 1000);

//16
document.getElementById('button16').addEventListener('click', () => {
    let li = document.createElement('li');
    li.textContent = 'item';
    document.getElementById('elem16').appendChild(li);})


//17
document.querySelectorAll('li').forEach(li => {
    li.addEventListener('click', () => {
        li.remove();
    });
});

//18

let ul = document.getElementById('elem18');
ul.insertAdjacentHTML('afterbegin', '<li>start</li>');
ul.insertAdjacentHTML('beforeend', '<li>finish</li>');

//19

let newLi = document.createElement('li');
newLi.textContent = 'new';
let elem19 = document.getElementById('elem19');
elem19.parentNode.insertBefore(newLi, elem19);

//20
let newParagraph = document.createElement('p');
newParagraph.textContent = '!!!';
let elem20 = document.getElementById('elem20');
elem20.parentNode.insertBefore(newParagraph, elem20);

//21

let newDiv = document.createElement('div');
newDiv.className = 'www';
newDiv.innerHTML = '<p>text</p><p>text</p><input>';
let elem21 = document.getElementById('elem21');
elem.parentNode.insertBefore(newDiv, elem21);
//22
document.getElementById('cloneButton').addEventListener('click', () => {
    let input = document.getElementById('clone');
    let clone = input.cloneNode(true);
    document.body.appendChild(clone);
});

//23
let elem23 = document.getElementById('elem23');
if (elem23.tagName === 'P') {
    console.log('Это абзац');
} else {
    console.log('Это не абзац');
}