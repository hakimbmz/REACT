import homePhoto from "../assets/what-can-you-do.jpg"
import AgeStats from "../components/AgeStats"
import GenderStats from "../components/GenderStats";
import RegionStats from "../components/RegionStats";
import './Home.css'
function Home() {
    return ( <div>
   <img src={homePhoto} alt="homephoto" className="homeTof"/>
  <AgeStats/>
  <GenderStats/>
  <RegionStats/>
   
    </div> );
}

export default Home;