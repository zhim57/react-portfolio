import React, { Fragment } from 'react';
import Navbar from '../components/Navbar';
import './style.css';

function Home() {
    return (
        <Fragment>
            <Navbar/>


    <section className="first-row">
        <h1 id="h1">About Me</h1>
        <div className="box">
            <div className="container">
                <div className="row">
                    {/* <!-- main paragraph with the ebeded immage --> */}
                    <p className="niceText "><img width="160" src="/react-portfolio/assets/images/jivko4a.jpg" alt=" responsive image pic jivko  3"
                            className="img-fluid box imgJ"/>
                        I love life and computers and would like to help people achieve a better and
                        fuller life with the help of 
                        technology, hard work and a lot of passion! <br/> The world of the 21st century presented us with new challenges and
                        new
                        paradigm changes, that require improvements in our digital life, communications and
                        human/machine
                        interactions.
                        <br/>
                        <br/>
                        Through in depth analysis on the customer's needs and the current social and economic conditions,
                        by predicting the short and long term trends
                        I can deliver usurpassed customer service and product development.
                        <br/>
                        <br/>
                        By fusing together different cultural elements and implementing the philosophical views of the
                        social scientists of the 19th and the 20th centuries, intertwining with the basic principles of
                        societal coexistence derived from the main religion streams we may achieve inner peace, success
                        and strong social bonds.
                        <a className="btn btn-primary" href="https://www.linkedin.com/in/jivko-atanassov-542b4112/" target="blank" role="button">linkedin</a>
                        <a className="btn btn-primary github" href="https://github.com/zhim57" target="blank" role="button">github</a>
                        <a href="/react-portfolio/cv2020-jivko.pdf" className="btn btn-dark">RESUME</a>
                    </p>
                </div>
            </div>
        </div>

    </section>


        </Fragment>)


    }

export default Home;