import React from 'react';
import { motion } from 'framer-motion';
import { Home, Camera, MapPin, Heart, Clock, Star } from 'lucide-react';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <Home size={32} />,
      title: 'Pet Boarding',
      description: 'Comfortable home-based boarding where your pets can feel relaxed and secure.',
      features: ['No crates unless requested', 'Free roaming in the house', 'Home environment', '24/7 care']
    },
    {
      icon: <Camera size={32} />,
      title: 'Pet Photography',
      description: 'Professional beachside photography sessions to capture beautiful memories.',
      features: ['Beachside sessions', 'Professional quality', 'Digital delivery', 'Additional fee applies']
    },
    {
      icon: <MapPin size={32} />,
      title: 'Outdoor Adventures',
      description: 'Safe, supervised outdoor activities and exercise for active pets.',
      features: ['Off-leash adventures', 'Secure outdoor spaces', 'Exercise and play', 'With owner approval']
    },
    {
      icon: <Heart size={32} />,
      title: 'Specialized Care',
      description: 'Personalized care for shy, sensitive, or special needs pets.',
      features: ['Individual attention', 'Behavioral support', 'Medication administration', 'Special diets']
    }
  ];

  const included = [
    'Daily photos and videos',
    'Bathing and brushing (if needed)',
    'Regular exercise and playtime',
    'Comfortable sleeping arrangements',
    '24/7 supervision and care',
    'Emergency contact and updates'
  ];

  return (
    <div className="services-page">
      <div className="container">
        {/* Header */}
        <motion.div
          className="services-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Our Services</h1>
          <p>Comprehensive pet care services tailored to your furry friend's needs</p>
        </motion.div>

        {/* Services Grid */}
        <motion.div
          className="services-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="service-icon">
                {service.icon}
              </div>
              <h3>{service.title}</h3>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* What's Included */}
        <motion.section
          className="included-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="included-card">
            <h2>What's Always Included</h2>
            <div className="included-grid">
              {included.map((item, index) => (
                <motion.div
                  key={index}
                  className="included-item"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.8 + index * 0.1 }}
                >
                  <Star size={20} className="check-icon" />
                  <span>{item}</span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.section>

        {/* Pricing Info */}
        <motion.section
          className="pricing-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="pricing-card">
            <h2>Pricing & Availability</h2>
            <p>
              Pricing varies based on the type of care needed, duration of stay, and any special requirements. 
              I offer competitive rates for personalized, home-based pet care.
            </p>
            <div className="pricing-features">
              <div className="pricing-feature">
                <Clock size={24} />
                <div>
                  <h4>Flexible Scheduling</h4>
                  <p>Available for both short-term and long-term care arrangements</p>
                </div>
              </div>
              <div className="pricing-feature">
                <Heart size={24} />
                <div>
                  <h4>Meet & Greet</h4>
                  <p>Free initial consultation to discuss your pet's needs</p>
                </div>
              </div>
            </div>
            <div className="cta-section">
              <p>Ready to discuss your pet's care needs?</p>
              <button className="btn">Contact for Pricing</button>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default Services; 