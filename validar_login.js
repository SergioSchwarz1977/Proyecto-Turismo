// Obtén los elementos del formulario
let usuario = document.getElementById('usuario');
let email = document.getElementById('email');
let password = document.getElementById('password');

// Función para validar el formulario
function validarFormulario(e) {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
    let emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    // Verifica si los campos están vacíos ó menora 4
    if (usuario.value === '' || usuario.value.length < 4) {
        alert('Por favor el usuario mayor a 4 caracteres');
        usuario.focus();
        return false;

    }
    if (!emailRegex.test(email.value)) {
        alert('Ingresa un correo electrónico válido.');
        email.focus();
        return false;
    }
    if (password.value === '' || password.value.length < 4) {
        alert('Por favor el password mayor a 4 caracteres');
        password.focus();
        return false;
    }


    alert('Formulario válido. ¡Envío exitoso!' + "\n" + " Bienvenido " + usuario.value);
    window.location.href='./principal.html';
    return true;
}


let formulario = document.getElementById('form');
formulario.addEventListener('submit', validarFormulario);