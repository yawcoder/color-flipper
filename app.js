const bkcolor = document.querySelector('#bk');
const btn = document.querySelector('#btn');
const colorName = document.querySelector('.color-name');


btn.addEventListener('click', () => {
    let randomNumber = randomRange(1, 10);
    switch (randomNumber) {
        case 1:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('red');
            colorName.innerText = 'Red';
            break;
        case 2:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('blue');
            colorName.innerText = 'Blue';
            break;
        case 3:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('green');
            colorName.innerText = 'Green';
            break;
        case 4:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('yellow');
            colorName.innerText = 'Yellow';
            break;
        case 5:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('purple');
            colorName.innerText = 'Purple';
            break;
        case 6:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('aqua');
            colorName.innerText = 'Aqua';
            break;
        case 7:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('grey');
            colorName.innerText = 'Grey';
            break;
        case 8:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('brown');
            colorName.innerText = 'Brown';
            break;
        case 9:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('crimson');
            colorName.innerText = 'Crimson';
            break;
        case 10:
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('violet');
            colorName.innerText = 'Violet';
            break;
    };
});



//Function for generating random number
function randomRange(myMin, myMax) {
    const num = Math.floor(Math.random() * (myMax - myMin +1)) + myMin
    return num;
    }