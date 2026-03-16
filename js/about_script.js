document.addEventListener('DOMContentLoaded', function() {
    

    const burgerMenu = document.querySelector('.burger-menu');
    const footerLinks = document.querySelectorAll('.footer-nav-link');
    const policyLink = document.querySelector('.footer-policy');

    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.hero-text', { y: 30, opacity: 0 });
    gsap.set('.dark-section', { y: 30, opacity: 0 });
    gsap.set('.map-section', { y: 30, opacity: 0 });
    gsap.set('.contacts-section', { y: 30, opacity: 0 });
    gsap.set('.form-section', { y: 30, opacity: 0 });
    
    gsap.to('.logo', { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: 0.2 
    });
    
    gsap.to('.burger-menu', { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: 0.2 
    });
    
    gsap.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
    });
    
    gsap.to('.dark-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7
    });
    
    gsap.to('.map-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.9
    });
    
    gsap.to('.contacts-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.1
    });
    
    gsap.to('.form-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.3
    });
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            console.log('Бургер-меню нажато - переход в меню');
            
            gsap.timeline()
                .to(this, { scale: 0.9, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" })
                .to({}, { duration: 0.2 })
                .to({}, {
                    duration: 0.3,
                    onComplete: () => {
                        window.location.href = 'index.html';
                    }
                });
        });
        
        burgerMenu.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        
        burgerMenu.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
        });
    }
    
    footerLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
                console.log('Переход по ссылке:', href);
                
                gsap.timeline()
                    .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                    .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" })
                    .to({}, { duration: 0.2 })
                    .to({}, {
                        duration: 0.3,
                        onComplete: () => {
                            window.location.href = href;
                        }
                    });
            }
        });
    });
    
    if (policyLink) {
        policyLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('Политика конфиденциальности');
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            alert('Политика конфиденциальности');
        });
    }
    
});