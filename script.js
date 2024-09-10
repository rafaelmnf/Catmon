function exibirTodos() {
    let section = document.getElementById("sessao-principal");

    let itens = "";

    for(let dado of dados){
        itens +=  `
        <div class="item-resultado">
        <div class="carta">
            <div class="header">
                <h2 class="nome">${dado.raca}</h2>
            </div>

                <img src=${dado.imagem} alt="${dado.raca}" class="imagem-gato">
                <div class="descricao">
                    <div class="detalhes">
                        <p class="tipo">Categoria: ${dado.tipo}</p>
                        <p class="peso">Peso: ${dado.peso}</p>
                        <p class="altura">Altura: ${dado.altura}</p>
                    </div>
                    <p>${dado.descricao}</p>
                </div>
                <div class="link">
                    <a href= ${dado.link} target="_blank">Ver mais sobre ${dado.raca}</a>
                </div>
            </div>
        </div>
    </div>
    `;
    }

    section.innerHTML = itens;
}


function pesquisar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let sugestaoPesquisa = document.getElementById("resultado-procura");
    let section = document.getElementById("sessao-principal");
    let campoPesquisa = document.getElementById("procura").value;

    // se campoPesquisa for uma string sem nada
    if (!campoPesquisa) {
        sugestaoPesquisa.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um Catmon</p>";
        return ;
    }

    /*normalize("NFD"): Esse método separa os caracteres acentuados em sua forma base mais os sinais diacríticos.
    Por exemplo, o caractere "á" é decomposto em "a" + acento.
    replace(/[\u0300-\u036f]/g, ""): A expressão regular remove todos os diacríticos (sinais de acentuação) da string.*/


    campoPesquisa = campoPesquisa.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let raca = ""; 
    let tipo = "";

// Itera sobre cada dado da lista de dados
for (let dado of dados) {
    raca = dado.raca.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");
    tipo = dado.tipo.join(" ").toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "");

    // Verifica se a palavra pesquisada está presente no nome, raça ou tipo do dado
    if (raca.includes(campoPesquisa) || tipo.includes(campoPesquisa)) {

        // cria um novo elemento
        resultados += `
        <div class="item-resultado">
        <div class="carta">
            <div class="header">
                <h2 class="nome">${dado.raca}</h2>
            </div>

                <img src=${dado.imagem} alt="${dado.raca}" class="imagem-gato">
                <div class="descricao">
                    <div class="detalhes">
                        <p class="tipo">Categoria: ${dado.tipo}</p>
                        <p class="peso">Peso: ${dado.peso}</p>
                        <p class="altura">Altura: ${dado.altura}</p>
                    </div>
                    <p>${dado.descricao}</p>
                </div>
                <div class="link">
                    <a href= ${dado.link} target="_blank">Ver mais sobre ${dado.raca}</a>
                </div>
            </div>
        </div>
    </div>
    `;
    }
}

if (!resultados) {
    sugestaoPesquisa.innerHTML = "<p>Nada foi encontrado. Você precisa digitar o nome de um Catmon</p>";
        return ;
}

// Atribui os resultados gerados à seção HTML
section.innerHTML = resultados;
}

// Para usar Enter e pesquisar
function verificarEnter(event) {
    if (event.key === "Enter") {
        pesquisar();
    }
}
