import React from 'react';
import HeaderV1 from '../../components/header/HeaderV1';
import BreadCrumb from '../../components/breadCrumb/BreadCrumb';
import EventDetailsContent from '../../components/event/EventDetailsContent';
import FooterV1 from '../../components/footer/FooterV1';
import ClientV1 from '../../components/client/ClientV1';

const EventDetails = () => {
    return (
        <>
            <div className="page-wrapper">
                <span className="header-span"></span>
                <HeaderV1 headerStyle="header-style-two" parentMenu='schedule' />
                
                <EventDetailsContent />
                <ClientV1/>
                <FooterV1 />
            </div>
        </>
    );
};

export default EventDetails;