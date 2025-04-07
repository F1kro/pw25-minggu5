document.getElementById('togglePassword').addEventListener('click', function() {
    const passwordInput = document.getElementById('password');
    
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        this.textContent = '👁️';
    } else {
        passwordInput.type = 'password';
        this.textContent = '👁️';
    }
});

// Form validation
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    
    if (!email.includes('@') || !email.includes('.')) {
        alert('Please enter a valid email address!');
        return;
    }
    
    if (password.length < 6) {
        alert('Password harus lebih dari 6 karakter!');
        return;
    }
    
    alert('Login Sukses! Redirecting...');
    this.reset();
    redirectToIndex();
});

function redirectToIndex() {
    window.location.href = '../pw-minggu5/index.html';
}