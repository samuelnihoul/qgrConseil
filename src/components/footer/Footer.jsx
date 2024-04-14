import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <footer>
      <div className="footer-btm">
        <div className="copyright-area">
          <p>
            Copyright {new Date().getFullYear()} <a href="#">QGR Conseil</a> | design by{" "}
            <a href="https://harmonia.eco">harmonia-eko</a>
            {" "}| 1 tonne of carbon per year courtesy of{" "}
            <a href="https://harmonia.eco">harmonia-eko</a>
          </p>
        </div>
        <ul className="social-area">
          <li>
            <a href="https://www.linkedin.com/in/florence-luneau-278710b4/">
              <i className="bx bxl-linkedin" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
