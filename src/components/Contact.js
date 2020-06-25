import React from 'react';

// import './index.css';

class Contact extends React.Component {
    render() {
      return (
        <section id="contact" className="contact-section">
          <div className="contact-section-header">
                <h2> Don't forget contact with me =D</h2>
            </div>
            <div className="contact-links">
                <a id="profile-link" href="https://github.com/AngieEslava" 
                    className="btn contact-details"><i className="fab fa-github"></i> $GitHub</a>
                <a href="mailto:example@example.com" className="btn contact-details"><i className="fas fa-at"></i> $Send a
                    mail</a>
                <a href="tel:" className="btn contact-details"><i className="fas fa-mobile-alt"></i> $Call me</a>
            </div>
        </section>
      );
    }
  }
export default Contact;