document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const caseCards = document.querySelectorAll('.case-card');
    const filterItems = document.querySelectorAll('.filter-item');
    const footerLinks = document.querySelectorAll('.footer-nav-link');
    const policyLink = document.querySelector('.footer-policy');
    
    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.media-image-container', { y: 30, opacity: 0 });
    gsap.set('.dark-section', { y: 30, opacity: 0 });
    gsap.set('.filter-item', { y: 30, opacity: 0 });
    gsap.set('.case-card', { y: 30, opacity: 0 });
    gsap.set('.footer', { y: 30, opacity: 0 });
    
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
    
    gsap.to('.media-image-container', { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: 0.4 
    });
    
    gsap.to('.dark-section', { 
        y: 0, 
        opacity: 1, 
        duration: 0.8, 
        ease: "power3.out", 
        delay: 0.5 
    });
    
    gsap.to('.filter-item', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.6
    });
    
    gsap.to('.case-card', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        delay: 0.9
    });
    
    gsap.to('.footer', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.4
    });
    
    
    function filterCards(category) {
        caseCards.forEach(card => {
            const cardCategory = card.getAttribute('data-category');
            
            if (category === 'all' || cardCategory === category) {
                card.classList.remove('hidden');
                gsap.fromTo(card, 
                    { opacity: 0, scale: 0.95 },
                    { opacity: 1, scale: 1, duration: 0.4, ease: "power2.out" }
                );
            } else {
                gsap.to(card, {
                    opacity: 0,
                    scale: 0.95,
                    duration: 0.2,
                    ease: "power2.in",
                    onComplete: () => {
                        card.classList.add('hidden');
                    }
                });
            }
        });
    }
    
    filterItems.forEach(item => {
        item.addEventListener('click', function(e) {
            e.preventDefault();
            const filter = this.getAttribute('data-filter');
            
            filterItems.forEach(fi => fi.classList.remove('active'));
            
            this.classList.add('active');
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            filterCards(filter);
        });
        
        item.addEventListener('mouseenter', function() {
            gsap.to(this.querySelector('.filter-text'), {
                color: '#E3032E',
                duration: 0.2,
                ease: "power2.out"
            });
            
            gsap.to(this.querySelector('.filter-count'), {
                color: '#E3032E',
                duration: 0.2,
                ease: "power2.out"
            });
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                gsap.to(this.querySelector('.filter-text'), {
                    color: '#F0F0F0',
                    duration: 0.2,
                    ease: "power2.inOut"
                });
                
                gsap.to(this.querySelector('.filter-count'), {
                    color: 'rgba(240, 240, 240, 0.5)',
                    duration: 0.2,
                    ease: "power2.inOut"
                });
            }
        });
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
    
    caseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            if (this.classList.contains('hidden')) return;
            
            const label = this.querySelector('.case-label');
            gsap.to(label, {
                color: '#E3032E',
                duration: 0.2,
                ease: "power2.out"
            });
            
            const image = this.querySelector('.case-image');
            gsap.to(image, {
                boxShadow: '0 20px 30px rgba(0, 0, 0, 0.4)',
                duration: 0.3,
                ease: "power2.out"
            });
            
            const img = this.querySelector('.case-img');
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            if (this.classList.contains('hidden')) return;
            
            const label = this.querySelector('.case-label');
            gsap.to(label, {
                color: '#F0F0F0',
                duration: 0.2,
                ease: "power2.inOut"
            });
            
            const image = this.querySelector('.case-image');
            gsap.to(image, {
                boxShadow: 'none',
                duration: 0.2,
                ease: "power2.inOut"
            });
            
            const img = this.querySelector('.case-img');
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
        
        card.addEventListener('click', function() {
            if (this.classList.contains('hidden')) return;
            
            console.log('Клик по карточке кейса');
            
            gsap.timeline()
                .to(this, {
                    scale: 0.98,
                    duration: 0.1,
                    ease: "sine.inOut"
                })
                .to(this, {
                    scale: 1,
                    duration: 0.3,
                    ease: "elastic.out(1, 0.2)"
                });
        });
    });
});