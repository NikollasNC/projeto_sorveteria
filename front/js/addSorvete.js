let botaoCadastro = document.getElementById('botao_cadastro');
let abaixou = false;

botaoCadastro.addEventListener('click', function() {
    if(!abaixou) {
        document.getElementById('cadastro').style.height = '450px';
        abaixou = true;
    } else {
        document.getElementById('cadastro').style.height = '87px';
        abaixou = false;
    }
});

//carregarImg
let sorveteImg = document.getElementById('foto_sorvete');
let inputSorveteImg = document.getElementById('input-file');

inputSorveteImg.onchange = function() {
    sorveteImg.src = URL.createObjectURL(inputSorveteImg.files[0]);
}