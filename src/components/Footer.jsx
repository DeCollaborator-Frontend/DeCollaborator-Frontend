import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex items-center justify-between py-5 text-sm">
      <span>2022 &copy; Decollaborator</span>
      <ul className="flex gap-4">
        <li>
          <Link href="#">About Us</Link>
        </li>
        <li>
          <Link href="#">Help</Link>
        </li>
        <li>
          <Link href="#">Contact Us</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
