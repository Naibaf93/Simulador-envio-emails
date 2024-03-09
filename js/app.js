document.addEventListener('DOMContentLoaded', function () {

    // Seleccionar los elementos de la interfaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');

    //Asignar Eventos
    inputEmail.addEventListener('blur', validar);
    inputAsunto.addEventListener('blur', validar);
    inputMensaje.addEventListener('blur', validar);

    function validar(e) {
        if(e.target.value.trim() === '') {
            mostrarAlerta(`El campo ${e.target.id} es obligatorio`, e.target.parentElement);
            return;
        }
        
        limpiarAlerta(e.target.parentElement);
        console.log('despues del if');
    }

    function mostrarAlerta(mensaje, referencia) {
        
        limpiarAlerta(referencia);
        

        // Generar alerta en HTML

        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');
        
        // Inyectar el error al formulario 

        referencia.appendChild(error);
    }

    function limpiarAlerta(referencia) {
        // Comprueba si ya existen  una alerta

        const alerta = referencia.querySelector('.bg-red-600');
        if (alerta) {
            alerta.remove();    
        }
    }

}); 