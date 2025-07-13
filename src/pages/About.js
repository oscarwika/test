import React from 'react';
import { motion } from 'framer-motion';
import { Heart, Camera, MapPin, Star } from 'lucide-react';
import './About.css';

const About = () => {
  const highlights = [
    {
      icon: <Heart size={24} />,
      text: "Over 10 years of animal care experience"
    },
    {
      icon: <Camera size={24} />,
      text: "Professional pet photography services"
    },
    {
      icon: <MapPin size={24} />,
      text: "Safe outdoor adventures and exercise"
    },
    {
      icon: <Star size={24} />,
      text: "Daily photos and updates included"
    }
  ];

  return (
    <div className="about-page">
      <div className="container">
        {/* Hero Section */}
        <motion.section 
          className="about-hero"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="about-hero-content">
            <div className="about-image">
              <img src="/images/logos/naari_me.jpg" alt="Naari" />
            </div>
            <div className="about-intro">
              <h1>About Naari</h1>
              <p className="intro-text">
                Dedicated pet care professional with a passion for making every pet feel at home.
              </p>
            </div>
          </div>
        </motion.section>

        {/* Main Content */}
        <motion.section 
          className="about-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="content-card">
            <h2>My Story</h2>
            <p>
              Hola! My name is Naari! I've been involved with animal care since I was 15. 
              My love for dogs and cats began when I moved back to the Caribbean after living 
              a few years in Laguna Beach, California. Returning to Puerto Rico, I was 
              heartbroken to see so many stray animals, and immediately felt called to help. 
              That passion led me to volunteer work, and soon after, I found myself helping 
              families integrate shy or sensitive adopted pets into their homes.
            </p>
            
            <p>
              In the last few years I have also worked with active dogs that help keep me 
              in shape and inspire me to spend more time outdoors! Being away from their 
              environment and/or family doesn't have to be a stressful experience for your pup. 
              I aim to create a positive, enriching experience, where they're free to roam 
              the house (no crates unless requested) and enjoy plenty of time in nature.
            </p>
            
            <p>
              With your approval, I can even offer safe, supervised off-leash adventures 
              in secure outdoor spaces.
            </p>
            
            <p>
              As a bonus, I'm also a photographer! I offer fun beachside dog photography 
              session for an additional fee — perfect for capturing special memories of their stay.
            </p>
            
            <p>
              Daily photos and videos are always included, along with bathing or brushing 
              if needed during their stay. I look forward to caring for your furry family 
              member like one of my own!
            </p>
          </div>
        </motion.section>

        {/* Highlights Section */}
        <motion.section 
          className="highlights-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="highlights-grid">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="highlight-item"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
              >
                <div className="highlight-icon">
                  {highlight.icon}
                </div>
                <p>{highlight.text}</p>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Philosophy Section */}
        <motion.section 
          className="philosophy-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="content-card">
            <h2>My Philosophy</h2>
            <div className="philosophy-grid">
              <div className="philosophy-item">
                <h3>Personalized Care</h3>
                <p>
                  Every pet is unique, and I believe in providing care that's tailored to 
                  their individual needs, personality, and preferences.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Home Environment</h3>
                <p>
                  Your pets stay in a comfortable home environment where they can feel 
                  relaxed and secure, just like they would in their own home.
                </p>
              </div>
              <div className="philosophy-item">
                <h3>Active Lifestyle</h3>
                <p>
                  I encourage an active lifestyle with plenty of outdoor time, exercise, 
                  and mental stimulation to keep your pets happy and healthy.
                </p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  );
};

export default About; 