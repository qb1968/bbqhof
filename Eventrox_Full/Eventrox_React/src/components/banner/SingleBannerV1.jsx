import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import AnimatedBg from "react-animated-bg";
import Snowfall from "react-snowfall";

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
    thumb3
  } = banner;

  return (
    <>
     
       
      <div
      
        className="slide-item"
        style={{ backgroundImage: `url(images/main-slider/${thumb}`}}
      >
         <Snowfall snowflakeCount={300} color="white"  /> 
         {/* Adjust snowflakeCount as needed */}
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
            <AnimatedBg
    colors={["red", "green"]}
    duration={0}
    delay={0.5} // it will wait 4 seconds before next transition starts
    timingFunction="linear"
    className="section-styles"
  >
                       <Link to="/buy-ticket"><h1 style={{color:"white",fontSize:"72px"}}>The Perfect Christmas Gift</h1><p style={{color:"white",fontSize:"16px"}}>Click Here</p></Link>
                        </AnimatedBg>
                      <img src={`/images/main-slider/${thumb2}`} alt="image"  />
                      <h1 style={{color:"white",fontSize:"72px"}}>2025</h1>
                     
            {/* </figure> */}
            

  
            {/* <ul className="info-list" >
              <h3
                className="title"
                style={{ color: "white", fontSize: "40px", padding: 5 }}
              >
                {subTitle}{" "}
              </h3>
              <h3 style={{ color: "white", fontSize: "25px" }}>{list1}</h3>
              <h3 style={{ color: "white", fontSize: "25px" }}>{list2}</h3>
              <h3 style={{ color: "white", fontSize: "25px" }}>{list3}</h3>
              
              <h3 style={{ color: "white", fontSize: "25px" }}>{list4}</h3>
              {/* <h3 style={{ color: "white", fontSize: "25px" }}>{list5}</h3> */}
              {/* <div style={{display:"flex",justifyContent:"center"}}>
              <img src={`/images/background/${thumb3}`} alt="image" style={{width:250,}} />
            </div>
            </ul>  */}
           
            
          </div>
          
        {/* <Link to="https://buy.stripe.com/cN229P8r4eu52eA14m" target="blank" style={{fontSize:"38px",marginTop:30,color:"white",fontWeight:"bold",textDecorationLine:"underline"}}><h2>OR DONATE HERE</h2></Link> */}
        </div>
      </div>
     
    </>
  );
};

export default SingleBannerV1;
