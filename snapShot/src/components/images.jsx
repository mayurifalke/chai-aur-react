import React, { useContext } from 'react';
import Imagecontext from '../contexts/imagecontext';

export default function Images(props) {
  const { url: urls } = useContext(Imagecontext); // Renamed `url` to `urls` to reflect the array

  if (!urls || urls.length === 0) return <div>No Images Available</div>;

  return (
    <div className="container mt-5">
      <div className="row">
        {urls.map((url, index) => (
          <div key={index} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <img src={url} alt={`Image ${index}`} className="img-fluid" />
          </div>
        ))}
      </div>
    </div>

  );
}
