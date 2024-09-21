onload = () => {
  document.body.classList.remove("container");
};
function mostrarProyecto() {
  // Ocultar la carta
  document.getElementById('carta').style.display = 'none';

  // Mostrar el proyecto
  document.getElementById('proyecto').style.display = 'block';
}
