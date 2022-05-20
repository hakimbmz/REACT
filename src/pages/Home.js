import homePhoto from "../assets/what-can-you-do.jpg";
import blood1 from "../assets/blood1.jpg";
import blood3 from "../assets/blood4.jpg";
import AgeStats from "../components/AgeStats";
import GenderStats from "../components/GenderStats";
import RegionStats from "../components/RegionStats";
import "./Home.css";
import { Fragment } from "react";
function Home() {
  return (
    <Fragment>
      <div id="myCarousel" Name="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li
            data-target="#myCarousel"
            data-slide-to="0"
            className="active"
          ></li>
          <li data-target="#myCarousel" data-slide-to="1"></li>
          <li data-target="#myCarousel" data-slide-to="2"></li>
        </ol>

        <div className="carousel-inner">
          <div className="item active">
            <img src={homePhoto} alt="homephoto" className="homeTof" />
          </div>

          <div className="item">
            <img src={blood1} alt="homephoto" className="homeTof" />
          </div>
          <div className="item">
            <img src={blood3} alt="homephoto" className="homeTof" />
          </div>
        </div>
      </div>

      <AgeStats />
      <GenderStats />
      <RegionStats />
    </Fragment>
  );
}

export default Home;
