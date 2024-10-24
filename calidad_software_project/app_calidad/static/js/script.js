// Definir variables globales
let userList = JSON.parse(localStorage.getItem('userList')) || [];

// Función para inicializar el script según la página actual
document.addEventListener('DOMContentLoaded', function () {
    // Detecta en qué página se encuentra según el formulario presente
    const registrationForm = document.getElementById('registration-form');
    const loginForm = document.getElementById('login-form');

    if (registrationForm) {
        // Estamos en la página de registro
        initRegistration();
    } else if (loginForm) {
        // Estamos en la página de login
        initLogin();
    }
});

// Inicializa la funcionalidad de la página de Registro
function initRegistration() {
    // Visualizador de contraseñas para el registro
    var eye = document.getElementById('eye');
    var input = document.getElementById('login-password');
    var confirmInput = document.getElementById('confirm-password');

    eye.addEventListener("click", function() {
        if (input.type === "password") {
            input.type = "text";
            confirmInput.type = "text";
            eye.style.opacity = 0.8;
        } else {
            input.type = "password";
            confirmInput.type = "password";
            eye.style.opacity = 0.2;
        }
    });

    // Validar que las contraseñas coincidan
    const password = document.getElementById('login-password');
    const confirmPassword = document.getElementById('confirm-password');
    const errorMessage = document.getElementById('error-message');
    const submitButton = registrationForm.querySelector('button[type="submit"]');
    
    function validatePasswords() {
        if (password.value !== confirmPassword.value) {
            errorMessage.textContent = 'Las contraseñas no coinciden.';
            submitButton.disabled = true;
        } else {
            errorMessage.textContent = '';
            submitButton.disabled = false;
        }
    }

    password.addEventListener('input', validatePasswords);
    confirmPassword.addEventListener('input', validatePasswords);

    // Evento para registrar un nuevo usuario
    registrationForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Evita el envío del formulario

        // Obtiene los valores de los inputs
        const username = document.getElementById('username').value;
        const password = document.getElementById('login-password').value;
        const role = document.getElementById('role-select').value;

        // Crea un objeto con los datos del usuario
        const newUser = {
            username: username,
            password: password,
            role: role
        };

        // Agrega el nuevo usuario a la lista
        userList.push(newUser);

        // Guarda la lista de usuarios en localStorage
        localStorage.setItem('userList', JSON.stringify(userList));

        // Limpia los campos del formulario
        registrationForm.reset();

        // Muestra un mensaje de éxito
        alert(`Usuario ${username} registrado con éxito como ${role}.`);

        console.log(userList); // Muestra la lista de usuarios en la consola
    });
}

// Inicializa la funcionalidad de la página de Login
function initLogin() {
    // Asigna el evento 'submit' al formulario de inicio de sesión
    document.getElementById('login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que el formulario se envíe de manera predeterminada

        // Obtiene los valores de los inputs
        const username = document.getElementById('login-username').value.trim();
        const password = document.getElementById('login-password').value.trim();

        // Busca el usuario en la lista
        const user = userList.find(user => user.username === username && user.password === password);

        // Verifica si el usuario existe y las credenciales son correctas
        if (user) {
            // Redirige al usuario según su rol
            switch (user.role) {
                case 'Visitantes':
                    alert('Bienvenido Visitante');
                    window.location.href = 'index.html'; 
                    break;
                case 'Premium':
                    alert('Bienvenido Premium');
                    window.location.href = 'index.html';
                    break;
                case 'Administrador':
                    alert('Bienvenido Administrador');
                    window.location.href = 'administrador.html'; 
                    break;
                default:
                    alert('Rol desconocido');
            }
        } else {
            alert('Credenciales incorrectas. Por favor, verifica tu nombre de usuario y contraseña.');
        }
    });
}


  function toggleMenu() {
    var navMenu = document.querySelector('.nav-menu');
    navMenu.classList.toggle('active');
  }
