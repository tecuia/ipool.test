document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const logo = document.querySelector('.logo');
    const backgroundImage = document.querySelector('.background-image');
    const caseOnImage = document.querySelector('.case-on-image');
    const siteLink = document.querySelector('.site-link');
    const darkSection = document.querySelector('.dark-section');
    const textBlock = document.querySelector('.text-block');
    const aboutProject = document.querySelector('.about-project');
    const videoImage = document.querySelector('.video-image');
    const ideaBlock = document.querySelector('.idea-block');
    const blueSection = document.querySelector('.blue-section');
    const mechanicsBlock = document.querySelector('.mechanics-block');
    const blueSection2 = document.querySelector('.blue-section-2');
    const whiteOverlay = document.querySelector('.white-overlay');
    
    // Новые элементы
    const audienceBlock = document.querySelector('.audience-block');
    const whiteZone = document.querySelector('.white-zone');
    const whiteZoneImages = document.querySelectorAll('.white-zone-image');
    const teamContainer = document.querySelector('.team-container');
    const bottomSiteLink = document.querySelector('.bottom-site-link');
    const nextCaseLink = document.querySelector('.next-case-link');
    const similarCasesContainer = document.getElementById('similarCasesContainer');
    const similarCaseLinks = document.querySelectorAll('.similar-case-item-link');
    const footerPolicy = document.querySelector('.footer-policy');
    const footerNavLinks = document.querySelectorAll('.footer-nav-link');
    
    // Элементы внутри белой секции
    const cjmTitle = document.querySelector('.cjm-title');
    const bannerRectangle = document.querySelector('.banner-rectangle');
    const snakeItems = document.querySelectorAll('.snake-item');
    const whitePhotos = document.querySelectorAll('.white-photo');
    const advantagesList = document.querySelector('.advantages-list');
    
    // Начальная анимация появления
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.background-image', { opacity: 0 });
    gsap.set('.case-on-image', { y: 30, opacity: 0 });
    gsap.set('.site-link-container', { y: 30, opacity: 0 });
    gsap.set('.dark-section', { y: 30, opacity: 0 });
    gsap.set('.text-block', { y: 30, opacity: 0 });
    gsap.set('.about-project', { y: 30, opacity: 0 });
    gsap.set('.video-image', { y: 30, opacity: 0 });
    gsap.set('.idea-block', { y: 30, opacity: 0 });
    gsap.set('.blue-section', { y: 30, opacity: 0 });
    gsap.set('.mechanics-block', { y: 30, opacity: 0 });
    gsap.set('.blue-section-2', { y: 30, opacity: 0 });
    gsap.set(audienceBlock, { y: 30, opacity: 0 });
    gsap.set(whiteZone, { y: 30, opacity: 0 });
    gsap.set(whiteZoneImages, { opacity: 0, scale: 0.95 });
    gsap.set('.team-section', { y: 30, opacity: 0 });
    gsap.set('.similar-cases-section', { y: 30, opacity: 0 });
    gsap.set('.footer', { y: 30, opacity: 0 });
    gsap.set('.next-case-section', { y: 30, opacity: 0 });
    
    // Скрываем белую плашку и элементы внутри
    gsap.set(whiteOverlay, { opacity: 0 });
    gsap.set(cjmTitle, { opacity: 0 });
    gsap.set(bannerRectangle, { opacity: 0 });
    gsap.set(advantagesList, { opacity: 0 });
    gsap.set(whitePhotos, { opacity: 0 });
    gsap.set(snakeItems, { opacity: 0 });
    
    // Анимация фонового изображения
    gsap.to('.background-image', { 
        opacity: 1, 
        duration: 0.8, 
        ease: "power2.out", 
        delay: 0.1 
    });
    
    // Анимация кейса на фото
    gsap.to('.case-on-image', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.3
    });
    
    // Анимация ссылки
    gsap.to('.site-link-container', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.4
    });
    
    // Анимация хеддера
    gsap.to('.logo', { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: 0.4 
    });
    
    gsap.to('.burger-menu', { 
        x: 0, 
        opacity: 1, 
        duration: 0.6, 
        ease: "power3.out", 
        delay: 0.4 
    });
    
    // Анимация черной секции
    gsap.to('.dark-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 0.5
    });
    
    // Анимация текстового блока
    gsap.to('.text-block', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.7
    });
    
    // Анимация блока "О проекте"
    gsap.to('.about-project', {
        y: 0,
        opacity: 1,
        duration: 0.6,
        ease: "power3.out",
        delay: 0.8
    });
    
    // Анимация видео
    gsap.to('.video-image', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 0.9
    });
    
    // Анимация блока "От идеи до реализации"
    gsap.to('.idea-block', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.0
    });
    
    // Анимация синей зоны
    gsap.to('.blue-section', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.1
    });
    
    // Анимация блока "Разработка и механика"
    gsap.to('.mechanics-block', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.2
    });
    
    // Анимация второй синей зоны
    gsap.to('.blue-section-2', {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 1.3,
        onComplete: function() {
            animateWhiteSection();
        }
    });
    
    // Анимация блока с аудиторией
    gsap.to(audienceBlock, {
        y: 0,
        opacity: 1,
        duration: 0.7,
        ease: "power3.out",
        delay: 2.0
    });
    
    // Анимация новой белой зоны
    gsap.to(whiteZone, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.3,
        onComplete: function() {
            gsap.to(whiteZoneImages, {
                opacity: 1,
                scale: 1,
                stagger: 0.15,
                duration: 0.5,
                ease: "back.out(1.2)"
            });
        }
    });
    
    // Анимация секции со ссылкой внутри черной зоны
    gsap.to('.next-case-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.6
    });
    
    // Анимация секции "Над проектом работали"
    gsap.to('.team-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 2.9
    });
    
    // Анимация для блока "Похожие кейсы"
    gsap.to('.similar-cases-section', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 3.2
    });
    
    // Анимация для футера
    gsap.to('.footer', {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power3.out",
        delay: 3.5
    });
    
    function animateWhiteSection() {
        const tl = gsap.timeline({
            defaults: {
                duration: 0.5,
                ease: "power2.out"
            }
        });
        
        tl.to(whiteOverlay, { opacity: 1, duration: 0.6 })
          .to(cjmTitle, { opacity: 1, duration: 0.4 }, "+=0.2")
          .to(bannerRectangle, { opacity: 1, duration: 0.4 }, "+=0.1")
          .to(whitePhotos, { opacity: 1, stagger: 0.15, duration: 0.4 }, "+=0.1")
          .to(advantagesList, { opacity: 1, duration: 0.4 }, "+=0.1")
          .to(snakeItems, { 
              opacity: 1, 
              stagger: 0.08, 
              duration: 0.3
          }, "+=0.1");
    }
    
    // Обработчик для ссылки на сайте
    if (siteLink) {
        siteLink.addEventListener('mouseenter', function() {
            gsap.to(this, { color: '#E3032E', duration: 0.2 });
        });
        
        siteLink.addEventListener('mouseleave', function() {
            gsap.to(this, { color: '#FFFFFF', duration: 0.2 });
        });
    }
    
    // Обработчик для бургер-меню
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
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
    
    // Обработчик для логотипа
    if (logo) {
        logo.addEventListener('click', function() {
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" })
                .to({}, { duration: 0.2 })
                .to({}, {
                    duration: 0.3,
                    onComplete: () => {
                        window.location.href = 'case_index.html';
                    }
                });
        });
        
        logo.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.05, duration: 0.2, ease: "power2.out" });
        });
        
        logo.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
        });
    }
    
    // Hover-эффекты для новых фото
    whiteZoneImages.forEach(img => {
        img.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.02, duration: 0.3, ease: "power2.out" });
        });
        
        img.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.3, ease: "power2.out" });
        });
    });
    
    // Скролл для секции "Над проектом работали"
    if (teamContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        teamContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - teamContainer.offsetLeft;
            scrollLeft = teamContainer.scrollLeft;
            teamContainer.style.cursor = 'grabbing';
            teamContainer.style.userSelect = 'none';
        });

        teamContainer.addEventListener('mouseleave', () => {
            isDown = false;
            teamContainer.style.cursor = 'grab';
            teamContainer.style.userSelect = 'auto';
        });

        teamContainer.addEventListener('mouseup', () => {
            isDown = false;
            teamContainer.style.cursor = 'grab';
            teamContainer.style.userSelect = 'auto';
        });

        teamContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - teamContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            teamContainer.scrollLeft = scrollLeft - walk;
        });

        teamContainer.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        teamContainer.style.cursor = 'grab';
    }
    
    // Скролл для секции "Похожие кейсы"
    if (similarCasesContainer) {
        let isDown = false;
        let startX;
        let scrollLeft;

        similarCasesContainer.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - similarCasesContainer.offsetLeft;
            scrollLeft = similarCasesContainer.scrollLeft;
            similarCasesContainer.style.cursor = 'grabbing';
            similarCasesContainer.style.userSelect = 'none';
        });

        similarCasesContainer.addEventListener('mouseleave', () => {
            isDown = false;
            similarCasesContainer.style.cursor = 'grab';
            similarCasesContainer.style.userSelect = 'auto';
        });

        similarCasesContainer.addEventListener('mouseup', () => {
            isDown = false;
            similarCasesContainer.style.cursor = 'grab';
            similarCasesContainer.style.userSelect = 'auto';
        });

        similarCasesContainer.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - similarCasesContainer.offsetLeft;
            const walk = (x - startX) * 1.5;
            similarCasesContainer.scrollLeft = scrollLeft - walk;
        });

        similarCasesContainer.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });

        similarCasesContainer.style.cursor = 'grab';
    }
    
    // Hover эффекты для карточек команды
    const teamCards = document.querySelectorAll('.team-item-link');
    teamCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.team-img');
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.team-img');
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });
    
    // Hover эффекты для карточек похожих кейсов
    similarCaseLinks.forEach(card => {
        card.addEventListener('mouseenter', function() {
            const img = this.querySelector('.similar-case-img');
            gsap.to(img, {
                scale: 1.08,
                duration: 0.4,
                ease: "power2.out"
            });
        });
        
        card.addEventListener('mouseleave', function() {
            const img = this.querySelector('.similar-case-img');
            gsap.to(img, {
                scale: 1,
                duration: 0.3,
                ease: "power2.inOut"
            });
        });
    });
    
    // Обработчик для "Следующий кейс"
    if (nextCaseLink) {
        nextCaseLink.addEventListener('click', function(e) {
            e.preventDefault();
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" })
                .to({}, { duration: 0.2 })
                .to({}, {
                    duration: 0.3,
                    onComplete: () => {
                        window.location.href = this.getAttribute('href');
                    }
                });
        });
        
        nextCaseLink.addEventListener('mouseenter', function() {
            gsap.to(this, { color: '#E3032E', duration: 0.2 });
        });
        
        nextCaseLink.addEventListener('mouseleave', function() {
            gsap.to(this, { color: '#F0F0F0', duration: 0.2 });
        });
    }
    
    // Обработчики для ссылок футера
    footerNavLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const href = this.getAttribute('href');
            
            if (href && href !== '#') {
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
    
    // Обработчик для политики конфиденциальности
    if (footerPolicy) {
        footerPolicy.addEventListener('click', function(e) {
            e.preventDefault();
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            alert('Политика конфиденциальности');
        });
    }
    
});