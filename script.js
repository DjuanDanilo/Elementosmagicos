function gerarResultados(dados) {
    let section = document.getElementById('resultados-pesquisa');
    let resultados = "";

    for (let dado of dados) {
        resultados += `
            <div class="item-resultado">
                <img src="${dado.imagem}" alt="${dado.nome}" class="imagem-produto">
                <h2><a href="${dado.link}" target="_blank">${dado.nome}</a></h2>
                <p class="descricao-meta">${dado.descricao}</p>
                <a href="${dado.link}" target="_blank" rel="noopener noreferrer">Mais Informações</a>
            </div>
        `;
    }

    if (!resultados) {
        resultados = "<p>Não vendemos esse tipo de pergaminho aqui!</p>";
    }

    section.innerHTML = resultados;
}

function pesquisar() {
    let inputElement = document.querySelector("input");
    let campoPesquisa = inputElement.value.toLowerCase();

    let dadosFiltrados = dados.filter(dado => 
        dado.nome.toLowerCase().includes(campoPesquisa) || 
        dado.descricao.toLowerCase().includes(campoPesquisa)
    );

    gerarResultados(dadosFiltrados);
}

gerarResultados(dados);

document.querySelector("input").addEventListener("input", pesquisar);
