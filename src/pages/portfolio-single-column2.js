import React from "react";
import posts from '../data/posts'
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
        </div>
      </div>
    </MainLayout >
  );
};

export default PortfolioSingleColumnpage;
