  // Password toggle functionality
  document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    const icon = this;
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        icon.textContent = '🙈';
    } else {
        passwordInput.type = 'password';
        icon.textContent = '👁️';
    }
});

// Form validation
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Check if passwords match
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Check password length
    if (password.length < 8) {
        alert('Password must be at least 8 characters!');
        return;
    }
    
    // Check terms agreement
    if (!document.getElementById('terms').checked) {
        alert('You must agree to the terms and conditions!');
        return;
    }
    
    // Form is valid - you would typically send data to server here
    alert('Registration successful!');
    this.reset();
});