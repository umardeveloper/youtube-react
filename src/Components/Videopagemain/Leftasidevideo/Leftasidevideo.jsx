import React from "react";
import { useNavigate } from "react-router-dom";
function Leftaside({ data }) {
  const navigate = useNavigate();

  return (
    <div className="sql">
      <ul className="w-50">
        {data.length > 0 &&
          data.map((row) => (
            <li key={row.id} className="w-50 mx-auto">
              <button onClick={() => navigate("/video/" + row.id)}>
                <img src={row.url} alt="hello" width={250} height={150} />
                <p>{row.title}</p>
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
}
export default Leftaside;
