const inputNovoItem = document.getElementById("novo-item");
const listaCompras = document.getElementById("lista-compras");

inputNovoItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const valorDoItem = inputNovoItem.value;

        if (valorDoItem !== "") {
            const novoElementoLi = document.createElement("li");

            const textoItem = document.createElement("span");
            textoItem.textContent = valorDoItem;
            textoItem.classList.add("texto-item");

            const divAcoes = document.createElement("div");
            divAcoes.classList.add("acoes-item");

            const botaoCheck = document.createElement("button");
            botaoCheck.textContent = "✓";
            botaoCheck.classList.add("btn-check");

            botaoCheck.addEventListener("click", function() {
                novoElementoLi.classList.toggle("comprado");
            });

            const botaoRemover = document.createElement("button");
            botaoRemover.textContent = "X";
            botaoRemover.classList.add("btn-excluir");

            botaoRemover.addEventListener("click", function() {
                listaCompras.removeChild(novoElementoLi);
            });

            divAcoes.appendChild(botaoCheck);
            divAcoes.appendChild(botaoRemover);

            novoElementoLi.appendChild(textoItem);
            novoElementoLi.appendChild(divAcoes);
            listaCompras.appendChild(novoElementoLi);

            inputNovoItem.value = "";
        }
    }
});