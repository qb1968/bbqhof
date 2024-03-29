import React, { useState } from 'react';
import { Gallery } from 'react-photoswipe-gallery';
import GalleryV2Data from '../../jsonData/gallery/GalleryV2Data.json'
import SingleImageBox from './SingleImageBox';
import Pagination from 'react-paginate';

const GalleryPageContent = () => {

    const [currentPage, setCurrentPage] = useState(1);
    // eslint-disable-next-line no-unused-vars
    const [itemsPerPage, setItemsPerPage] = useState(9);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const currentGalleryData = GalleryV2Data.slice(startIndex, endIndex);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected + 1);
        setTimeout(() => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 200);
    };

    const totalPages = Math.ceil(GalleryV2Data.length / itemsPerPage);

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
        <section className="team-area fix p-relative pt-100 pb-50">
          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              borderBottom: "1rem solid black",
            }}
          >
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              Alston Bridges Barbecue
            </h2>
            <div className="row">
              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/ab1.png`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/ab1.1.png`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/ab3.png`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/ab5.png`} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <img src={`../images/resource/ab4.png`} alt="" />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              borderBottom: "1rem solid black",
            }}
          >
            <h2 style={{ color: "black", fontWeight: "bold" }}>Grady's BBQ</h2>
            <div className="row">
              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/gradys1.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/gradys2.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img
                    src={`../images/resource/gradys3.jpg`}
                    alt=""
                    
                  />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/gradys4.png`} alt="" />
                </figure>
              </div>
              <div className="col-lg-3">
                <img src={`../images/resource/gradys5.jpg`} alt="" />
              </div>
              <div className="col-lg-3">
                <img src={`../images/resource/gradys6.jpg`} alt="" />
              </div>
            </div>
          </div>

          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              borderBottom: "1rem solid black",
            }}
          >
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              Hursey's Bar-B-Q
            </h2>
            <div className="row">
              <div className="col-lg-2">
                <figure>
                  <img src={`../images/resource/hbq15.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/hbq27.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-2">
                <figure>
                  <img
                    src={`../images/resource/hbq4.jpg`}
                    alt=""
                    // style={{ width: 300, height: 500 }}
                  />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/hbq8.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-4">
                <figure><img src={`../images/resource/hbq6.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-4">
                <figure><img src={`../images/resource/hbq7.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-2">
                <figure><img src={`../images/resource/hbq25.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-4">
                <figure> <img src={`../images/resource/hbq9.jpg`} alt="" /></figure>
               
              </div>
              <div className="col-lg-4">
                <figure><img src={`../images/resource/hbq10.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-4">
                <figure><img src={`../images/resource/hbq1.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-4">
                <figure><img src={`../images/resource/hbq.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-4">
                <figure><img src={`../images/resource/20240214_084221.jpg`} alt="" /></figure>
                
              </div>
              <div className="col-lg-8">
                <figure><img src={`../images/resource/hbq11.jpg`} alt="" /></figure>
                
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              borderBottom: "1rem solid black",
            }}
          >
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              Lexington Barbecue
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/lb1.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/lb2.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img
                    src={`../images/resource/lb3.jpg`}
                    alt=""
                   
                  />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/lb5.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <img src={`../images/resource/lb4.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              borderBottom: "1rem solid black",
            }}
          >
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              Sam Jones BBQ
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/sj1.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/sj2.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img
                    src={`../images/resource/sj3.jpg`}
                    alt=""
                    style={{ width: 300, height: 500 }}
                  />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/sj4.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <img src={`../images/resource/sj5.jpg`} alt="" />
              </div>
              <div className="col-lg-6">
                <img src={`../images/resource/sj6.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div
            className="container"
            style={{
              padding: 20,
              marginBottom: 70,
              borderBottom: "1rem solid black",
            }}
          >
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              Skylight Inn BBQ
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/si1.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/si2.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img
                    src={`../images/resource/si3.jpg`}
                    alt=""
                    
                  />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/si4.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-3">
                <img src={`../images/resource/si5.jpg`} alt="" />
              </div>
              <div className="col-lg-3">
                <img src={`../images/resource/si6.jpg`} alt="" />
              </div>
            </div>
          </div>
          <div className="container" style={{ padding: 10 }}>
            <h2 style={{ color: "black", fontWeight: "bold" }}>
              Stamey's Barbecue
            </h2>
            <div className="row">
              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/Warner in Pit.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/Warner 3rd from left.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-4">
                <figure>
                  <img
                    src={`../images/resource/IMG_1215.jpg`}
                    alt=""
                    
                  />
                </figure>
              </div>

              
              <div className="col-lg-6">
                <figure><img src={`../images/resource/IMG_1648.jpg`} alt="" /></figure>
                
              </div>
            </div>
          </div>
        </section>
      </>
    );
};

export default GalleryPageContent;
