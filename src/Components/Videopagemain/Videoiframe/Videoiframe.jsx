import React from "react";
import { useParams } from "react-router-dom";
import Likeimage from "../../../Assets/Image/Likebtn.png";
import "./Videoiframe.scss";
import Likebtn from "./Buttons/Buttonlike";
function Videoiframe() {
  const [data, setData] = React.useState({});
  const { id } = useParams();

  React.useEffect(() => {
    fetch(process.env.REACT_APP_API_URL + "/photos/" + id)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [id]);
  return (
    <>
      <ul>
        <li className="listframe">
          <img src={data.url} alt="hello" width={900} height={500} />
          <h2>{data.title}</h2>
          <div className="info-videoframe">
            <h4 className="gray gray2">123k views</h4>

            <div className="btns">
              <div className="btn">
                <Likebtn />
              </div>
              <div className="btn">
                <img src={Likeimage} alt="hello" />
              </div>
              <div className="btn">
                <img src={Likeimage} alt="hello" />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </>
  );
}
export default Videoiframe;
