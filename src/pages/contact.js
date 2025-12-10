import React from 'react';

function Contact() {
    return (
        <section>
            <div className="container box contactJ">
                <div className="container">
                    <div className="col-md-4">
                        <section className="contacts">
                            <h1>Contact</h1>
                            <ul className="contacts">
                                <li>330 Fisher Ave</li>
                                <li>Piscataway, NJ, 08854</li>
                                <li>tel:(908) 472 0799</li>
                                <li>
                                    <a href="mailto:zhim57@yahoo.com" className="contacts-btn">
                                        email-me <i className="fa fa-envelope" aria-hidden="true"></i>
                                    </a>
                                </li>
                            </ul>
                        </section>
                    </div>
                    <br/>
                    <aside>
                        <div className="col-md-10">
                            <form>
                                <div className="form-group">
                                    <label htmlFor="nameInput1">Your Name Here</label>
                                    <input type="text" className="form-control" id="nameInput1" placeholder="John Doe Jr"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlInput1">Email address</label>
                                    <input type="email" className="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlSelect1">Please select your topic</label>
                                    <select multiple className="form-control" id="exampleFormControlSelect1">
                                        <option>I have a general question</option>
                                        <option>New project</option>
                                        <option>An issue with an existing project</option>
                                        <option>Billing inquiries</option>
                                        <option>Feedback</option>
                                    </select>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleFormControlTextarea1">Message</label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <input type="submit" value="Submit"/>
                                <br/><br/>
                            </form>
                        </div>
                    </aside>
                </div>
            </div>
        </section>
    );
}

export default Contact;