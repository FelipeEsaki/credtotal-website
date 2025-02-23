const btnSelecionar = document.getElementById('btn-selecionar');
const servicos = document.getElementById('servicos');
const btnServicos = document.querySelectorAll('.botao-servicos');
const btnEnviar = document.getElementById('enviar');


let numeroWpp = '5531988852630';

let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let telefone = document.querySelector('#telefone');
let valor = document.querySelector('#valor');
let obs = document.querySelector('#texto');

const ada = nome.value;

btnSelecionar.addEventListener('click', () => {
    servicos.style.display = 'flex';
    servicos.style.transition = '.5s';
});

btnServicos.forEach(botao => {
    botao.addEventListener('click', () => {
        btnSelecionar.textContent = botao.textContent;
        btnSelecionar.value = botao.textContent;
        document.getElementById('servicos').style.display = 'none';
    });
});

let servico = btnSelecionar.value;

btnEnviar.addEventListener('click', () => {
    let linkWpp = 'https://wa.me//' + numeroWpp + `?text= *Nome*: ${nome.value} *Email*: ${email.value} *Telefone*: ${telefone.value} *Valor*: ${valor.value} *Serviço*: ${btnSelecionar.value} *Observações*: ${obs.value}`;

    window.location.href = linkWpp;
});

