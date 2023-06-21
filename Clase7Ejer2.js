document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")})
                      // trae ele elemento id mi boton
const Boton = document.getElementById ("miBoton");

// define una funcion a realizar
function handleClik(){
    alert ("Hola has hecho clik en el boton");
}
// escucha el evento, en este caso un clik
Boton.addEventListener ("click", handleClik);


//trabaja sobre formulario
const form = document.getElementById('myForm');
form.addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

                      