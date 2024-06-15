const buttons = document.querySelectorAll('.deposits__btn');

for(let i = 0 ; i < buttons.length; i++){
    buttons[i].addEventListener('click', ()=>{
        buttons[i-1]?.classList.remove('active')
        buttons[i+1]?.classList.remove('active')
        buttons[i]?.classList.add('active')
    })
};

let reportsPeriod = document.querySelectorAll('.reports__period')
let reportsModal = document.querySelectorAll('.reports__period-sel-modal')
let reportsArrow = document.querySelectorAll('.reports__period svg')
for (let i = 0; i < reportsPeriod.length; i++) {
    reportsPeriod[i].addEventListener('click', function () {

        reportsModal[i].classList.toggle('active');
        reportsArrow[i].classList.toggle('active');
    })
}













document.querySelector('.deposits__btn-graf').addEventListener('click', function () {
  document.querySelector('.partners-history__graf').classList.add('active');
    document.querySelector('.partners-history__statistic').classList.remove('active');
    document.querySelector('.partners-center__table').classList.add('none');
    document.querySelector('.table__box').classList.remove('active');
    document.querySelector('.table__box').classList.remove('active');
})

document.querySelector('.deposits__btn-table').addEventListener('click', function () {
  document.querySelector('.partners-history__graf').classList.remove('active');
    document.querySelector('.partners-history__statistic').classList.add('active');
    document.querySelector('.partners-center__table').classList.remove('none');
    document.querySelector('.table__box').classList.add('active');

})
