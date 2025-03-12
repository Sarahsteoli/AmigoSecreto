    let amigos = []; // Array para armazenar os nomes dos amigos
    // Lista de nomes disponíveis para sorteio
    let nomes = ["João", "Maria", "Ana", "Carlos", "Pedro"]; 
    // lista nomes sorteados
    let NomesSorteados = [];

    // Função para sortear um dos nomes
    function sortearNome () {
        if (nomes.length === 0) {
            alert("Todos os nomes já foram sorteados!");
            return;
        }

    // Sorteia um nome aleatório  da lista de nomes disponíveis
    let indiceSorteado = math.floor(Math.random() * nomes.length);
    let NomesSorteados = nome.splice(indiceSorteado, 1) [0]; //Remova o nome da lista)
    
    // Adiciona o nome sorteado à lista de sorteados
    nomesSorteados.push(nomeSorteado);

    // Exibe o nome sorteado no console ou em um elemento HTML
    console.log("Nome sorteado: " + nomeSorteado);
    console.log("Nomes já sorteados: " + nomesSorteados.join(", "));

    // Atualiza o nome sorteado na interface, se necessário
    document.getElementById("nome-sorteado").textContent = nomeSorteado;
        
    // Exibe todos os nomes sorteados na tela
    document.getElementById("nomes-sorteados").textContent = "Nomes sorteados: " + nomesSorteados.join(", ");
    
    // Função para reiniciar o sorteio, se necessário
    function reiniciarSorteio() {
        nomes = ["João", "Maria", "Ana", "Carlos", "Pedro"]; // Reseta os nomes
        nomesSorteados = []; // Limpa a lista de sorteados
        document.getElementById("nome-sorteado").textContent = ""; // Limpa o nome sorteado na interface
        document.getElementById("nomes-sorteados").textContent = ""; // Limpa os nomes sorteados na interface
        alert("Sorteio reiniciado!");
    }
    }

    // Função para adicionar amigos à lista
    function adicionarNome() {
        // Captura o valor do campo de entrada
        const nome = document.getElementById("nomeInput").value.trim();

        function sortearAmigo() {
            // Verifica se a lista de amigos tem pelo menos um nome
            if (amigos.length === 0) {
                alert("A lista de amigos está vazia. Adicione pelo menos um amigo.");
                return;
            }    
        
            // Exibe o nome sorteado
        alert("O amigo sorteado foi: " + amigos[indiceSorteado]);
    }
    // Gera um índice aleatório entre 0 e o tamanho da lista de amigos
            const indiceSorteado = Math.floor(Math.random() * amigos.length);

        // Valida se o campo de entrada está vazio
        if (nome === "") {
            alert("Por favor, insira um nome válido.");
            return; // Impede a execução de seguir
        }

        // Se o nome for válido, adiciona ao array de amigos
        amigos.push(nome);

        // Limpa o campo de entrada para o próximo nome
        document.getElementById("nomeInput").value = "";

        // Atualiza a lista visível na tela
        atualizarLista();
    }

    // Função para atualizar a lista na tela
    function atualizarLista() {
        // Selecionar o elemento <ul> onde a lista de amigos será exibida
        const lista = document.getElementById("ListaAmigos");

        // Limpa a lista existente para evitar duplicação
        lista.innerHTML = "";

        // Percorrer o array de amigos e criar elementos <li>
        for (let i = 0; i < amigos.length; i++) {
            const li = document.createElement("li");
            li.textContent = amigos[i];
            lista.appendChild(li);
        }
    }
