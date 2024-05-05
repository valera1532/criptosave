document.querySelector(".main-block__close").addEventListener("click", (function () {
    document.querySelector(".main-navbar").classList.toggle("active"), document.querySelector(".main-block__close").classList.toggle("active")
})), document.querySelector(".header__burger").addEventListener("click", (function () {
    document.querySelector(".main-navbar").classList.add("open"), document.querySelector("body").classList.add("lock")
})), document.querySelector(".main-navbar__close").addEventListener("click", (function () {
    document.querySelector(".main-navbar").classList.remove("open"), document.querySelector("body").classList.remove("lock")
}));



const checkboxButtons = document.querySelectorAll('.check-box__btn')
const popupButtons = Array.from(document.querySelectorAll('.popup__btn'))
const popupButtons2 = Array.from(document.querySelectorAll('.popup__btn2'))
const popupContents = Array.from(document.querySelectorAll('.popup__content'))
const popupTitle = Array.from(document.querySelectorAll('.popup__title'))
const popupTitle2 = Array.from(document.querySelectorAll('.popup__title2'))
const popupContents2 = Array.from(document.querySelectorAll('.popup__content2'))
const popup = document.querySelector('.popup')
const popup2 = document.querySelector('.popup2')
const popupCloseButton = document.querySelector('.popup__close')
const popupCloseButton2 = document.querySelector('.popup__close2')
const popupShadow = document.querySelector('.shadow')
const multiButtons = document.querySelectorAll('.multi__btn')
const checkBodyBtn = document.querySelector('.check-body__btn')

function popupOpen() {
    if (this.classList.contains('check-box__btn')) {
        popup.classList.add('active')
        if (popupCloseButton.hasAttribute('style')) popupCloseButton.removeAttribute('style')
    } else if (this.classList.contains('multi__btn')) {
        popupCloseButton.style.display = 'none'
        popup2.classList.add('active')
    }

    popupShadow.classList.add('active')
    document.documentElement.style.overflow = 'hidden'
}

function popupClose() {
    if (popup.classList.contains('active')) {
        popup.classList.remove('active')
    } else if (popup2.classList.contains('active')) {
        popup2.classList.remove('active')
    }

    popupShadow.classList.remove('active')
    document.documentElement.removeAttribute('style')
}

function checkPopupContent(i) {
    if (popup.classList.contains('active')) {
        const activeBtn = popupButtons.find(btn => btn.classList.contains('active'))
        activeBtn.classList.remove('active')
        popupButtons[i].classList.add('active')

        const activeTitle = popupTitle.find(title => title.classList.contains('active'))
        activeTitle.classList.remove('active')
        popupTitle[i].classList.add('active')

        const activeContent = popupContents.find(item => item.classList.contains('active'))
        activeContent.classList.remove('active')
        popupContents[i].classList.add('active')
    } else if (popup2.classList.contains('active')) {
        const activeBtn2 = popupButtons2.find(btn => btn.classList.contains('active'))
        activeBtn2.classList.remove('active')
        popupButtons2[i].classList.add('active')

        const activeTitle2 = popupTitle2.find(title => title.classList.contains('active'))
        activeTitle2.classList.remove('active')
        popupTitle2[i].classList.add('active')


        const activeContent2 = popupContents2.find(item => item.classList.contains('active'))
        activeContent2.classList.remove('active')
        popupContents2[i].classList.add('active')
    }
}

checkboxButtons.forEach((btn, i) => {
    btn.addEventListener('click', function () {
        popupOpen.call(this)
        checkPopupContent(i)
    })
})

multiButtons.forEach((btn, i) => {
    btn.addEventListener('click', function () {
        popupOpen.call(this)
        checkPopupContent(i)
    });
})

popupButtons.forEach((item, i) => {
    item.addEventListener('click', () => checkPopupContent(i))
})
popupButtons2.forEach((item, i) => {
    item.addEventListener('click', () => checkPopupContent(i))
})


popupShadow.addEventListener('click', popupClose)

popupCloseButton.addEventListener('click', popupClose)
popupCloseButton2.addEventListener('click', popupClose)

checkBodyBtn.addEventListener('click', () => {
    const activeBtn = popupButtons.find(btn => btn)
    activeBtn.classList.remove('active')
    popupButtons[2].classList.add('active')

    const activeContent = popupContents.find(item => item.classList.contains('active'))
    activeContent.classList.remove('active')
    popupContents[2].classList.add('active')

    popup.classList.add('active')
    popupShadow.classList.add('active')
})