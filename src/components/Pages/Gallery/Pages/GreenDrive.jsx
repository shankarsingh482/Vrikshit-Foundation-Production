import React from 'react';
import Banner from '../../../common/Banner';
import HorizontalLine from '../../../common/horizontalline';
import './common.css';
import Breadcrumb from '../../../common/BreadCrumb';

const GreenDrive = () => {
  return (
    <div className="driveContainer">
      <Banner
        bannerImage="greenDriveCover"
        pageDescription="Green Drive"
        quotes="We wish to bring many good things to life."
      />
      <Breadcrumb second="Gallery" secondRoute="gallery" third="Clean Drive" />
      <h1 className="h3_gallery_heading">Our Gallery</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit est
        facilis maiores, perspiciatis accusamus asperiores sint consequuntur
        debitis.
      </p>
      <HorizontalLine className="hr_style" />
    </div>
  );
};

export default GreenDrive;
