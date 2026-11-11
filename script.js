const inputNovoItem = document.getElementById("novo-item"); // Seleciona o elemento de input com o ID "novo-item" e armazena em uma variável chamada inputNovoItem.
const botaoAdicionar = document.getElementById("btn-adicionar"); // Seleciona o elemento de botão com o ID "btn-adicionar" e armazena em uma variável chamada botaoAdicionar.
const listaCompras = document.getElementById("lista-compras"); // Seleciona o elemento de lista com o ID "lista-compras" e armazena em uma variável chamada listaCompras.

botaoAdicionar.addEventListener("click", function() { // Adiciona um ouvinte de evento de clique ao botão "Adicionar". Quando o botão é clicado, a função anônima é executada.
    const valorDoItem = inputNovoItem.value; 

    if (valorDoItem !== "") { // se o valor do item for diferente de vazio, cria um novo elemento de lista (li) e adiciona o valor do item como seu conteúdo de texto. 
        const novoElementoLi = document.createElement("li");
        novoElementoLi.textContent = valorDoItem;
        
        const botaoRemover = document.createElement("button"); // Cria um novo elemento de botão (button) e adiciona o texto "X" como seu conteúdo de texto. 
        botaoRemover.classList.add("btn-excluir"); // Adiciona a classe "btn-excluir" ao botão para estilização.
        botaoRemover.textContent = "X"; 
        
        botaoRemover.addEventListener("click", function() { // Adiciona um ouvinte de evento de clique ao botão "Remover". Quando o botão é clicado, a função anônima é executada, removendo o elemento de lista correspondente da lista de compras.
            listaCompras.removeChild(novoElementoLi);
        });

        novoElementoLi.appendChild(botaoRemover); // Adiciona o botão "Remover" como um filho do elemento de lista (li).
        listaCompras.appendChild(novoElementoLi); // Adiciona o novo elemento de lista (li) à lista de compras (ul).
        
        inputNovoItem.value = "";
    }
});

inputNovoItem.addEventListener("keypress", function(event) { // esse bloco faz com que o usuário possa adicionar um item à lista de compras pressionando a tecla "Enter" no teclado, em vez de clicar no botão "Adicionar".
    if (event.key === "Enter") {
        botaoAdicionar.click();
    }
});