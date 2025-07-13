import React, { useState, useEffect } from 'react';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import '@splidejs/react-splide/css';
import './Gallery.css';

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    loadGalleryImages();
  }, []);

  const loadGalleryImages = async () => {
    try {
      // Use a smaller, curated selection of images to avoid performance issues
      const galleryImages = [
        '/images/gallery/PHOTO-2025-05-06-14-31-49.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-31-53.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-32-06.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-32-28.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-33-06.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-33-24.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-33-54.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-33-55.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-34-34.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-34-35.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-35-33.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-35-34.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-36-52.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-37-11.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-37-12.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-37-33.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-37-43.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-37-58.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-38-00.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-38-25.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-38-26.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-38-59.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-39-48.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-41-21.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-41-26.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-41-28.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-42-15.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-42-17.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-42-31.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-48-33.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-49-05.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-49-06.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-49-07.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-50-06.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-50-08.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-50-41.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-51-12.jpg',
        '/images/gallery/PHOTO-2025-05-06-14-51-13.jpg',
      ];

      console.log('Loading gallery images:', galleryImages.length);
      setImages(galleryImages);
      setLoading(false);
    } catch (error) {
      console.error('Error loading gallery images:', error);
      setLoading(false);
    }
  };

  const openModal = (image, index) => {
    setSelectedImage(image);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
    setSelectedImage(images[(currentIndex + 1) % images.length]);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
    setSelectedImage(images[(currentIndex - 1 + images.length) % images.length]);
  };

  const splideOptions = {
    type: 'loop',
    perPage: 3,
    perMove: 1,
    gap: '2rem',
    pagination: false,
    arrows: true,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    breakpoints: {
      768: {
        perPage: 2,
        gap: '1rem',
      },
      480: {
        perPage: 1,
        gap: '1rem',
      },
    },
  };

  const thumbnailOptions = {
    type: 'loop',
    perPage: 6,
    perMove: 1,
    gap: '1rem',
    pagination: false,
    arrows: false,
    isNavigation: true,
    breakpoints: {
      768: {
        perPage: 4,
      },
      480: {
        perPage: 3,
      },
    },
  };

  if (loading) {
    return (
      <div className="gallery-page">
        <div className="container">
          <div className="loading-container">
            <div className="loading-spinner"></div>
            <p>Loading gallery...</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="gallery-page">
      <div className="container">
        <motion.div
          className="gallery-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Photo Gallery</h1>
          <p>Take a look at some of the happy pets I've had the pleasure of caring for</p>
        </motion.div>

        <motion.div
          className="gallery-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {/* Main Carousel */}
          <div className="main-carousel-container">
            <Splide options={splideOptions} className="main-carousel">
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <div 
                    className="carousel-image-container"
                    onClick={() => openModal(image, index)}
                  >
                    <img 
                      src={image} 
                      alt={`Gallery ${index + 1}`}
                      onError={(e) => {
                        console.error('Failed to load image:', image);
                        e.target.style.display = 'none';
                      }}
                      onLoad={() => console.log('Successfully loaded:', image)}
                    />
                    <div className="image-overlay">
                      <span>Click to enlarge</span>
                    </div>
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>

          {/* Thumbnail Navigation */}
          <div className="thumbnail-container">
            <Splide options={thumbnailOptions} className="thumbnail-carousel">
              {images.map((image, index) => (
                <SplideSlide key={index}>
                  <div 
                    className="thumbnail-image"
                    onClick={() => openModal(image, index)}
                  >
                    <img src={image} alt={`Thumbnail ${index + 1}`} />
                  </div>
                </SplideSlide>
              ))}
            </Splide>
          </div>
        </motion.div>

        {/* Fullscreen Modal */}
        <AnimatePresence>
          {selectedImage && (
            <motion.div
              className="modal-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeModal}
            >
              <motion.div
                className="modal-content"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <button className="modal-close" onClick={closeModal}>
                  <X size={24} />
                </button>
                
                <button className="modal-nav modal-prev" onClick={prevImage}>
                  <ChevronLeft size={24} />
                </button>
                
                <img src={selectedImage} alt="Fullscreen view" className="modal-image" />
                
                <button className="modal-nav modal-next" onClick={nextImage}>
                  <ChevronRight size={24} />
                </button>
                
                <div className="modal-counter">
                  {currentIndex + 1} / {images.length}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default Gallery; 