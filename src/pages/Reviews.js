import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';
import './Reviews.css';

const Reviews = () => {
  const reviews = [
    {
      name: "Sarah M.",
      rating: 5,
      text: "Naari took amazing care of our shy rescue dog. She was patient and understanding, and our pup came home happy and relaxed. The daily photos were such a comfort while we were away!",
      date: "2024"
    },
    {
      name: "Michael R.",
      rating: 5,
      text: "Our energetic border collie had the best time with Naari! She provided plenty of exercise and outdoor adventures. The photography session was an amazing bonus - we have beautiful memories.",
      date: "2024"
    },
    {
      name: "Jennifer L.",
      rating: 5,
      text: "I was so nervous leaving our senior cat for the first time, but Naari made everything perfect. She followed all our care instructions and sent regular updates. Highly recommend!",
      date: "2024"
    },
    {
      name: "David K.",
      rating: 5,
      text: "Naari's home environment was perfect for our anxious dog. No crates, lots of love, and plenty of outdoor time. She truly treats every pet like family.",
      date: "2024"
    },
    {
      name: "Lisa P.",
      rating: 5,
      text: "The beachside photo session was incredible! Our dog looked so happy and the photos are professional quality. Naari's attention to detail and care is outstanding.",
      date: "2024"
    },
    {
      name: "Robert T.",
      rating: 5,
      text: "We've used Naari multiple times and she's consistently excellent. Our pets are always excited to see her, which says everything about the quality of care she provides.",
      date: "2024"
    }
  ];

  const averageRating = reviews.reduce((acc, review) => acc + review.rating, 0) / reviews.length;

  return (
    <div className="reviews-page">
      <div className="container">
        <motion.div
          className="reviews-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Client Reviews</h1>
          <p>See what pet parents are saying about their experience</p>
          
          <div className="overall-rating">
            <div className="rating-stars">
              {[...Array(5)].map((_, i) => (
                <Star 
                  key={i} 
                  size={24} 
                  className={i < Math.floor(averageRating) ? 'star-filled' : 'star-empty'} 
                />
              ))}
            </div>
            <div className="rating-text">
              <span className="rating-number">{averageRating.toFixed(1)}</span>
              <span className="rating-label">out of 5 stars</span>
              <span className="review-count">({reviews.length} reviews)</span>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="reviews-grid"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="review-card"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <div className="review-header">
                <div className="review-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      size={16} 
                      className={i < review.rating ? 'star-filled' : 'star-empty'} 
                    />
                  ))}
                </div>
                <Quote size={24} className="quote-icon" />
              </div>
              
              <p className="review-text">{review.text}</p>
              
              <div className="review-footer">
                <span className="reviewer-name">{review.name}</span>
                <span className="review-date">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          className="cta-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="cta-card">
            <h2>Ready to Experience the Difference?</h2>
            <p>Join the many happy pet parents who trust Naari with their furry family members.</p>
            <button className="btn">Book Your Pet's Stay</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Reviews; 