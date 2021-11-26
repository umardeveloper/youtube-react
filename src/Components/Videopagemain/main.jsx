import React from "react";
import Videoiframe from "./Videoiframe/Videoiframe";
import "./main.scss";
import Switch from "./Videoiframe/Switch/Switch";
import Videoinfo from "./Videoinfo/Videoinfo";
import Leftasidevideo from "./Leftasidevideo/Leftasidevideo";
function Videopagemain() {
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
        <section className="videopagesec">
          <div className="div">
            <Videoiframe />
            <hr />
            <Videoinfo />
          </div>
          <div className="section2">
            <div className="infooos">
              <h2>Autoplay</h2>
              <Switch />
            </div>
            <Leftasidevideo data={data} />
          </div>
        </section>
      </main>
    </>
  );
}
export default Videopagemain;
