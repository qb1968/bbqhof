import React from 'react';
import SocialShare from '../others/SocialShare';
import ReactWOW from 'react-wow';
import { toast } from 'react-toastify';
import { NavHashLink as Link } from "react-router-hash-link";
import ClientV1 from '../client/ClientV1';
import PriceV1 from '../price/PriceV3';
import PriceV2 from '../price/PriceV2';
import Dropdown from "react-bootstrap/Dropdown";
import AnimatedBg from "react-animated-bg";
import SurpriseSanta from 'surprise-santa';

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
                    NCBBQHOF Inductees and Josh Turner's This Country Music Thing Tour. Come early
                    before the concert and enjoy a barbecue dinner.
                  </p>
                  {/* <p style={{ color: "black" }}>
                    Inductees for 2024 are as follows. Alston Bridges Barbecue,
                    Gradys BBQ, Hursey's BAR-B-Q, Lexington Barbecue, Sam Jones
                    BBQ, Skylight Inn BBQ, and Stamey's Barbecue
                  </p> */}
                  <p style={{ color: "black" }}>
                    Dinner tickets are only $30.00 and can be purchased here.
                  </p>
                  <p style={{ color: "black" }}>
                    Join us at the Alliance Convention Center in Burlington, NC.
                    Doors will open at 5:00pm and dinner will be served at
                    5:30 pm. Awards presented by Miss North Carolina USA .
                    <img src="/images/resource/NCUSA.png" style={{width:200,display:"flex"}} />
                     <br/><div style={{fontWeight:"bold"}}>If you are
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
            <div><PriceV1/></div>
            <div
          className="container"
          style={{
          
            padding: 20,
            marginBottom: 70,
            marginTop:50,
            borderBottom: "1rem solid black",
          }}
        >
           {/* <SurpriseSanta minTime={10} maxTime={10} />
          <h1
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Combo Special any 2 for $40.00
          </h1>
          <AnimatedBg
    colors={["red", "green"]}
    duration={0}
    delay={0.5} // it will wait 4 seconds before next transition starts
    timingFunction="linear"
    className="section-styles"
  >
                       <Link to="https://buy.stripe.com/4gwaGlazceu506s6oH" target='blank_'><h1 style={{color:"white",fontSize:"48px",textAlign:"center"}}>The Perfect Christmas Gift<p style={{color:"white",fontSize:"16px"}}>Click Here</p></h1></Link>
                        </AnimatedBg>
          <h2
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            NCBBQHOF T-SHIRT & HAT
          </h2>
          <h3
            style={{
              color: "black",
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            Shirt Also available in White
          </h3>
          <Dropdown style={{ textAlign: "center" }}>
            <Dropdown.Toggle
              variant="success"
              id="dropdown-basic"
              style={{ color: "" }}
            >
              Click to Choose Color And Size Or Hat
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/dR63dT0YC85H5qMaEK"
              >
                Small Grey $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/eVa15LgXA2Ln06s9AH"
              >
                Medium Grey $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/8wM01HgXA0Df7yUbIQ"
              >
                Large Grey $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/5kA01H8r4dq15qM4gp"
              >
                XLarge Grey $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/7sIg0FdLoclX1aw9AK"
              >
                2X Grey $25.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/bIYbKpgXA3PrbPafZ9"
              >
                3X Grey $25.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/9AQ8yd0YC99L5qM3ch"
              >
                Small White $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/28o15LbDgbhT6uQfZa"
              >
                Medium White $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/14k15LbDg0Df6uQ28l"
              >
                Large White $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/5kA5m1fTwbhTaL67sG"
              >
                XLarge White $22.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/4gw01HbDgeu5dXibIX"
              >
                2X White $25.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/aEUaGl8r4clX8CYdR6"
              >
                3X White $25.00 + Shipping
              </Dropdown.Item>
              <Dropdown.Item
                target="_blank"
                href="https://buy.stripe.com/eVaeWB4aOeu51aw28p"
              >
                HAT $25.00 + Shipping
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <div
            className=""
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-evenly",
            }}
          >
            <figure>
              <h3 style={{ color: "black", textAlign: "center" }}>Front</h3>
              <img
                src={`../images/resource/tfront.jpg`}
                alt=""
                style={{ width: 250}}
              />
            </figure>

            <figure>
              <h3 style={{ color: "black", textAlign: "center" }}>Back</h3>
              <img
                src={`../images/resource/tback.jpg `}
                alt=""
                style={{ width: 250 }}
              />
            </figure>
            <figure>
              <h3 style={{ color: "black", textAlign: "center" }}>Hat</h3>
              <img
                src={`../images/resource/hat.jpg `}
                alt=""
                style={{ width: 250 }}
              />
            </figure>
          </div> */}
        </div>
          </div>
          
          {/* <div><PriceV2/></div> */}
          
          <ClientV1 />
        </section>
      </>
    );
};

export default BuyTicketContent;
