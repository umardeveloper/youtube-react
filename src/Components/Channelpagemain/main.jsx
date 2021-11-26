import React from "react";
import "./main.scss";
import Channelbg from "../../Assets/Image/channelbg.png";
import User from "../../Assets/Image/Oval-1.svg";
import Fooddrink from "../HomeMain/Videolist/Videotop";

function Channelmain() {
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
        <section>
          <div>
            <img src={Channelbg} alt="ce" width="1300px" height="280px" />
          </div>
          <div className="d-flex mt-5">
            <img src={User} alt="user" width="80px" height="80px" />
            <div className="margaretin ms-3 mb-auto mt-auto">
              <h3>Margaret Phelps</h3>
              <strong className="gray fs-5">245K subscribed</strong>
            </div>
          </div>
          <div className="links mt-5">
            <nav>
              <ul className="d-flex list-itemchannel">
                <li className="activelink fs-5">Home</li>
                <li className="ms-5 fs-5 ">Videos</li>
                <li className="ms-5 fs-5">Playlist</li>
                <li className="ms-5 fs-5">Channels</li>
                <li className="ms-5 fs-5">Discussion</li>
                <li className="ms-5 fs-5">About</li>
              </ul>
            </nav>
          </div>

          <div className="frame mt-5 d-flex mb-5">
            <iframe
              width={540}
              height={250}
              src="https://www.youtube.com/embed/I9D4ifGzndY"
              title="YouTube video player"
              frameBorder={0}
              className="rounded"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
            <div className="divclass">
              <h4>Choosing The Best Audio Player Software For Your Computer</h4>
              <p>
                Your cheap internet-based banner advertising will become one of
                the sought for ads there are. Today, the world of Internet
                advertising is rapidly evolving beyond banner ads and intrusive
                pop-ups. Bayles A common medium for advertising on the Internet
                is the use of banner ads
              </p>
            </div>
          </div>
          <Fooddrink data={data} />
        </section>
      </main>
    </>
  );
}
export default Channelmain;
