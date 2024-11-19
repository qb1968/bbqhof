import React from 'react';
import ReactWOW from 'react-wow';
import { HashLink as Link } from 'react-router-hash-link'

const SinglePriceV2 = ({ price }) => {
    const { icon, title, plan, list1, list2, list3,  list4, list5,  btnText, btnLink, animationName, delay } = price

    return (
        <>
            <ReactWOW animation={animationName} delay={delay}>
                <div className="inner-box">
                    <div className="title"><span className={icon}></span>{title}</div>
                    <div className="price-box">
                        <h4 className="price">${plan}</h4>
                    </div>
                    <ul className="features">
                        <li className="">{list1}</li>
                        <li className="">{list2}</li>
                        <li className="">{list3}</li>
                        <li className="">{list4}</li>
                        <li className="">{list5}</li>
                    </ul>
                    <div className="btn-box">
                        <Link to={btnLink} target='blank_' className="theme-btn btn-style-one"><span className="btn-title">{btnText}</span></Link>
                    </div>
                </div>
            </ReactWOW>
        </>
    );
};

export default SinglePriceV2;