import React from "react";

const Statistics = () => {
  return <div className="statistic">
    <div className="container">
      <div className="row">
        <div className="col-lg-3 col-sm-6 fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
          <div className="platfrom-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-1.png" alt="" />
            </div>
            <p className="text">Extra Fast <br /> Conversion</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 fadeInUp" data-wow-duration="0.4s" data-wow-delay="0.4s">
          <div className="platfrom-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-2.png" alt="" />
            </div>
            <p className="text">Secure <br /> Storage</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
          <div className="platfrom-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-3.png" alt="" />
            </div>
            <p className="text">No Limits on <br /> Storage</p>
          </div>
        </div>

        <div className="col-lg-3 col-sm-6 fadeInUp" data-wow-duration="0.6s" data-wow-delay="0.6s">
          <div className="platfrom-box text-center">
            <div className="icon">
              <img src="assets/img/offer-icon-4.png" alt="" />
            </div>
            <p className="text">We have the best <br /> Storage rate</p>
          </div>
        </div>

        <div className="col-12">
          <div className="content">
            <div className="bg-pic">
              <img src="assets/img/statistic-bg.png" alt="" />
            </div>
            <div className="section-head text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
              <h4 className="lasthead"> Our stats say more than any words</h4>
              <h2 className="title"> Today's Statistics</h2>
            </div>

            <div className="row justify-content-center">
              <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
                <div className="statis-boxx">
                  <div className="icon">
                    <img src="assets/img/stasictic-icon-1.png" alt=""/>
                  </div>
                  <div className="statis-content">
                    <h3 className="suntitle">3</h3>
                    <p className="text">Storage done</p>
                  </div>
                </div>
              </div>

              

              <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                <div className="statis-boxx">
                  <div className="icon">
                    <img src="assets/img/stasictic-icon-1.png" alt=""/>
                  </div>
                  <div className="statis-content">
                    <h3 className="suntitle">2 Mins</h3>
                    <p className="text">Average processing</p>
                  </div>
                </div>
              </div>

              <div className="col-xl-4 col-lg-6 wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.5s">
                <div className="statis-boxx">
                  <div className="icon">
                    <img src="assets/img/stasictic-icon-1.png" alt=""/>
                  </div>
                  <div className="statis-content">
                    <h3 className="suntitle">215 Million GB</h3>
                    <p className="text">IN  1 GRAM OF DNA</p>
                    </div>
                </div>
              </div>             
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>;
};

export default Statistics;
