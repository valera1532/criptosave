let textInfo = document.querySelectorAll('.team__info');
let teamLinks = document.querySelectorAll('.team__social');
let textCards = document.querySelectorAll('.team__card');
let teamSlide = document.querySelectorAll('.team__slide');
for (let i = 0; i < textCards.length; i++) {
    textCards[i].addEventListener('click', () => {

        for (let j = 0; j < textCards.length; j++) {
            textCards[j].classList.remove('active');
            textInfo[j].classList.remove('active');
            teamLinks[j].classList.remove('active');
        }
        textCards[i].classList.add('active');
        textInfo[i].classList.add('active');
        teamLinks[i].classList.add('active');
    })

}






