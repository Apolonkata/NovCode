// script.js - All JavaScript for AntiqueBG website

// Slideshow functionality
let slideIndex = 1;
showSlides(slideIndex);

// Auto slideshow every 5 seconds
let slideInterval = setInterval(() => changeSlide(1), 5000);

function changeSlide(n) {
    showSlides(slideIndex += n);
    // Reset timer when manually changing slides
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
    // Reset timer when manually changing slides
    clearInterval(slideInterval);
    slideInterval = setInterval(() => changeSlide(1), 5000);
}

function showSlides(n) {
    let slides = document.getElementsByClassName("slideshow-slide");
    let dots = document.getElementsByClassName("dot");
    
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    
    // Hide all slides
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    
    // Remove active class from all dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    
    // Show current slide and activate corresponding dot
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// Simple search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchButton = document.querySelector('.search-bar button');
    const searchInput = document.querySelector('.search-bar input');
    
    if (searchButton) {
        searchButton.addEventListener('click', function() {
            const searchTerm = searchInput.value;
            if (searchTerm.trim() !== '') {
                alert('Търсене за: ' + searchTerm + '\nТова е демонстрация. В реален сайт това ще предизвика търсене в базата данни.');
            }
        });
    }
    
    // Enter key search
    if (searchInput) {
        searchInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                searchButton.click();
            }
        });
    }
    
    // Category card click
    document.querySelectorAll('.category-card').forEach(card => {
        card.addEventListener('click', function() {
            const categoryName = this.querySelector('.category-name').textContent;
            alert('Избрахте категория: ' + categoryName + '\nТова би ви пренесло на страница с всички книги от тази категория.');
        });
    });
    
    // Icon menu item click
    document.querySelectorAll('.icon-menu-item').forEach(item => {
        item.addEventListener('click', function() {
            const categoryName = this.querySelector('.icon-menu-name').textContent;
            alert('Избра
