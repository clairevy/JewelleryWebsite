import React from 'react';
import imageMainItemLeft from '../assets/image_main_item_left.png';
import imagePicture from '../assets/image_picture.png';
import imageMainItemRight2 from '../assets/image_main_item_right_2.png';

const MainItem = () => {
  return (
    <div className="main_item">
      <div className="row">
        <div className="col-6">
          <div className="main_item_title">CLAIRE</div>
          <div className="main_item_picture_big">
            <img
              src={imageMainItemLeft}
              alt="Image5"
              className="img-fluid"
            />
          </div>
        </div>
        <div className="col-6">
          <div className="main_item_picture">
            <img
              src={imagePicture}
              alt="Image6"
              className="img-fluid"
            />
          </div>
          <div className="main_item_picture">
            <img
              src={imageMainItemRight2}
              alt="Image6"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainItem;