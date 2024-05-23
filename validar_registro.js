let apellido = document.getElementById("apellido");
let nombre = document.getElementById("nombre");
let usuario = document.getElementById("usuario");
let password = document.getElementById("password");


let validar_mail =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,4})+$/ 


function validar_form(e){
    e.preventDefault();

    if(apellido.value === ""){
        alert("El campo apellido se encuetra vacio ó tiene menos de 4 caracteres");
        return false;
    }
    if(nombre.value === ""){
        alert("El campo nombre se encuetra vacio ó tiene menos de 4 caracteres")
       return false;
    }
    if(usuario.value.length < 5 || usuario.value === ""){
        alert("El campo usuario debe contener al menos 5 caracteres");
        return false;
    }
    if(password.value.length < 4 ){
        alert("El campo password debe contener mas de 4 caracteres")
        return false;
    }
    alert('Formulario válido. ¡Envío exitoso!' + "\n" + " Bienvenido " + apellido.value + " " + nombre.value);
    window.location.href='./principal.html';
    return true;
}

let formulario = document.getElementById("form");
formulario.addEventListener("submit", validar_form);
