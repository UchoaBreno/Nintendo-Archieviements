
// Seleciona o elemento da barra lateral
const sidebar = document.querySelector('.sidebar');

// Seleciona o elemento do Speed Runs
const speedRuns = document.getElementById('speedRuns');

// Seleciona o elemento da página flutuante
const floatingPage = document.getElementById('floatingPage');

// Exibe a página flutuante quando o mouse passa sobre o elemento Speed Runs
speedRuns.addEventListener('mouseover', function() {
    floatingPage.style.display = 'block';
});

// Esconde a página flutuante quando o mouse deixa o elemento Speed Runs
speedRuns.addEventListener('mouseout', function(event) {
    // Verifica se o mouse saiu para cima
    if (!event.relatedTarget || !event.relatedTarget.closest('#floatingPage')) {
        floatingPage.style.display = 'none';
    }
});

// Mantém a página flutuante aberta quando o mouse está sobre ela
floatingPage.addEventListener('mouseover', function() {
    floatingPage.style.display = 'block';
});

// Esconde a página flutuante quando o mouse sai dela
floatingPage.addEventListener('mouseout', function(event) {
    // Verifica se o mouse saiu para baixo
    if (!event.relatedTarget || !event.relatedTarget.closest('.sidebar')) {
        floatingPage.style.display = 'none';
    }
});

// Esconde a página flutuante quando o mouse sai da barra lateral
sidebar.addEventListener('mouseout', function(event) {
    if (!event.relatedTarget || !event.relatedTarget.closest('.sidebar')) {
        floatingPage.style.display = 'none';
    }
});
// Adiciona uma classe quando o mouse está sobre o Speed Runs ou a página flutuante
speedRuns.addEventListener('mouseover', function() {
    speedRuns.classList.add('hovered');
});
speedRuns.addEventListener('mouseout', function() {
    speedRuns.classList.remove('hovered');
});
floatingPage.addEventListener('mouseover', function() {
    speedRuns.classList.add('hovered');
});
floatingPage.addEventListener('mouseout', function() {
    speedRuns.classList.remove('hovered');
});

document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio padrão do formulário
    
    // Aqui você faria uma solicitação para o seu servidor para verificar as credenciais do usuário
    // Se as credenciais estiverem corretas, redirecione o usuário para o index
    // Por enquanto, vamos apenas redirecionar o usuário para o index como exemplo
    
    // Redirecionamento para o index
    window.location.href = 'index.html';
});


const criarConta = document.querySelector('registrar-link')

'registrar-link'.onclick = function(){

};
