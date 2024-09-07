// Função para pesquisar e exibir os resultados em uma seção HTML
function pesquisar() {
    // Obtém a seção onde os resultados serão exibidos
    const section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById("campo-pesquisa").value

    // se o campoPesquisa for uma string sem nada
    if (campoPesquisa == "") {
        section.innerHTML = "<p>Nada foi encontrado</p>"
        return 
    }

    campoPesquisa = campoPesquisa.toLowerCase()

    // String que armazenará o HTML dos resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
  
    // Itera sobre cada livro nos dados
    for (const dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        //se título includes campoPesquisa
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)){
            //cria um novo elemento
            resultados += `
            <div class="item-resultado">
              <h2><a href="${dado.link}" target="_blank">${dado.titulo}</a></h2>
              <p class="descricao-meta">${dado.descricao}</p>
              <a href="${dado.link}" target="_blank">Comprar o livro!</a>
            </div>
          `;
        }
    }

    if (!resultados) {
        resultados = "<p>Nada foi encontrado!</p>"
    }
      // Cria um novo elemento de resultado
     
    // Atualiza o conteúdo da seção com os resultados gerados
    section.innerHTML = resultados;
  }