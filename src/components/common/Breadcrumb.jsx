import { useRouter } from "next/router";
import React from "react";
import data from "../../data/breadcrumb.json";
import Link from "next/link";

const Breadcrumb = () => {
  const router = useRouter();
  const pathname = router.pathname;

  // Find the matching data object based on the current path
  const currentData = data.find((item) => item.path === pathname);

  // If a matching object is found, use its data; otherwise, use a default object
  const displayData = currentData || {
    id: "default",
    path: "/default",
    title: "Default Title",
    bg_img: "assets/img/home1/rect858.png",
  };

  return (
    <>
      <div
        className="breadcrumb-section"
        style={{
          backgroundImage: `linear-gradient(270deg, rgba(0, 0, 0, .55), rgba(0, 0, 0, 0.55) 101.02%), url(${displayData.bg_img})`,
        }}
      >
        <div className="company-name">QGR</div>
        {pathname == '/portfolio-single-column' && < div className="company-name" style={{ fontSize: '2rem' }}>crédit : Christelle ANTHOINE photographe</div>}
        <div className="container-fluid one pl--95">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-content">
                <h1>{displayData.title}</h1>
                <ul className="breadcrumb-list">
                  <li>
                    <Link legacyBehavior href="/">
                      <a>Présentation</a>
                    </Link>
                  </li>
                  <li>{displayData.title}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default Breadcrumb;
