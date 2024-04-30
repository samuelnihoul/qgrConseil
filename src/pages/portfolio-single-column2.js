import React from "react";
import posts from '../data/posts.ts'
import MainLayout from "../components/layout/MainLayout";
import data from "../data/portfolio.json";
import Link from "next/link";
const PortfolioSingleColumnpage = () => {
  return (
    <MainLayout>
      <div className="portfolio-two-column-section pt-130 mb-130">
        <div className="container">
          <div className="linkedin">
            {
              posts.map(
                (p) => {
                  return (
                    <iframe src={p} className='linkedin-post'>

                    </iframe>
                  )
                })
            }
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="pagination-area">
                <ul className="paginations">
                  <li className="page-item active">
                    <a href="#">01</a>
                  </li>
                  <li className="page-item">
                    <a href="#">02</a>
                  </li>
                  <li className="page-item">
                    <a href="#">03</a>
                  </li>
                  <li className="page-item">
                    <a href="#">04</a>
                  </li>
                  <li className="page-item">
                    <a href="#">05</a>
                  </li>
                </ul>
                <div className="paginations-button">
                  <a href="#">
                    Next
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={7}
                      height={14}
                      viewBox="0 0 7 14"
                    >
                      <path d="M7 7.00008L0 0L4.45455 7.00008L0 14L7 7.00008Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </MainLayout >
  );
};

export default PortfolioSingleColumnpage;
