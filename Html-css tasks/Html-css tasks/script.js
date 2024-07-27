document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signup-form');
    const toast = document.getElementById('toast');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const username = form.username.value.trim();
        const email = form.email.value.trim();
        const password = form.password.value.trim();
        
        if (!username) {
            showAlert('Username is required');
            return;
        }
        if (!email) {
            showAlert('Email is required');
            return;
        }
        if (!validateEmail(email)) {
            showAlert('Please enter a valid email');
            return;
        }
        if (!password) {
            showAlert('Password is required');
            return;
        }
        
        // Submit the form or further processing
        showAlert('Form submitted successfully', true);
    });

    function showAlert(message, success = false) {
        toast.textContent = message;
        toast.style.backgroundColor = success ? '#28a745' : '#dc3545';
        toast.className = 'toast show';
        setTimeout(() => {
            toast.className = toast.className.replace('show', '');
        }, 3000);
    }

    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\.,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
