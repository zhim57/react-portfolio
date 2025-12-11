import React from 'react';

function Contact() {
    return (
        <section className="contact-section">
            <h1 className="contact-title">Get In Touch</h1>
            <div className="box contact-container">
                <div className="contact-content">
                    <div className="contact-info">
                        <h2>Contact Information</h2>
                        <p className="contact-intro">
                            Feel free to reach out for projects, questions, or just to say hello!
                        </p>
                        <ul className="contact-list">
                            <li>
                                <span className="contact-icon">📍</span>
                                <span>330 Fisher Ave, Piscataway, NJ 08854</span>
                            </li>
                            <li>
                                <span className="contact-icon">📞</span>
                                <a href="tel:+19084720799">(908) 472-0799</a>
                            </li>
                            <li>
                                <span className="contact-icon">✉️</span>
                                <a href="mailto:zhim57@yahoo.com">zhim57@yahoo.com</a>
                            </li>
                        </ul>
                        <div className="contact-social">
                            <a
                                href="https://www.linkedin.com/in/jivko-atanassov-542b4112/"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                aria-label="LinkedIn Profile"
                            >
                                LinkedIn
                            </a>
                            <a
                                href="https://github.com/zhim57"
                                target="_blank"
                                rel="noreferrer"
                                className="social-link"
                                aria-label="GitHub Profile"
                            >
                                GitHub
                            </a>
                        </div>
                    </div>
                    <div className="contact-form-container">
                        <h2>Send a Message</h2>
                        <form className="contact-form">
                            <div className="form-group">
                                <label htmlFor="name">Your Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="john@example.com"
                                    required
                                />
                            </div>
                            <div className="form-group">
                                <label htmlFor="subject">Subject</label>
                                <select className="form-control" id="subject">
                                    <option value="">Select a topic...</option>
                                    <option value="general">General Question</option>
                                    <option value="project">New Project</option>
                                    <option value="issue">Existing Project Issue</option>
                                    <option value="feedback">Feedback</option>
                                </select>
                            </div>
                            <div className="form-group">
                                <label htmlFor="message">Message</label>
                                <textarea
                                    className="form-control"
                                    id="message"
                                    rows="4"
                                    placeholder="Your message here..."
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="submit-btn">
                                Send Message
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;