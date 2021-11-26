import React from "react";
import Sitebar from "./SiteBar/Sitebar";
import Hamburger from "../../Assets/Image/Menu.svg";
import YouTube from "../../Assets/Image/Black.svg";
import "./Header.scss";
import Icons from "../../Assets/Image/Icons.png";
import Userpic from "../../Assets/Image/Userpic.png";
import { NavLink } from "react-router-dom";
function Header() {
  const elModal = React.useRef();

  return (
    <>
      <header
        onKeyDown={(evt) => {
          if (evt.code === "Escape") {
            elModal.current.classList.remove("modal--show");
          }
        }}
      >
        <div className="containerr">
          <div className="logos">
            <button
              className="hamburger"
              onClick={() => {
                elModal.current.classList.add("modal--show");
              }}
            >
              <img src={Hamburger} alt="hello" />
            </button>
            <NavLink to="/">
              <img src={YouTube} alt="hello" />
            </NavLink>
          </div>

          <div>
            <input type="text" className="input-search" placeholder="search" />
          </div>

          <div className="icons">
            <img src={Icons} alt="" />
          </div>

          <NavLink to="/channel">
            <img className="userpick" src={Userpic} alt="" />
          </NavLink>
        </div>
      </header>
      <Sitebar elModal={elModal} />
    </>
  );
}
export default Header;
