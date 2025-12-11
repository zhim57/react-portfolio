import React from 'react';

function Home() {
    return (
        <section className="about-section">
            <h1 id="h1">About Me</h1>
            <div className="box">
                <div className="about-content">
                    <div className="about-image">
                        <img
                            src="/react-portfolio/assets/images/jivko4a.jpg"
                            alt="Jivko Atanassov - Software Developer"
                            className="profile-img"
                        />
                    </div>
                    <div className="about-text">
                        <p>
                            I love life and computers and would like to help people achieve a better and
                            fuller life with the help of technology, hard work and a lot of passion!
                        </p>
                        <p>
                            The world of the 21st century presented us with new challenges and new
                            paradigm changes, that require improvements in our digital life, communications
                            and human/machine interactions.
                        </p>
                        <p>
                            Through in-depth analysis on the customer's needs and the current social and
                            economic conditions, by predicting the short and long term trends, I can deliver
                            unsurpassed customer service and product development.
                        </p>
                        <p>
                            By fusing together different cultural elements and implementing the philosophical
                            views of the social scientists of the 19th and 20th centuries, intertwining with
                            the basic principles of societal coexistence derived from the main religion streams,
                            we may achieve inner peace, success and strong social bonds.
                        </p>
                        <div className="about-buttons">
                            <a
                                className="btn btn-primary"
                                href="https://www.linkedin.com/in/jivko-atanassov-542b4112/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                LinkedIn
                            </a>
                            <a
                                className="btn btn-primary github"
                                href="https://github.com/zhim57"
                                target="_blank"
                                rel="noreferrer"
                            >
                                GitHub
                            </a>
                            <a
                                href="/react-portfolio/cv2020-jivko.pdf"
                                className="btn btn-dark pdf"
                                target="_blank"
                                rel="noreferrer"
                            >
                                Resume
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Home;