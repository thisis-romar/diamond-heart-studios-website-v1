/**
 * DIAMOND HEART STUDIOS
 * Interactive Music Studio Website
 * Main JavaScript Application
 */

class DiamondHeartStudio {
    constructor() {
        this.init();
        this.bindEvents();
        this.initAnimations();
        this.createParticles();
        this.initWaveform();
        this.initKonamiCode();
    }

    init() {
        // Custom cursor elements
        this.cursor = document.querySelector('.cursor');
        this.cursorInner = document.querySelector('.cursor-inner');
        this.cursorOuter = document.querySelector('.cursor-outer');
        
        // Navigation elements
        this.hamburger = document.querySelector('.hamburger');
        this.navMenu = document.querySelector('.nav-menu');
        this.navLinks = document.querySelectorAll('.nav-link');
        
        // Form elements
        this.contactForm = document.querySelector('.contact-form');
        
        // Animation elements
        this.scrollRevealElements = document.querySelectorAll('.scroll-reveal');
        
        // Add scroll reveal classes to elements
        this.addScrollRevealClasses();
    }

    bindEvents() {
        // Custom cursor events
        document.addEventListener('mousemove', (e) => this.updateCursor(e));
        document.addEventListener('mouseenter', () => this.showCursor());
        document.addEventListener('mouseleave', () => this.hideCursor());

        // Interactive elements cursor effects
        const interactiveElements = document.querySelectorAll('a, button, .service-card, .artist-card');
        interactiveElements.forEach(el => {
            el.addEventListener('mouseenter', () => this.scaleCursor(true));
            el.addEventListener('mouseleave', () => this.scaleCursor(false));
        });

        // Mobile navigation
        this.hamburger.addEventListener('click', () => this.toggleMobileNav());
        this.navLinks.forEach(link => {
            link.addEventListener('click', () => this.closeMobileNav());
        });

        // Smooth scrolling for navigation links
        this.navLinks.forEach(link => {
            link.addEventListener('click', (e) => this.smoothScroll(e));
        });

        // Form submission
        if (this.contactForm) {
            this.contactForm.addEventListener('submit', (e) => this.handleFormSubmit(e));
        }

        // Scroll animations
        window.addEventListener('scroll', () => this.handleScroll());
        
        // Window resize
        window.addEventListener('resize', () => this.handleResize());

        // Play button interactions
        const playButtons = document.querySelectorAll('.play-btn');
        playButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handlePlayClick(e));
        });

        // CTA button interactions
        const ctaButtons = document.querySelectorAll('.cta-btn');
        ctaButtons.forEach(btn => {
            btn.addEventListener('click', (e) => this.handleCtaClick(e));
        });

        // Knob interactions
        const knobs = document.querySelectorAll('.knob');
        knobs.forEach(knob => {
            knob.addEventListener('click', () => this.rotateKnob(knob));
        });
    }

    // Custom Cursor Functions
    updateCursor(e) {
        if (this.cursor) {
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        }
    }

    showCursor() {
        if (this.cursor) {
            this.cursor.style.opacity = '1';
        }
    }

    hideCursor() {
        if (this.cursor) {
            this.cursor.style.opacity = '0';
        }
    }

    scaleCursor(scale) {
        if (this.cursorOuter) {
            this.cursorOuter.style.transform = scale 
                ? 'translate(-50%, -50%) scale(1.5)' 
                : 'translate(-50%, -50%) scale(1)';
        }
        if (this.cursorInner) {
            this.cursorInner.style.transform = scale 
                ? 'translate(-50%, -50%) scale(2)' 
                : 'translate(-50%, -50%) scale(1)';
        }
    }

    // Navigation Functions
    toggleMobileNav() {
        this.navMenu.classList.toggle('active');
        this.hamburger.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = this.hamburger.querySelectorAll('.bar');
        bars.forEach((bar, index) => {
            if (this.hamburger.classList.contains('active')) {
                if (index === 0) bar.style.transform = 'rotate(-45deg) translate(-5px, 6px)';
                if (index === 1) bar.style.opacity = '0';
                if (index === 2) bar.style.transform = 'rotate(45deg) translate(-5px, -6px)';
            } else {
                bar.style.transform = 'none';
                bar.style.opacity = '1';
            }
        });
    }

    closeMobileNav() {
        this.navMenu.classList.remove('active');
        this.hamburger.classList.remove('active');
        
        const bars = this.hamburger.querySelectorAll('.bar');
        bars.forEach(bar => {
            bar.style.transform = 'none';
            bar.style.opacity = '1';
        });
    }

    smoothScroll(e) {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetSection = document.querySelector(targetId);
        
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    }

    // Scroll Animations
    addScrollRevealClasses() {
        const elements = [
            '.service-card',
            '.artist-card',
            '.equipment-item',
            '.contact-item'
        ];
        
        elements.forEach(selector => {
            document.querySelectorAll(selector).forEach(el => {
                el.classList.add('scroll-reveal');
            });
        });
    }

    handleScroll() {
        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        } else {
            navbar.style.background = 'rgba(10, 10, 10, 0.9)';
        }

        // Reveal animations
        this.scrollRevealElements.forEach(el => {
            const elementTop = el.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                el.classList.add('active');
            }
        });

        // Parallax effect for hero particles
        const particles = document.querySelector('.particles');
        if (particles) {
            const scrolled = window.pageYOffset;
            const rate = scrolled * -0.5;
            particles.style.transform = `translateY(${rate}px)`;
        }
    }

    // Form Handling
    handleFormSubmit(e) {
        e.preventDefault();
        
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData);
        
        // Simulate form submission with animation
        const submitBtn = e.target.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            submitBtn.innerHTML = '<i class="fas fa-check"></i> Message Sent!';
            submitBtn.style.background = 'linear-gradient(45deg, #39ff14, #00ff00)';
            
            setTimeout(() => {
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
                submitBtn.style.background = 'linear-gradient(45deg, var(--neon-pink), var(--purple-glow))';
                e.target.reset();
            }, 2000);
        }, 1500);
        
        console.log('Form submitted:', data);
    }

    // Interactive Elements
    handlePlayClick(e) {
        const btn = e.currentTarget;
        const icon = btn.querySelector('i');
        
        if (icon.classList.contains('fa-play')) {
            icon.classList.remove('fa-play');
            icon.classList.add('fa-pause');
            btn.style.background = 'var(--neon-pink)';
            
            // Animate the artist card
            const card = btn.closest('.artist-card');
            card.style.transform = 'translateY(-10px) scale(1.02)';
            card.style.boxShadow = '0 20px 40px rgba(255, 0, 255, 0.3)';
        } else {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
            btn.style.background = 'var(--neon-cyan)';
            
            const card = btn.closest('.artist-card');
            card.style.transform = 'translateY(-10px) scale(1)';
            card.style.boxShadow = '0 20px 40px rgba(255, 0, 255, 0.1)';
        }
    }

    handleCtaClick(e) {
        const btn = e.currentTarget;
        
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = btn.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.cssText = `
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.6);
            transform: scale(0);
            animation: ripple 0.6s linear;
            width: ${size}px;
            height: ${size}px;
            left: ${x}px;
            top: ${y}px;
        `;
        
        btn.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
        
        // Add CSS for ripple animation
        if (!document.querySelector('#ripple-style')) {
            const style = document.createElement('style');
            style.id = 'ripple-style';
            style.textContent = `
                @keyframes ripple {
                    to {
                        transform: scale(4);
                        opacity: 0;
                    }
                }
            `;
            document.head.appendChild(style);
        }
    }

    rotateKnob(knob) {
        const currentRotation = knob.dataset.rotation || 0;
        const newRotation = (parseInt(currentRotation) + 30) % 360;
        
        knob.style.transform = `rotate(${newRotation}deg)`;
        knob.dataset.rotation = newRotation;
        
        // Add glow effect
        knob.style.boxShadow = `
            0 0 20px rgba(0, 255, 255, 0.8),
            inset 0 0 20px rgba(0, 255, 255, 0.1)
        `;
        
        setTimeout(() => {
            knob.style.boxShadow = '0 0 10px rgba(0, 255, 255, 0.3)';
        }, 200);
    }

    // Particle System
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = Math.random() * 4 + 1;
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const delay = Math.random() * 20;
            
            particle.style.cssText = `
                position: absolute;
                width: ${size}px;
                height: ${size}px;
                background: radial-gradient(circle, var(--neon-cyan), transparent);
                border-radius: 50%;
                left: ${x}%;
                top: ${y}%;
                opacity: ${Math.random() * 0.8 + 0.2};
                animation: particleFloat ${8 + Math.random() * 4}s ease-in-out infinite ${delay}s;
                box-shadow: 0 0 ${size * 2}px var(--neon-cyan);
            `;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Waveform Visualization
    initWaveform() {
        const canvas = document.getElementById('waveform');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        let animationId;
        let time = 0;
        
        const drawWaveform = () => {
            ctx.clearRect(0, 0, width, height);
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, width, 0);
            gradient.addColorStop(0, '#00ffff');
            gradient.addColorStop(0.5, '#ff00ff');
            gradient.addColorStop(1, '#0080ff');
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 2;
            ctx.beginPath();
            
            // Draw waveform
            for (let x = 0; x < width; x++) {
                const frequency1 = 0.01;
                const frequency2 = 0.02;
                const amplitude1 = 30;
                const amplitude2 = 20;
                
                const y1 = Math.sin((x + time) * frequency1) * amplitude1;
                const y2 = Math.sin((x + time * 1.5) * frequency2) * amplitude2;
                const y = height / 2 + y1 + y2;
                
                if (x === 0) {
                    ctx.moveTo(x, y);
                } else {
                    ctx.lineTo(x, y);
                }
            }
            
            ctx.stroke();
            
            // Add glow effect
            ctx.shadowBlur = 20;
            ctx.shadowColor = '#00ffff';
            ctx.stroke();
            
            time += 2;
            animationId = requestAnimationFrame(drawWaveform);
        };
        
        drawWaveform();
        
        // Pause animation when not visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId) drawWaveform();
                } else {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            });
        });
        
        observer.observe(canvas);
    }

    // Konami Code Easter Egg (↑↑↓↓←→←→BA)
    initKonamiCode() {
        const konamiCode = [
            'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
            'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
            'KeyB', 'KeyA'
        ];
        
        let konamiIndex = 0;
        
        document.addEventListener('keydown', (e) => {
            if (e.code === konamiCode[konamiIndex]) {
                konamiIndex++;
                if (konamiIndex === konamiCode.length) {
                    this.activateEasterEgg();
                    konamiIndex = 0;
                }
            } else {
                konamiIndex = 0;
            }
        });
    }

    // Easter Egg Activation
    activateEasterEgg() {
        // Show celebration message
        const celebration = document.createElement('div');
        celebration.innerHTML = `
            <div style="position: fixed; top: 50%; left: 50%; transform: translate(-50%, -50%); 
                        background: rgba(0,0,0,0.9); padding: 2rem; border-radius: 15px; 
                        color: #00ffff; font-size: 2rem; text-align: center; z-index: 9999;
                        border: 2px solid #00ffff; box-shadow: 0 0 30px #00ffff;">
                🎉 STUDIO SECRET UNLOCKED! 🎉<br>
                <span style="font-size: 1rem; color: #888;">You found the hidden easter egg!</span>
            </div>
        `;
        document.body.appendChild(celebration);
        
        // Create confetti
        this.createConfetti();
        
        // Remove message after 5 seconds
        setTimeout(() => {
            celebration.remove();
        }, 5000);
    }

    // Confetti animation
    createConfetti() {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                const confetti = document.createElement('div');
                confetti.style.position = 'fixed';
                confetti.style.left = Math.random() * 100 + '%';
                confetti.style.top = '-10px';
                confetti.style.width = '8px';
                confetti.style.height = '8px';
                confetti.style.backgroundColor = ['#ff00ff', '#00ffff', '#39ff14', '#ff1493', '#0080ff'][Math.floor(Math.random() * 5)];
                confetti.style.zIndex = '9999';
                confetti.style.pointerEvents = 'none';
                confetti.style.borderRadius = '50%';
                
                document.body.appendChild(confetti);
                
                confetti.animate([
                    { transform: 'translateY(0) rotate(0deg)', opacity: 1 },
                    { transform: `translateY(${window.innerHeight + 20}px) rotate(720deg)`, opacity: 0 }
                ], {
                    duration: Math.random() * 2000 + 2000,
                    easing: 'ease-out'
                }).onfinish = () => confetti.remove();
            }, i * 50);
        }
    }

    // Initialization animations
    initAnimations() {
        // Stagger animation for service cards
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(50px)';
            
            setTimeout(() => {
                card.style.transition = 'all 0.6s ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 200 * index);
        });
        
        // Hero title animation
        const heroTitle = document.querySelector('.hero-title');
        if (heroTitle) {
            const spans = heroTitle.querySelectorAll('span');
            spans.forEach((span, index) => {
                span.style.opacity = '0';
                span.style.transform = 'translateY(30px)';
                
                setTimeout(() => {
                    span.style.transition = 'all 0.8s ease';
                    span.style.opacity = '1';
                    span.style.transform = 'translateY(0)';
                }, 300 * index);
            });
        }
        
        // Sound wave bars animation
        const waveBars = document.querySelectorAll('.wave-bar');
        waveBars.forEach((bar, index) => {
            bar.style.animationDelay = `${index * 0.1}s`;
        });
    }

    // Handle window resize
    handleResize() {
        // Recalculate animations if needed
        if (window.innerWidth > 768) {
            this.closeMobileNav();
        }
        
        // Update particle positions
        const particles = document.querySelectorAll('.particle');
        particles.forEach(particle => {
            particle.style.left = Math.random() * 100 + '%';
        });
    }

    // Create particles animation
    createParticles() {
        const particlesContainer = document.getElementById('particles');
        if (!particlesContainer) return;
        
        // Create 50 particles
        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            // Random position
            particle.style.left = Math.random() * 100 + '%';
            particle.style.top = Math.random() * 100 + '%';
            
            // Random size
            const size = Math.random() * 4 + 2;
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            
            // Random color from neon palette
            const colors = ['#00ffff', '#ff00ff', '#0080ff', '#39ff14', '#ff1493', '#8a2be2'];
            particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
            
            // Random animation duration
            const duration = Math.random() * 10 + 10;
            particle.style.animationDuration = duration + 's';
            
            particlesContainer.appendChild(particle);
        }
    }

    // Initialize waveform canvas animation
    initWaveform() {
        const canvas = document.getElementById('waveform');
        if (!canvas) return;
        
        const ctx = canvas.getContext('2d');
        const width = canvas.width;
        const height = canvas.height;
        
        // Animation variables
        let animationId;
        let phase = 0;
        
        const drawWaveform = () => {
            // Clear canvas
            ctx.clearRect(0, 0, width, height);
            
            // Set up waveform properties
            ctx.strokeStyle = '#00ffff';
            ctx.lineWidth = 2;
            ctx.shadowColor = '#00ffff';
            ctx.shadowBlur = 10;
            
            // Draw multiple waveforms
            for (let wave = 0; wave < 3; wave++) {
                ctx.beginPath();
                ctx.globalAlpha = 0.3 + (wave * 0.2);
                
                for (let x = 0; x < width; x++) {
                    const frequency = 0.02 + (wave * 0.005);
                    const amplitude = 20 + (wave * 10);
                    const offset = wave * 20;
                    
                    const y = height / 2 + Math.sin(x * frequency + phase + offset) * amplitude;
                    
                    if (x === 0) {
                        ctx.moveTo(x, y);
                    } else {
                        ctx.lineTo(x, y);
                    }
                }
                
                ctx.stroke();
            }
            
            // Update phase for animation
            phase += 0.05;
            
            // Continue animation
            animationId = requestAnimationFrame(drawWaveform);
        };
        
        // Start animation
        drawWaveform();
        
        // Pause animation when element is not visible
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    if (!animationId) drawWaveform();
                } else {
                    cancelAnimationFrame(animationId);
                    animationId = null;
                }
            });
        });
        
        observer.observe(canvas);
    }

    // Handle play button clicks
    handlePlayClick(e) {
        e.preventDefault();
        const button = e.currentTarget;
        
        // Add visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        // Add glow effect
        button.classList.add('glow-effect');
        setTimeout(() => {
            button.classList.remove('glow-effect');
        }, 2000);
        
        // Simulate audio playback (placeholder)
        console.log('Playing track...', button.closest('.artist-card'));
        
        // You could integrate with Web Audio API here
        this.simulateAudioPlayback(button);
    }

    // Handle CTA button clicks
    handleCtaClick(e) {
        const button = e.currentTarget;
        const buttonText = button.querySelector('span').textContent;
        
        // Add visual feedback
        button.style.transform = 'scale(0.98)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 100);
        
        if (buttonText.includes('Book Session')) {
            // Scroll to contact form
            const contactSection = document.getElementById('contact');
            contactSection.scrollIntoView({ behavior: 'smooth' });
            
            // Focus on first form input after scroll
            setTimeout(() => {
                const nameInput = document.getElementById('name');
                if (nameInput) nameInput.focus();
            }, 1000);
            
        } else if (buttonText.includes('Listen to Tracks')) {
            // Scroll to artists section
            const artistsSection = document.getElementById('artists');
            artistsSection.scrollIntoView({ behavior: 'smooth' });
            
            // Add pulse effect to artist cards
            setTimeout(() => {
                const artistCards = document.querySelectorAll('.artist-card');
                artistCards.forEach((card, index) => {
                    setTimeout(() => {
                        card.style.transform = 'scale(1.02)';
                        setTimeout(() => {
                            card.style.transform = 'scale(1)';
                        }, 200);
                    }, index * 100);
                });
            }, 500);
        }
    }

    // Simulate audio playback with visual feedback
    simulateAudioPlayback(button) {
        const icon = button.querySelector('i');
        if (!icon) return;
        
        // Change icon to pause
        icon.classList.remove('fa-play');
        icon.classList.add('fa-pause');
        
        // Simulate 3 second playback
        setTimeout(() => {
            icon.classList.remove('fa-pause');
            icon.classList.add('fa-play');
        }, 3000);
    }

    // Handle contact form submission
    handleFormSubmit(e) {
        e.preventDefault();
        
        const form = e.target;
        const formData = new FormData(form);
        const name = formData.get('name') || document.getElementById('name').value;
        const email = formData.get('email') || document.getElementById('email').value;
        const message = formData.get('message') || document.getElementById('message').value;
        
        // Basic validation
        if (!name || !email || !message) {
            this.showFormMessage('Please fill in all fields.', 'error');
            return;
        }
        
        if (!this.isValidEmail(email)) {
            this.showFormMessage('Please enter a valid email address.', 'error');
            return;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('.submit-btn');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Sending...';
        submitBtn.disabled = true;
        
        // Simulate API call delay
        setTimeout(() => {
            this.showFormMessage('Message sent successfully! We\'ll get back to you soon.', 'success');
            form.reset();
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Add some visual flair
            this.createSuccessAnimation();
        }, 2000);
    }

    // Email validation
    isValidEmail(email) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    // Show form message
    showFormMessage(message, type) {
        // Remove existing message
        const existingMessage = document.querySelector('.form-message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        // Create new message
        const messageDiv = document.createElement('div');
        messageDiv.className = `form-message ${type}`;
        messageDiv.textContent = message;
        
        // Insert before form
        const form = document.querySelector('.contact-form');
        form.parentNode.insertBefore(messageDiv, form);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Success animation
    createSuccessAnimation() {
        const colors = ['#00ffff', '#ff00ff', '#39ff14', '#ff1493'];
        for (let i = 0; i < 10; i++) {
            setTimeout(() => {
                const particle = document.createElement('div');
                particle.style.position = 'fixed';
                particle.style.left = '50%';
                particle.style.top = '50%';
                particle.style.width = '10px';
                particle.style.height = '10px';
                particle.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
                particle.style.borderRadius = '50%';
                particle.style.pointerEvents = 'none';
                particle.style.zIndex = '9999';
                
                const angle = (i / 10) * 360;
                const velocity = 200;
                particle.style.transform = `translate(-50%, -50%)`;
                
                document.body.appendChild(particle);
                
                // Animate particle
                particle.animate([
                    { transform: `translate(-50%, -50%) translate(0, 0)`, opacity: 1 },
                    { transform: `translate(-50%, -50%) translate(${Math.cos(angle * Math.PI / 180) * velocity}px, ${Math.sin(angle * Math.PI / 180) * velocity}px)`, opacity: 0 }
                ], {
                    duration: 1000,
                    easing: 'ease-out'
                }).onfinish = () => particle.remove();
            }, i * 50);
        }
    }

    // Mobile Navigation Methods
    toggleMobileNav() {
        this.hamburger.classList.toggle('active');
        this.navMenu.classList.toggle('active');
        
        // Toggle body scroll
        document.body.style.overflow = this.navMenu.classList.contains('active') ? 'hidden' : '';
        
        // Animate hamburger bars
        const bars = this.hamburger.querySelectorAll('.bar');
        if (this.hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(-45deg) translate(-5px, 6px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(45deg) translate(-5px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    }

    closeMobileNav() {
        this.hamburger.classList.remove('active');
        this.navMenu.classList.remove('active');
        document.body.style.overflow = '';
        
        // Reset hamburger bars
        const bars = this.hamburger.querySelectorAll('.bar');
        bars[0].style.transform = 'none';
        bars[1].style.opacity = '1';
        bars[2].style.transform = 'none';
    }

    // Handle knob rotation
    rotateKnob(knob) {
        const currentRotation = parseInt(knob.dataset.rotation || '0');
        const newRotation = currentRotation + 30;
        
        knob.style.transform = `rotate(${newRotation}deg)`;
        knob.dataset.rotation = newRotation;
        
        // Add glow effect
        knob.style.boxShadow = '0 0 20px var(--neon-cyan)';
        setTimeout(() => {
            knob.style.boxShadow = '';
        }, 500);
    }

    // Audio visualization (placeholder for future integration)
    initAudioVisualization() {
        // This could be extended to work with Web Audio API
        // for real audio visualization from microphone or audio files
        console.log('Audio visualization ready for integration');
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Show loading screen and initialize after delay
    const loadingScreen = document.getElementById('loading-screen');
    const loadingSubtitle = document.querySelector('.loading-subtitle');
    
    const loadingMessages = [
        'Initializing Studio Systems...',
        'Connecting to Toronto...',
        'Loading Chris Ramos Projects...',
        'Tuning Diamond Heart Frequencies...',
        'Ready to Create!'
    ];
    
    let messageIndex = 0;
    const messageInterval = setInterval(() => {
        if (messageIndex < loadingMessages.length - 1) {
            messageIndex++;
            loadingSubtitle.textContent = loadingMessages[messageIndex];
        } else {
            clearInterval(messageInterval);
        }
    }, 600);
    
    // Hide loading screen after 3 seconds
    setTimeout(() => {
        loadingScreen.classList.add('fade-out');
        document.body.style.overflow = '';
        
        // Remove loading screen from DOM after transition
        setTimeout(() => {
            loadingScreen.remove();
        }, 500);
        
        // Initialize the studio
        new DiamondHeartStudio();
    }, 3000);
    
    // Prevent scrolling during loading
    document.body.style.overflow = 'hidden';
});

// Add some global utility functions
window.DiamondHeartUtils = {
    // Debounce function for performance
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },
    
    // Random color from neon palette
    getRandomNeonColor: () => {
        const colors = ['#00ffff', '#ff00ff', '#0080ff', '#39ff14', '#ff1493', '#8a2be2'];
        return colors[Math.floor(Math.random() * colors.length)];
    },
    
    // Create floating element animation
    createFloatingElement: (element) => {
        const randomDelay = Math.random() * 2;
        const randomDuration = 3 + Math.random() * 2;
        
        element.style.animation = `particleFloat ${randomDuration}s ease-in-out infinite ${randomDelay}s`;
    }
};

// Add some CSS animations via JavaScript for dynamic effects
const styleSheet = document.createElement('style');
styleSheet.textContent = `
    @keyframes glowPulse {
        0%, 100% { 
            filter: drop-shadow(0 0 5px currentColor);
        }
        50% { 
            filter: drop-shadow(0 0 20px currentColor);
        }
    }
    
    .glow-effect {
        animation: glowPulse 2s ease-in-out infinite;
    }
    
    .shake {
        animation: shake 0.5s ease-in-out;
    }
    
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-5px); }
        75% { transform: translateX(5px); }
    }
`;

document.head.appendChild(styleSheet);