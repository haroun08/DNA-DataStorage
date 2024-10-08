import React from "react";

const Feature = () => {
  return <div className="fature" id="howworks">
    <div className="container">
      <div className="row justify-content-center">
        <div 
        className="col-12 text-center wow-fadeInUp" 
        data-wow-duration="0.3s"
        data-wow-delay="0.3s"
        >
          <div className="section-head">
            <h4 className="lasthead">how does it works</h4>
            <h2 className="title">It's really easy</h2>
            <p className="text">Follow these 3 easy steps to store your data using our cutting-edge DNA technology.</p>
            </div>
        </div>

        <div className="col-xl col-lg-6 text-center wow fadeInUp"
                 data-wow-duration="0.3s"
                  data-wow-delay="0.3s"
        >
          <div className="feature-box">
            <div className="tumb">
              <img src="assets/img/feature-icon-1.png" alt="" />
            </div>
            <p className="text">Complete the necessary <br />verification process.</p>
            </div>
        </div>

        <div div className="col-xl col-lg-6 text-center wow fadeInup"
                 data-wow-duration="0.3s"
                  data-wow-delay="0.3s">
                              <div className="feature-box">
            <div className="tumb">
              <img src="assets/img/feature-icon-2.png" alt="" />
            </div>
            <p className="text">Pass account <br />verification</p>
          </div>
        </div>

        <div div className="col-xl col-lg-6 text-center wow fadeInup"
                 data-wow-duration="0.3s"
                  data-wow-delay="0.3s">
                              <div className="feature-box">
            <div className="tumb">
              <img src="assets/img/feature-icon-3.png" alt="" />
            </div>
            <p className="text">Your data is securely stored <br />using DNA technology.</p>
            </div>
        </div>

      </div>
    </div>
  </div>;
};

export default Feature;
