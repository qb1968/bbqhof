import React from 'react';
import SocialShare from '../others/SocialShare';
import ReactWOW from 'react-wow';
import { toast } from 'react-toastify';
import { NavHashLink as Link } from "react-router-hash-link";
import ClientV1 from '../client/ClientV1';

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
                  <h2 style={{color:"black",fontWeight:"bold"}}>
                    NCBBQHOF CEREMONY <span>$20.00</span>
                  </h2>
                  <div className="btn-box">
                    <Link
                      to="https://buy.stripe.com/8wM01HcHkbhTg5q6oo"
                      target="_blank"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Get Tickets For Dinner</span>
                    </Link>
                    <h3 style={{color:"black",fontStyle:"italic"}}>TICKETS ARE GOING FAST! <br/> ONLY A FEW TICKETS WILL BE AVAILABLE AT DOOR!</h3>
                  </div>
                  <p style={{ color: "black" }}>
                    Come join us March 1, 2024 as history will be made with two
                    hall of fame events in one night. Help us celebrate the
                    NCBBQHOF and The Oak Ridge Boys Farewell tour. Come early
                    before the concert and enjoy a barbecue dinner.
                  </p>
                  <p style={{ color: "black" }}>
                    Inductees for 2024 are as follows. Alston Bridges Barbecue,
                    Gradys BBQ, Hursey's BAR-B-Q, Lexington Barbecue, Sam Jones
                    BBQ, Skylight Inn BBQ, and Stamey's Barbecue
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
                    with awards presented by Miss North Carolina USA. If you are
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
                    DINNER TICKETS DO NOT INCLUDE CONCERT. FOR MORE INFO SEE
                    BELOW
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
                    <h3
                      style={{
                        color: "black",
                        textAlign: "center",
                        fontWeight: "bold",
                      }}
                    >
                      {" "}
                      Liberty Showcase Theater <br />
                      Presents <br />
                      The Oak Ridge Boys
                    </h3>
                    <ul
                      className="list-style-two"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <li style={{ color: "black", fontWeight: "bold" }}>
                        American Made Farewell Tour
                      </li>

                      <li style={{ color: "black", fontWeight: "bold" }}>
                        GRAMMY® Award-winning and Country Music Hall of Fame
                        members
                      </li>
                      <li style={{ color: "black", fontWeight: "bold" }}>
                        For tickets to this show
                        <br />
                        <a
                          href="https://thelibertyshowcase.com/"
                          target="_blank"
                          style={{ fontSize: "24px", fontWeight: "bold" }}
                        >
                          Click Here
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
                <p style={{ color: "black" }}>
                  The Oak Ridge Boys are officially celebrating their 50th
                  Anniversary this October. With this celebration, The Oak Ridge
                  Boys are announcing their American Made: Farewell Tour! The
                  group, Duane Allen, Joe Bonsall, William Lee Golden, and
                  Richard Sterban are excited to celebrate both milestones with
                  fans with the announcement of this tour.
                </p>
                <p
                  style={{
                    color: "black",
                    fontWeight: "bold",
                    fontStyle: "italic",
                  }}
                >
                  SHOW TICKETS DO NOT INCLUDE DINNER. FOR MORE INFO ON DINNER
                  PLEASE SEE INFO ON DINNER ABOVE.
                </p>
              </div>
            </div>
          </div>
          <ClientV1 />
        </section>
      </>
    );
};

export default BuyTicketContent;
