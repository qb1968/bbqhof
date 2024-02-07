import React from 'react';
import SocialShare from '../others/SocialShare';
import ContactForm from '../form/ContactForm';

const ContactPageContent = () => {
    return (
        <>
            <section className="contact-page-section" style={{backgroundColor:"#dedede"}}>
                <div className="auto-container">
                    <div className="row clearfix">
                        <div className="contact-column col-lg-4 col-md-12 col-sm-12 order-lg-2">
                            <div className="inner-column">
                                <div className="sec-title">
                                    <h2>Contact Info</h2>
                                </div>
                                <ul className="contact-info">
                                    
                                   
                                    <li>
                                        <span className="icon fa fa-envelope"></span>
                                        <p><strong>Mail Us</strong></p>
                                        <p><a href="mailto:support@example.com" style={{color:"black"}}>ncbbqhof@gmail.com</a></p>
                                    </li>
                                    
                                </ul>
                               
                            </div>
                        </div>
                        <div className="form-column col-lg-8 col-md-12 col-sm-12">
                            <ContactForm />
                        </div>
                    </div>
                </div>
            </section>

           

        </>
    );
};

export default ContactPageContent;