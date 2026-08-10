import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import SocialShare from '../others/SocialShare';
import { Gallery } from 'react-photoswipe-gallery';
import GalleryV1Data from '../../jsonData/gallery/GalleryV1Data.json'
import SingleGalleryV1 from '../gallery/SingleGalleryV1';

const FooterV1 = () => {
    return (
        <>
            <footer className="main-footer">
                
                <div className="footer-bottom">
                    <div className="auto-container">
                        <div className="inner-container clearfix">
                            <div className="copyright-text">
                                <p>&copy; Copyright {(new Date().getFullYear())} All Rights Reserved by <Link to="https://allwebcon.com" target='_blank'>Allison Web Consultants, LLC</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default FooterV1;
