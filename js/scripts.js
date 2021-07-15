$(document).ready(function(){
    $("#botonLogin").click(function(){
        $('#loginModal').modal('toggle');
    });
 
    $("#SigL").click(function(){
      $('#loginModal').modal('toggle');
      $("#btI").html(`<a id="newUser"  href="index.html">usuario@correo.ec <span id="salir" type="submit" class="fa fa-sign-in"></span> </a>`);
    });  

    $("#btnLogin").click(function(){
      $('#regisModal').modal('toggle');
    });

});

/*function cambiarPag() {
  alert('Gracias por pinchar');
}

// Asignar la función externa al elemento
document.getElementById("pinchable").onclick = cambiarPag;
*/
