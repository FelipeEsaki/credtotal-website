const btnSolicitacao = document.querySelector('.solicitacao');
const btnAnalise = document.querySelector('.analise');
const btnAprovacao = document.querySelector('.aprovacao');
const btn = document.querySelectorAll('.btn');
const img = document.querySelector('#imagem-third');
const paragrafo = document.querySelector('.paragrafo__third');

let count = 1;
document.querySelector('#radio1').checked = true;

setInterval(function () {
    nexImage()
}, 5000);

function nexImage() {
    count++;
    if (count > 4) {
        count = 1;
    }

    document.querySelector('#radio' + count).checked = true;
}



function atualizarEstilo(contexto) {
    img.setAttribute('src', `assets/${contexto}.png`);

    btn.forEach(function (contexto) {
        contexto.classList.remove('active');
    });
}

btnSolicitacao.addEventListener('click', () => {
    atualizarEstilo('solicitacao');

    btnSolicitacao.classList.add('active');

    paragrafo.innerHTML = `O primeiro passo é entrar em contato com nossa equipe e fazer sua solicitação de acordo com sua necessidade. Um de nossos especialistas irá te atender e orientá-lo sobre a melhor linha e as melhores condições no momento, buscando sempre aquela com taxas menores e condições especiais!`;
});

btnAnalise.addEventListener('click', () => {
    atualizarEstilo('analise');

    btnAnalise.classList.add('active');

    paragrafo.innerHTML = `Depois de pré aprovada, sua solicitação irá para analise dentro da instituição financeira escolhida, passando por especialistas que irão fazer a liberação do crédito.`;
});

btnAprovacao.addEventListener('click', () => {
    atualizarEstilo('aprovacao');

    btnAprovacao.classList.add('active');

    paragrafo.innerHTML = `Pronto! Sua proposta está aprovada e o crédito será depositado direto na sua conta! Viu como é fácil realizar seu sonho com a ZanoSeg? Nossa equipe estará a disposição e irá te auxiliar desde a formalização até o depósito!`;
})