// senha.js

const senhaCorreta = "35842515";
function verificarSenha() {
    const senha = document.getElementById("senhaDigitada").value;
    const erro = document.getElementById("erro");

    if (senha === senhaCorreta) {
        document.getElementById("telaSenha").style.opacity = "0";

        setTimeout(() => {
            document.getElementById("telaSenha").style.display = "none";
        }, 300);

    } else {
        erro.innerText = "Senha incorreta!";
        erro.style.opacity = "1";
    }
}