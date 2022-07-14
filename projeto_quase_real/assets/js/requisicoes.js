//exibir_load(true);
// https://api.github.com/users/JulianoCVargas


 
fetch('../json/hobbies.json')
    .then(response => response.json())
    .then(data => {
        console.log(data)


    })

    .catch(error => { //para status de erro
        console.error('algo deu errado da requisição',
            error);
    }
    //document.getElementsByName('#erro').innerHtml
    ).finally((finalizar) => {
        console.log('sempre cai aqui');
    });