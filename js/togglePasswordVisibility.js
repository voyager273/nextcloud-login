function togglePasswordVisibility() {
    const passwordField = document.getElementById('password');
    const toggleButton = passwordField.nextElementSibling;
    const isPasswordVisible = passwordField.type === 'text';

    if (isPasswordVisible) {
        passwordField.type = 'password';
        toggleButton.setAttribute('aria-label', 'Show password');
    } else {
        passwordField.type = 'text';
        toggleButton.setAttribute('aria-label', 'Hide password');
    }
}
