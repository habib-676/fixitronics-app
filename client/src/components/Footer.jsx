import React from "react";
import myLogo from "../assets/logo_img.png";
import { Link } from "react-router";
import { FaFacebookF, FaLinkedinIn, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer sm:footer-horizontal bg-neutral text-neutral-content p-10">
      <aside>
        <img src={myLogo} className="md:w-20 w-14" alt="fixitronics-logo" />
        <p>
          Fixitronics
          <br />
          Bringing Electronics Back to Life || Fast, Reliable, Fixitronics.
        </p>
      </aside>
      <nav>
        <h6 className="footer-title">Social</h6>
        <div className="grid grid-flow-col gap-4">
          <Link to={"#"}>
            <FaFacebookF size={20} />
          </Link>
          <Link to={"#"}>
            <FaLinkedinIn size={20} />
          </Link>
          <Link to={"#"}>
            <FaYoutube size={20} />
          </Link>
        </div>
      </nav>

      <nav>
        <h6 className="footer-title">Legal</h6>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </nav>
    </footer>
  );
};

export default Footer;
