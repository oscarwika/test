import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Car, Clock, Star } from 'lucide-react';
import './Location.css';

const Location = () => {
  const serviceAreas = [
    'San Juan',
    'Bayamón',
    'Caguas',
    'Carolina',
    'Ponce',
    'Cayey',
    'Arecibo',
    'Mayagüez'
  ];

  const locationFeatures = [
    {
      icon: <MapPin size={24} />,
      title: 'Central Location',
      description: 'Conveniently located in the heart of Puerto Rico with easy access to major areas.'
    },
    {
      icon: <Car size={24} />,
      title: 'Pickup Available',
      description: 'I can arrange pickup and drop-off services for an additional fee within my service area.'
    },
    {
      icon: <Clock size={24} />,
      title: 'Flexible Hours',
      description: 'Available for drop-off and pickup at times that work best for your schedule.'
    },
    {
      icon: <Star size={24} />,
      title: 'Home Environment',
      description: 'Your pets stay in a comfortable, secure home environment, not a kennel.'
    }
  ];

  return (
    <div className="location-page">
      <div className="container">
        <motion.div
          className="location-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Service Area</h1>
          <p>Providing exceptional pet care throughout Puerto Rico</p>
        </motion.div>

        <div className="location-content">
          {/* Service Areas */}
          <motion.div
            className="service-areas-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="areas-card">
              <h2>Areas I Serve</h2>
              <p>
                I provide pet care services throughout the Puerto Rico area. 
                If you're outside these areas, please contact me to discuss availability.
              </p>
              
              <div className="areas-grid">
                {serviceAreas.map((area, index) => (
                  <motion.div
                    key={index}
                    className="area-item"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                  >
                    <MapPin size={20} />
                    <span>{area}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Location Features */}
          <motion.div
            className="features-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="features-grid">
              {locationFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  className="feature-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="feature-icon">
                    {feature.icon}
                  </div>
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Map Placeholder */}
          <motion.div
            className="map-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="map-card">
              <h2>Location Overview</h2>
              <div className="map-placeholder">
                <MapPin size={48} />
                <p>Puerto Rico Pet Care Service Area</p>
                <span>Interactive map coming soon</span>
              </div>
              <p className="map-note">
                I'm based in the central Puerto Rico area and provide services throughout the island. 
                Contact me to confirm availability for your specific location.
              </p>
            </div>
          </motion.div>

          {/* Contact CTA */}
          <motion.div
            className="contact-cta"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="cta-card">
              <h2>Not Sure About Your Area?</h2>
              <p>
                Don't see your location listed? I'm always expanding my service areas and would love 
                to discuss how I can help care for your pet.
              </p>
              <button className="btn">Contact Me</button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Location; 