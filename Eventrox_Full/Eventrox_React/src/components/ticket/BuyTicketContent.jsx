import React from 'react';
import SocialShare from '../others/SocialShare';
import ReactWOW from 'react-wow';
import { toast } from 'react-toastify';
import { NavHashLink as Link } from "react-router-hash-link";

const BuyTicketContent = () => {

    const handlePurchase = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Purchase Request Submitted!")
    }

    return (
      <>
        <section className="buy-ticket" style={{ backgroundColor: "#dedede" }}>
          <div className="auto-container">
            <div className="image-box">
              <figure className="image wow fadeIn">
                <img
                  src={`/images/resource/pig1024.png
                `}
                  alt=""
                />
              </figure>
            </div>
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <h2>
                    NCBBQHOF CEREMONY <span>$20.00</span>
                  </h2>
                  <div className="btn-box">
                    <Link
                      to="https://buy.stripe.com/test_9AQ9Bd2bZ76577O145"
                      target="_blank"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Get Tickets For Dinner</span>
                    </Link>
                  </div>
                  <p style={{ color: "black" }}>
                    Come join us tonight as history will be made with two hall
                    of fame events in one night. Help us celebrate the NCBBQHOF
                    and The Oak Ridge Boys Farewell tour. Come early before the
                    concert and enjoy a barbecue dinner provided by the best of
                    the best in NC. Featuring Hall of Famers Bridges Barbecue of
                    Shelby, Grady's BBQ of Dudley, Hursey's Bar-B-Q of
                    Burlington, Lexington Barbecue, Skylight Inn BBQ, and Sam Jones BBQ.
                  </p>
                  <p style={{ color: "black" }}>
                    Dinner tickets are only $20.00 and can be purchased here,
                    with proceeds going to ALCOVETS(Alamance County local
                    veterans charity).
                  </p>
                  <p style={{ color: "black" }}>
                    Join us at the Alliance Convention Center in Burlington, NC.
                    Doors will open at 5:30pm and dinner will be served at
                    6:00pm. Van Denton from Fox8 will be Master of Ceremonies
                    with awards presented by Miss North Carolina. If you are
                    planning to stay overnight call Best Western Plus of
                    Burlington and mention the NCBBQHOF for a special discounted
                    rate.
                  </p>
                  <p
                    style={{
                      color: "black",
                      fontWeight: "bold",
                      fontStyle: "italic",
                    }}
                  >
                    DINNER TICKETS DO NOT INCLUDE CONCERT.
                  </p>
                </div>

                <div className="row two-column">
                  <div className="column col-lg-6 col-md-12">
                    <figure className="image">
                      <img
                        src="/images/resource/Oak Ridge Boys.jpg"
                        alt="image"
                      />
                    </figure>
                  </div>
                  <div className="column col-lg-6 col-md-12">
                    <h4 style={{ color: "black" }}>The Oak Ridge Boys</h4>
                    <ul className="list-style-two">
                      <li style={{ color: "black" }}>
                        American Made Farewell Tour
                      </li>
                      <li style={{ color: "black" }}>
                        Logo & company details on the WordCamp Kolkata.
                      </li>
                      <li style={{ color: "black" }}>
                        GRAMMY® Award-winning and Country Music Hall of Fame
                        members
                      </li>
                      <li style={{ color: "black" }}>
                        For tickets to this show
                        <a href="https://thelibertyshowcase.com/">Click Here</a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p style={{ color: "black" }}>
                  , The Oak Ridge Boys are officially celebrating their 50th
                  Anniversary this October. With this celebration, The Oak Ridge
                  Boys are announcing their American Made: Farewell Tour! The
                  group, Duane Allen, Joe Bonsall, William Lee Golden, and
                  Richard Sterban are excited to celebrate both milestones with
                  fans with the announcement of this tour.
                </p>
              </div>

              
              
            </div>
          </div>
        </section>
      </>
    );
};

export default BuyTicketContent;
