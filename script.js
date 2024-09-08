// Função para buscar bandas
function buscarBandas() {
    const inputBusca = document.querySelector('input').value.toLowerCase();
    const resultadosPesquisa = document.getElementById('resultados-pesquisa');
    
    // Limpa os resultados anteriores
    resultadosPesquisa.innerHTML = '';

    // Verifica se o campo de busca está vazio
    if (inputBusca.trim() === '') {
        resultadosPesquisa.innerHTML = '<p class="mensagem-erro">Nenhuma banda encontrada. Digite algo no campo de busca.</p>';
        return;
    }
    
    // Filtra bandas pelo nome ou descrição
    const bandasFiltradas = bandas.filter(banda =>
        banda.nome.toLowerCase().includes(inputBusca) ||
        banda.descricao.toLowerCase().includes(inputBusca)
    );

    // Se não encontrar nenhuma banda
    if (bandasFiltradas.length === 0) {
        resultadosPesquisa.innerHTML = '<p class="mensagem-erro">Nenhuma banda encontrada.</p>';
        return;
    }

    // Gera os resultados dinamicamente
    bandasFiltradas.forEach(banda => {
        const divResultado = document.createElement('div');
        divResultado.classList.add('item-resultado');
        
        divResultado.innerHTML = `
            <h2><a href="${banda.link}" target="_blank">${banda.nome}</a></h2>
            <img src="${banda.imagem}" alt="${banda.nome}" class="imagem-banda">
            <p>${banda.descricao}</p>
        `;

        resultadosPesquisa.appendChild(divResultado);
    });
}

// Adiciona o evento ao botão de pesquisa
document.querySelector('button').addEventListener('click', buscarBandas);

// Aciona a busca ao pressionar a tecla Enter
document.querySelector('input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        buscarBandas(); // Chama a função de busca
    }
});
