 const senhaCorreta = "1234";

    function pedirSenha() {
        const senha = prompt("Digite a senha para acessar este módulo:");
        if (senha !== senhaCorreta) {
            alert("Senha incorreta!");
            window.location.href = "index.html"; // volta para a página inicial
        }
    }

    pedirSenha();