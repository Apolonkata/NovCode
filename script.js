// ===================================
// AntiuqBG - JavaScript Functionality
// ===================================

// Wait for DOM to load
document.addEventListener('DOMContentLoaded', function() {
    
    // ==================
    // Hero Carousel Logic
    // ==================
    
    const slides = document.querySelectorAll('.hero-slide');
    const indicators = document.querySelectorAll('.indicator');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    
    let currentSlide = 0;
    let slideInterval;
    
    // Show specific slide
    function showSlide(index) {
        // Remove active class from all slides and indicators
        slides.forEach(slide => slide.classList.remove('active'));
        indicators.forEach(indicator => indicator.classList.remove('active'));
        
        // Handle wrap-around
        if (index >= slides.length) {
            currentSlide = 0;
        } else if (index < 0) {
            currentSlide = slides.length - 1;
        } else {
            currentSlide = index;
        }
        
        // Add active class to current slide and indicator
        slides[currentSlide].classList.add('active');
        indicators[currentSlide].classList.add('active');
    }
    
    // Next slide
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    // Previous slide
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    // Auto-play carousel
    function startCarousel() {
        slideInterval = setInterval(nextSlide, 5000); // Change slide every 5 seconds
    }
    
    // Stop auto-play
    function stopCarousel() {
        clearInterval(slideInterval);
    }
    
    // Event listeners for carousel controls
    if (nextBtn && prevBtn) {
        nextBtn.addEventListener('click', () => {
            stopCarousel();
            nextSlide();
            startCarousel();
        });
        
        prevBtn.addEventListener('click', () => {
            stopCarousel();
            prevSlide();
            startCarousel();
        });
    }
    
    // Event listeners for indicators
    indicators.forEach((indicator, index) => {
        indicator.addEventListener('click', () => {
            stopCarousel();
            showSlide(index);
            startCarousel();
        });
    });
    
    // Start carousel on page load
    startCarousel();
    
    // Pause carousel on hover
    const heroCarousel = document.querySelector('.hero-carousel');
    if (heroCarousel) {
        heroCarousel.addEventListener('mouseenter', stopCarousel);
        heroCarousel.addEventListener('mouseleave', startCarousel);
    }
    
    
    // ==================
    // Search Functionality
    // ==================
    
    const searchInput = document.querySelector('.search-input');
    const searchBtn = document.querySelector('.search-btn');
    
    function performSearch() {
        const searchTerm = searchInput.value.trim();
        if (searchTerm) {
            console.log('Searching for:', searchTerm);
            // TODO: Implement actual search functionality
            alert(`Търсене на: "${searchTerm}"\n\nФункционалността за търсене ще бъде добавена скоро!`);
        }
    }
    
    if (searchBtn) {
        searchBtn.addEventListener('click', performSearch);
    }
    
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                performSearch();
            }
        });
    }
    
    
    // ==================
    // Header Actions
    // ==================
    
    const languageBtn = document.getElementById('languageBtn');
    const profileBtn = document.getElementById('profileBtn');
    const addItemBtn = document.getElementById('addItemBtn');
    
    if (languageBtn) {
        languageBtn.addEventListener('click', function() {
            const currentLang = this.querySelector('span').textContent;
            if (currentLang === 'BG') {
                this.querySelector('span').textContent = 'EN';
                console.log('Language changed to English');
                // TODO: Implement language switching
                alert('Езиковата функционалност ще бъде добавена скоро!');
            } else {
                this.querySelector('span').textContent = 'BG';
                console.log('Language changed to Bulgarian');
            }
        });
    }
    
    if (profileBtn) {
        profileBtn.addEventListener('click', function() {
            console.log('Profile button clicked');
            // TODO: Implement profile functionality
            alert('Моля, влезте в профила си или се регистрирайте!');
        });
    }
    
    if (addItemBtn) {
        addItemBtn.addEventListener('click', function() {
            console.log('Add item button clicked');
            // TODO: Implement add item functionality
            alert('Добавяне на нов артикул!\n\nФункционалността ще бъде добавена скоро.');
        });
    }
    
    
    // ==================
    // Category Cards
    // ==================
    
    const categoryCards = document.querySelectorAll('.category-card');
    
    categoryCards.forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('h3').textContent;
            console.log('Category clicked:', categoryName);
            // TODO: Navigate to category page
            alert(`Преглед на категория: ${categoryName}\n\nНавигацията ще бъде добавена скоро!`);
        });
    });
    
    
    // ==================
    // Item Cards - View Details
    // ==================
    
    const viewBtns = document.querySelectorAll('.btn-view');
    
    viewBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent card click event
            const itemCard = this.closest('.item-card');
            const itemTitle = itemCard.querySelector('.item-title').textContent;
            const itemPrice = itemCard.querySelector('.item-price').textContent;
            
            console.log('View details:', itemTitle);
            // TODO: Navigate to item details page
            alert(`Преглед на детайли\n\nАртикул: ${itemTitle}\nЦена: ${itemPrice}\n\nСтраницата с детайли ще бъде добавена скоро!`);
        });
    });
    
    
    // ==================
    // View All Link
    // ==================
    
    const viewAllLink = document.querySelector('.view-all-link');
    
    if (viewAllLink) {
        viewAllLink.addEventListener('click', function(e) {
            e.preventDefault();
            console.log('View all items clicked');
            // TODO: Navigate to all items page
            alert('Преглед на всички артикули!\n\nФункционалността ще бъде добавена скоро.');
        });
    }
    
    
    // ==================
    // Smooth Scroll for Anchor Links
    // ==================
    
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
    
    
    // ==================
    // Item Card Hover Effects Enhancement
    // ==================
    
    const itemCards = document.querySelectorAll('.item-card');
    
    itemCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.borderColor = 'var(--primary-blue)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.borderColor = 'transparent';
        });
    });
    
    
    // ==================
    // Console Welcome Message
    // ==================
    
    console.log('%cWelcome to AntiuqBG! 📚', 'color: #2563eb; font-size: 20px; font-weight: bold;');
    console.log('%cДобре дошли в AntiuqBG - Вашият антикварен портал!', 'color: #1e40af; font-size: 14px;');
    console.log('Version: 1.0.0');
    
    
    // ==================
    // Loading Animation Complete
    // ==================
    
    document.body.classList.add('loaded');
    console.log('Page fully loaded and interactive!');
    
});


// ==================
// Utility Functions
// ==================

// Format price with Bulgarian Lev currency
function formatPrice(price) {
    return `${price} лв`;
}

// Truncate text to specific length
function truncateText(text, maxLength) {
    if (text.length > maxLength) {
        return text.substring(0, maxLength) + '...';
    }
    return text;
}

// Debounce function for search optimization
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Example: Debounced search
const searchInput = document.querySelector('.search-input');
if (searchInput) {
    const debouncedSearch = debounce(function(e) {
        console.log('Live search:', e.target.value);
        // TODO: Implement live search suggestions
    }, 300);
    
    searchInput.addEventListener('input', debouncedSearch);
}
