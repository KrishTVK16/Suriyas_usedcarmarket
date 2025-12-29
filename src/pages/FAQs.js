import React, { useState } from 'react';
import './FAQs.css';

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'How do I list my car for sale?',
      answer: 'You can list your car by clicking on "Sell Your Car" in the navigation menu. Fill out the form with your car details, upload photos, and submit. Our team will review and approve your listing.'
    },
    {
      question: 'Are all cars certified?',
      answer: 'Yes, all cars listed on our platform undergo a comprehensive 150+ point inspection. Certified vehicles are marked with a certification badge and come with a detailed inspection report.'
    },
    {
      question: 'Can I schedule a test drive?',
      answer: 'Absolutely! Once you find a car you like, click on "Request Test Drive" and fill out the form. The seller will contact you to schedule a convenient time.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We support various payment methods including bank transfers, UPI, and financing options. You can also use our EMI calculator to plan your purchase.'
    },
    {
      question: 'How do I compare cars?',
      answer: 'Navigate to the "Compare Cars" page and select the cars you want to compare. You can compare up to 4 cars side-by-side with detailed specifications.'
    },
    {
      question: 'Is there a warranty on used cars?',
      answer: 'Certified cars come with a warranty based on their condition and age. The warranty details are mentioned in each car listing. We also offer extended warranty options.'
    },
    {
      question: 'How do I contact a seller?',
      answer: 'You can contact sellers directly through the car listing page. Click on "Contact Seller" or "Request Test Drive" to get in touch.'
    },
    {
      question: 'What documents do I need to sell my car?',
      answer: 'You will need the RC (Registration Certificate), insurance papers, service history, and valid ID proof. All documents should be clear and up-to-date.'
    }
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faqs">
      <div className="faqs-header">
        <h1>Frequently Asked Questions</h1>
        <p>Find answers to common questions about our platform</p>
      </div>

      <div className="faqs-container">
        <div className="faqs-list">
          {faqs.map((faq, index) => (
            <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
              <button className="faq-question" onClick={() => toggleFAQ(index)}>
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="faq-answer">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="faqs-cta">
          <h2>Still Have Questions?</h2>
          <p>Can't find what you're looking for? Contact our support team.</p>
          <a href="/contact" className="contact-link">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  );
};

export default FAQs;

