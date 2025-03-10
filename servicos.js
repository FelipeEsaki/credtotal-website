const servicos = [
    {
        imagem: `assets/servicos/consignado.jpg`,
        servico: 'Crédito Consignado',
        texto: `É uma modalidade de empréstimo para aposentados, pensionistas, servidores públicos, na qual as parcelas são descontadas diretamente do benefício, com juros baixíssimos.`
    },
    {
        imagem: `assets/servicos/pessoal.jpg`,
        servico: 'Crédito Pessoal',
        texto: `- Débito na conta de luz <br> - Via cartão de crédito <br> - Débito em conta `
    },
    {
        imagem: `assets/servicos/rural.png`,
        servico: 'Crédito Rural',
        texto: `O crédito rural é um financiamento que <strong>auxilia produtores rurais</strong> à <strong>expandirem suas operações</strong>, fazer investimentos ou <strong>custear a produção.`
    },
    {
        imagem: `assets/servicos/limpa.png`,
        servico: 'Limpa Nome',
        texto: `O limpa nome é um serviço onde todas as suas <strong>dívidas serão colocadas em status de sigilo total</strong> durante 12 meses, elevando seu Score e <strong>facilitando aprovações.`
    },
    {
        imagem: `assets/servicos/seguro.png`,
        servico: 'Seguros',
        texto: `A Cred Total possui <strong>todos os tipos de seguros</strong> e <strong>mais de 10 seguradoras</strong> parceiras para melhor atender sua necessidade!`
    },
    {
        imagem: `assets/servicos/consorcio.jpg`,
        servico: 'Consórcios',
        texto: `A Cred Total oferece a <strong>melhor opção de consórcio</strong> de acordo com sua necessidade. Trabalhamos com todos os tipos de consórcios!`
    },
    {
        imagem: `assets/servicos/solar.jpg`,
        servico: 'Energia Solar',
        texto: `Já pensou em <strong>reduzir sua conta de energia em até 95%</strong>? Fazemos seu projeto e financiamento do investimento!`
    },
    {
        imagem: `assets/servicos/capital.jpg`,
        servico: 'Capital de Giro',
        texto: `O capital de giro é um produto para <strong>atender as necessidades de caixa da sua empresa</strong> e <strong>custear o ciclo operacional</strong>!`
    },
    {
        imagem: `assets/servicos/carro.jpg`,
        servico: 'Financiamento Veicular',
        texto: `Está na hora de adquirir seu <strong>novo veículo</strong>! Com a Cred Total você tem as <strong>melhores taxas</strong> e opções de financiamento!`
    },
    {
        imagem: `assets/servicos/casa.jpg`,
        servico: 'Financiamento Residencial',
        texto: `Está na hora de adquirir sua <strong>nova casa</strong>! Com a Cred Total você tem as <strong>melhores taxas</strong> e opções de financiamento, refinanciamento e carta fiança!`
    },
    {
        imagem: `assets/servicos/conta.jpg`,
        servico: 'Abertura de conta',
        texto: `Abra sua conta bancária <strong>sem custo</strong>! Com a Cred Total você tem os <strong>melhores bancos</strong> para abrir sua conta bancária digital!`
    },
    // {
    //     imagem: `assets/servicos/medicina.jpg`,
    //     servico: 'Tele Medicina',
    //     texto: `Faça seu plano de saúde Tele Medicina e faça suas <strong>consultas no conforto da sua casa</strong>! `
    // },
    // {
    //     imagem: `assets/servicos/consultoria.jpg`,
    //     servico: 'Consultoria Tributária',
    //     texto: `<strong>Redução de carga fiscal e conformidade legal</strong>, incluindo <strong>Recuperação Tributária</strong> para maximizar benefícios financeiros, com consultores especializados em planejamento fiscal.`
    // },
    {
        imagem: `assets/servicos/maquina.jpg`,
        servico: ' Crédito via Maquininha',
        texto: `A Cred Total oferece opções de <strong>crédito através da maquininha de cartão</strong>, <strong>ideal para negativados</strong>! `
    },
];

for (const servico of servicos) {
    const content = `<div class="servico">
    <img src="${servico.imagem}"/>
    <h2>${servico.servico}</h2>
    <p>${servico.texto} </p>
</div>`

    document.querySelector('.servicos').innerHTML += content;
}