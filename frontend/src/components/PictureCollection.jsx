import React from 'react';
import imageCollection1 from '../assets/image_collection_1.png';
import imageCollection2 from '../assets/image_collection_2.png';
import imageCollection3 from '../assets/image_collection_3.png';

const PictureCollection = () => {
  return (
    <div className="picture_collection">
      <div className="picture_collection_title">World of Claire</div>
      <div className="picture_collection_description">
        <p>
          Illuminating the many facets of Swarovski, from heritage to
          lifestyle and beyond.
        </p>
        <span>Watch me</span>
      </div>
      <div className="picture_collection_content">
        <div className="row">
          <div className="col-4">
            <div className="collection_pic">
              <img src={imageCollection1} alt="Collection 1" />
            </div>
            <div className="collection_desc">
              <h1>Looking front</h1>
              <p></p>
            </div>
          </div>
          <div className="col-4">
            <div className="collection_pic">
              <img src={imageCollection2} alt="Collection 2" />
            </div>
            <div className="collection_desc">
              <h1>side part</h1>
              <p></p>
            </div>
          </div>
          <div className="col-4">
            <div className="collection_pic">
              <img src={imageCollection3} alt="Collection 3" />
            </div>
            <div className="collection_desc">
              <h1>front side</h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureCollection;