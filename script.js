const inputNovoItem = document.getElementById("novo-item");
const listaCompras = document.getElementById("lista-compras");

function salvarLista() {
    const itens = [];
    const elementosLi = listaCompras.querySelectorAll("li");

    elementosLi.forEach(function(li) {
        const texto = li.querySelector(".texto-item").textContent;
        const comprado = li.classList.contains("comprado");
        itens.push({ texto: texto, comprado: comprado });
    });

    localStorage.setItem("listaCompras", JSON.stringify(itens));
}

function criarElementoItem(texto, comprado = false) {
    const novoElementoLi = document.createElement("li");

    if (comprado) {
        novoElementoLi.classList.add("comprado");
    }

    const textoItem = document.createElement("span");
    textoItem.textContent = texto;
    textoItem.classList.add("texto-item");

    const divAcoes = document.createElement("div");
    divAcoes.classList.add("acoes-item");

    const botaoCheck = document.createElement("button");
    botaoCheck.textContent = "✓";
    botaoCheck.classList.add("btn-check");

    botaoCheck.addEventListener("click", function() {
        novoElementoLi.classList.toggle("comprado");
        salvarLista();
    });

    const botaoRemover = document.createElement("button");
    botaoRemover.textContent = "X";
    botaoRemover.classList.add("btn-excluir");

    botaoRemover.addEventListener("click", function() {
        listaCompras.removeChild(novoElementoLi);
        salvarLista();
    });

    divAcoes.appendChild(botaoCheck);
    divAcoes.appendChild(botaoRemover);

    novoElementoLi.appendChild(textoItem);
    novoElementoLi.appendChild(divAcoes);
    listaCompras.appendChild(novoElementoLi);
}

function carregarLista() {
    const dadosSalvos = localStorage.getItem("listaCompras");

    if (dadosSalvos) {
        const itens = JSON.parse(dadosSalvos);
        itens.forEach(function(item) {
            criarElementoItem(item.texto, item.comprado);
        });
    }
}

inputNovoItem.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        const valorDoItem = inputNovoItem.value.trim();

        if (valorDoItem !== "") {
            criarElementoItem(valorDoItem);
            salvarLista();
            inputNovoItem.value = "";
        }
    }
});

carregarLista();