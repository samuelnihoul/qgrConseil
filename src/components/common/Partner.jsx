import React from "react";
import Marquee from "react-fast-marquee";

const Partner = ({ gap }) => {
  return (
    <>
      <div className={`logo-section ${gap}`}>
        <div className="container-fluid one">
          <div className="row">
            <div className="col-lg-12">
              <div className="logo-wrapper">
                <div className="logo-title">
                  <h6>
                    Ils nous font confiance
                  </h6>
                </div>
                <div className="logo-area">
                  <Marquee>
                    <div className="marquee_text2">
                      <a href="#">
                        <img src="assets/img/logos/3c.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/sill2.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/résaoucrlistal2.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/cpts.png" alt="" />
                      </a>

                      <a href="#">
                        <img src="assets/img/logos/hgo.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/recygleursBretons.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/polynys.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/estuaire.png" alt="" />
                      </a>
                      <a href="#">
                        <img src="assets/img/logos/isffell.png" alt="" />
                      </a>
                    </div>
                  </Marquee>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Partner;
