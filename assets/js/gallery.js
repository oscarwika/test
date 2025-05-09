// Gallery implementation using Splide.js
document.addEventListener('DOMContentLoaded', function() {
    // Replace these with your GitHub details
    const owner = 'oscarwika';
    const repo = 'test';
    const path = 'assets/images/gallery';

    // Add Splide CSS and JS dynamically
    const splideCSS = document.createElement('link');
    splideCSS.rel = 'stylesheet';
    splideCSS.href = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/css/splide.min.css';
    document.head.appendChild(splideCSS);

    const splideJS = document.createElement('script');
    splideJS.src = 'https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js';
    document.head.appendChild(splideJS);

    // Create gallery container
    const galleryContainer = document.createElement('div');
    galleryContainer.className = 'gallery-container';
    galleryContainer.innerHTML = `
        <div class="splide thumbnail-carousel">
            <div class="splide__track">
                <ul class="splide__list">
                    <!-- Thumbnails will be inserted here -->
                </ul>
            </div>
        </div>
        <div class="splide main-carousel">
            <div class="splide__track">
                <ul class="splide__list">
                    <!-- Main slides will be inserted here -->
                </ul>
            </div>
        </div>
    `;
    document.querySelector('main').appendChild(galleryContainer);

    // Add some basic styles
    const style = document.createElement('style');
    style.textContent = `
        .gallery-container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 20px;
        }
        .thumbnail-carousel {
            margin-bottom: 10px;
        }
        .main-carousel {
            margin-bottom: 20px;
        }
        .splide__slide img {
            width: 100%;
            height: auto;
            object-fit: cover;
        }
        .thumbnail-carousel .splide__slide {
            opacity: 0.6;
            cursor: pointer;
        }
        .thumbnail-carousel .splide__slide.is-active {
            opacity: 1;
        }
        .thumbnail-carousel .splide__slide img {
            width: 100%;
            height: 80px;
            object-fit: cover;
        }
        .loading-indicator {
            text-align: center;
            padding: 20px;
            color: #666;
        }
    `;
    document.head.appendChild(style);

    // Function to convert GitHub API URL to raw content URL
    function getRawContentUrl(apiUrl) {
        // Extract the path from the API URL
        const pathMatch = apiUrl.match(/\/contents\/(.+)$/);
        if (!pathMatch) {
            throw new Error('Invalid GitHub API URL format');
        }
        const filePath = pathMatch[1];
        return `https://raw.githubusercontent.com/${owner}/${repo}/main/${filePath}`;
    }

    // Function to ensure Splide is loaded
    function waitForSplide() {
        return new Promise((resolve) => {
            if (window.Splide) {
                resolve();
            } else {
                splideJS.onload = resolve;
            }
        });
    }

    let mainSplide = null;
    let thumbnailSplide = null;

    // Function to add a single image to the gallery
    function addImageToGallery(url) {
        const mainList = document.querySelector('.main-carousel .splide__list');
        const thumbnailList = document.querySelector('.thumbnail-carousel .splide__list');

        if (!mainList || !thumbnailList) {
            throw new Error('Gallery elements not found');
        }

        // Main slide
        const mainSlide = document.createElement('li');
        mainSlide.className = 'splide__slide';
        mainSlide.innerHTML = `<img src="${url}" alt="Gallery image">`;
        mainList.appendChild(mainSlide);

        // Thumbnail
        const thumbnailSlide = document.createElement('li');
        thumbnailSlide.className = 'splide__slide';
        thumbnailSlide.innerHTML = `<img src="${url}" alt="Thumbnail">`;
        thumbnailList.appendChild(thumbnailSlide);

        // Refresh Splide if it's already mounted
        if (mainSplide && thumbnailSplide) {
            mainSplide.refresh();
            thumbnailSplide.refresh();
        }
    }

    // Initialize gallery
    async function initializeGallery() {
        try {
            // Wait for Splide to load
            await waitForSplide();

            // Initialize empty carousels
            mainSplide = new Splide('.main-carousel', {
                type: 'fade',
                rewind: true,
                pagination: false,
                arrows: true,
            });

            thumbnailSplide = new Splide('.thumbnail-carousel', {
                fixedWidth: 100,
                gap: 10,
                rewind: true,
                pagination: false,
                isNavigation: true,
                breakpoints: {
                    600: {
                        fixedWidth: 60,
                        gap: 5,
                    },
                },
            });

            // Sync the two carousels
            mainSplide.sync(thumbnailSplide);
            mainSplide.mount();
            thumbnailSplide.mount();

            // Add loading indicator
            const loadingIndicator = document.createElement('div');
            loadingIndicator.className = 'loading-indicator';
            loadingIndicator.textContent = 'Loading images...';
            galleryContainer.appendChild(loadingIndicator);

            // Fetch images from GitHub
            const response = await fetch(`https://api.github.com/repos/${owner}/${repo}/contents/${path}`);
            if (!response.ok) {
                throw new Error(`GitHub API responded with status: ${response.status}`);
            }

            const data = await response.json();
            if (!Array.isArray(data)) {
                throw new Error('Invalid response from GitHub API');
            }

            const images = data.filter(file => file.type === 'file' && /\.(jpg|jpeg|png|gif)$/i.test(file.name));
            if (images.length === 0) {
                throw new Error('No images found in the specified directory');
            }

            // Convert to raw content URLs
            const imageUrls = images.map(file => getRawContentUrl(file.url));
            console.log('Found', imageUrls.length, 'images to load');

            // Load images progressively
            for (const url of imageUrls) {
                try {
                    await new Promise((resolve, reject) => {
                        const img = new Image();
                        img.onload = () => {
                            addImageToGallery(url);
                            resolve();
                        };
                        img.onerror = () => reject(new Error(`Failed to load image: ${url}`));
                        img.src = url;
                    });
                } catch (error) {
                    console.error('Error loading image:', error);
                }
            }

            // Remove loading indicator
            loadingIndicator.remove();
            console.log('All images loaded successfully');

        } catch (error) {
            console.error('Error loading gallery:', error);
            galleryContainer.innerHTML = `
                <div style="color: red; padding: 20px; text-align: center;">
                    <p>Failed to load gallery images. Error: ${error.message}</p>
                    <p>Please check:</p>
                    <ul style="text-align: left; display: inline-block;">
                        <li>The GitHub repository exists and is public</li>
                        <li>The path '${path}' exists in the repository</li>
                        <li>There are image files in the directory</li>
                    </ul>
                </div>
            `;
        }
    }

    // Start the initialization process
    initializeGallery();
}); 