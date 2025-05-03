function calculateGestationalAge() {
    // Obter os valores de entrada
    const ultrassomDate = new Date(document.getElementById('ultrassom-date').value);
    const weeks = parseInt(document.getElementById('gestational-weeks').value);
    const days = parseInt(document.getElementById('gestational-days').value);
    
    // Validar entradas
    if (isNaN(ultrassomDate.getTime())) {
        alert("Por favor, insira uma data válida para a ecografia.");
        return;
    }
    
    if (weeks < 0 || weeks > 45 || isNaN(weeks)) {
        alert("Por favor, insira um número válido de semanas (0-45).");
        return;
    }
    
    if (days < 0 || days > 6 || isNaN(days)) {
        alert("Por favor, insira um número válido de dias (0-6).");
        return;
    }
    
    // Calcular a data da última menstruação (DUM)
    // Subtrair a idade gestacional da data da ecografia
    const dum = new Date(ultrassomDate);
    dum.setDate(dum.getDate() - (weeks * 7 + days));
    
    // Obter a data atual
    const today = new Date();
    
    // Calcular a diferença em dias entre hoje e a DUM
    const diffTime = today - dum;
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    
    // Calcular semanas e dias atuais
    const currentWeeks = Math.floor(diffDays / 7);
    const currentDays = diffDays % 7;
    
    // Calcular data provável do parto (40 semanas após a DUM)
    const dueDate = new Date(dum);
    dueDate.setDate(dueDate.getDate() + 280); // 40 semanas = 280 dias
    
    // Exibir resultados
    document.getElementById('current-date').textContent = formatDate(today);
    document.getElementById('current-weeks').textContent = currentWeeks;
    document.getElementById('current-days').textContent = currentDays;
    document.getElementById('due-date').textContent = formatDate(dueDate);
    
    // Mostrar o resultado
    document.getElementById('result').style.display = 'block';
}

function formatDate(date) {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    return date.toLocaleDateString('pt-BR', options);
}