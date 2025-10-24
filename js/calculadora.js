function calcular() {
  const area = parseFloat(document.getElementById('area').value);
  const precipitacion = parseFloat(document.getElementById('precipitacion').value);
  const coef = parseFloat(document.getElementById('material').value);

  if (isNaN(area)) return alert('El campo "Área del techo" no puede estar vacío.');
  if (area <= 0) return alert('El área del techo debe ser un número positivo.');
  if (area < 10) return alert('El área mínima del techo debe ser de 10 m².');
  if (area > 1000) return alert('El área máxima del techo es de 1000 m².');

  if (isNaN(precipitacion)) return alert('El campo "Precipitación" no puede estar vacío.');
  if (precipitacion <= 0) return alert('La precipitación debe ser un número positivo.');
  if (precipitacion < 500 || precipitacion > 1500)
    return alert('La precipitación debe estar entre 500 y 1500 mm.');

  const agua = area * precipitacion * coef;
  const tinacos = agua / 1100;
  const ahorro = (agua / 1000) * 22;
  const duchas = agua / 50;
  const riegos = agua / 10;
  const materialTexto = document.getElementById('material').selectedOptions[0].text;

  const resultadoDiv = document.getElementById('resultado');
  resultadoDiv.innerHTML = `
    <h3>¡RESULTADOS PARA TU PROPIEDAD!</h3>
    <div>📐 <b>Área:</b> ${area} m²</div>
    <div>🏠 <b>Material:</b> ${materialTexto}</div>
    <div>🌧 <b>Precipitación:</b> ${precipitacion} mm</div>
    <div>💧 <b>Agua captable:</b> ${agua.toLocaleString()} litros</div>
    <div>🛢 <b>Equivale a:</b> ${tinacos.toFixed(0)} tinacos</div>
    <div>💰 <b>Ahorro estimado:</b> $${ahorro.toFixed(2)} pesos</div>
    <div>🚿 <b>Usos posibles:</b> ${duchas.toFixed(0)} duchas o ${riegos.toFixed(0)} riegos</div>
  `;
  resultadoDiv.style.display = 'block';
}

document.getElementById('btnCalcular').addEventListener('click', calcular);
