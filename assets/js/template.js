// Function to load the common elements
function loadCommonElements() {
    // Create header and navigation
    const header = `
        <header class="header">
            <div class="brand">
                <h1>Salty Paws</h1>
                <div class="logo"></div>
            </div>
            <nav class="nav-menu">
                <a href="index.html">Home</a>
                <a href="about.html">About</a>
                <a href="gallery.html">Gallery</a>
                <a href="services.html">Services</a>
                <a href="reviews.html">Reviews</a>
                <a href="faqs.html">FAQs</a>
                <a href="contact.html">Contact</a>
                <a href="location.html">Location</a>
            </nav>
        </header>
    `;

    // Insert the header
    const container = document.querySelector('.container');
    if (container) {
        container.insertAdjacentHTML('afterbegin', header);
    }

    // Add the console log script
    const script = document.createElement('script');
    script.textContent = `
        document.addEventListener('DOMContentLoaded', () => {
            console.log('Salty Paws - ${document.title} page loaded');
        });
    `;
    document.body.appendChild(script);
}

// Run when the DOM is loaded
document.addEventListener('DOMContentLoaded', loadCommonElements); 