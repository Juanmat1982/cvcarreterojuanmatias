const imagen = document.getElementById("imagen");
const descripcion = document.getElementById("descripcion");
imagen.addEventListener("click", () => {
  descripcion.textContent = "El perro el mejor amigo del hombre.";
});