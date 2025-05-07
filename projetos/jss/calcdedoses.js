// calculadora.js

alert("estamos em reforma");

/*

function calcular() {
    // Obter elementos do DOM
    const textoInput = document.getElementById('texto');
    const pesoemkgInput = document.getElementById('pesoemkg');
    const dosemedInput = document.getElementById('dosemed');
    const doseapremgInput = document.getElementById('doseapremg');
    const valor4Input = document.getElementById('valor4');
    const nvezespordiaInput = document.getElementById('nvezespordia');
    const concmaxInput = document.getElementById('concmax');
    const concusuInput = document.getElementById('concusu');

    // Obter valores dos inputs
    const texto = textoInput.value;
    
    // Converter valores para número (tratando valores vazios)
    const pesoemkg = parseFloat(pesoemkgInput.value) || 0;
    const dosemed = parseFloat(dosemedInput.value) || 0;
    const doseapremg = parseFloat(doseapremgInput.value) || 0;
    const valor4 = parseFloat(valor4Input.value) || 10; // Valor padrão 10 se vazio
    const nvezespordia = parseFloat(nvezespordiaInput.value) || 0;
    const concmax = parseFloat(concmaxInput.value) || 0;
    const concusu = parseFloat(concusuInput.value) || 0;

    const a = (pesoemkg * dosemed * valor4);
    const b = a / doseapremg;
    const b2 = b / nvezespordia;
    const c = b2 * (doseapremg / valor4);
    const d = c / concmax;
    const d2 = c / concusu;

    // Exibir resultados formatados
    document.getElementById('idresultdil').textContent = valor4.toFixed(2);
    document.getElementById('idresultasp').textContent = b2.toFixed(2);

    document.getElementById('idresultdilconcmax').textContent = d.toFixed(2);
    document.getElementById('idresultdilconcus').textContent = d2.toFixed(2);

    document.getElementById('resultados').style.display = 'block';
}

// Adicionar evento de tecla para calcular ao pressionar Enter
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('input[type="number"], input[type="text"]');
    
    inputs.forEach(input => {
        input.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                calcular();
            }
        });
    });
});


*/
