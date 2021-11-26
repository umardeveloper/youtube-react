import React from "react";
import { useNavigate } from "react-router-dom";
import "./videotop.scss";
function Videotop({ data }) {
  const navigate = useNavigate();

  return (
    <div className="videotopcont">
      <ul className="list-item-food">
        {data.length > 0 &&
          data.map((row) => (
            <li key={row.id}>
              <button onClick={() => navigate("/video/" + row.id)}>
                <img src={row.url} alt="hello" width={250} height={150} />
                <strong>{row.title}</strong>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Videotop;
