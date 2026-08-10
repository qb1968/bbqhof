import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import { useParams } from 'react-router-dom';
import SpeakerV1Data from '../../jsonData/speaker/SpeakerV1Data2.json'
import SpeakerInfo from '../../components/speaker/SpeakerInfo';
import FluidV1 from '../../components/fluid/FluidV1';
import PriceV3 from '../../components/price/PriceV3';
import FooterV1 from '../../components/footer/FooterV1';

const SpeakersDetail = () => {

    const { id } = useParams()
    const data = SpeakerV1Data.filter(speaker => speaker.id === parseInt(id))[0]

    return (
        <>
            <div className="page-wrapper">
                <span className="header-span"></span>
                <HeaderV1 headerStyle="header-style-two" parentMenu='speakers' />
               
                <SpeakerInfo speakerInfo={data} />
                
                <FooterV1 />
            </div>
        </>
    );
};

export default SpeakersDetail;