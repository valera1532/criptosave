// document.querySelector('.reports__period-sel').addEventListener('click', function () {
//   document.querySelector('.reports__period-sel-modal').classList.toggle('active');
// document.querySelector('.reports__period svg').classList.toggle('active');
// })
let reportsPeriod = document.querySelectorAll('.reports__period')
let reportsModal = document.querySelectorAll('.reports__period-sel-modal')
let reportsArrow = document.querySelectorAll('.reports__period svg')
for (let i = 0; i < reportsPeriod.length; i++) {
    reportsPeriod[i].addEventListener('click', function () {

        reportsModal[i].classList.toggle('active');
        reportsArrow[i].classList.toggle('active');
})

}

const ctx = document.getElementById('myChart');

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: ['02', '03', '04', '05', '06', '07'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [15, 25, 14, 25, 35, 20, 20],
                        fill: true,
                        backgroundColor: 'rgb(208, 7, 7, 0.7)',
                        borderColor: 'rgb(208, 7, 7, 0.7)',
                        tension: 0.2
                    },
                    {
                        label: 'My First Dataset',
                        data: [25, 39, 80, 41, 38, 25, 30],
                        fill: true,
                        backgroundColor: 'rgb(0, 29, 255, 0.5)',
                        borderColor: 'rgb(0, 29, 255, 0.5)',
                        tension: 0.2
                    },

                    {
                        label: 'My First Dataset',
                        data: [35, 59, 34, 81, 56, 55, 40],
                        fill: true,
                        backgroundColor: 'rgb(0, 209, 255, 0.5)',
                        borderColor: 'rgb(0, 209, 255, 0.5)',
                        tension: 0.2
                    },]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }

        }
        );
        const ctx1 = document.getElementById('myChart1');

        new Chart(ctx1, {
            type: 'line',
            data: {
                labels: ['02', '03', '04', '05', '06', '07'],
                datasets: [
                    {
                        label: 'My First Dataset',
                        data: [20, 25, 22, 25, 35, 20, 11],
                        fill: true,
                        backgroundColor: 'rgb(255, 214, 0, 0.5)',
                        borderColor: 'rgb(255, 214, 0, 0.9)',
                        tension: 0.2
                    },
                    {
                        label: 'My First Dataset',
                        data: [45, 59, 80, 61, 58, 45, 50],
                        fill: true,
                        backgroundColor: 'rgb(0, 217, 231, 0.4)',
                        borderColor: 'rgb(0, 217, 231)',
                        tension: 0.2
                    }
                    ,
                ]
            },
            options: {
                scales: {
                    y: {
                        beginAtZero: true
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    }
                }
            }

        }
);


let reportsTabs = document.querySelectorAll('.reports__head-tab')
let reportsTable = document.querySelectorAll('.reports__table')
for (let i = 0; i < reportsTabs.length; i++) {
    reportsTabs[0].addEventListener('click', function () {
        for (let j = 0; j < reportsTabs.length; j++) {
            reportsTabs[j].classList.remove('active');
            reportsTable[j].classList.remove('active');
        }
        reportsTable[0].classList.add('active');
        reportsTabs[0].classList.add('active');
    },
    ),
        reportsTabs[1].addEventListener('click', function () {
        for (let j = 0; j < reportsTabs.length; j++) {
            reportsTabs[j].classList.remove('active');
            reportsTable[j].classList.remove('active');
        }
            reportsTabs[1].classList.add('active');
             reportsTable[1].classList.add('active');
    },
    ),
        reportsTabs[2].addEventListener('click', function () {
        for (let j = 0; j < reportsTabs.length; j++) {
            reportsTabs[j].classList.remove('active');
            reportsTable[j].classList.remove('active');
        }
            reportsTabs[2].classList.add('active');
            reportsTable[2].classList.add('active');
    },
    )
}