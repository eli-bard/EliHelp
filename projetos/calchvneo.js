document.addEventListener('DOMContentLoaded', function() {

});
    // Função de cálculo de HV
    function calcularHVNeo() {
        // Obter valores dos inputs
        const peso = parseFloat(document.getElementById('idinppeso').value) || 0;
        const oh = parseFloat(document.getElementById('ininpoh').value) || 0;
        const vig = parseFloat(document.getElementById('idinpvig').value) || 0;
        const ca = parseFloat(document.getElementById('idinpca').value) || 0;
        const na = parseFloat(document.getElementById('idinpna').value) || 0;
        const k = parseFloat(document.getElementById('idinpk').value) || 0;

        // Calcular valores conforme fórmulas
        const volumeTotal = peso * oh;
        const gramasGlicose = vig * peso * 1.44;

        const concentracoes = {
            // Cálcio
            glucal10: { mEq: 0.45 },  // Gluconato de Cálcio 10% → 0.45 mEq/mL
        
            // Sódio
            nacl20: { mEq: 3.4 },      // NaCl 20% → 3.4 mEq/mL
            nacl10: { mEq: 1.7 },      // NaCl 10% → 1.7 mEq/mL
        
            // Potássio
            kcl10: { mEq: 1.34 },      // KCl 10% → 1.34 mEq/mL
            kcl191: { mEq: 2.56 }      // KCl 19,1% → 2.56 mEq/mL
        };

        // Obter as apresentações selecionadas
        const apresentacaoCa = document.getElementById("idinpcaapresent").value;
        const apresentacaoNa = document.getElementById("ininpnaapresent").value;
        const apresentacaoK = document.getElementById("idinpkapresent").value;

        // Calcular volumes (ajustando pela concentração em mEq/mL)
        const volumeCalcio = (peso * ca) / concentracoes[apresentacaoCa].mEq;
        const volumeSodio = (peso * na) / concentracoes[apresentacaoNa].mEq;
        const volumePotassio = (peso * k) / concentracoes[apresentacaoK].mEq;

        const volumeParaGlicose = volumeTotal - (volumeCalcio + volumeSodio + volumePotassio);

        const aaa = gramasGlicose * 100;
        const bbb = volumeParaGlicose * 5;
        const volumeGlicose50 = (aaa - bbb) / 45;
        const volumeGlicosado5 = volumeParaGlicose - volumeGlicose50;

        const concentracaoGlicose = (gramasGlicose / volumeTotal) * 100;
        const vazao = volumeTotal / 24;

        // Exibir resultados
        document.getElementById('idresultglicosado5').textContent = volumeGlicosado5.toFixed(2);
        document.getElementById('idresultglicose50').textContent = volumeGlicose50.toFixed(2);
        document.getElementById('calcio').textContent = volumeCalcio.toFixed(2);
        document.getElementById('sodio').textContent = volumeSodio.toFixed(2);
        document.getElementById('potassio').textContent = volumePotassio.toFixed(2);
        document.getElementById('idresultvazao').textContent = vazao.toFixed(2);
        document.getElementById('concentracao-glicose').textContent = concentracaoGlicose.toFixed(2);


        // Texto das apresentações dos eletrólitos
        document.querySelector('.ca-apresentacao').textContent = 
        apresentacaoCa === 'glucal10' ? 'Gluconato de cálcio 10%' : '';
        document.querySelector('.na-apresentacao').textContent = 
        apresentacaoNa === 'nacl20' ? 'NaCl 20%' :
        apresentacaoNa === 'nacl10' ? 'NaCl 10%' :
        '';
        document.querySelector('.k-apresentacao').textContent = 
        apresentacaoK === 'kcl10' ? 'KCl 10%' :
        apresentacaoK === 'kcl191' ? 'KCl 19,1%' :
        '';

        // Verificar concentração de glicose e mostrar alerta se necessário
        const alertaGlic = document.getElementById('alertaglic');
        if (concentracaoGlicose > 12.5) {
            alertaGlic.textContent = 'Atenção: Concentração de glicose acima de 12.5%!';
            alertaGlic.style.color = 'red';
        } else {
            alertaGlic.textContent = '';
        }
    }

    // Adicionar evento ao botão calcular
document.getElementById('btncalcular').addEventListener('click', function() {
    calcularHVNeo
});
        
    

    // Calcular automaticamente quando os inputs mudam (opcional)
    const inputs = document.querySelectorAll('input[type="number"]');
    inputs.forEach(input => {
        input.addEventListener('input', calcularHVNeo);
    });

    // Calcular quando as seleções mudam
    const selects = document.querySelectorAll('select');
    selects.forEach(select => {
        select.addEventListener('change', calcularHVNeo);
    });