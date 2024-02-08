import React from 'react';
import SocialShare from '../others/SocialShare';

const SpeakerInfo = ({ speakerInfo }) => {
    const { thumb, name, name2, info, info2, info3, info4, info5, info6, info7 } = speakerInfo

    return (
        <>
            <section className="speaker-detail">
                <div className="auto-container">
                    <div className="row">
                        <div className="image-column col-lg-4 col-md-12 col-sm-12">
                            <div className="image-box">
                                <figure className="image"><img src={`../images/resource/${thumb}`} alt="image" /></figure>
                                <img src={`../images/resource/hbq.jpg`} style={{padding:10}} />
                                <img src={`../images/resource/hbq2.jpg`} style={{padding:10}} />
                                <img src={`../images/resource/hbq4.jpg`} style={{padding:10}} />
                                <img src={`../images/resource/hbq5.jpg`} style={{padding:10}} />
                                <img src={`../images/resource/hbq6.jpg`} style={{padding:10}} />
                                <img src={`../images/resource/hbq3.jpg`} style={{padding:10}} />
                               
                            </div>
                        </div>
                        <div className="info-column col-lg-8 col-md-12 col-sm-12">
                            <div className="inner-column">
                                <div className="text-box">
                                    <h3>{name}</h3>
                                    <h4>{name2}</h4>
                                    
                                   
                                    <p style={{color:"black"}}>{info}</p>
                                    <p style={{color:"black"}}>{info2}</p>
                                    <p style={{color:"black"}}>{info3}</p>
                                    <p style={{color:"black"}}>{info4}</p>
                                    <p style={{color:"black"}}>{info5}</p>
                                    <p style={{color:"black"}}>{info6}</p>
                                    <p style={{color:"black"}}>{info7}</p>
                                    
                                    
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerInfo;