// Asegúrate de haber cargado SweetAlert2 en tu proyecto
// <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>

document.getElementById("form").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevenir el comportamiento por defecto del formulario

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Validación simple
    if (!name) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, ingresa tu nombre.',
        });
    } else if (!email) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, ingresa tu correo electrónico.',
        });
    } else if (!message) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, ingresa tu mensaje.',
        });
    } else if (!validateEmail(email)) {
        Swal.fire({
            icon: 'error',
            title: '¡Oops!',
            text: 'Por favor, ingresa un correo electrónico válido.',
        });
    } else {
        // Si todo es válido, mostramos un mensaje de éxito
        Swal.fire({
            icon: 'success',
            title: '¡Mensaje enviado!',
            text: 'Tu consulta ha sido enviada correctamente.',
        }).then(() => {
            // Resetear el formulario después de un mensaje exitoso
            document.getElementById("form").reset();
        });
    }
});

// Función para validar el formato del correo electrónico
function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
}


