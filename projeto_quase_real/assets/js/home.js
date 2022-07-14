let elemento_usuario_logado
    = document.getElementById("usuario-logado");

const nome_usuario_logado = localStorage.getItem("usuarioLogado");
const sobrenome = localStorage.getItem("usuarioSobrenome");

elemento_usuario_logado.innerText = `Olá ${nome_usuario_logado} ${sobrenome}`;


const voltarTela = () => {
    window.location.assign("../index.html");
    localStorage.clear();
}
