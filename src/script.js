// Função para criar os corações
function createHearts() {
    const numberOfHearts = 50; // Número de corações a serem criados
    const body = document.body;

    // Esconde o botão do coração
    const button = document.querySelector('button');
    button.style.display = 'none';

    // Remover a linha horizontal criada
    const line = document.getElementById('line');
    line.style.display = 'none'; // Linha some ao clicar no botão

    // Criando os corações
    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤️';

        // Posiciona os corações em locais aleatórios
        const x = Math.random() * window.innerWidth;
        const y = Math.random() * window.innerHeight;
        heart.style.left = `${x}px`;
        heart.style.top = `${y}px`;

        body.appendChild(heart);

        // Remove o coração após a animação
        setTimeout(() => {
            heart.remove();
        }, 2000); // 2000ms é o tempo da animação
    }

    // Criando as linhas animadas
    createLines();

    // Espera 3 segundos e então começa a exibir as mensagens
    setTimeout(() => {
        showMessages();
    }, 3000); // Atraso de 3 segundos antes de exibir as mensagens
}

// Função para criar as linhas que se movem
function createLines() {
    const body = document.body;

    // Criando a linha que sobe
    const lineUp = document.createElement('div');
    lineUp.classList.add('line-up');
    body.appendChild(lineUp);

    // Criando a linha que desce
    const lineDown = document.createElement('div');
    lineDown.classList.add('line-down');
    body.appendChild(lineDown);

    // Remover as linhas após a animação
    setTimeout(() => {
        lineUp.remove();
        lineDown.remove();
    }, 3000); // 3000ms é o tempo da animação das linhas
}

// Função para exibir as mensagens com intervalo
function showMessages() {
    const messages = [
        " ",
        "Sabe, preciso te contar uma coisa",
        "Então fiz isso aqui pra te contar",
        "Você é uma pessoa incrível",
        "E é do caralho poder ser seu namorado",
        "Eu adoro estar contigo",
        "Obrigado por estar na minha vida",
        "Você faz os meus dias serem mais felizes",
        "Eu te amo, Camilinha s2",
        "(vulgo sarninha 🤭)"
    ];

    let delay = 0;
    let previousMessage = null;

    messages.forEach((message, index) => {
        setTimeout(() => {
            // Cria e exibe a nova mensagem
            const messageElement = document.createElement('div');
            messageElement.classList.add('message');
            messageElement.textContent = message;
            document.body.appendChild(messageElement);

            // Remover a mensagem anterior com fade-out
            if (previousMessage) {
                previousMessage.classList.add('fade-out'); // Aplica o fade-out suave
                setTimeout(() => {
                    previousMessage.remove(); // Remove após a animação de fade-out
                }, 3000); // Aguardar 1.5s antes de remover a mensagem anterior
            }

            // Atualiza a referência da mensagem anterior
            previousMessage = messageElement;

            // Após a última mensagem, adicionar a imagem fixa
            if (index === messages.length - 1) {
                setTimeout(() => {
                    const image = document.createElement('img');
                    image.src = 'src/corda.jpeg'; // Substitua com o link da sua imagem
                    image.classList.add('fixed-image');
                    document.body.appendChild(image);
                }, 3000); // A imagem aparecerá após 3 segundos da última mensagem
            }

        }, delay);

        // Define o delay para a próxima mensagem (1 segundo)
        delay += 4000; // 1000ms de intervalo entre as mensagens
    });
}
