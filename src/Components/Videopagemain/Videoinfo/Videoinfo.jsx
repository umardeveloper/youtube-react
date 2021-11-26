import React from "react";
import Disk from "../../../Assets/Image/disc.png";
import Supscriptbtn from "../../Subscriptbtn/Subscriptbtn";
import { NavLink } from "react-router-dom";
function Videoinfo() {
  return (
    <>
      <section>
        <div className="infocomment">
          <div className="d-flex justify-content-between">
            <NavLink to="/channel">
              <div className="imagesinfo d-flex">
                <img src={Disk} alt="" />
                <h2 className="text-dark">Food&Drink</h2>
              </div>
            </NavLink>
            <div className="btn">
              <Supscriptbtn />
            </div>
          </div>
          <p className="gray fs-6 w-75 ms-5 lh-sm">
            A successful marketing plan relies heavily on the pulling-power of
            advertising copy. Writing result-oriented ad copy is difficult, as
            it must appeal to, entice, and convince consumers to take action.
            There is no magic formula to write perfect ad copy; it is based on a
            number of factors, including ad placement, demographic, even the
            consumer’s mood when they see your ad.
          </p>
        </div>
      </section>
    </>
  );
}
export default Videoinfo;
