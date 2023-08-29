
let projectPoint = document.querySelectorAll('.profile__protect-point')
let projectItem = document.querySelectorAll('.profile__protect-item')
projectPoint[0].addEventListener('click', function () {
  for (let i = 0; i < projectPoint.length; i++) {
    projectPoint[i].classList.remove('active')
  }
  for (let j = 0; j < projectItem.length; j++) {
    projectItem[j].classList.add('profile__protect-hide')
  }
  projectItem[0].classList.remove('profile__protect-hide')
  projectPoint[0].classList.add('active');
})
projectPoint[1].addEventListener('click', function () {
  for (let i = 0; i < projectPoint.length; i++) {
    projectPoint[i].classList.remove('active')
  }
  for (let j = 0; j < projectItem.length; j++) {
    projectItem[j].classList.add('profile__protect-hide')
  }
  projectItem[1].classList.remove('profile__protect-hide')
  projectPoint[1].classList.add('active');
})
  projectPoint[2].addEventListener('click', function () {
  for (let i = 0; i < projectPoint.length; i++) {
    projectPoint[i].classList.remove('active')
    }
    for (let j = 0; j < projectItem.length; j++) {
    projectItem[j].classList.add('profile__protect-hide')
  }
  projectItem[2].classList.remove('profile__protect-hide')
  projectPoint[2].classList.add('active');
})