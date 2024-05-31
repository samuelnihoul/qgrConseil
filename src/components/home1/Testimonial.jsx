import React, { useMemo } from "react";
import SwiperCore, { Autoplay, EffectFade, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
SwiperCore.use([Pagination, Autoplay, Navigation, EffectFade]);
const Testimonial = () => {
  const slideSetting = useMemo(() => {
    return {
      slidesPerView: 1,
      speed: 1500,
      spaceBetween: 25,
      loop: true,
      effect: "fade", // Use the fade effect
      fadeEffect: {
        crossFade: true, // Enable cross-fade transition
      },
      autoplay: {
        delay: 4000, // Autoplay duration in milliseconds
        disableOnInteraction: false,
      },
      pagination: {
        el: ".franctional-pagi1",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next-2",
        prevEl: ".prev-2",
      },
    };
  }, []);
  return (
    <div className="testimonial-section mb-130">
      <div className="container-fluid one">
        <div className="row">
          <div className="col-lg-4">
            <div className="testimonial-img-with-logo">
              <img src="assets/img/home1/test_left_02.jpg" alt="" />
              {/* <div className="logo">
                <img src="assets/img/home1/white-logo.svg" alt="" />
              </div> */}
            </div>
          </div>
          <div className="col-lg-8">
            <div className="testimonial-wrap">
              <Swiper {...slideSetting} className="swiper testimonial-slider">
                <div className="swiper-wrapper">
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <span>Travail qualitatif et bonne disponibilité!</span>
                      <p>
                        La CPTS du Pays de REDON a fait appel à QGR Conseil pour les accompagner dans l’écriture de son projet de santé. La collaboration a été d’une grande qualité, nous permettant de soumettre à l’ARS un projet de qualité, précis, détaillé et pertinent au vu du contexte populationnel de notre territoire. La disponibilité de Mme LUNEAU, la qualité de son travail ont été très appréciées. Encore un grand merci !
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/img/amoutel.webp" alt="" />
                        </div>
                        <div className="content">
                          <h6>Dr A. MOUTEL</h6>
                          <span>CPTS du pays de Redon, Juin 2021</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swiper-slide">
                    <div className="testimonial-card">
                      <span>Force de proposition et pertinence</span>
                      <p>
                        Réseau Cristal a sollicité Mme LUNEAU pour réaliser des audits sur la satisfaction clients et sur le management de la qualité sur nos 60 sites vétérinaires adhérents. Cela nous a permis d’avoir une vision globale et un regard extérieur.
                        On a été satisfait de son approche humaine et elle a su rendre plus accessible la notion de qualité au sein des entreprises. Mme LUNEAU a bien respecté notre cahier des charges tout en étant force de proposition pour la création d’un nouvel audit.
                      </p>
                      <div className="author-area">
                        <div className="author-img">
                          <img src="assets/mretureau.webp" alt="Dr. M. Retureau" />
                        </div>
                        <div className="content">
                          <h6>Dr M. RETUREAU</h6>
                          <span>Réseau CRISTAL, Avril 2024</span>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>

                </div>
              </Swiper>
              <div className="slider-btn-area">
                <div className="franctional-pagi1" />
                <span className="dash" />
                <div className="slider-btn-group w-100">
                  <div className="slider-btn prev-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0.416666 5.9668H15V4.7168H0.416666V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 4.7168C3.98115 4.7168 6.38281 7.3018 6.38281 10.0585V10.6835H5.13281V10.0585C5.13281 7.96596 3.26448 5.9668 1.04115 5.9668H0.416979V4.7168H1.04115Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M1.04115 5.96667C3.98115 5.96667 6.38281 3.38167 6.38281 0.625V0H5.13281V0.625C5.13281 2.71833 3.26448 4.71667 1.04115 4.71667H0.416979V5.96667H1.04115Z"
                      />
                    </svg>
                  </div>
                  <div className="slider-btn next-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={15}
                      height={11}
                      viewBox="0 0 15 11"
                    >
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M14.5833 5.9668H0V4.7168H14.5833V5.9668Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 4.7168C11.0189 4.7168 8.61719 7.3018 8.61719 10.0585V10.6835H9.86719V10.0585C9.86719 7.96596 11.7355 5.9668 13.9589 5.9668H14.583V4.7168H13.9589Z"
                      />
                      <path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M13.9589 5.96667C11.0189 5.96667 8.61719 3.38167 8.61719 0.625V0H9.86719V0.625C9.86719 2.71833 11.7355 4.71667 13.9589 4.71667H14.583V5.96667H13.9589Z"
                      />
                    </svg>
                  </div>
                </div>
              </div>
              <div className="review-area">
                <div className="review-name">
                  <a href='https://trustpilot.com'>

                    <span>Soyez le premier à laisser un avis</span>
                    <img src="assets/img/Trustpilot-logo.png" width='150px' alt="" />
                  </a>
                </div>
                <div className="review">
                  <ul>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                    <li>
                      <i className="bi bi-star-fill" />
                    </li>
                  </ul>
                  <span>(0 reviews)</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
