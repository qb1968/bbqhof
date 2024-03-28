import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import { HashLink as Link } from "react-router-hash-link";
import Dropdown from "react-bootstrap/Dropdown";

const Shop = () => {
  return (
    <>
      {/* <section
          className="gallery-section"
          style={{ backgroundColor: "#dedede" }}
        >
          <div className="auto-container">
            <div className="sec-title text-center">
                        <span className="title">Gallery</span>
                        <h1>Site Under Construction</h1>
            </div>
                    <div className="row" >
                        
              <div className="image-box">
                
              </div>
             
            </div>
          </div>
        </section> */}
      <HeaderV1 headerStyle="header-style-two" parentMenu="about" />
      <span className="header-span"></span>
      <section className="">
        <div
          className="container"
          style={{
            padding: 20,
            marginBottom: 70,
            borderBottom: "1rem solid black",
          }}
        >
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
              justifyContent: "space-between",
            }}
          >
            <figure>
              <h3 style={{ color: "black", textAlign: "center" }}>Front</h3>
              <img
                src={`../images/resource/tfront.jpg`}
                alt=""
                style={{ width: 300 }}
              />
            </figure>

            <figure>
              <h3 style={{ color: "black", textAlign: "center" }}>Back</h3>
              <img
                src={`../images/resource/tback.jpg `}
                alt=""
                style={{ width: 335 }}
              />
            </figure>
            <figure>
              <h3 style={{ color: "black", textAlign: "center" }}>Hat</h3>
              <img
                src={`../images/resource/hat.jpg `}
                alt=""
                style={{ width: 335 }}
              />
            </figure>
          </div>
        </div>
      </section>
      <FooterV1 />
    </>
  );
};
export default Shop;
