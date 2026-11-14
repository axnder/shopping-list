const inputNovoItem = document.getElementById("novo-item");
const listaCompras = document.getElementById("lista-compras");

inputNovoItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
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
    }
});