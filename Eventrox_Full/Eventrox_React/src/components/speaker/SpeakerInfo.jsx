import React from "react";
import SocialShare from "../others/SocialShare";
import { NavHashLink as Link } from "react-router-hash-link";
import ClientV1 from "../client/ClientV1";

const SpeakerInfo = ({ speakerInfo }) => {
  const { thumb, thumb2, thumb3, thumb4, name, name2, info, info2, info3, info4, info5, info6, info7 } =
    speakerInfo;

  return (
    <>
      <section className="speaker-detail">
        <div className="auto-container">
          <div className="row">
            <div className="image-column col-lg-4 col-md-12 col-sm-12">
              <div className="image-box">
                <figure className="image">
                  <img src={`../images/resource/${thumb}`} alt="image" />
                </figure>

                {/* <div className="btn-box">
                    <Link
                      to="/gallery#/page2"
                      className="theme-btn btn-style-one"
                    >
                      <span className="btn-title">Gallery</span>
                    </Link>
                  </div> */}
              </div>
            </div>
            <div className="info-column col-lg-8 col-md-12 col-sm-12">
              <div className="inner-column">
                <div className="text-box">
                  <h3>{name}</h3>
                  <h4>{name2}</h4>

                  <p style={{ color: "black" }}>{info}</p>
                 
                  <p style={{ color: "black" }}>{info2}</p>
                  <p style={{ color: "black" }}>{info3}</p>
                  <p style={{ color: "black" }}>{info4}</p>
                  <p style={{ color: "black" }}>{info5}</p>

                  <p style={{ color: "black" }}>{info6}</p>
                  <p style={{ color: "black" }}>{info7}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
    </>
  );
};

export default SpeakerInfo;
