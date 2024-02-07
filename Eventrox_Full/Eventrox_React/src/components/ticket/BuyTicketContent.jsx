import React from 'react';
import SocialShare from '../others/SocialShare';
import ReactWOW from 'react-wow';
import { toast } from 'react-toastify';

const BuyTicketContent = () => {

    const handlePurchase = (event) => {
        event.preventDefault()
        event.target.reset()
        toast.success("Purchase Request Submitted!")
    }

    return (
      <>
        <section className="buy-ticket">
          <div className="anim-icons full-width">
            <span className="icon icon-circle-blue wow fadeIn"></span>
            <ReactWOW animation="zoomIn">
              <span className="icon icon-circle-1"></span>
            </ReactWOW>
          </div>
          <div className="auto-container">
            <div className="row">
              <div className="content-column col-lg-8 col-md-12 col-sm-12 order-2">
                <div className="inner-column">
                  <h2>
                    NCBBQHOF CEREMONY <span>$20.00</span>
                  </h2>
                  <p style={{ color: "black" }}>
                    Come join us tonight as history will be made with two hall
                    of fame events in one night. Help us celebrate the NCBBQHOF
                    and The Oak Ridge Boys Farewell tour. Come early before the
                    concert and enjoy a barbecue dinner provided by the best of
                    the best in NC. Featuring Hall of Famers Bridges Barbecue of
                    Shelby, Grady's BBQ of Dudley, Hursey's Bar-B-Q of
                    Burlington, and Lexington Barbecue.
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
              </div>
              <div className="form-column col-lg-4 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="ticket-form">
                    <form onSubmit={handlePurchase}>
                      <div className="form-group">
                        <input
                          type="text"
                          name="username"
                          placeholder="Your Name"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          placeholder="Your Email"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          name="phone"
                          className="no-arrows"
                          placeholder="Phone"
                          autoComplete="off"
                          required
                        />
                      </div>
                      <div className="form-group">
                        <input
                          type="number"
                          name="qty"
                          min="1"
                          placeholder="Quantity"
                          autoComplete="off"
                          required
                        />
                      </div>

                      <div className="form-group">
                        <button
                          className="theme-btn btn-style-three"
                          type="submit"
                          name="Submit"
                        >
                          <span className="btn-title">Purchase</span>
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default BuyTicketContent;