// Fetch the list of images from images.json
const slideshowContainer = document.getElementById('slideshow-container');

async function loadSlides() {
    try {
        // Adjust the path based on your GitHub Pages setup (e.g., '/salty-paws/docs/images.json' if using 'docs/')
        const response = await fetch('./images.json'); // Relative path assumes images.json is in the same directory
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        const images = await response.json();
        
        if (images.length === 0) {
            console.warn('No images found in images.json');
            return;
        }

        images.forEach((image, index) => {
            const slideDiv = document.createElement('div');
            slideDiv.className = 'slide fade';
            if (index !== 0) slideDiv.style.display = 'none'; // Show only the first slide initially
            const img = document.createElement('img');
            img.src = `./images/${image}`; // Relative path to images folder
            img.alt = `Image ${index + 1}`;
            img.onerror = () => console.error(`Failed to load image: ${img.src}`);
            slideDiv.appendChild(img);
            slideshowContainer.insertBefore(slideDiv, slideshowContainer.querySelector('.prev'));
        });

        // Start slideshow after images are loaded
        showSlides(slideIndex);
    } catch (error) {
        console.error('Error loading images:', error);
    }
}

// Slideshow functionality
let slideIndex = 1;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.getElementsByClassName('slide');
    if (slides.length === 0) {
        console.warn('No slides available to display');
        return;
    }
    if (n > slides.length) { slideIndex = 1; }
    if (n < 1) { slideIndex = slides.length; }
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slides[slideIndex - 1].style.display = 'block';
}

// Load slides when the page loads
loadSlides();

// Optional: Auto slideshow (uncomment to enable)
// setInterval(() => plusSlides(1), 3000);

// Back-to-top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
