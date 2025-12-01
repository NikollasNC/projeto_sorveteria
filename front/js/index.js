let botaoInicio = document.getElementById('botao_inicio');
let botaoConta = document.getElementById('botao_conta');
let botaoAddSorvete = document.getElementById('botao_addSorvete');
let botaoEstoque = document.getElementById('botao_estoque');
let botaoConfiguracoes = document.getElementById('botao_configuracoes');

let secaoInicio = document.getElementById('inicio');
let secaoConta = document.getElementById('conta');
let secaoAddSorvete = document.getElementById('addSorvete');
let secaoEstoque = document.getElementById('estoque');
let secaoConfiguracoes = document.getElementById('configuracoes');

let botaoAtual = botaoInicio;
let secaoAtual = secaoInicio;

botaoInicio.addEventListener('click', function() {
    trocarSecao(secaoInicio);
});

botaoConta.addEventListener('click', function() {
    trocarSecao(secaoConta);
});

botaoAddSorvete.addEventListener('click', function() {
    trocarSecao(secaoAddSorvete);
});

botaoEstoque.addEventListener('click', function() {
    trocarSecao(secaoEstoque);
});

botaoConfiguracoes.addEventListener('click', function() {
    trocarSecao(secaoConfiguracoes);
});

function trocarSecao(secao) {
    secaoAtual.style.position = 'fixed';
    secao.style.position = 'static';
    secaoAtual = secao;
}