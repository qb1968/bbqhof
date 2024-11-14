import React from 'react';
import SocialShare from '../others/SocialShare';
import ReactWOW from 'react-wow';
import { toast } from 'react-toastify';
import { NavHashLink as Link } from "react-router-hash-link";
import ClientV1 from '../client/ClientV1';
import PriceV1 from '../price/PriceV3';
import PriceV2 from '../price/PriceV2';

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
                    NCBBQHOF CEREMONY <span>$30.00</span>
                  </h2>
                  <div className="btn-box">
                    {/* <Link
                      to="https://buy.stripe.com/8wM01HcHkbhTg5q6oo"
                      target="_blank"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Get Tickets For Dinner</span>
                    </Link> */}
                    {/* <h1 style={{color:"black",fontStyle:"italic"}}>TICKETS ARE SOLD OUT! <br/></h1> */}
                  </div>
                  <p style={{ color: "black" }}>
                    Come join us May 31, 2025 as history will be made with two
                    hall of fame events in one night. Help us celebrate the
                    NCBBQHOF and Josh Turner's This Country Music Thing Tour. Come early
                    before the concert and enjoy a barbecue dinner.
                  </p>
                  {/* <p style={{ color: "black" }}>
                    Inductees for 2024 are as follows. Alston Bridges Barbecue,
                    Gradys BBQ, Hursey's BAR-B-Q, Lexington Barbecue, Sam Jones
                    BBQ, Skylight Inn BBQ, and Stamey's Barbecue
                  </p> */}
                  <p style={{ color: "black" }}>
                    Dinner tickets are only $30.00 and can be purchased here,
                    with proceeds going to ALCOVETS(Alamance County local
                    veterans charity).
                  </p>
                  <p style={{ color: "black" }}>
                    Join us at the Alliance Convention Center in Burlington, NC.
                    Doors will open at 5:00pm and dinner will be served at
                    5:30 pm. Van Denton from Fox8 will be Master of Ceremonies
                    with awards presented by Miss North Carolina USA .<img src="/images/resource/mnc.jpg" style={{width:200,display:"flex"}} /> <br/><div style={{fontWeight:"bold"}}>If you are
                    planning to stay overnight call Best Western Plus of
                    Burlington and mention the NCBBQHOF for a special discounted
                    rate.</div> 
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
                        src="/images/resource/JoshTurner.webp"
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
                     <h2>Josh Turner</h2> 
                    </h3>
                    <ul
                      className="list-style-two"
                      style={{ textAlign: "center", fontWeight: "bold" }}
                    >
                      <li style={{ color: "black", fontWeight: "bold" }}>
                        This Country Music Thing Tour
                      </li>

                     
                      
                    </ul>
                  </div>
                </div>
                <p style={{ color: "black" }}>
                With timeless songs like “Long Black Train” and “Why Don’t We Just Dance,” Josh
Turner’s global reach has surpassed 5.8B global streams, 6.5M album sales and almost 12M track sales world - wide. Turner’s five No. 1 singles include “Your Man,” of which the official music video surpassed 223 million views. Turner’s album Long Black Train celebrated its 20th anniversary in 2023 and was certified Platinum by the RIAA with nearly 1.5M album sales, 1.3M track downloads and almost 315M life  - to - date streams. The lead single of the same name was also certified Platinum making up over 1M track downloads and almost 2 45M global streams. Turner released his first Greatest Hits album in September 2023, which features 11 of his biggest songs from seven of his studio albums. In June 2021, Turner released Your Man Deluxe Edition, celebrating 15 years of Turner’s iconic double Platinum - selling album, as well as the mini documentary “Josh Turner Your Man 15th Anniversary” (Mini Doc). The now certified triple - Platinum selling “Would You Go With Me,” featured on Your Man Deluxe Edition, experienced a viral surge across TikTok leading to a jump in streaming which landed the classic country tune on Spotify’s US Viral 50 along with Spotify Viral charts in Sweden, Norway, Finland and Iceland. A native of South Carolina, Turner has been nominated for three GMA Dove Awards and won his first GMA Dove Award in 2021 for “I Saw The Light” featuring Sonya Isaacs, off his I Serve a Savior album. Turner has been nominated for two GRAMMY Awards, five CMA Awards, two ACM Awards, one CMT Award, seven ACA Awards and has received six Inspirational Country Music Awards. Turner released his first Christmas album, King Size Manger in 2021, and it was released on vinyl the following year. His first television special, “King Size Manger,” debuted on UPtv in 2022 and is also available on DVD. To support music and arts education, he created The Josh Turner Scholarship Fund for the Arts to help students pursue their studies in these fields. Turner and his wife Jennifer, whom he met as a student at Nashville’s Belmont University, have four sons. For more information, please visit www.joshturner.com
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
          <div><PriceV1/></div>
          <div><PriceV2/></div>
          
          <ClientV1 />
        </section>
      </>
    );
};

export default BuyTicketContent;
