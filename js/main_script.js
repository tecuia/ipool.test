document.addEventListener('DOMContentLoaded', function() {
    
    const burgerMenu = document.querySelector('.burger-menu');
    const heroButton = document.querySelector('.hero-button');
    
    const prevButton = document.querySelector('.prev-button');
    const nextButton = document.querySelector('.next-button');
    const carouselTrack = document.querySelector('.carousel-track');
    const carouselImage = document.querySelector('.carousel-image');
    
    const images = [
        'imgs/checker.png',
        'imgs/checker.png',
        'imgs/checker.png'
    ];
    
    let currentImageIndex = 0;
    
    
    gsap.set('.logo', { x: -20, opacity: 0 });
    gsap.set('.burger-menu', { x: 20, opacity: 0 });
    gsap.set('.hero-title', { y: 30, opacity: 0 });
    gsap.set('.hero-button', { y: 30, opacity: 0 });
    gsap.set('.description-text', { y: 30, opacity: 0 });
    gsap.set('.projects-card', { y: 30, opacity: 0 });
    
    gsap.to('.logo', { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.3 });
    gsap.to('.burger-menu', { x: 0, opacity: 1, duration: 0.6, ease: "power3.out", delay: 0.3 });
    gsap.to('.hero-title', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.5 });
    gsap.to('.hero-button', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.6 });
    gsap.to('.description-text', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.7 });
    gsap.to('.projects-card', { y: 0, opacity: 1, duration: 0.8, ease: "power3.out", delay: 0.8 });
    
    
    function updateImage(index) {
        if (!carouselImage) return;
        
        console.log('Переключение на изображение:', index);
        
        gsap.to(carouselImage, {
            opacity: 0,
            duration: 0.2,
            onComplete: () => {
                carouselImage.src = images[index];
                gsap.to(carouselImage, {
                    opacity: 1,
                    duration: 0.3
                });
            }
        });
    }
    
    if (prevButton) {
        prevButton.addEventListener('click', function() {
            console.log('Нажата кнопка "назад"');
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
            updateImage(currentImageIndex);
        });
    }
    
    if (nextButton) {
        nextButton.addEventListener('click', function() {
            console.log('Нажата кнопка "вперед"');
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
            
            currentImageIndex = (currentImageIndex + 1) % images.length;
            updateImage(currentImageIndex);
        });
    }
    
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            console.log('Бургер-меню нажато');
            
            gsap.timeline()
                .to(this, { scale: 0.9, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
        });
        
        burgerMenu.addEventListener('mouseenter', function() {
            gsap.to(this, { scale: 1.1, duration: 0.2, ease: "power2.out" });
        });
        
        burgerMenu.addEventListener('mouseleave', function() {
            gsap.to(this, { scale: 1, duration: 0.2, ease: "power2.inOut" });
        });
    }
    
    if (heroButton) {
        heroButton.addEventListener('click', function() {
            console.log('Кнопка "Кейсы" нажата');
            
            gsap.timeline()
                .to(this, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
                .to(this, { scale: 1, duration: 0.3, ease: "elastic.out(1, 0.2)" });
        });
    }
    
    function initDragScroll(selector) {
        const container = document.querySelector(selector);
        if (!container) {
            console.log(`Контейнер ${selector} не найден`);
            return;
        }
        
        console.log(`Инициализация drag-to-scroll для ${selector}`);
        
        let isDown = false;
        let startX;
        let scrollLeft;

        container.addEventListener('mousedown', (e) => {
            isDown = true;
            startX = e.pageX - container.offsetLeft;
            scrollLeft = container.scrollLeft;
            container.style.cursor = 'grabbing';
            container.style.userSelect = 'none'; 
        });

        container.addEventListener('mouseleave', () => {
            isDown = false;
            container.style.cursor = 'grab';
            container.style.userSelect = 'auto';
        });

        container.addEventListener('mouseup', () => {
            isDown = false;
            container.style.cursor = 'grab';
            container.style.userSelect = 'auto';
        });

        container.addEventListener('mousemove', (e) => {
            if (!isDown) return;
            e.preventDefault();
            const x = e.pageX - container.offsetLeft;
            const walk = (x - startX) * 1.5; 
            container.scrollLeft = scrollLeft - walk;
        });

        container.addEventListener('dragstart', (e) => {
            e.preventDefault();
        });
        
        container.style.cursor = 'grab';
    }

    setTimeout(() => {
        initDragScroll('.stories-container');
        initDragScroll('.media-container');
    }, 500); 
});

const modal = document.getElementById('storiesModal');
const modalImage = document.getElementById('currentStoryImage');
const modalPrev = document.querySelector('.modal-prev-button');
const modalNext = document.querySelector('.modal-next-button');
const storyLinks = document.querySelectorAll('.story-item-link');
const modalOverlay = document.querySelector('.modal-overlay');
const progressContainer = document.querySelector('.stories-progress-container');


const storiesData = [
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' },
    { image: 'imgs/checker.png' }
];

let currentStoryIndex = 0;
let progressInterval = null;
let currentProgress = 0;
const STORY_DURATION = 10; 
const PROGRESS_UPDATE_INTERVAL = 100; 


