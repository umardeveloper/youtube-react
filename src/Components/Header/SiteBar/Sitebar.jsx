import React from "react";
import Home from "../../../Assets/Image/home.svg";
import Hamburger from "../../../Assets/Image/Menu.svg";
import Trending from "../../../Assets/Image/trending.svg";
import YouTube from "../../../Assets/Image/Black.svg";
import Subscriptions from "../../../Assets/Image/Supscript.svg";
import Library from "../../../Assets/Image/document.svg";
import History from "../../../Assets/Image/others-07.svg";
import WatchLater from "../../../Assets/Image/Shape.svg";
import Favourites from "../../../Assets/Image/Star-7.svg";
import Like from "../../../Assets/Image/Like.svg";
import Music from "../../../Assets/Image/Music.svg";
import Games from "../../../Assets/Image/Games.svg";
import User1 from "../../../Assets/Image/Oval-1.png";
import User2 from "../../../Assets/Image/Oval-2.png";
import User3 from "../../../Assets/Image/Oval-3.png";
import User4 from "../../../Assets/Image/Oval-4.png";
import User5 from "../../../Assets/Image/Oval-5.png";
import User6 from "../../../Assets/Image/Oval-6.png";

import "./Sitebar.scss";
import { NavLink } from "react-router-dom";
function Sitebar({ elModal }) {
  return (
    <>
      <div
        className="modal"
        ref={elModal}
        onClick={(evt) => {
          if (evt.target.matches(".modal") || evt.target.matches(".close")) {
            elModal.current.classList.remove("modal--show");
          }
        }}
      >
        <div className="modal--inner">
          <button className="close hamburger">
            <img src={Hamburger} alt="hello" className="close" />
          </button>
          <NavLink to="/">
            <img src={YouTube} alt="hello" />
          </NavLink>
          <nav className="navlist-1">
            <ul>
              <li className="list">
                <NavLink to="/" className="nav--link">
                  <img src={Home} alt="" />
                  <strong className="list-desc ">Home</strong>
                </NavLink>
              </li>
              <li className="list">
                <img src={Trending} alt="hello" />
                <strong className="list-desc">Trending</strong>
              </li>
              <li className="list">
                <img src={Subscriptions} alt="hello" />
                <strong className="list-desc">Subscriptions</strong>
              </li>
            </ul>

            <ul className="sitebar--list">
              <li className="list">
                <img src={Library} alt="Library" />
                <strong className="list-desc">Library</strong>
              </li>
              <li className="list">
                <img src={History} alt="History" />
                <strong className="list-desc">History</strong>
              </li>
              <li className="list">
                <img src={WatchLater} alt="WatchLater" />
                <strong className="list-desc">Watch Later</strong>
              </li>
              <li className="list">
                <img src={Favourites} alt="Favourites" />
                <strong className="list-desc">Favourites</strong>
              </li>
              <li className="list">
                <img src={Like} alt="Like" />
                <strong className="list-desc">Liked videos</strong>
              </li>
              <li className="list">
                <img src={Music} alt="Music" />
                <strong className="list-desc">Music</strong>
              </li>
              <li className="list">
                <img src={Games} alt="Games" />
                <strong className="list-desc">Games</strong>
              </li>
            </ul>

            <h2 className="sup">Subscriptions</h2>

            <ul>
              <li className="list list-2">
                <NavLink to="/channel">
                  <img
                    src={User1}
                    alt="User1"
                    width="30"
                    height="30"
                    className="user-image"
                  />
                  <strong className="list-desc">Gussie Singleton</strong>
                </NavLink>
              </li>
              <li className="list list-2">
                <NavLink to="/channel">
                  <img
                    src={User2}
                    alt="User1"
                    width="30"
                    height="30"
                    className="user-image"
                  />
                  <strong className="list-desc">Nora Francis</strong>
                </NavLink>
              </li>
              <li className="list list-2">
                <NavLink to="/channel">
                  <img
                    src={User3}
                    alt="User1"
                    width="30"
                    height="30"
                    className="user-image"
                  />
                  <strong className="list-desc">Belle Briggs</strong>
                </NavLink>
              </li>
              <li className="list list-2">
                <NavLink to="/channel">
                  <img
                    src={User4}
                    alt="User1"
                    width="30"
                    height="30"
                    className="user-image"
                  />
                  <strong className="list-desc">Eunice Cortez</strong>
                </NavLink>
              </li>
              <li className="list list-2">
                <NavLink to="/channel">
                  <img
                    src={User5}
                    alt="User1"
                    width="30"
                    height="30"
                    className="user-image"
                  />
                  <strong className="list-desc">Emma Hanson</strong>
                </NavLink>
              </li>
              <li className="list list-2">
                <NavLink to="/channel">
                  <img
                    src={User6}
                    alt="User1"
                    width="30"
                    height="30"
                    className="user-image"
                  />
                  <strong className="list-desc">Leah Berry</strong>
                </NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
}
export default Sitebar;
