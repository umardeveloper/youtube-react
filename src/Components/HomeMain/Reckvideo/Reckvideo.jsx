import React from "react";
import { useNavigate } from "react-router-dom";
import "./Reckvideo.scss";
function Reckvideo({ data }) {
  const navigate = useNavigate();

  return (
    <div className="reckvideocont">
      <ul className="list-item-rek">
        {data.length > 0 &&
          data.map((row) => (
            <li key={row.id}>
              <button onClick={() => navigate("/video/" + row.id)}>
                <img src={row.url} alt="hello" width={540} height={250} />
                <strong>{row.title}</strong>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Reckvideo;
