document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const mediaContainer = document.querySelector('.media-container');
    const footerLinks = document.querySelectorAll('.footer-nav-link');
    const policyLink = document.querySelector('.footer-policy');
    const filterItems = document.querySelectorAll('.filter-item');
    
    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.hero-text', { y: 30, opacity: 0 });
    gsap.set('.cases-dark-section', { y: 30, opacity: 0 });
    gsap.set('.cases-title', { y: 30, opacity: 0 });
    gsap.set('.filter-item', { y: 30, opacity: 0 });
    gsap.set('.case-item-link', { y: 30, opacity: 0 });
    gsap.set('.media-section', { y: 30, opacity: 0 });
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
    
    gsap.to('.hero-text', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
    });
    
    gsap.to('.cases-dark-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.7
    });
    
    gsap.to('.cases-title', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.9
    });
    
    gsap.to('.filter-item', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
        delay: 1.0
    });
    
    gsap.to('.case-item-link', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.05,
        ease: "power3.out",
        delay: 1.2
    });
    
    gsap.to('.media-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.6
    });
    
    gsap.to('.footer', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 1.8
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
    
    filterItems.forEach(item => {
        const dropdown = item.querySelector('.filter-dropdown');
        const arrow = item.querySelector('.filter-arrow');
        const filterText = item.querySelector('.filter-text');
        
        item.addEventListener('click', function(e) {
            e.stopPropagation();
            
            filterItems.forEach(otherItem => {
                if (otherItem !== item && otherItem.classList.contains('active')) {
                    otherItem.classList.remove('active');
                    gsap.to(otherItem.querySelector('.filter-arrow'), {
                        rotation: 0,
                        duration: 0.2
                    });
                }
            });
            
            const wasActive = this.classList.contains('active');
            
            if (!wasActive) {
                this.classList.add('active');
                gsap.to(arrow, {
                    rotation: 180,
                    duration: 0.3,
                    ease: "power2.out"
                });
                
                if (dropdown) {
                    gsap.fromTo(dropdown,
                        { opacity: 0, y: -10 },
                        { opacity: 1, y: 0, duration: 0.2 }
                    );
                }
            } else {
                this.classList.remove('active');
                gsap.to(arrow, {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
        });
        
        const dropdownItems = item.querySelectorAll('.dropdown-item');
        dropdownItems.forEach(dropdownItem => {
            dropdownItem.addEventListener('click', function(e) {
                e.stopPropagation();
                
                const selectedValue = this.textContent;
                console.log(`Выбрано: ${selectedValue} для ${filterText.textContent}`);
                
                item.classList.remove('active');
                gsap.to(arrow, {
                    rotation: 0,
                    duration: 0.2,
                    ease: "power2.inOut"
                });
                
                gsap.timeline()
                    .to(this, { scale: 0.95, duration: 0.05 })
                    .to(this, { scale: 1, duration: 0.1 });
            });
        });
        
        document.addEventListener('click', function(e) {
            if (!item.contains(e.target)) {
                if (item.classList.contains('active')) {
                    item.classList.remove('active');
                    gsap.to(arrow, {
                        rotation: 0,
                        duration: 0.2,
                        ease: "power2.inOut"
                    });
                }
            }
        });
        
        item.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                gsap.to(arrow, {
                    rotation: 180,
                    duration: 0.3,
                    ease: "power2.out"
                });
            }
        });
        
        item.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                gsap.to(arrow, {
                    rotation: 0,
                    duration: 0.3,
                    ease: "power2.inOut"
                });
            }
        });
    });
    
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
    
    if (mediaContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        mediaContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - mediaContainer.offsetLeft;
            scrollLeft = mediaContainer.scrollLeft;
            mediaContainer.style.cursor = 'grabbing';
            mediaContainer.style.userSelect = 'none';
        });

        mediaContainer.addEventListener('mouseleave', () => {
            isDown = false;
            mediaContainer.style.cursor = 'grab';
            mediaContainer.style.userSelect = 'auto';
        });

        mediaContainer.addEventListener('mouseup', () => {
            isDown = false;
            mediaContainer.style.cursor = 'grab';
            mediaContainer.style.userSelect = 'auto';
        });

        mediaContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - mediaContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            mediaContainer.scrollLeft = scrollLeft - walk;
        });

        mediaContainer.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        mediaContainer.style.cursor = 'grab';
    }
    
    const caseCards = document.querySelectorAll('.case-item-link');
    caseCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.case-img');
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.case-img');
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });
    
    const mediaCards = document.querySelectorAll('.media-item-link');
    mediaCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.media-img');
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.media-img');
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });
    
});