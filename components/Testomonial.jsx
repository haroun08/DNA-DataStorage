import React from "react";
import {FaRegStar} from "react-icons/fa"
const Testomonial = () => {
  return <section className="testimonial">
    <div className="container">
      <div className="row justify-conent-center">
        <div className="col-lg-5 text-center wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.3s">
          <div className="section-head">
            <h2 className="title"> Our Team</h2>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12 wow fadeInUp" data-wow-duration="0.3s" data-wow-delay="0.5s">
          <div className="about-testimonial">
            <img src="assets/img/world-map.png" alt="" />
            <div className="client one">
              <div className="img one" style={{backgroundImage: "url('assets/img/testi1.png')"}}>
                <div id="myPopover" className="popover popover-default mypopover">
                  <div className="client-review">
                    <div className="stars">
                      {[1,2,3,4,5].map((item,index) =>(
                        <i className="fas ">
                          <FaRegStar key={index} />
                        </i>
                      ))}
                    </div>
                    <p className="bottom-text">team leader</p>
                    <div className="client-info">
                      <h4 className="name">Khalil oueslati</h4>
                      <p className="position">student at ESPRIT</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>

  </section>;
};

export default Testomonial;
