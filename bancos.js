const btnL = document.getElementById('btnleft');
const btnR = document.getElementById('btnright');

const container = document.getElementById('scroll-container');

btnR.addEventListener('click', () => {
    container.style.left = '-65%';
});

btnL.addEventListener('click', () => {
    if (container.style.left = '20px') {
        container.style.left = '20px';
    }
});