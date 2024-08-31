import React from "react";
import { IoCloseOutline } from "react-icons/io5";

const Hero = ({
  setInputAmount,
  setLoader,
  setOpenToken,
  LOAD_TOKEN,
  token_1,
  token_2,
  setToken_1,
  setToken_2,
  swap
}) => {
  // Reset button
  const reset = () => {
    setToken_1("");
    setToken_2("");
  };

  return (
    <div className="banner" id="home" style={{backgroundImage: `url("assets/img/banner-bg.png")`}}>
      <div className="illustration">
        <img src="assets/img/banner-bg-1.png" className="one" alt="" />
        <img src="assets/img/banner-bg-2.png" className="two" alt="" />
        <img src="assets/img/banner-map.png" className="three" alt="" />
      </div>

      <div className="hero-area"> 
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <div className="col-xl-7 col-lg-6">
              <div className="banner-content wow fadeInUp" data-wow-duration="0.5s" data-wow-delay="0.3s">
                <h3 className="subtitle">Revolutionary and Secure</h3>
                <h1 className="head">DNA Data Storage</h1>
                <p className="text">Our platform offers a groundbreaking way to store and manage your data using DNA technology. Experience unparalleled security and efficiency with our innovative service.</p>
              </div>
            </div>

            <div className="col-xl-4 col-lg-6 wow fadeInRightBig" data-wow-delay="0.3s" data-wow-duration="0.5s">
              <div className="exchange">
                <h5 className="ex-head">DNA Data Storage</h5>
                <div className="exchange-box">
                  <div className="selector">
                    <p className="text">Current Storage</p>
                    <div className="coin">
                      <span>{token_1?.symbol}</span>
                    </div>
                  </div>

                  <div>
                    <div className="form-group">
                      <span onClick={() => setOpenToken(true)}>Import file</span>
                      <input 
                        type="text" 
                        placeholder={token_1?.symbol || "select"} 
                        className="form-control" 
                        onChange={(e) => setInputAmount(e.target.value)}
                      />
                    </div>
                  </div>

                  {token_1 ? (
                    <span className="rate">
                      {`Available Storage: ${token_1?.balance.slice(0, 10)}`} {token_1?.symbol}
                    </span>
                  ) : ""}
                </div>
                
                <a className="rotate" onClick={() => reset()}>
                  <img src="assets/img/exchange-img.png" alt="" />
                </a>

                <div className="exchange-box">
                  <div className="selector">
                    <p className="text">DNA Conversion</p>
                    <div className="coin">
                      <span>{token_2?.symbol}</span>
                    </div>
                  </div>

                  <div>
                    <div className="form-group">
                      <span onClick={() => setOpenToken(true)}>Download</span>
                      <input 
                        type="text" 
                        placeholder={token_2?.symbol || "select"} 
                        className="form-control" 
                        onChange={() => setOpenToken(true)}
                      />
                    </div>
                  </div>

                  {token_2 ? (
                    <span className="rate">
                      {`Available Storage: ${token_2?.balance.slice(0, 10)}`} {token_2?.symbol}
                    </span>
                  ) : ""}
                </div>

                <a onClick={() => swap()} className="button button-1">Store Data</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
