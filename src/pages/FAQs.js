import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, ChevronUp } from 'lucide-react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: "What types of pets do you care for?",
      answer: "I primarily care for dogs and cats, but I'm open to discussing care for other small pets. I have experience with various breeds, ages, and temperaments, including shy rescue animals and energetic working dogs."
    },
    {
      question: "Do you use crates for the pets?",
      answer: "No, I don't use crates unless specifically requested by the owner. Pets are free to roam the house and make themselves comfortable. I believe in creating a natural, home-like environment where pets can feel relaxed and secure."
    },
    {
      question: "What about outdoor activities and exercise?",
      answer: "I provide plenty of outdoor time and exercise for active pets. With owner approval, I can offer safe, supervised off-leash adventures in secure outdoor spaces. I also take pets for regular walks and play sessions."
    },
    {
      question: "How do you handle pets with special needs?",
      answer: "I have experience caring for pets with various special needs, including medication administration, special diets, and behavioral support. I'm comfortable working with shy, anxious, or elderly pets and will follow all care instructions carefully."
    },
    {
      question: "What's included in the daily updates?",
      answer: "I send daily photos and videos to keep you connected with your pet. You'll see them eating, playing, relaxing, and enjoying their stay. I'm also available for text updates and can provide more frequent communication if needed."
    },
    {
      question: "Tell me about the photography sessions.",
      answer: "I offer professional beachside dog photography sessions for an additional fee. These sessions capture beautiful memories of your pet's stay and provide you with high-quality digital photos. It's a great way to commemorate their vacation!"
    },
    {
      question: "How far in advance should I book?",
      answer: "I recommend booking at least 2-3 weeks in advance, especially during peak travel seasons. However, I do my best to accommodate last-minute requests when possible. It's always worth asking!"
    },
    {
      question: "Do you offer a meet and greet?",
      answer: "Yes! I offer a free meet and greet consultation where we can discuss your pet's needs, tour the space, and ensure it's a good fit for everyone. This helps your pet feel comfortable and gives you peace of mind."
    },
    {
      question: "What should I bring for my pet's stay?",
      answer: "Please bring your pet's food, any medications, favorite toys or blankets, and their regular leash and collar. I'll provide comfortable sleeping arrangements, but familiar items help pets feel at home."
    },
    {
      question: "What are your cancellation policies?",
      answer: "I understand that plans can change. I offer flexible cancellation policies and will work with you to reschedule when possible. Please contact me as soon as possible if you need to cancel or change your booking."
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs-page">
      <div className="container">
        <motion.div
          className="faqs-header"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about pet care services</p>
        </motion.div>

        <motion.div
          className="faqs-content"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="faqs-list">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="faq-item"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <button
                  className="faq-question"
                  onClick={() => toggleFAQ(index)}
                >
                  <span>{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp size={20} />
                  ) : (
                    <ChevronDown size={20} />
                  )}
                </button>
                <AnimatePresence>
                  {openIndex === index && (
                    <motion.div
                      className="faq-answer"
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <p>{faq.answer}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="contact-section"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <div className="contact-card">
            <h2>Still Have Questions?</h2>
            <p>I'm here to help! Feel free to reach out with any questions about your pet's care needs.</p>
            <button className="btn">Contact Me</button>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQs; 