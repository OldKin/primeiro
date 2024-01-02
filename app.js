let titulo = document.querySelector('h1');
titulo.innerHTML = 'primeiro desafio do curso js';


function verificarClique() {
    console.log('o botão foi clicado')
};

function alertaClique() {
    alert('Eu amo js')
};

function nomeCidade () {
   let cidade = prompt("Escreva o nome de uma cidade do brasil");
   alert('Estive em ' + cidade + ' e lembrei de você.'); 
};

function soma() {
    let numero1 = parseInt(prompt("Digite o primeiro numero"));
    let numero2 = parseInt(prompt("Digite o segundo numero"));
    alert(` O resultado da soma é ${numero1 + numero2}`);
};