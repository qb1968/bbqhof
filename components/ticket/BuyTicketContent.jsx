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
import ComingSoon2 from '../ComingSoon2';

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
            <ComingSoon2 />
           
            <div
              className="container"
              style={{
                padding: 20,
                marginBottom: 70,
                marginTop: 50,
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
