function mostrarSenha() {
    var senha = document.getElementById('senha');
    var btnMostrarSenha = document.getElementById('btn_senha');

    if(senha.type === 'password') {
        senha.setAttribute('type', 'text');
        btnMostrarSenha.src = 'img/img_login/visibility_off.png';
    } else {
        senha.setAttribute('type', 'password');
        btnMostrarSenha.src = 'img/img_login/visibility.png';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('formulario');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        //ColetarDados
        const dadosForm = {};
        const elementos = form.querySelectorAll('input, select, textarea');
        
        elementos.forEach(elemento => {
            if (elemento.name) {
                dadosForm[elemento.name] = elemento.value;
            }
        });

        try {
            localStorage.setItem('dadosDoFormulario', JSON.stringify(dadosForm));
            console.log("Dados salvos no localStorage:", dadosForm);

            window.location.href = form.action; 
        } catch (error) {
            console.error("Erro ao salvar dados no localStorage:", error);
            alert("Erro ao enviar o formulário. Consulte o console.");
        }
    });
});