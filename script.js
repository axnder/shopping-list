const inputNovoItem = document.getElementById("novo-item");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaCompras = document.getElementById("lista-compras");

botaoAdicionar.addEventListener("click", function() {
    const valorDoItem = inputNovoItem.value;

    if (valorDoItem !== "") {
        const novoElementoLi = document.createElement("li");
        novoElementoLi.textContent = valorDoItem;
        
        const botaoRemover = document.createElement("button");
        botaoRemover.textContent = "X";
        botaoRemover.classList.add("btn-excluir");
        
        botaoRemover.addEventListener("click", function() {
            listaCompras.removeChild(novoElementoLi);
        });

        novoElementoLi.appendChild(botaoRemover);
        listaCompras.appendChild(novoElementoLi);
        
        inputNovoItem.value = "";
    }
});

inputNovoItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        botaoAdicionar.click();
    }
});