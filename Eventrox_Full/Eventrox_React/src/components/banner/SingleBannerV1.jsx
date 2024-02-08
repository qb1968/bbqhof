import React from "react";
import { HashLink as Link } from "react-router-hash-link";

const SingleBannerV1 = ({ banner }) => {
  const {
    thumb,
    subTitle,
    title1,
    title2,
    list1,
    list2,
    list3,
    btnLink,
    btnText,
    thumb2,
  } = banner;

  return (
    <>
      <div
        className="slide-item"
        style={{ backgroundImage: `url(images/main-slider/${thumb}` }}
      >
        <div className="auto-container">
          <div
            className="content-box"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {/* <figure className="image"> */}
            <img src={`/images/main-slider/${thumb2}`} alt="image" />
            {/* </figure> */}

            <ul className="info-list">
              <h3
                className="title"
                style={{ color: "white", fontSize: "40px", padding: 5 }}
              >
                {subTitle}{" "}
              </h3>
              {/* <h3 style={{ color: "white", fontSize: "38px" }}>{list1}</h3>
              <li style={{ color: "white", fontSize: "38px" }}>{list3}</li> */}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleBannerV1;
