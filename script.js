const inputNovoItem = document.getElementById("novo-item");
const botaoAdicionar = document.getElementById("btn-adicionar");
const listaCompras = document.getElementById("lista-compras");

botaoAdicionar.addEventListener("click", function() {
    const valorDoItem = inputNovoItem.value;

    if (valorDoItem !== "") {
        const novoElementoLi = document.createElement("li");
        novoElementoLi.textContent = valorDoItem;
        
        listaCompras.appendChild(novoElementoLi);
        
        inputNovoItem.value = "";
    }
});