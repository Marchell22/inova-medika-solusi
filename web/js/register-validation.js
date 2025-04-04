// Simpan ini ke web/js/register-validation.js

document.addEventListener('DOMContentLoaded', function () {
    const registerForm = document.getElementById('register-form');

    if (registerForm) {
        registerForm.addEventListener('submit', function (event) {
            // Get form fields
            const fullname = document.getElementById('fullname').value.trim();
            const email = document.getElementById('email').value.trim();
            const username = document.getElementById('username').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirmPassword').value;
            const terms = document.getElementById('terms').checked;

            // Clear previous error messages
            clearErrorMessages();

            // Validation flags
            let isValid = true;

            // Validate fullname
            if (fullname === '') {
                displayError('fullname', 'Nama lengkap harus diisi');
                isValid = false;
            }

            // Validate email
            if (email === '') {
                displayError('email', 'Email harus diisi');
                isValid = false;
            } else if (!isValidEmail(email)) {
                displayError('email', 'Format email tidak valid');
                isValid = false;
            }

            // Validate username
            if (username === '') {
                displayError('username', 'Username harus diisi');
                isValid = false;
            } else if (username.length < 4) {
                displayError('username', 'Username minimal 4 karakter');
                isValid = false;
            }

            // Validate password
            if (password === '') {
                displayError('password', 'Password harus diisi');
                isValid = false;
            } else if (password.length < 6) {
                displayError('password', 'Password minimal 6 karakter');
                isValid = false;
            }

            // Validate confirm password
            if (confirmPassword === '') {
                displayError('confirmPassword', 'Konfirmasi password harus diisi');
                isValid = false;
            } else if (password !== confirmPassword) {
                displayError('confirmPassword', 'Password dan konfirmasi password tidak sama');
                isValid = false;
            }

            // Validate terms
            if (!terms) {
                displayError('terms', 'Anda harus menyetujui syarat dan ketentuan');
                isValid = false;
            }

            // Prevent form submission if validation fails
            if (!isValid) {
                event.preventDefault();
            }
        });
    }

    // Helper functions
    function isValidEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }

    function displayError(fieldId, message) {
        const field = document.getElementById(fieldId);
        const errorDiv = document.createElement('div');
        errorDiv.className = 'invalid-feedback';
        errorDiv.style.display = 'block';
        errorDiv.textContent = message;

        field.classList.add('is-invalid');
        field.parentNode.appendChild(errorDiv);
    }

    function clearErrorMessages() {
        const invalidFields = document.querySelectorAll('.is-invalid');
        const errorMessages = document.querySelectorAll('.invalid-feedback');

        invalidFields.forEach(field => {
            field.classList.remove('is-invalid');
        });

        errorMessages.forEach(errorMsg => {
            errorMsg.remove();
        });
    }
});