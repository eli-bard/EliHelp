// Constantes para cada opção (4 constantes por opção)
const optionConstants = {
    lh: { name: 'Leite Humano', OC: 62, OP: 1.3, Caformula: 34, Pformula: 14 },
    lhfm85: { name: 'Leite Humano com FM85' , OC: 85, OP: 3.1, Caformula: 100, Pformula: 60 },
    prenan: { name: 'Pré-NAN', OC: 73, OP: 2, Caformula: 85, Pformula: 54 },
    aptamilpre: { name: 'Aptamil Pré' , OC: 80, OP: 2.5, Caformula: 100, Pformula: 56 },
    aptamil1: { name: 'Aptamil 1', OC: 66, OP: 1.2, Caformula: 63, Pformula: 38 },
    nan1supreme: { name: 'NAN 1 Supreme', OC: 67, OP: 1.2, Caformula: 47, Pformula: 25 },
    nan1confor: { name: 'NAN 1 Confort', OC: 67, OP: 1.2, Caformula: 42, Pformula: 23 },
    pregomin: { name: 'Pregomin', OC: 66, OP: 1.8, Caformula: 50, Pformula: 28 },
    alfare: { name: 'Alfaré', OC: 68, OP: 1.9, Caformula: 68, Pformula: 46 },
    alfamino: { name: 'Alfamino', OC: 70, OP: 1.8, Caformula: 57, Pformula: 39 },
    neocate: { name: 'Neocate', OC: 67, OP: 1.9, Caformula: 77, Pformula: 55 },
    infatrini: { name: 'Infatrini', OC: 100, OP: 2.6, Caformula: 101, Pformula: 57 }
};

function calculate() {
    // Obter valores dos inputs
    const peso = parseFloat(document.getElementById('peso').value);
    const volume = parseFloat(document.getElementById('volume').value);
    const option = document.getElementById('option').value;

    // Validar entradas
    if (isNaN(peso) || isNaN(volume) || option === "") {
        alert("Por favor, preencha todos os campos corretamente.");
        return false;
    }

    // Obter as constantes para a opção selecionada
    const constants = optionConstants[option];
    
    // Calcular os 4 resultados principais usando num1, num2 e as constantes
    const vol8 = volume * 8;
    const OHDieta = vol8 / peso;
    const b = vol8 / (peso * 100);
    const OCDieta = b * constants.OC;
    const OPDieta = b * constants.OP;
    const OCalDieta = b * constants.Caformula;
    const OFosfDieta = b * constants.Pformula;  // Corrigido aqui

    // Exibir resultados
    document.getElementById('mainResults').innerHTML = `
        <h3>Resultados baseados em uma criança com peso de ${peso} kg, recebendo ${volume} ml de 3/3h de ${constants.name}:</h3>
        <p>Oferta hídrica da dieta: ${OHDieta.toFixed(1)} ml/kg/dia</p>
        <p>Oferta calórica: ${OCDieta.toFixed(1)} kcal/kg/dia</p>
        <p>Oferta proteica: ${OPDieta.toFixed(1)} g/kg/dia</p>
        <p>Oferta de cálcio na dieta: ${OCalDieta.toFixed(1)} mg/kg/dia</p>
        <p>Oferta de fósforo na dieta: ${OFosfDieta.toFixed(1)} mg/kg/dia</p>
    `;

    document.getElementById('result').style.display = 'block';
    return false;
}