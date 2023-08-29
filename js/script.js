// let links = document.querySelectorAll('.main-navbar__link');

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function () {
//         for (let j = 0; j < links.length; j++) {
//             links[j].classList.remove('active');
//         }
//         links[i].classList.add('active');
//     });
// }



document.querySelector('.main-navbar__lang').addEventListener('click', function () {
    document.querySelector('.main-navbar__lang').classList.toggle('active');
            document.querySelector('.main-navbar__lang-pop').classList.toggle('active');
            document.querySelector('.lang__close').classList.toggle('active');
        })


document.querySelector(".main-block__close").addEventListener("click", (function () { document.querySelector(".main-navbar").classList.toggle("active"), document.querySelector(".main-block__close").classList.toggle("active") })), document.querySelector(".header__burger").addEventListener("click", (function () { document.querySelector(".main-navbar").classList.add("open"), document.querySelector("body").classList.add("lock") })), document.querySelector(".main-navbar__close").addEventListener("click", (function () { document.querySelector(".main-navbar").classList.remove("open"), document.querySelector("body").classList.remove("lock") })); let btnsPopup = document.querySelectorAll(".check-box__btn"); for (let e = 0; e < btnsPopup.length; e++)btnsPopup[e].addEventListener("click", (() => { document.querySelector(".popup").classList.add("active"), document.querySelector(".shadow").classList.add("active") })); document.querySelector(".popup__close").addEventListener("click", (function () { document.querySelector(".popup").classList.remove("active"), document.querySelector(".shadow").classList.remove("active") })), document.querySelector(".shadow").addEventListener("click", (function () { document.querySelector(".popup").classList.remove("active"), document.querySelector(".shadow").classList.remove("active") })); let tabsBtns = document.querySelectorAll(".popup__btn"), tabsBlock = document.querySelectorAll(".popup__content"); for (let e = 0; e < tabsBtns.length; e++)tabsBtns[e].addEventListener("click", (() => { for (let e = 0; e < tabsBlock.length; e++)tabsBlock[e].classList.remove("active"); for (let e = 0; e < tabsBtns.length; e++)tabsBtns[e].classList.remove("active"); tabsBtns[e].classList.add("active"), tabsBlock[e].classList.add("active") }));

$('#btn-tooltip').tooltip();


