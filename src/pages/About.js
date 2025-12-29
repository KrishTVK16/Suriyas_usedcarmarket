import React from 'react';
import './About.css';

const About = () => {
  return (
    <div className="about">
      <div className="about-header">
        <h1>About Us</h1>
        <p>Your trusted partner in finding premium used cars</p>
      </div>

      <div className="about-container">
        <section className="about-mission">
          <h2>Our Mission</h2>
          <p>
            At UsedCarMarket, we're revolutionizing the way people buy and sell used cars. 
            Our mission is to provide a transparent, trustworthy, and premium marketplace 
            where every transaction is backed by quality assurance and certification. We strive 
            to make car ownership accessible, safe, and enjoyable for everyone by connecting 
            buyers and sellers through cutting-edge technology and exceptional service.
          </p>
        </section>

        <section className="about-story">
          <h2>Our Story</h2>
          <div className="story-content">
            <p>
              Founded in 2018 with a vision to transform the used car market, UsedCarMarket 
              has grown from a small startup to a trusted platform serving thousands of customers 
              across India. What started as a simple idea to make car buying easier has evolved 
              into a comprehensive marketplace that prioritizes quality, transparency, and customer 
              satisfaction.
            </p>
            <p>
              We understand the challenges of buying and selling used cars - the uncertainty, 
              the lack of transparency, and the fear of making a wrong decision. That's why we 
              built a platform that addresses these pain points head-on, providing detailed 
              inspections, certifications, and expert guidance every step of the way.
            </p>
            <p>
              Today, we're proud to be one of India's leading used car marketplaces, with a 
              network of certified dealers, expert inspectors, and satisfied customers who trust 
              us with their automotive needs.
            </p>
          </div>
        </section>

        <section className="about-stats">
          <h2>Our Achievements</h2>
          <div className="stats-grid">
            <div className="stat-card">
              <div className="stat-number">50,000+</div>
              <div className="stat-label">Cars Sold</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">25,000+</div>
              <div className="stat-label">Happy Customers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">500+</div>
              <div className="stat-label">Certified Dealers</div>
            </div>
            <div className="stat-card">
              <div className="stat-number">98%</div>
              <div className="stat-label">Customer Satisfaction</div>
            </div>
          </div>
        </section>

        <section className="about-values">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">🔍</div>
              <h3>Transparency</h3>
              <p>Complete honesty in every listing and transaction. We believe in full disclosure 
              of vehicle history, condition, and pricing with no hidden surprises.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">⭐</div>
              <h3>Quality</h3>
              <p>Only certified and inspected vehicles make it to our platform. Every car undergoes 
              rigorous quality checks to ensure it meets our high standards.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🤝</div>
              <h3>Trust</h3>
              <p>Building lasting relationships with our customers is at the heart of everything 
              we do. Your trust is our most valuable asset.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">🚀</div>
              <h3>Innovation</h3>
              <p>Using cutting-edge technology to enhance your car buying experience. We continuously 
              improve our platform with the latest innovations.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">💎</div>
              <h3>Excellence</h3>
              <p>We strive for excellence in every aspect of our service, from vehicle inspection 
              to customer support, ensuring the best experience possible.</p>
            </div>
            <div className="value-card">
              <div className="value-icon">❤️</div>
              <h3>Customer First</h3>
              <p>Your satisfaction is our priority. We go above and beyond to ensure you have a 
              smooth and enjoyable car buying or selling experience.</p>
            </div>
          </div>
        </section>

        <section className="about-team">
          <h2>Why Choose Us</h2>
          <div className="features-list">
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h3>150+ Point Inspection</h3>
                <p>Every car undergoes comprehensive quality checks covering exterior, interior, 
                engine, safety, documentation, and underbody. Our certified inspectors leave no 
                stone unturned to ensure vehicle quality.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Certified Vehicles</h3>
                <p>Quality assurance you can trust. All vehicles on our platform are certified 
                and come with detailed inspection reports, giving you complete peace of mind.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Expert Support</h3>
                <p>Our team of automotive experts is always here to help. From choosing the right 
                car to financing options, we provide guidance at every step of your journey.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Secure Transactions</h3>
                <p>Safe and protected buying experience with secure payment gateways, verified sellers, 
                and comprehensive documentation support for smooth ownership transfer.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Best Price Guarantee</h3>
                <p>We ensure competitive pricing for both buyers and sellers. Our platform helps you 
                get the best value for your money, whether you're buying or selling.</p>
              </div>
            </div>
            <div className="feature-item">
              <span className="feature-icon">✓</span>
              <div>
                <h3>Nationwide Network</h3>
                <p>With dealers and service centers across major cities in India, we make it easy 
                for you to find, inspect, and purchase your dream car, no matter where you are.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-process">
          <h2>How We Work</h2>
          <div className="process-timeline">
            <div className="timeline-item">
              <div className="timeline-number">1</div>
              <div className="timeline-content">
                <h3>Vehicle Listing</h3>
                <p>Sellers list their vehicles with detailed information, photos, and documentation. 
                Our team verifies all details before approval.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">2</div>
              <div className="timeline-content">
                <h3>Comprehensive Inspection</h3>
                <p>Every vehicle undergoes our rigorous 150+ point inspection by certified automotive 
                experts to assess condition and quality.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">3</div>
              <div className="timeline-content">
                <h3>Certification & Documentation</h3>
                <p>Qualified vehicles receive certification badges and detailed reports. All legal 
                documents are verified for authenticity.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">4</div>
              <div className="timeline-content">
                <h3>Buyer Matching</h3>
                <p>Our platform matches buyers with their ideal vehicles based on preferences, budget, 
                and requirements using advanced algorithms.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-number">5</div>
              <div className="timeline-content">
                <h3>Test Drive & Finalization</h3>
                <p>Buyers can schedule test drives, negotiate prices, and finalize transactions with 
                our support team ensuring smooth completion.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="about-testimonials">
          <h2>What Our Customers Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "UsedCarMarket made buying my dream car so easy! The inspection report was detailed 
                and accurate, and the entire process was transparent. Highly recommended!"
              </p>
              <div className="testimonial-author">
                <strong>Rajesh Kumar</strong>
                <span>Mumbai</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "Sold my car through UsedCarMarket and got a great price! The team was professional, 
                and the certification process gave buyers confidence. Excellent service!"
              </p>
              <div className="testimonial-author">
                <strong>Priya Sharma</strong>
                <span>Delhi</span>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-rating">★★★★★</div>
              <p className="testimonial-text">
                "The best platform for used cars! Found exactly what I was looking for, and the 
                support team helped me throughout the purchase. Couldn't be happier!"
              </p>
              <div className="testimonial-author">
                <strong>Amit Patel</strong>
                <span>Bangalore</span>
              </div>
            </div>
          </div>
        </section>

        <section className="about-vision">
          <h2>Our Vision</h2>
          <p>
            We envision a future where buying and selling used cars is as simple, transparent, and 
            trustworthy as buying a new product online. Our goal is to become India's most trusted 
            automotive marketplace, setting new standards for quality, transparency, and customer 
            service in the used car industry. We're committed to leveraging technology and innovation 
            to make car ownership more accessible and enjoyable for everyone.
          </p>
        </section>
      </div>
    </div>
  );
};

export default About;

