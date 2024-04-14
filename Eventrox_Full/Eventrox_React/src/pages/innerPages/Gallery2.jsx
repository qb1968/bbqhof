import React from "react";
import HeaderV1 from "../../components/header/HeaderV1";
import FooterV1 from "../../components/footer/FooterV1";
import GalleryV2 from "../../components/gallery/GalleryV2"
import BreadCrumb from "../../components/breadCrumb/BreadCrumb";

const Gallery = () => {
  return (
    <>
      <div className="page-wrapper">
        <span className="header-span"></span>
        <HeaderV1 headerStyle="header-style-two" parentMenu="about" />

        <GalleryV2 />
        <FooterV1 />
      </div>
    </>
  );
};

export default Gallery;
