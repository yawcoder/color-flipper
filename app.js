const bkcolor = document.querySelector('#bk');
const btn = document.querySelector('.btn');
let colorName = document.querySelector('.color-name');



/*btn.addEventListener('click', () => {
        let randomNumber = randomRange(1, 10);
        //console.log(randomNumber);
        //console.log(colorName.innerText);
        if(randomNumber == 1){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('red');
            colorName.innerText = '';
            colorName.innerText += 'Red';
        }else if(randomNumber == 2){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('blue');
            colorName.innerText = '';
            colorName.innerText += 'Blue';
        }else if(randomNumber == 3){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('green');
            colorName.innerText = '';
            colorName.innerText += 'Green';
        }else if(randomNumber == 4){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('yellow');
            colorName.innerText = '';
            colorName.innerText += 'Yellow';
        }else if(randomNumber == 5){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('purple');
            colorName.innerText = '';
            colorName.innerText += 'Purple';
        }else if(randomNumber == 6){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('aqua');
            colorName.innerText = '';
            colorName.innerText += 'Aqua';
        }else if(randomNumber == 7){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('grey');
            colorName.innerText = '';
            colorName.innerText += 'Grey';
        }else if(randomNumber == 8){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('brown');
            colorName.innerText = '';
            colorName.innerText += 'Brown';
        }else if(randomNumber == 9){
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('crimson');
            colorName.innerText = '';
            colorName.innerText += 'Crimson';
        }else{
            bkcolor.removeAttribute('class');
            bkcolor.classList.add('violet');
            colorName.innerText = '';
            colorName.innerText += 'Violet';
        }
    });*/


    btn.addEventListener('click', () => {
        let randomNumber = randomRange(1, 10);
            //console.log(randomNumber);
        switch (randomNumber) {
            case 1:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('red');
                colorName.innerText = '';
                colorName.innerText += 'Red';
                break;
            case 2:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('blue');
                colorName.innerText = '';
                colorName.innerText += 'Blue';
                break;
            case 3:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('green');
                colorName.innerText = '';
                colorName.innerText += 'Green';
                break;
            case 4:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('yellow');
                colorName.innerText = '';
                colorName.innerText += 'Yellow';
                break;
            case 5:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('purple');
                colorName.innerText = '';
                colorName.innerText += 'Purple';
                break;
            case 6:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('aqua');
                colorName.innerText = '';
                colorName.innerText += 'Aqua';
                break;
            case 7:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('grey');
                colorName.innerText = '';
                colorName.innerText += 'Grey';
                break;
            case 8:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('brown');
                colorName.innerText = '';
                colorName.innerText += 'Brown';
                break;
            case 9:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('crimson');
                colorName.innerText = '';
                colorName.innerText += 'Crimson';
                break;
            case 10:
                bkcolor.removeAttribute('class');
                bkcolor.classList.add('violet');
                colorName.innerText = '';
                colorName.innerText += 'Violet';
                break;
        };
    });



    //Function for generating random number
    function randomRange(myMin, myMax) {
        const num = Math.floor(Math.random() * (myMax - myMin +1)) + myMin
        return num;
      }