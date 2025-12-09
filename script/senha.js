// ► Senha normal (de cada módulo)
const senhaCorreta = "35842515";  // <- exclusiva deste módulo

// ► Senha global de administrador
const senhaAdmin = "Rafaelteclado35842515@";

function verificarSenha() {
    const senha = document.getElementById("senhaDigitada").value;
    const erro = document.getElementById("erro");

    // → 1. Se for administrador
    if (senha === senhaAdmin) {
        // Salva flag para liberar todos os módulos
        localStorage.setItem("adminLogado", "true");

        liberarAcesso();
        return;
    }

    // → 2. Se for aluno (senha normal)
    if (senha === senhaCorreta) {
        liberarAcesso();
    } else {
        erro.innerText = "Senha incorreta!";
        erro.style.opacity = "1";
    }
}

function liberarAcesso() {
    const tela = document.getElementById("telaSenha");

    tela.style.opacity = "0";

    setTimeout(() => {
        tela.style.display = "none";
    }, 300);
}

// ► 3. Quando a página carrega, verificar se o admin já está logado
window.onload = function () {
    if (localStorage.getItem("adminLogado") === "true") {
        liberarAcesso(); // Esconde o modal imediatamente
    }
};