const btnEnviar = document.getElementById('enviar');
let numeroWpp = '5531988852630';
let nome = document.querySelector('#nome');
let email = document.querySelector('#email');
let assunto = document.querySelector('#assunto');
let obs = document.querySelector('#texto');

btnEnviar.addEventListener('click', () => {
    let linkWpp = 'https://wa.me//' + numeroWpp + `?text= *Nome*: ${nome.value} *Email*: ${email.value} *Assunto*: ${assunto.value} *Observações*: ${obs.value}`;

    window.location.href = linkWpp;
});