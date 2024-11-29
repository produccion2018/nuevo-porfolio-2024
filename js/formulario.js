document.querySelector('.contacto-form').addEventListener('submit', function(event) {
    event.preventDefault(); // 
    
    
    const nombre = document.querySelector('input[name="nombre"]').value;
    const email = document.querySelector('input[name="email"]').value;
    const mensaje = document.querySelector('textarea[name="mensaje"]').value;
    
    // Validación de los campos
    if (nombre === '' || email === '' || mensaje === '') {
      Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: 'Todos los campos son obligatorios.',
      });
    } else if (!validateEmail(email)) {
      Swal.fire({
        icon: 'error',
        title: '¡Oops!',
        text: 'Por favor ingresa un email válido.',
      });
    } else {
      // Si la validación es correcta
      Swal.fire({
        icon: 'success',
        title: 'Formulario enviado',
        text: 'Tu mensaje ha sido enviado correctamente.',
      }).then(() => {
        // Limpiar los campos del formulario
        document.querySelector('.contacto-form').reset();
      });
    }
  });

  // Función para validar el formato del email
  function validateEmail(email) {
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return regex.test(email);
  }