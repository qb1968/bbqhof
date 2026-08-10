import React from 'react';
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';

const SinglePriceV3 = ({ plan }) => {
    const { title, title2, price, featureList1, featureList2, featureList3, btnClass, btnText, btnLink, animationName } = plan

    return (
        <>
            <ReactWOW animation={animationName}>
                <div className="inner-box">
                    <div className="title">{title}</div>
                    <div className="title">{title2}</div>
                    <h4 className="price">${price}</h4>
                    <ul className="features">
                        <li>{featureList1}</li>
                        <li>{featureList2}</li>
                        <li>{featureList3}</li>
                    </ul>
                    <div className="btn-box">
                        <Link to={btnLink} target="_blank" className={btnClass}><span
                            className="btn-title">{btnText}</span></Link>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SinglePriceV3;