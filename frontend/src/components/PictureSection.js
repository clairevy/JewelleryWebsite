import React from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const PictureSection = () => {
  return (
    <div id="picture_section">
      <div className="row">
        <div className="col-3">
          <img src={image1} alt="Image1" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src={image2} alt="Image2" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src={image3} alt="Image3" className="img-fluid" />
        </div>
        <div className="col-3">
          <img src={image4} alt="Image4" className="img-fluid" />
        </div>
      </div>
    </div>
  );
};

export default PictureSection;