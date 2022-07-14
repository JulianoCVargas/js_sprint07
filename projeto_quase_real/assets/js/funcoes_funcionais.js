const vetorProduto = [
    {
        "produto": "produto 1",
        "preco": 20,
        "descricao": "teste de produto 1",
        "em_estoque": true,
        "img":""
    },
    {
        "produto": "produto 2",
        "preco": 30,
        "descricao": "teste de produto 2",
        "em_estoque": true,
        "img":""
    },
    {
        "produto": "produto 3",
        "preco": 200,
        "descricao": "teste de produto 3",
        "em_estoque": false,
        "img":""
    },
    {
        "produto": "produto 4",
        "preco": 2,
        "descricao": "teste de produto 4",
        "em_estoque": true,
        "img":""
    }
]

//filtros
const filtroMaior100= (elemento) => {
    return elemento.preco > 100
}

const maiorQue100 = vetorProduto.filter(filtroMaior100);

//console.log (maiorQue100);

const filtroMenor100= (elemento) => {
    return elemento.preco < 100
}

const menorQue100 = vetorProduto.filter(filtroMenor100);
//console.log (menorQue100);


const emEstoque = (elemento) => {
    return elemento.em_estoque == true;
}
const vetorFiltrado = vetorProduto.filter(emEstoque);
console.log (vetorFiltrado);





const lista_de_produtos = document.getElementById("lista-produtos");

const mostraProdutos = (vetor) => {
    for (let elemento of vetor) {
        const liProdutos = `
        <li class="item_lista">
        <h1>${elemento.produto}</h1>
        <p class="descricao">${elemento.descricao}</p>
        <p class="preco">R$${elemento.preco}</p>`;
        lista_de_produtos.innerHTML += liProdutos;

    }
}

mostraProdutos(vetorProduto);
