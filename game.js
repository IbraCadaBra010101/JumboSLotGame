let randomize;
let selectedNumber = [];
let loserIMG;
let winnerIMG;
let sym1;
let sym2;
let sym3;
let sym4;
let sym5;
let sym6;
let sym7;
let sym8;
let sym9;
let mysteryIMG;
let backGroundMusic = new Audio('audio/2019-01-02_-_8_Bit_Menu_-_David_Renda_-_FesliyanStudios.com.mp3');
let onSelectingNumber = new Audio('audio/Close Vault Or Jail Door-SoundBible.com-1221913084.mp3');
let winningMusic = new Audio('audio/Cash Register Cha Ching-SoundBible.com-184076484.mp3');
let losingMusic = new Audio('audio/Computer Error-SoundBible.com-1655839472.wav');
onSelectingNumber.playbackRate = 10;
backGroundMusic.play();

mysteryIMG = document.querySelector('.mysteryImage');
mysteryIMG.style.border = 'solid';
mysteryIMG.style.borderWidth = '20px';
mysteryIMG.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
mysteryIMG.style.borderImageSlice = '1';



document.querySelector('.sym1').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        selectedNumber.push(1);
        sym1 = document.querySelector('.sym1');
        sym1.style.border = 'solid';
        sym1.style.borderWidth = '20px';
        sym1.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym1.style.borderImageSlice = '1';

    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }

});
document.querySelector('.sym2').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        selectedNumber.push(2);
        sym2 = document.querySelector('.sym2');
        sym2.style.border = 'solid';
        sym2.style.borderWidth = '20px';
        sym2.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym2.style.borderImageSlice = '1';
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }

});

document.querySelector('.sym3').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym3 = document.querySelector('.sym3');
        sym3.style.border = 'solid';
        sym3.style.borderWidth = '20px';
        sym3.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym3.style.borderImageSlice = '1';
        selectedNumber.push(3);
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }

});
document.querySelector('.sym4').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym4 = document.querySelector('.sym4');
        sym4.style.border = 'solid';
        sym4.style.borderWidth = '20px';
        sym4.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym4.style.borderImageSlice = '1';
        selectedNumber.push(4);
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }
});
document.querySelector('.sym5').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym5 = document.querySelector('.sym5');
        sym5.style.border = 'solid';
        sym5.style.borderWidth = '20px';
        sym5.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym5.style.borderImageSlice = '1';
        selectedNumber.push(5);
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }

});
document.querySelector('.sym6').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym6 = document.querySelector('.sym6');
        sym6.style.border = 'solid';
        sym6.style.borderWidth = '20px';
        sym6.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym6.style.borderImageSlice = '1';
        selectedNumber.push(6);
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }

});
document.querySelector('.sym7').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym7 = document.querySelector('.sym7');
        sym7.style.border = 'solid';
        sym7.style.borderWidth = '20px';
        sym7.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym7.style.borderImageSlice = '1';
        selectedNumber.push(7);
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }


});
document.querySelector('.sym8').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym8 = document.querySelector('.sym8');
        sym8.style.border = 'solid';
        sym8.style.borderWidth = '20px';
        sym8.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym8.style.borderImageSlice = '1';
        selectedNumber.push(8);
    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }


});
document.querySelector('.sym9').addEventListener('click', function (e) {
    e.preventDefault();
    onSelectingNumber.play();
    if (selectedNumber.length <= 4) {
        sym9 = document.querySelector('.sym9');
        sym9.style.border = 'solid';
        sym9.style.borderWidth = '20px';
        sym9.style.borderImageSource = 'linear-gradient(45deg, rgb(0,143,104), rgb(250,224,66))';
        sym9.style.borderImageSlice = '1';
        selectedNumber.push(9);
        console.log(selectedNumber.length);

    } else {
        alert('You have selected the maximum amount of numbers, go ahead and press play!')
    }
});


document.querySelector('.play-button').addEventListener('click', function (e) {

    e.preventDefault();
    if (selectedNumber.length > 0) {
        randomize = Math.floor(Math.random() * 9) + 1;

        loserIMG = document.querySelector('.loser');
        winnerIMG = document.querySelector('.winner');

        mysteryIMG.style.display = 'flex';
        mysteryIMG.src = 'images/sym' + randomize + '.png';
        selectedNumber.map(eachNumber => {
            if (eachNumber === randomize) {
                winningMusic.play();
                winnerIMG.style.display = 'flex';
                loserIMG.style.display = 'none';

            } else if (!selectedNumber.includes(randomize)) {
                losingMusic.play();
                loserIMG.style.display = 'flex';
                winnerIMG.style.display = 'none';
            }
        });
    } else {
        alert('Please select a number!')
    }

});
document.querySelector('.reset-game').addEventListener('click', function (e) {
    e.preventDefault();
    let targetImages = document.querySelectorAll('img');
    Array.prototype.forEach.call(targetImages, function (element) {
        element.removeAttribute('style');
    });
    selectedNumber.length = 0;
    mysteryIMG.src = "images/mystery.png";

});