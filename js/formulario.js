const formulario = document.getElementById('formulario');
const mensajeEnviado = document.getElementById('mensajeEnviado');

formulario.addEventListener('submit', (e) => {
  e.preventDefault();

  const email = formulario.querySelector('input[type="email"]').value.trim();

  if (email === '') {
    alert('El campo "Email de contacto" no puede estar vacío.');
    return;
  }

  mensajeEnviado.style.display = 'block';
  formulario.reset();

  setTimeout(() => {
    mensajeEnviado.style.display = 'none';
  }, 3000);
});
