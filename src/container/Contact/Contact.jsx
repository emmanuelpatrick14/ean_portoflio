import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import "./Contact.scss";  // Import the dedicated SCSS

const Contact = () => {
  const [state, handleSubmit] = useForm("xqadgrzb");  // Replace with your actual Formspree ID

  if (state.succeeded) {
    return (
      <section className="contact-us-page">
        <div className="contact-us-section">
          <h2 className="contact-title">Contact Us</h2>
          <p className="success-message">
            Thank you for reaching out!
            Your message has been sent successfully! We'll reply as soon as possible.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-us-page">
      <div className="contact-us-section">
        <h2 className="contact-title">Contact Us</h2>
        <p className="contact-text">
          Have questions, feedback, or just want to say hello? Fill out this form, and we'll get back to you as soon as possible.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="contactName">Your Name</label>
            <input 
              type="text" 
              id="contactName" 
              name="name" 
              required 
              placeholder="e.g., John Doe" 
            />
            <ValidationError prefix="Name" field="name" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="contactEmail">Email</label>
            <input 
              type="email" 
              id="contactEmail" 
              name="email" 
              required 
              placeholder="e.g., john@example.com" 
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>
          <div className="form-group">
            <label htmlFor="contactMessage">Message</label>
            <textarea 
              id="contactMessage" 
              name="message" 
              required 
              placeholder="How can we help?" 
            ></textarea>
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>
          <button type="submit" className="submit-button" disabled={state.submitting}>
            {state.submitting ? "Sending..." : "Send Message"}
          </button>
          <p className="privacy-note">We respect your privacy and will only use this to respond to your inquiry.</p>
        </form>
      </div>
    </section>
  );
};

export default Contact;