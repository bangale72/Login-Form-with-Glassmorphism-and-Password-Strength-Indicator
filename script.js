function checkPasswordStrength() {
    const passwordInput = document.getElementById('password');
    const strengthText = document.getElementById('password-strength-text');
    const password = passwordInput.value;

    if (password.length === 0) {
        strengthText.textContent = '';
        passwordInput.style.borderColor = '';
        return;
    }

    let strength;
    if (password.length < 6) {
        strength = 'Weak';
        passwordInput.style.borderColor = 'red';
        strengthText.style.color = 'red';
    } else if (password.length < 10 || !/[A-Z]/.test(password) || !/[0-9]/.test(password)) {
        strength = 'Medium';
        passwordInput.style.borderColor = 'yellow';
        strengthText.style.color = 'yellow';
    } else {
        strength = 'Strong';
        passwordInput.style.borderColor = 'green';
        strengthText.style.color = 'green';
    }

    strengthText.textContent = `Password Strength: ${strength}`;
}
