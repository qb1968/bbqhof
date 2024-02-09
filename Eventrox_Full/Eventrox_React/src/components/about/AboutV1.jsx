import React from 'react';
import AboutV1Data from '../../jsonData/about/AboutV1Data.json'
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';


const AboutV1 = () => {
    return (
      <>
        <section
          className="about-section"
          style={{ backgroundColor: "#dedede" }}
        >
          {/* <div className="anim-icons full-width">
                    <span className="icon icon-circle-blue"><img src={Logo }/></span>
                    <ReactWOW animation='fadeInLeft'>
                        <span className="icon icon-dots"></span>
                    </ReactWOW>
                    <ReactWOW animation='zoomIn'>
                        <span className="icon icon-circle-1"></span>
                    </ReactWOW>
                </div> */}
          <div className="auto-container">
            <div className="image-column col-lg-10 col-md-12 col-sm-12">
              <div className="image-box">
                <ReactWOW animation="fadeIn">
                  <figure className="image">
                    <img src="../images/resource/alliance.jpg" alt="image" />
                  </figure>
                </ReactWOW>
              </div>
            </div>
            <div className="row">
              <div className="content-column col-lg-12 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">ABOUT </span>
                    <h2>Welcome </h2>
                    <div
                      className="text"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      The North Carolina Bar-B-Q Hall of Fame will unite and
                      give accreditation to the men and women who through the years
                      and decades of hard work created and established North Carolina’s worldwide famous reputation of pit cooked pork barbq .
                      
                     
                    </div>
                    <div
                      className="text"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      These BAR-B-Q pioneers inducted into the HOF have been
                      described individually and rightly so as, The Legend, The
                      Godfather, The King, The Capital of BAR-B-Q, The Prime
                      Minister, Icon, and many other titles from peers to local
                      and national newspapers, magazine authors, tv
                      personalities spreading it worldwide.
                    </div>
                    <div
                      className="text"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      They have numerous awards and
                      recognition from many publications to date. The approval
                      of politicians, high profile athletes, entertainers, and
                      movie stars have added to the debate
                      between the locals and citizens of North Carolina of who
                      has the best BAR-B-Q, which has proven to be an impossible
                      task! But now the accolades can be summed up in the
                      brotherhood and sisterhood of their own by entering into
                      the prestigious North Carolina Bar-B-Q Hall of Fame. The
                      Hall of Famers also have more in common than the above
                      listed credits, the long hours of hard work, and
                      sacrifices that are only known by them, the reward of
                      working with their families, respect and appreciation
                      for other ambassadors of North Carolina BAR-B-Q. 
                      Inducted into the Hall of Fame is A CROWNING ACHIEVEMENT!
                    </div>

                    <div
                      className="text"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      The North Carolina Bar-B-Q Hall of Fame recognizes and
                      preserves the original definition of North Carolina
                      Bar-B-Q which is pork cooked over live wood coals, ranging
                      from whole hog which is more popular in the eastern part
                      of the state, to pork shoulders and butts in the piedmont
                      and western parts of the state. North Carolina BAR-B-Q can
                      be found chopped, pulled, minced, and sliced with the
                      eastern section of North Carolina earning their reputation
                      for seasoning their BarBQ with a vinegar and pepper based
                      sauce, and the western section proving to be a sweeter
                      based sauce, and it is fitting for the piedmont sauce to be a
                      blend of the east and west sauces. A known fact is from
                      Manteo to Murphy, North Carolinians enjoy a pig picking for
                      most any occasion or celebration! Over time, gas and
                      electric pit cooked BAR-B-Q has also risen to popularity and
                      is included in the best of the best BAR-B-Q conversations.
                    </div>

                    <div
                      className="text"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      The original North Carolina method of cooking pork BAR-B-Q
                      over wood coals is a pure process with the human skill
                      element determining the quality and taste of the finished
                      product. The wood coals create a distinct smoke flavor and
                      are controlled by the watchful eye and hand of the
                      pitmaster, using his/her experience and knowledge of
                      weather, temperature, humidity, wind, and wood moisture to
                      produce the best outcome of great BAR-B-Q. A more
                      modern process of smoked BAR-B-Q produces an excellent dish
                      by using technology, automated devices, and apps to
                      help simplify the process, versus the 10 to 12 hours of
                      continual attention, shoveling coals, and rewarding hard
                      work of the pitmaster.
                    </div>
                    <div
                      className="text"
                      style={{ color: "black", textAlign: "center" }}
                    >
                      The members of the North Carolina Hall of Fame have proven
                      and earned their place in North Carolina history of BAR-B-Q,
                      some businesses have roots going back to the 1920’s, with
                      many from the 1940’s. Many businesses are second, third,
                      and fourth generations selling literally millions of
                      pounds of BAR-B-Q. The hard work by these families, loyal
                      employees, and individuals to build their business in this
                      great state of North Carolina while supporting the local
                      economy and state is surely appreciated and deserving of
                      the highest honor of being inducted into the North
                      Carolina BAR-B-Q Hall of Fame!
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default AboutV1;
