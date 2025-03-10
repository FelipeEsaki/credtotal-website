const btnSelecionar = document.getElementById('btn-selecionar');
const servicos = document.getElementById('servicos');
const btnServicos = document.querySelectorAll('.botao-servicos');
const form = document.querySelector('.form');

const numeroWpp = '5531988852630';

btnSelecionar.addEventListener('click', () => {
    servicos.style.display = 'flex';
    servicos.style.transition = '.5s';
});

btnServicos.forEach(botao => {
    botao.addEventListener('click', () => {
        btnSelecionar.textContent = botao.textContent;
        btnSelecionar.value = botao.textContent;
        servicos.style.display = 'none';
    });
});

form.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const nome = document.getElementById('nome').value;
    const email = document.getElementById('email').value;
    const telefone = document.getElementById('telefone').value;
    const servico = btnSelecionar.value;
    const valor = document.getElementById('valor').value;
    const obs = document.getElementById('texto').value;

    if (!nome || !email || !telefone || !servico || !valor) {
        alert('Por favor, preencha todos os campos obrigatórios');
        return;
    }

    const linkWpp = 'https://wa.me//' + numeroWpp + `?text=*Nome*: ${nome}%0A*Email*: ${email}%0A*Telefone*: ${telefone}%0A*Valor*: ${valor}%0A*Serviço*: ${servico}%0A*Observações*: ${obs}`;
    window.location.href = linkWpp;
});