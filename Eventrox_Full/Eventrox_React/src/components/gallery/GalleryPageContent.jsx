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
        <section className="team-area fix p-relative pt-120 pb-90">
          <h1 
            style={{
              padding:10,
              fontSize: "30px",
              fontFamily: "Alex Brush",
              textAlign: "center",
              color: "black",
            }}
          >
            Gallery
          </h1>
          <div className="container" style={{padding:10}}>
            <h2>Hursey's Bar-B-Q</h2>
            <div className="row">
              <div className="col-lg-4">
                <figure>
                  <img src={`../images/resource/hbq.jpg`} alt="" />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/hbq2.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/hbq3.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/hbq4.jpg`} alt="" style={{width:300,height:500}} />
                </figure>
              </div>

              <div className="col-lg-6">
                <figure>
                  <img src={`../images/resource/hbq5.jpg`} alt="" />
                </figure>
              </div>
              <div className="col-lg-3">
                <img src={`../images/resource/hbq6.jpg`}  alt="" />
              </div>
              <div className="col-lg-4">
                <img src={`../images/resource/hbq7.jpg`} alt="" />
              </div>
              
            </div>
          </div>
         
        </section>
      </>
    );
};

export default GalleryPageContent;