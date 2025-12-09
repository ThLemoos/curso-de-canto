const senha = "modulo1";

    function pedirSenha() {
        const resposta = prompt("Digite a senha do Módulo 1:");
        if (resposta !== senha) {
            alert("Senha incorreta!");
            window.location.href = "index.html";
        }
    }

    pedirSenha();