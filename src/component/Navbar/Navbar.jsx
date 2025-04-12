import React, { useEffect, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import searchIcon from "../../assets/search_icon.svg";
import bellIcon from "../../assets/bell_icon.svg";
import profile from "../../assets/profile_img.png";
import caret_icon from "../../assets/caret_icon.svg";
import { logOut } from "../../FirBase";


const Navbar = () => {
  const navRef = useRef();

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY >= 80){
        navRef.current.classList.add("nav-dark")
      }
      else {
        navRef.current.classList.remove("nav-dark")
      }
    })

  },)
  return (
    <div className="navbar" ref={navRef}>
      <div className="navbar-left">
        <img src={logo} alt="logo" />
        <ul>
          <li>Home</li>
          <li>TV & Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Languages</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIcon} alt="searchIcon" className="icons" />
        <p>Children</p>
        <img src={bellIcon} alt="bell-icon" className="icons" />
        <div className="navbar-profile">
          <img src={profile} alt="image" className="profile" />
          <img src={caret_icon} alt="image" />
          <div className="dropdown">
            <p onClick={()=>{logOut()}}> SignOut of Netflix</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
