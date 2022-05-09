//const body = document.querySelector('body');

const keys1 = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
const keys2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete'];
const keys3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter'];
const keys4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrU', 'Shift'];
const keys5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrL', 'ArrD', 'ArrR', 'Ctrl'];
//const keysRu1 = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace'];
//const keysRu2 = ['Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete'];
//const keysRu3 = ['CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter'];
//const keysRu4 = ['Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrU', 'Shift'];
//const keysRu5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrL', 'ArrD', 'ArrR', 'Ctrl'];
//const keysShift1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
//const keysShift2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Delete'];
//const keysShift3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'];
//const keysShift4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'ArrU', 'Shift'];
//const keysShift5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrL', 'ArrD', 'ArrR', 'Ctrl'];
//const keysShiftRu1 = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', 'Backspace'];
//const keysShiftRu2 = ['Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '{', '}', '|', 'Delete'];
//const keysShiftRu3 = ['CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ':', '"', 'Enter'];
//const keysShiftRu4 = ['Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', '<', '>', '?', 'ArrU', 'Shift'];
//const keysShiftRu5 = ['Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrL', 'ArrD', 'ArrR', 'Ctrl'];
const keysShiftEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '[', ']', '\\', ';', "'", ',', '.', '/'];
const keysShift = ['~', '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+', '{', '}', '|', ':', '"', '<', '>', '?'];
const keysShiftRu = ['!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', '/', ','];
const keysShiftRuDef = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', '\\', '.'];
const keys = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'z', 'x', 'c', 'v', 'b', 'n', 'm'];
const keysEn = ['`', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p', '[', ']', '\\', 'Delete', 'CapsLock', 'a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l', ';', "'", 'Enter', 'Shift', 'z', 'x', 'c', 'v', 'b', 'n', 'm', ',', '.', '/', 'ArrU', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrL', 'ArrD', 'ArrR', 'Ctrl'];
const keysRus = ['ё', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю'];
const keysRu = ['ё', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '=', 'Backspace', 'Tab', 'й', 'ц', 'у', 'к', 'е', 'н', 'г', 'ш', 'щ', 'з', 'х', 'ъ', '\\', 'Delete', 'CapsLock', 'ф', 'ы', 'в', 'а', 'п', 'р', 'о', 'л', 'д', 'ж', 'э', 'Enter', 'Shift', 'я', 'ч', 'с', 'м', 'и', 'т', 'ь', 'б', 'ю', '.', 'ArrU', 'Shift', 'Ctrl', 'Win', 'Alt', ' ', 'Alt', 'ArrL', 'ArrD', 'ArrR', 'Ctrl'];
const keysSpec = ['Ctrl', 'Win', 'Alt', ' ', 'ArrL', 'ArrD', 'ArrR', 'ArrU', 'Shift', 'CapsLock', 'Enter','Delete', 'Backspace', 'Tab'];
let lang = 'en';
let langTogle = false;
// document.onkeydown = function(event) {
//    keysShift.push(event.data);
//    console.log(keysShift);
// }
//console.log(body);
function getBody() {
    let container = document.createElement('div');
    container.className = 'container';
    document.body.append(container);
    let p = document.createElement('p');
    p.className = 'title';
    p.innerHTML = 'RSS Виртуальная клавиатура';
    container.prepend(p);
    let text = document.createElement('textarea');
    text.className = 'textarea';
    container.append(text);
    let keyboard = document.createElement('div');
    keyboard.className = 'keyboard';
    container.append(keyboard);
    let row1 = document.createElement('div');
    row1.className = 'row1';
    keyboard.append(row1);
    let row2 = document.createElement('div');
    row2.className = 'row2';  
    keyboard.append(row2);
    let row3 = document.createElement('div');
    row3.className = 'row3';
    keyboard.append(row3);
    let row4 = document.createElement('div');
    row4.className = 'row4';
    keyboard.append(row4);
    let row5 = document.createElement('div');
    row5.className = 'row5';
    keyboard.append(row5);   
    let description = document.createElement('p');
    description.className = 'description';
    description.innerHTML = 'Клавиатура создана для операционной системы Windows'
    container.append(description);
    let language = document.createElement('p');
    language.className = 'language';
    language.innerHTML = 'Для переключения языка используйте комбинацию: левыe Ctrl + Alt';
    container.append(language);
}

getBody();

function getKeys(keyArr1, keyArr2, keyArr3, keyArr4, keyArr5) {

function getKeys1(keyArr1) {
    let keys = '';
    for (let i = 0; i < keyArr1.length; i++) {
        if (keyArr1[i] === 'Backspace') {
            keys += `<div class="button Backspace special">${keyArr1[i]}</div>`;
        } else {
            keys += `<div class="button">${keyArr1[i]}</div>`;
        }
    }
    document.querySelector('.row1').innerHTML = keys;
}

getKeys1(keyArr1);

function getKeys2(keyArr2) {
    let keys = '';
    for (let i = 0; i < keyArr2.length; i++) {
        if (keyArr2[i] === 'Tab') {
            keys += `<div class="button Tab special">${keyArr2[i]}</div>`;
        } else {
            keys += `<div class="button">${keyArr2[i]}</div>`;
        }
    }
    document.querySelector('.row2').innerHTML = keys;
}

getKeys2(keyArr2);

function getKeys3(keyArr3) {
    let keys = '';
    for (let i = 0; i < keyArr3.length; i++) {
        if (keyArr3[i] === 'CapsLock') {
            keys += `<div class="button CapsLock special">${keyArr3[i]}</div>`;
        } else if (keyArr3[i] === 'Enter') {
            keys += `<div class="button Enter special">${keyArr3[i]}</div>`;
        } else {
            keys += `<div class="button">${keyArr3[i]}</div>`;
        }
    }
    document.querySelector('.row3').innerHTML = keys;
}

getKeys3(keyArr3);

function getKeys4(keyArr4) {
    let keys = '';
    for (let i = 0; i < keyArr4.length; i++) {
        if (keyArr4[i] === 'Shift') {
            keys += `<div class="button Shift special">${keyArr4[i]}</div>`;
        } else {
            keys += `<div class="button">${keyArr4[i]}</div>`;
        }
    }
    document.querySelector('.row4').innerHTML = keys;
}

getKeys4(keyArr4);

function getKeys5(keyArr5) {
    let keys = '';
    for (let i = 0; i < keyArr5.length; i++) {
        if (keyArr5[i] === ' ') {
            keys += `<div class="button Space special">${keyArr5[i]}</div>`;
        } else {
            keys += `<div class="button">${keyArr5[i]}</div>`;
        }
    }
    document.querySelector('.row5').innerHTML = keys;
}

getKeys5(keyArr5);
}

getKeys(keys1, keys2, keys3, keys4, keys5);

const capsLock = document.querySelector('.CapsLock');
const button = document.querySelectorAll('.button');
const textarea = document.querySelector('.textarea');
const shift = document.querySelector('.Shift');
shift.addEventListener('mousedown', shiftDown);
shift.addEventListener('mouseup', shiftUp);
capsLock.addEventListener('click', capsSwitch);

document.onkeydown = function keyAddActive(event) {
    //const button = document.querySelectorAll('.button');
    if(event.key === 'Tab') {
        event.preventDefault();
        let selectionStart = textarea.selectionStart;
        textarea.value = textarea.value.substr(0, selectionStart) + `\t` + textarea.value.substr(selectionStart);
        textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
    }

    if(event.key === 'CapsLock') {
        capsSwitch();
    }

    if(event.key === 'Shift') {
        if(event.repeat === false) {
            shiftDown();
        }
    }

    if(event.key === 'Control') {
        langTogle = true;
    }

    for (let i = 0; i < button.length; i++) {
        if (button[i].innerText.toUpperCase() === event.key.toUpperCase() && button[i].innerHTML !== 'Delete' && !button[i].classList.contains('special')) {
            console.log(event.key);
            event.preventDefault();
            button[i].classList.add('active');
            let selectionStart = textarea.selectionStart;
            textarea.value = textarea.value.substr(0, selectionStart) + button[i].innerText + textarea.value.substr(selectionStart);
            textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
        } 
    }
}

document.onkeyup = function keyRemove(event) {
    const button = document.querySelectorAll('.button');
    if(event.key === 'Shift') {
        shiftUp();
    }

    if(event.key === 'Control') {
        langTogle = false;
    }

    if(event.key === 'Alt' &&  langTogle && lang === 'en') {
        for (let i = 0; i < button.length; i++) {
            button[i].innerText = keysRu[i];
        }
        lang = 'ru';
    } else if(event.key === 'Alt' &&  langTogle && lang === 'ru') {
        for (let i = 0; i < button.length; i++) {
            button[i].innerText = keysEn[i];
        }
        lang = 'en';
    }

    for (let i = 0; i < button.length; i++) {
        if (button[i].innerHTML.toLocaleUpperCase() === event.key.toLocaleUpperCase() && button[i].innerHTML !== 'CapsLock') {
            button[i].classList.remove('active');
        }
    }
}

function keyboard() {
    for (let i = 0; i < button.length; i++) {
        button[i].addEventListener('click', event => {
            console.log(event);
            if(!button[i].classList.contains('special') && button[i].innerHTML !== 'Delete') {
                let selectionStart = textarea.selectionStart;
                textarea.value = textarea.value.substr(0, selectionStart) + event.target.innerText + textarea.value.substr(selectionStart);
                textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
            } else if (button[i].classList.contains('Space')) {
                let selectionStart = textarea.selectionStart;
                textarea.value = textarea.value.substr(0, selectionStart) + ' ' + textarea.value.substr(selectionStart);
                textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
            } else if (button[i].classList.contains('Enter')) {
                let selectionStart = textarea.selectionStart;
                textarea.value = textarea.value.substr(0, selectionStart) + `\n` + textarea.value.substr(selectionStart);
                textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
            } else if (button[i].classList.contains('Tab')) {
                let selectionStart = textarea.selectionStart;
                textarea.value = textarea.value.substr(0, selectionStart) + `\t` + textarea.value.substr(selectionStart);
                textarea.selectionStart = textarea.selectionEnd = selectionStart + 1;
            } else if (button[i].classList.contains('Backspace')) {
                let selectionStart = textarea.selectionStart;
                textarea.value = textarea.value.substr(0, selectionStart - 1) + textarea.value.substr(selectionStart);
                textarea.selectionStart = textarea.selectionEnd = selectionStart - 1;
            } else if (button[i].innerHTML == 'Delete') {
                let selectionStart = textarea.selectionStart;
                textarea.value = textarea.value.substr(0, selectionStart) + textarea.value.substr(selectionStart+1);
                textarea.selectionStart = textarea.selectionEnd = selectionStart;
            }
        });
    }
}
keyboard();
//textarea.addEventListener('input', event => {

//})

function capsSwitch() {
    if(capsLock.classList.contains('active')) {
        capsLock.classList.remove('active');
        for (let i = 0; i < button.length; i++) {       
            if (keys.includes(button[i].innerText.toLowerCase()) && lang === 'en') {
                button[i].innerText = button[i].innerText.toLowerCase();
            } else if (keysRus.includes(button[i].innerText.toLowerCase()) && lang === 'ru') {
                button[i].innerText = button[i].innerText.toLowerCase();
            }
        }
    } else {
        capsLock.classList.add('active');
        for (let i = 0; i < button.length; i++) {       
            if (keys.includes(button[i].innerText) && lang === 'en') {
                button[i].innerText = button[i].innerText.toUpperCase();
            } else if (keysRus.includes(button[i].innerText) && lang === 'ru') {
                button[i].innerText = button[i].innerText.toUpperCase();
            }
        }
    }
}

function shiftDown() {

let j = 0;
    for (let i = 0; i < button.length; i++) {       
        if(keys.includes(button[i].innerHTML) && lang === 'en') {
            button[i].innerText = button[i].innerText.toUpperCase();
        } else if(!keysSpec.includes(button[i].innerHTML) && !keys.includes(button[i].innerHTML) && lang === 'en') {
            button[i].innerText = keysShift[j];
            j++; 
        } else if(keysRus.includes(button[i].innerHTML) && lang === 'ru') {
            button[i].innerText = button[i].innerText.toUpperCase();
        } else if (!keysSpec.includes(button[i].innerHTML) && !keysRus.includes(button[i].innerHTML) && lang === 'ru') {
            button[i].innerText = keysShiftRu[j];
            j++; 
        }
    }
}

function shiftUp() {

let j = 0;
    for (let i = 0; i < button.length; i++) {      
        if (keys.includes(button[i].innerHTML.toLowerCase()) && lang === 'en') {
            button[i].innerText = button[i].innerText.toLowerCase();
        } else if(!keysSpec.includes(button[i].innerHTML) && !keys.includes(button[i].innerHTML.toLowerCase()) && lang === 'en') {
            button[i].innerText = keysShiftEn[j];
            j++; 
        } else if(keysRus.includes(button[i].innerHTML.toLowerCase()) && lang === 'ru') {
            button[i].innerText = button[i].innerText.toLowerCase();
        } else if (!keysSpec.includes(button[i].innerHTML) && !keysRus.includes(button[i].innerHTML) && lang === 'ru') {
            button[i].innerText = keysShiftRuDef[j];
            j++; 
        }
    }
}

textarea.onblur = () => textarea.focus();
textarea.focus();
