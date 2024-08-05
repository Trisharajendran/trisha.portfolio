import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaReact,
  FaInstagram,
  FaMailBulk,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

const Media = () => {
  return (
    <div
      className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between "
      style={{ marginTop: "6rem" }}
    >
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">Find me in.</h2>
        <div className="flex gap-4">
          <span className="bannerIcon">
            <a
              href="#"
              target="_blank"
            >
              <FaLinkedinIn />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="#"
              target="_blank"
            >
              <FaInstagram />
            </a>
          </span>
          <span className="bannerIcon">
            <a
              href="#"
              target="_blank"
            >
              <FaMailBulk />
            </a>
          </span>
          <span className="bannerIcon">
            <a href="#" target="_blank">
              <SiLeetcode />
            </a>
          </span>
        </div>
      </div>
      <div>
        <h2 className="text-base uppercase font-titleFont mb-4">
          View My Resume Here.
        </h2>
        <div className="flex gap-4">
          <span className="bannerIconR">
            <a
              href="#"
              target="_blank"
            >
              <h6> resumé </h6>
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Media;
