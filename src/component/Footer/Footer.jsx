import React from "react";
import "./Footer.css";
import youtube from "../../assets/youtube_icon.png";
import twitter from "../../assets/twitter_icon.png";
import instagram_icon from "../../assets/instagram_icon.png";
import facebook_icon from "../../assets/facebook_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={youtube} alt="image" className="icons" />
        <img src={twitter} alt="image" className="icons" />
        <img src={instagram_icon} alt="image" className="icons" />
        <img src={facebook_icon} alt="image" className="icons" />
      </div>
      <ul>
        <li>Audio Description</li>
        <li>Help Center</li>
        <li>Gift Cards</li>
        <li>Media Center</li>
        <li>Inverstor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefernces</li>
        <li>Corporate Information</li>
        <li>Contact Us</li>
      </ul>
      <p className="copyright-text">© 1997-2024 Netflix, Inc.</p>

    </div>
  );
};

export default Footer;
