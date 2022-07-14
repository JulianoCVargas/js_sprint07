function renderiza_foto(foto){
    const img_foto = document.getElementById("foto");
    img_foto.src=`${foto}`;
} 

function mostrarNome (nome){
    const nome_titulo=document.getElementById("nome");
    nome_titulo.innerText=nome;
}

fetch('https://api.github.com/users/JulianoCVargas')
    .then(response => response.json())
    .then(data => {
        renderiza_foto(data.avatar_url);
        mostrarNome(data.name);
        console.log(data)


    })

    .catch(error => { //para status de erro
        console.error('algo deu errado da requisição',
            error);
    }).finally((finalizar) => {
        console.log('sempre cai aqui');
    });