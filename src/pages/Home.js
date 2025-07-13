import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Camera, MapPin, Star } from 'lucide-react';
import { getImagePath } from '../utils/imageUtils';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: <Heart size={32} />,
      title: 'Loving Care',
      description: 'Your pets are treated like family with personalized attention and care.'
    },
    {
      icon: <Camera size={32} />,
      title: 'Photo Sessions',
      description: 'Professional beachside photography sessions to capture special memories.'
    },
    {
      icon: <MapPin size={32} />,
      title: 'Outdoor Adventures',
      description: 'Safe, supervised off-leash adventures in secure outdoor spaces.'
    },
    {
      icon: <Star size={32} />,
      title: 'Daily Updates',
      description: 'Regular photos and videos to keep you connected with your furry friend.'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <motion.div 
            className="hero-content"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="hero-title">
              Professional Pet Care
              <span className="highlight"> with Love</span>
            </h1>
            <p className="hero-subtitle">
              Experience the difference of personalized pet care in a home environment. 
              Your pets deserve the best, and that's exactly what we provide.
            </p>
            <div className="hero-buttons">
              <Link to="/about" className="btn">
                Learn More
              </Link>
              <Link to="/contact" className="btn btn-secondary">
                Get Started
              </Link>
            </div>
          </motion.div>
        </div>
        <div className="hero-background"></div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="container">
          <motion.div 
            className="section-header"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Why Choose Salty Paws?</h2>
            <p>We provide exceptional care that goes beyond the basics</p>
          </motion.div>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="feature-icon">
                  {feature.icon}
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="about-preview">
        <div className="container">
          <div className="about-preview-content">
            <motion.div 
              className="about-text"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2>Meet Naari</h2>
              <p>
                With over a decade of experience in animal care, I've dedicated my life to 
                helping pets feel comfortable and loved when their families are away. 
                From shy rescue animals to energetic adventure dogs, I provide personalized 
                care that meets each pet's unique needs.
              </p>
              <Link to="/about" className="btn">
                Read My Story
              </Link>
            </motion.div>
            <motion.div 
              className="about-image"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
                              <img src={getImagePath("images/logos/naari_me.jpg")} alt="Naari" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2>Ready to Give Your Pet the Best Care?</h2>
            <p>Contact me today to discuss your pet's needs and schedule a meet & greet.</p>
            <Link to="/contact" className="btn">
              Contact Me
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 