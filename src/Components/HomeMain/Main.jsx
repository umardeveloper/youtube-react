import React from "react";
import User1 from "../../Assets/Image/Oval-1.png";
import Disc from "../../Assets/Image/disc.png";
import "./main.scss";
import { NavLink } from "react-router-dom";
import Videotop from "./Videolist/Videotop";
import Reckvideo from "./Reckvideo/Reckvideo";
import Subscriptbtn from "../Subscriptbtn/Subscriptbtn";
import Fooddrink from "./Fooddrink/Fooddrink";
function Main() {
  const [data, setData] = React.useState({});
  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/photos")
      .then((res) => res.json())
      .then((data) => {
        setData([...data]);
      });
  }, []);
  return (
    <>
      <main>
        <section className="videos">
          <div className="containerr">
            <div className="top">
              <NavLink to="/channel">
                <span className="flex-pan1">
                  <img src={User1} alt="user" width="50px" height="50px" />
                  <h2>Dollie Blair</h2>
                </span>
              </NavLink>
              <Videotop data={data} />
            </div>
            <div className="centr">
              <NavLink to="/channel">
                <span className="flex-pan">
                  <h2>Recommended</h2>
                </span>
              </NavLink>
              <Reckvideo data={data} />
            </div>
            <div className="top">
              <span className="flex-pan col">
                <NavLink to="/channel">
                  <div className="cols">
                    <img src={Disc} alt="user" />
                    <h2>
                      Food&Drink
                      <span className="gray">Recommended channel foryou</span>
                    </h2>
                  </div>
                </NavLink>
                <div className="btn">
                  <Subscriptbtn />
                </div>
              </span>

              <Fooddrink data={data} />
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
export default Main;
