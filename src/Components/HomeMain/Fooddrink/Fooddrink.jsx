import React from "react";
import "./Fooddrink.scss";
import { useNavigate } from "react-router-dom";

function Fooddrink({ data }) {
  const navigate = useNavigate();

  return (
    <div className="fooddrinkcont">
      <ul className="list-item-food column1">
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
export default Fooddrink;
