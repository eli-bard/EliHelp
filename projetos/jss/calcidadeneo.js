document.addEventListener('DOMContentLoaded', function() {

});

    document.getElementById('idinpsemanas').addEventListener('change', calcularEExibirIdade);
    document.getElementById('idinpdiasgest').addEventListener('change', calcularEExibirIdade);
     
    // Função para calcular idade gestacional corrigida
    function calcularIdadeGestacionalCorrigida(dataNascimento) {
        const hoje = new Date();
        const nascimento = new Date(dataNascimento);
        
        // Calcular dias de vida
        const diffTempo = hoje - nascimento;
        const diasVida = Math.floor(diffTempo / (1000 * 60 * 60 * 24));
        
        // Obter semanas e dias de gestação ao nascer
        const semanasGestacao = parseInt(document.getElementById('idinpsemanas').value) || 0;
        const diasGestacao = parseInt(document.getElementById('idinpdiasgest').value) || 0;
        
        // Calcular idade corrigida apenas para prematuros (<37 semanas)
        if (semanasGestacao > 0 && semanasGestacao < 37) {
            const diasGestacaoTotal = (semanasGestacao * 7) + diasGestacao;
            const diasCorrigidosTotal = diasGestacaoTotal + diasVida;
            
            // Verificar se já alcançou 40 semanas
            if (diasCorrigidosTotal >= 40 * 7) {
                const diasApos40Semanas = diasCorrigidosTotal - (40 * 7);
                return `40 semanas já alcançadas, hoje com ${diasApos40Semanas} dias de vida pós-termo`;
            } else {
                const semanasCorrigidas = Math.floor(diasCorrigidosTotal / 7);
                const diasCorrigidos = diasCorrigidosTotal % 7;
                return `${semanasCorrigidas} semanas e ${diasCorrigidos} dias (corrigida)`;
            }
        }
        return null; // Retorna null se não for prematuro
    }

    // Função para calcular e exibir a idade
    function calcularEExibirIdade() {
        const dataNasc = document.getElementById('idinpdndata').value;
        const horaNasc = document.getElementById('idinpdnhora').value;
        
        if (!dataNasc || !horaNasc) {
            document.getElementById('idade-texto').textContent = 'Preencha data e hora de nascimento';
            return;
        }
        
        const dataHoraNascimento = `${dataNasc}T${horaNasc}`;
        const nascimento = new Date(dataHoraNascimento);
        const hoje = new Date();
        
        // Calcular diferença em milissegundos
        const diffTempo = hoje - nascimento;
        
        // Converter para horas, dias, meses e anos
        const horasVida = Math.floor(diffTempo / (1000 * 60 * 60));
        const diasVida = Math.floor(diffTempo / (1000 * 60 * 60 * 24));
        
        // Se menor que 3 dias (72 horas), mostrar em horas
        if (horasVida < 96) {
            let textoIdade = `${horasVida} horas de vida`;
            
            // Calcular idade gestacional corrigida (se aplicável)
            const idadeCorrigida = calcularIdadeGestacionalCorrigida(dataHoraNascimento);
            if (idadeCorrigida) {
                textoIdade += ` | ${idadeCorrigida}`;
            }
            
            document.getElementById('idade-texto').textContent = textoIdade;
            return;
        }
        
        // Calcular idade cronológica padrão (para > 3 dias)
        let anos = hoje.getFullYear() - nascimento.getFullYear();
        let meses = hoje.getMonth() - nascimento.getMonth();
        let dias = hoje.getDate() - nascimento.getDate();
        
        // Ajustes para valores negativos
        if (dias < 0) {
            meses--;
            dias += new Date(hoje.getFullYear(), hoje.getMonth(), 0).getDate();
        }
        if (meses < 0) {
            anos--;
            meses += 12;
        }
        
        // Calcular idade gestacional corrigida (se aplicável)
        const idadeCorrigida = calcularIdadeGestacionalCorrigida(dataHoraNascimento);
        
        // Exibir resultado
        let textoIdade = `${anos} anos, ${meses} meses e ${dias} dias`;
        if (idadeCorrigida) {
            textoIdade += ` | ${idadeCorrigida}`;
        }
        
        document.getElementById('idade-texto').textContent = textoIdade;
    }

    document.getElementById('btncalcular').addEventListener('click', function() {
        // Primeiro calcula a idade
        calcularEExibirIdade()
        });

// Calcular automaticamente quando os inputs mudam (opcional)
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', calcularEExibirIdade);
    });

    // Calcular quando as seleções mudam
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', calcularEExibirIdade);
    });