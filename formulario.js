

function enviarFormulario() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("mensaje").value;

    if(nombre == "" || email == "" ||  mensaje == "" ) {
      alert("Por favor, completa todos los campos");
    } else {
      alert("Formulario enviado");
      
    }
  }

  function cambiarColorDeFondo() {
    var body = document.querySelector("body");
    body.style.backgroundColor = "black";
  }

  