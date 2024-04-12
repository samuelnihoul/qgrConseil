import useButtonHover from "@/src/hooks/useButtonHover";
import Link from "next/link";
import React from "react";

const About = () => {
  useButtonHover();
  return (
    <div className="about-section mb-130">
      <div className="container-fluid one pl--95">
        <div className="row g-xl-4 gy-5">
          <div className="col-xl-6">
            <div className="about-content pr--95">
              <div className="section-title1 two mb-50">
                <span>À Propos</span>
                <h2>
                  Des valeurs et principes clairs pour un choix éclairé et un service structuré.
                </h2>
              </div>
              <Link legacyBehavior href="https://www.linkedin.com/in/florence-luneau-278710b4/">
                <a className="primary-btn1 btn-hover">
                  En savoir plus
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width={12}
                    height={12}
                    viewBox="0 0 12 12"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                    />
                  </svg>
                  <span />
                </a>
              </Link>
            </div>
          </div>
          <div className="col-xl-6">
            <div className="row g-4">
              <div className="col-sm-5">
                <div className="award-area">
                  <h3>Nos Valeurs</h3>
                  <ul>
                    <li>
                      Pragmatisme<br />
                    </li>
                    <li>
                      Curiosité<br />
                    </li>
                    <li>
                      Créativité<br />
                    </li>
                  </ul>
                  <Link legacyBehavior href="/event-details">
                    <a className="explore-btn">
                      Achievement
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
              <div className="col-sm-7">
                <div className="team-card">
                  <div className="content">
                    <h3>Notre ADN</h3>
                    <p>
                      Coconstruire avec vous un système qualité efficient optimisant les outils existants
                      <br />
                      <br />
                      - pour dynamiser la déamrche qualité,<br />
                      - pour augmenter la satisfaction client,<br />
                      - pour déployer une stratégie d'amélioration continue.<br />
                    </p>
                  </div>
                  <Link legacyBehavior href="/our-people1">
                    <a className="explore-btn">
                      Explore More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={12}
                        height={12}
                        viewBox="0 0 12 12"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M10.1865 1.06237L0 11.2484L0.751627 12L10.9376 1.81347V8.85645H12V0H3.14355V1.06237H10.1865Z"
                        />
                      </svg>
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
