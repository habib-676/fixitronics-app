import React from "react";
import myLogo from "../assets/logo_img.png";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-secondary text-white p-10 md:p-16">
      <aside>
        <img src={myLogo} className="md:w-20 w-14" alt="fixitronics-logo" />
        <p>
          Fixitronics
          <br />
          Bringing Electronics Back to Life || Fast, Reliable, Fixitronics.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title text-white">Social</h6>
        <div className="grid grid-flow-col gap-4 text-white">
          <Link
            to={"https://www.facebook.com/habib676"}
            className="hover:text-accent transition-colors"
          >
            <FaFacebookF size={20} />
          </Link>
          <Link
            to={"https://www.linkedin.com/in/wdhabib/"}
            className="hover:text-accent transition-colors"
          >
            <FaLinkedinIn size={20} />
          </Link>
          <Link
            to={"https://www.youtube.com/@habibslab"}
            className="hover:text-accent transition-colors"
          >
            <FaYoutube size={20} />
          </Link>
        </div>
      </nav>
    </footer>
  );
};

export default Footer;
