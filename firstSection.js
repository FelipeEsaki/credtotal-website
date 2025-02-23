const produto1 = document.getElementById('produto1');
const produto2 = document.getElementById('produto2');
const produto3 = document.getElementById('produto3');

const content1 = document.getElementById('content1');
const content2 = document.getElementById('content2');
const content3 = document.getElementById('content3');

content1.addEventListener('mouseover', () => {
    produto1.style.top = '55%';
});
content1.addEventListener('mouseleave', () => {
    produto1.style.top = '-45%';
});


content2.addEventListener('mouseover', () => {
    produto2.style.top = '55%';
});
content2.addEventListener('mouseleave', () => {
    produto2.style.top = '-45%';
});


content3.addEventListener('mouseover', () => {
    produto3.style.top = '55%';
});
content3.addEventListener('mouseleave', () => {
    produto3.style.top = '-45%';
});