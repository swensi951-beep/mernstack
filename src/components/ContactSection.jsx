import React from 'react';
import './ContactSection.css';
import { Mail, Phone, MapPin, Send, Globe, Instagram, Twitter, Linkedin, Clock } from 'lucide-react';

const ContactSection = () => {
  return (
    <section className="contact-professional">
      <div className="contact-main-container">
        
        {/* LEFT SIDE: Company Info (The Standard Stuff) */}
        <div className="contact-info-panel">
          <span className="sub-title">Contact Information</span>
          <h2 className="main-title">Get in touch with <span className="highlight">us</span></h2>
          <p className="description">
            Humari team aapki help ke liye hamesha taiyaar hai. Aap hume niche diye gaye details par kabhi bhi reach out kar sakte hain.
          </p>

          <div className="info-details">
            <div className="info-box">
              <div className="icon-wrapper"><Phone size={20} /></div>
              <div>
                <h4>Call for Support</h4>
                <p>+91 98765 43210</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-wrapper"><Mail size={20} /></div>
              <div>
                <h4>Email Address</h4>
                <p>hello@veggiemarket.com</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-wrapper"><MapPin size={20} /></div>
              <div>
                <h4>Main Office</h4>
                <p>123 Agri-Business Hub, Surat, Gujarat</p>
              </div>
            </div>

            <div className="info-box">
              <div className="icon-wrapper"><Clock size={20} /></div>
              <div>
                <h4>Working Hours</h4>
                <p>Mon - Sat: 9:00 AM - 7:00 PM</p>
              </div>
            </div>
          </div>

          <div className="social-connect">
            <h5>Follow Us:</h5>
            <div className="social-icons">
              <a href="#" className="social-btn"><Instagram size={20} /></a>
              <a href="#" className="social-btn"><Twitter size={20} /></a>
              <a href="#" className="social-btn"><Linkedin size={20} /></a>
              <a href="#" className="social-btn"><Globe size={20} /></a>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE: Default Fixed Form (Direct Access) */}
        <div className="contact-form-panel">
          <div className="form-card">
            <h3>Send a Message :~</h3>
            <p>Fill out the form and our team will get back to you shortly.</p>
            
            <form className="actual-form">
              <div className="form-row">
                <div className="input-field">
                  <label>Your Name</label>
                  <input type="text" placeholder="e.g. Svensi Narola" required />
                </div>
              </div>
              
              <div className="form-row">
                <div className="input-field">
                  <label>Email ID</label>
                  <input type="email" placeholder="name@email.com" required />
                </div>
              </div>

              <div className="form-row">
                <div className="input-field">
                  <label>Subject</label>
                  <select>
                    <option>Select Option</option>
                    <option>General Inquiry</option>
                    <option>Order Issue</option>
                    <option>Partner with us</option>
                  </select>
                </div>
              </div>

              <div className="form-row">
                <div className="input-field">
                  <label>Message</label>
                  <textarea placeholder="Write your message here..."></textarea>
                </div>
              </div>

              <button type="submit" className="submit-btn">
                Send Message <Send size={18} />
              </button>
            </form>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactSection;