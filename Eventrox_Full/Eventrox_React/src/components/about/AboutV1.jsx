import React from 'react';
import AboutV1Data from '../../jsonData/about/AboutV1Data.json'
import { HashLink as Link } from 'react-router-hash-link'
import ReactWOW from 'react-wow';


const AboutV1 = () => {
    return (
      <>
        <section className="about-section">
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
            <div className="row">
              <div className="content-column col-lg-6 col-md-12 col-sm-12">
                <div className="inner-column">
                  <div className="sec-title">
                    <span className="title">ABOUT </span>
                    <h2>Welcome </h2>
                    <div className="text">
                      The North Carolina Bar-B-Q Hall of Fame will unite and
                      give accreditation to the men and women who through years
                      and decades of hard work and literal sweat and blood
                      created and established North Carolina’s worldwide famous
                      reputation of pit cooked pork barbq .
                    </div>
                    <div className="text">
                      These BarBQ pioneers inducted into the hof have been
                      described individually and rightly so as, The Legend, The
                      godfather, The King, The Capital of BarBQ, The Prime
                      Minister, Icon, and many other titles from peers to local
                      and national newspapers, magazine authors, tv
                      personalities, etc. spreading worldwide. They have
                      numerous awards on top of awards, and recognition from the
                      elite publicist to date. The approval of politicians, high
                      profile athletes, entertainers, and movie stars have added
                      to the debate, (sometimes heated) between the locals and
                      citizens of North Carolina of who has the best BarBQ,
                      which has proven to be an impossible task! But now the
                      accolades can be summed up in the brotherhood and
                      sisterhood of their own by entering into the prestigious
                      North Carolina Bar-B-Q Hall of Fame. The Hall of Famers
                      also have more in common than the above listed credits,
                      the long hours of hard work, and sacrifices that are only
                      known by them, the reward of working with their families,
                      and respect and appreciation for other ambassadors of
                      North Carolina BarBQ. Being inducted into the Hall of Fame
                      is A CROWNING ACHIEVEMENT!
                    </div>
                    <div className="text">
                      The North Carolina Bar-B-Q Hall of Fame recognizes and
                      preserves the original definition of North Carolina
                      Bar-B-Q which is pork cooked over live wood coals, ranging
                      from whole hog which is more popular in the eastern part
                      of the state, to pork shoulders and butts in the piedmont
                      and western parts of the state. North Carolina BarBQ will
                      be found chopped, pulled, minced, and sliced with the
                      eastern section of North Carolina earning their reputation
                      for seasoning their BarBQ with a vinegar and pepper based
                      sauce, and the western section proving to be a sweeter
                      based sauce, and is fitting for the piedmont sauce to be a
                      blend of the east and west sauces. A known fact is from
                      Manteo to Murphy, North Carolinians enjoy pig picking for
                      most any occasion or celebration! Over time, gas and
                      electric pit cooked BarBQ has also risen to popularity and
                      is included in the best of the best BarBQ conversation.
                    </div>
                    <div className="text">
                      The original North Carolina method of cooking pork BarBQ
                      over wood coals is a pure process with the human skill
                      element determining the quality and taste of the finished
                      product. The wood coals create a distinct smoke flavor,
                      but is NOT smoked cooked, and is not regulated by
                      automated devices, technology, or apps adjusting or
                      regulating the cooking process, but rather by the watchful
                      eye and hand of the experienced pitmaster tested and tried
                      thru time and experience.
                    </div>
                    <div className="text">
                      The members of the North Carolina Hall of Fame have proven
                      and earned their place in North Carolina history of BarBQ,
                      some businesses have roots going back to the 1920’s, with
                      many from the 1940’s. Many businesses are second, third,
                      and fourth generations selling literally millions of
                      pounds of BarBQ. The hard work by these families, loyal
                      employees, and individuals to build their business in this
                      great state of North Carolina while supporting the local
                      economy and state is surely appreciated and deserving of
                      the highest honor of being inducted into the North
                      Carolina BarBQ Hall of Fame!
                    </div>
                  </div>
                </div>
              </div>
              <div className="image-column col-lg-6 col-md-12 col-sm-12">
                <div className="image-box">
                  <ReactWOW animation="fadeIn">
                    <figure className="image">
                      <img src="../images/resource/alliance.jpg" alt="image" />
                    </figure>
                  </ReactWOW>
                </div>
              </div>
              
            </div>
          </div>
        </section>
      </>
    );
};

export default AboutV1;