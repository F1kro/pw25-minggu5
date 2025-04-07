  document.addEventListener('DOMContentLoaded', function() {
    // Contact Form Validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Reset error and alert sukses
            document.querySelectorAll('.error').forEach(el => el.style.display = 'none');
            const successMessage = document.getElementById('successMessage');
            if (successMessage) successMessage.style.display = 'none';
            
            // Get form values
            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const subject = document.getElementById('subject').value;
            const message = document.getElementById('message').value.trim();
            
            let isValid = true;
            
            // nama
            if (!name) {
                document.getElementById('nameError').style.display = 'block';
                isValid = false;
            }
            
            //  email
            if (!email) {
                document.getElementById('emailError').textContent = 'Email wajib diisi';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').textContent = 'Masukkan email yang valid';
                document.getElementById('emailError').style.display = 'block';
                isValid = false;
            }
            
            // subject
            if (!subject) {
                document.getElementById('subjectError').style.display = 'block';
                isValid = false;
            }
            
            // message
            if (!message) {
                document.getElementById('messageError').textContent = 'Persyaratan keamanan wajib diisi';
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            } else if (message.length < 20) {
                document.getElementById('messageError').textContent = 'Silakan berikan lebih banyak detail tentang kebutuhan keamanan Anda';
                document.getElementById('messageError').style.display = 'block';
                isValid = false;
            }
            
            // form valid alert sukses
            if (isValid && successMessage) {
                successMessage.style.display = 'block';
                this.reset();
                
                // hide alert
                setTimeout(() => {
                    successMessage.style.display = 'none';
                }, 5000);
            }
        });
        
        // RealTime Validasi : 

        // validasi untuk name
        document.getElementById('name').addEventListener('input', function() {
            if (this.value.trim()) {
                document.getElementById('nameError').style.display = 'none';
            }
        });
        
        // validasi untuk email 
        document.getElementById('email').addEventListener('input', function() {
            const email = this.value.trim();
            if (email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
                document.getElementById('emailError').style.display = 'none';
            }
        });
        
        // validasi untuk subject 
        document.getElementById('subject').addEventListener('change', function() {
            if (this.value) {
                document.getElementById('subjectError').style.display = 'none';
            }
        });
        
        // validasi untuk message
        document.getElementById('message').addEventListener('input', function() {
            const message = this.value.trim();
            if (message && message.length >= 20) {
                document.getElementById('messageError').style.display = 'none';
            }
        });
    }
    
    // slider testimoni
    const slider = document.querySelector('.testimonial-slider');
    const dots = document.querySelectorAll('.slider-dot');
    
    if (slider && dots.length) {
        // dot scroll nya
        slider.addEventListener('scroll', function() {
            const scrollPosition = slider.scrollLeft;
            const cardWidth = slider.querySelector('.testimonial-card').offsetWidth + 32; // 32px gap
            const activeIndex = Math.round(scrollPosition / cardWidth);
            
            dots.forEach((dot, index) => {
                if (index === activeIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        });
        
        // dot ketika di  click
        dots.forEach(dot => {
            dot.addEventListener('click', function() {
                const index = parseInt(this.getAttribute('data-index'));
                const cardWidth = slider.querySelector('.testimonial-card').offsetWidth + 32;
                slider.scrollTo({
                    left: index * cardWidth,
                    behavior: 'smooth'
                });
                
                // aksi update dot ketika di click
                dots.forEach(d => d.classList.remove('active'));
                this.classList.add('active');
            });
        });
        
        // auto scroll testimoni
        let currentIndex = 0;
        setInterval(() => {
            currentIndex = (currentIndex + 1) % dots.length;
            const cardWidth = slider.querySelector('.testimonial-card').offsetWidth + 32;
            slider.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
            
            // Update status dot aktif
            dots.forEach((dot, index) => {
                if (index === currentIndex) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }, 5000);
    }
    
    // Smooth scrooll
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // update url tanpa relaod 
                if (history.pushState) {
                    history.pushState(null, null, targetId);
                } else {
                    window.location.hash = targetId;
                }
            }
        });
    });
});