function createProgressBars() {
    if (!progressContainer) return;
    
    progressContainer.innerHTML = '';
    
    storiesData.forEach((_, index) => {
        const progressItem = document.createElement('div');
        progressItem.className = 'story-progress-item';
        if (index < currentStoryIndex) {
            progressItem.classList.add('completed');
        } else if (index === currentStoryIndex) {
            progressItem.classList.add('active');
        }
        
        const progressBar = document.createElement('div');
        progressBar.className = 'story-progress-bar';
        progressBar.id = `progress-bar-${index}`;
        
        progressItem.appendChild(progressBar);
        progressContainer.appendChild(progressItem);
    });
}

function updateProgressBars() {
    const progressItems = document.querySelectorAll('.story-progress-item');
    
    progressItems.forEach((item, index) => {
        item.classList.remove('active', 'completed');
        
        if (index < currentStoryIndex) {
            item.classList.add('completed');
        } else if (index === currentStoryIndex) {
            item.classList.add('active');
            
            const progressBar = document.getElementById(`progress-bar-${index}`);
            if (progressBar) {
                progressBar.style.width = `${currentProgress}%`;
            }
        } else {
            const progressBar = document.getElementById(`progress-bar-${index}`);
            if (progressBar) {
                progressBar.style.width = '0%';
            }
        }
    });
}

function startProgressTimer() {
    if (progressInterval) {
        clearInterval(progressInterval);
    }
    
    currentProgress = 0;
    
    progressInterval = setInterval(() => {
        currentProgress += (100 / (STORY_DURATION * 10)); 
        
        if (currentProgress >= 100) {
            currentProgress = 100;
            updateProgressBars();

            if (currentStoryIndex < storiesData.length - 1) {
                nextStory();
            } else {
                closeStoryModal();
            }
        } else {
            updateProgressBars();
        }
    }, PROGRESS_UPDATE_INTERVAL);
}

function openStoryModal(index) {
    currentStoryIndex = index;
    currentProgress = 0;
    createProgressBars();
    updateStoryImage();
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
    startProgressTimer();
}

function closeStoryModal() {
    if (progressInterval) {
        clearInterval(progressInterval);
        progressInterval = null;
    }
    modal.classList.remove('active');
    document.body.style.overflow = '';
}

function updateStoryImage() {
    if (!modalImage) return;
    
    const story = storiesData[currentStoryIndex];
    
    gsap.to(modalImage, {
        opacity: 0,
        duration: 0.2,
        onComplete: () => {
            modalImage.src = story.image;
            gsap.to(modalImage, {
                opacity: 1,
                duration: 0.3
            });
        }
    });
}

function nextStory() {
    if (currentStoryIndex < storiesData.length - 1) {
        currentStoryIndex++;
        currentProgress = 0;
        updateStoryImage();
        updateProgressBars();
        
        if (progressInterval) {
            clearInterval(progressInterval);
        }
        startProgressTimer();
        
        gsap.timeline()
            .to(modalNext, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
            .to(modalNext, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
    }
}

function prevStory() {
    if (currentStoryIndex > 0) {
        currentStoryIndex--;
        currentProgress = 0;
        updateStoryImage();
        updateProgressBars();
        
        if (progressInterval) {
            clearInterval(progressInterval);
        }
        startProgressTimer();
        
        gsap.timeline()
            .to(modalPrev, { scale: 0.95, duration: 0.1, ease: "sine.inOut" })
            .to(modalPrev, { scale: 1, duration: 0.2, ease: "back.out(1.2)" });
    }
}

storyLinks.forEach((link, index) => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        openStoryModal(index);
    });
});

if (modalOverlay) {
    modalOverlay.addEventListener('click', closeStoryModal);
}

if (modalNext) {
    modalNext.addEventListener('click', (e) => {
        e.stopPropagation();
        nextStory();
    });
}

if (modalPrev) {
    modalPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        prevStory();
    });
}

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeStoryModal();
    }
    
    if (modal.classList.contains('active')) {
        if (e.key === 'ArrowRight') {
            e.preventDefault();
            nextStory();
        } else if (e.key === 'ArrowLeft') {
            e.preventDefault();
            prevStory();
        }
    }
});

const modalContent = document.querySelector('.modal-content');
if (modalContent) {
    modalContent.addEventListener('click', (e) => {
        e.stopPropagation();
    });
}

if (modalImage) {
    modalImage.addEventListener('mouseenter', () => {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    });
    
    modalImage.addEventListener('mouseleave', () => {
        if (!progressInterval && modal.classList.contains('active')) {
            startProgressTimer();
        }
    });
}

if (modalPrev) {
    modalPrev.addEventListener('mouseenter', () => {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    });
    
    modalPrev.addEventListener('mouseleave', () => {
        if (!progressInterval && modal.classList.contains('active')) {
            startProgressTimer();
        }
    });
}

if (modalNext) {
    modalNext.addEventListener('mouseenter', () => {
        if (progressInterval) {
            clearInterval(progressInterval);
            progressInterval = null;
        }
    });
    
    modalNext.addEventListener('mouseleave', () => {
        if (!progressInterval && modal.classList.contains('active')) {
            startProgressTimer();
        }
    });
}