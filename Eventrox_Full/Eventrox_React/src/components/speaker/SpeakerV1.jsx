import React from 'react';
import SpeakerV1Data from '../../jsonData/speaker/SpeakerV1Data.json'
import SingleSpeakerV1 from './SingleSpeakerV1';

const SpeakerV1 = () => {
    return (
        <>
            <section className="speakers-section" >
                <div className="auto-container">
                    <div className="sec-title light text-center">
                       
                        <h2>2025 Nominees</h2>
                    </div>
                    <div className="row" style={{display:'flex',justifyContent:'space-evenly'}}>
                        {SpeakerV1Data.map(speaker =>
                            <div className="speaker-block col-lg-3 col-md-6 col-sm-12" key={speaker.id}>
                                <SingleSpeakerV1 speaker={speaker} />
                            </div>
                        )}
                    </div>
                </div>
            </section>
        </>
    );
};

export default SpeakerV1;