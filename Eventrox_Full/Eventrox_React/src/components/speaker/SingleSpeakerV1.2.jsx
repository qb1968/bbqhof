import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';

const SingleSpeakerV1 = ({ speaker }) => {
    const { id, thumb, name, name2, designation } = speaker

    return (
        <>
            <div className="inner-box">
                <div className="image-box">
                    <figure className="image"><Link to={`/speakers-detail2/${id}#`}><img src={`../images/resource/${thumb}`} alt="image" style={{width:275,height:275}} /></Link></figure>
                </div>
                <div className="info-box">
                    <div className="inner">
                        <h4 className="name"><Link to={`/speakers-detail2/${id}#`}>{name}</Link></h4>
                        <h5 className="name">{name2}</h5>
                        <span className="designation">{designation}</span>
                       
                    </div>
                </div>
            </div>
        </>
    );
};

export default SingleSpeakerV1;