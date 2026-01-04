let botaoTema = document.getElementById('botao_tema');

botaoTema.addEventListener('click', function() {
    document.documentElement.classList.toggle('tema_escuro');

    if(sessionStorage.getItem('tema') == 'escuro') {
        sessionStorage.setItem('tema', 'claro');
    } else {
        sessionStorage.setItem('tema', 'escuro');
    }
});