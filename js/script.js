// let links = document.querySelectorAll('.main-navbar__link');

// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function () {
//         for (let j = 0; j < links.length; j++) {
//             links[j].classList.remove('active');
//         }
//         links[i].classList.add('active');
//     });
// }

let lang = document.querySelectorAll('.main-navbar__lang ');
let langClose = document.querySelectorAll('.lang__close');
let langPop = document.querySelectorAll('.main-navbar__lang-pop');

for (let i = 0; i < lang.length; i++) {
    lang[i].addEventListener('click', function () {
        lang[i].classList.toggle('active');
        langClose[i].classList.toggle('active');
        langPop[i].classList.toggle('active');
    })

}

document.querySelector(".main-block__close").addEventListener("click", (function () {
    document.querySelector(".main-navbar").classList.toggle("active"), document.querySelector(".main-block__close").classList.toggle("active")
})), document.querySelector(".header__burger").addEventListener("click", (function () {
    document.querySelector(".main-navbar").classList.add("open"), document.querySelector("body").classList.add("lock")
})), document.querySelector(".main-navbar__close").addEventListener("click", (function () {
    document.querySelector(".main-navbar").classList.remove("open"), document.querySelector("body").classList.remove("lock")
}));



let titlePop = document.querySelectorAll(".popup__title");
let btnsPopup = document.querySelectorAll(".check-box__btn");
let scorePop = document.querySelectorAll(".popup__content");
for (let e = 0; e < btnsPopup.length; e++) btnsPopup[e].addEventListener("click", (() => {
    document.querySelector(".popup").classList.add("active");
    document.querySelector(".shadow").classList.add("active")

    for (let e = 0; e < tabsBlock.length; e++) tabsBlock[e].classList.remove("active");
    for (let e = 0; e < tabsBtns.length; e++) tabsBtns[e].classList.remove("active");
    for (let e = 0; e < titlePop.length; e++)
        titlePop[e].classList.add("none")

    titlePop[e].classList.remove("none"),
        tabsBtns[e].classList.add("active"),
        tabsBlock[e].classList.add("active")
}));


document.querySelector(".popup__close").addEventListener("click", (function () {
    document.querySelector(".popup").classList.remove("active"), document.querySelector(".shadow").classList.remove("active")
})), document.querySelector(".shadow").addEventListener("click", (function () {
    document.querySelector(".popup").classList.remove("active"), document.querySelector(".shadow").classList.remove("active")
}));
let tabsBtns = document.querySelectorAll(".popup__btn"),
    tabsBlock = document.querySelectorAll(".popup__content");
for (let e = 0; e < tabsBtns.length; e++) tabsBtns[e].addEventListener("click", (() => {

    for (let e = 0; e < tabsBlock.length; e++) tabsBlock[e].classList.remove("active");
    for (let e = 0; e < tabsBtns.length; e++) tabsBtns[e].classList.remove("active");
    for (let e = 0; e < titlePop.length; e++) {
        titlePop[e].classList.add("none")
    }
    titlePop[e].classList.remove("none"),
        tabsBtns[e].classList.add("active"), tabsBlock[e].classList.add("active")

}));

let historyBtn = document.querySelector(".check-body__btn");
historyBtn.addEventListener("click", (function () {
    document.querySelector(".popup").classList.add("active"),
        document.querySelector(".shadow").classList.add("active")
    for (let i = 0; i < tabsBtns.length; i++) {
        titlePop[i].classList.add("none"),
            tabsBtns[i].classList.remove("active"),
            tabsBlock[i].classList.remove("active")
    };
    tabsBtns[2].classList.add("active");
    tabsBlock[2].classList.add("active");
    titlePop[2].classList.remove("none");
}));
let multiBtn = document.querySelectorAll(".multi__btn");
for (let j = 0; j < multiBtn.length; j++) {

    multiBtn[j].addEventListener("click", (function () {
        document.querySelector(".popup").classList.add("active"),
            document.querySelector(".shadow").classList.add("active")
        for (let i = 0; i < tabsBtns.length; i++) {
            titlePop[i].classList.add("none"),
                tabsBtns[i].classList.remove("active"),
                tabsBlock[i].classList.remove("active")
        };
        tabsBtns[j].classList.add("active");
        tabsBlock[j].classList.add("active");
        titlePop[j].classList.remove("none");
    }));
}








const body = document.querySelector("body");
body.addEventListener('click', function () {

    magicPointer.classList.add('scale');

    setTimeout(() => magicPointer.classList.remove('scale'), 200);
})