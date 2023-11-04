let textInfo = document.querySelectorAll('.team__info');
let textCards = document.querySelectorAll('.team__card');
let teamSlide = document.querySelectorAll('.team__slide');
for (let i = 0; i < textCards.length; i++) {
    textCards[i].addEventListener('click', () => {

        for (let j = 0; j < textCards.length; j++) {
            textCards[j].classList.remove('active');
            textInfo[j].classList.remove('active');
        }
        textCards[i].classList.add('active');
        textInfo[i].classList.add('active');
    })

}


// Добавляем обработчик события при наведении курсора на блок


function chekedActive() {

}
const video = document.getElementById("bgvideo");
const muteButton = document.getElementById("muteButton");

muteButton.addEventListener("click", function () {
    if (video.muted) {
        video.muted = false;
        muteButton.textContent = "выкл. звук";
    } else {
        video.muted = true;
        muteButton.textContent = "вкл. звук";
    }
});

const myBlock = document.querySelector(".video");
const acab = document.getElementById('acab');

myBlock.addEventListener("mouseover", function () {
    myBlock.addEventListener('mousemove', moveAcab, false);
});

myBlock.addEventListener("mouseout", function () {
    myBlock.removeEventListener('mousemove', moveAcab, false);
});

function moveAcab(event) {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX;
    const myBlockRect = myBlock.getBoundingClientRect();
    const mouseY = event.clientY + scrollY;
    const mouseX = event.clientX + scrollX;

    const newTop = mouseY - myBlockRect.top - scrollY;
    const newLeft = mouseX - myBlockRect.left - scrollX;

    acab.style.transform = `translate(${newLeft - 40}px, ${newTop - 40}px)`;
}



