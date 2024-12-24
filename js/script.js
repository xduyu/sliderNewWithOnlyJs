// const element1 = document.getElementById('element1');
// const element2 = document.getElementById('element2');
// const element3 = document.getElementById('element3');


// element1.addEventListener('click', (event) => {
//     console.log('1 red');
//     event.stopImmediatePropagation()
// })
// element2.addEventListener('click', (event) => {
//     console.log('2 orange');
//     event.stopPropagation()
// })
// element3.addEventListener('click', (event) => {
//     console.log('3 green');
//     event.stopPropagation()
// })

const preArrow = document.getElementById('pre-arrow');
const slider = document.getElementById('slider');
const nextArrow = document.getElementById('next-arrow');
const dotsContainer = document.getElementById('dotted-container')


const arr = [`Рассказ восходит к фольклорным жанрам устного пересказа в виде сказаний или поучительного
            иносказания и притчи[8][9]. По
            сравнению с более развёрнутыми повествовательными формами в рассказах не много действующих лиц и одна
            сюжетная линия
            (реже несколько) при характерном наличии какой-то одной проблемы.`, `Расска́з, или нове́лла (итал. novella — новость) — основной жанр малой повествовательной прозы. Автора рассказов принято именовать новеллистом, а совокупность рассказов — новелли́стикой.

Рассказ — меньшая по объёму форма художественной прозы, нежели повесть или роман[1]. Не следует путать новеллу — короткий рассказ[2], отличающийся стилем изложения[3][4][5], с её английским омонимом novella, являющимся эквивалентом современного понятия повесть[6][7].`, `Рассказам одного автора свойственна циклизация. В традиционной модели отношений «писатель-читатель» рассказ, как правило, публикуется в периодическом издании; накопленные за определённый период произведения затем издаются отдельной книгой как сборник рассказов.`
];


function createDots() {
    arr.forEach((textEl, indexEL) => {
        const dot = document.createElement('div')
        dot.classList.add('dotted__item')
        dot.dataset.index = indexEL
        dotsContainer.append(dot)
        dot.addEventListener('click', () => {
            console.log(indexEL)
            currentIndex = indexEL;
            updateText()
        })
    });
}

let currentIndex = 0;

function updateText() {
    slider.textContent = arr[currentIndex];

    const dots = dotsContainer.querySelectorAll('.dotted__item')
    dots.forEach((elDot, index) =>{
        elDot.classList.toggle('active', index == currentIndex)
    })
}

nextArrow.addEventListener('click', () => {

    currentIndex = (currentIndex + 1) % arr.length;
    updateText()
})
preArrow.addEventListener('click', () => {
    
    currentIndex = (currentIndex - 1 + arr.length) % arr.length;
    updateText()
})


updateText()
createDots()