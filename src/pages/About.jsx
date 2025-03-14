import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";
import "../styles/main.css";

function About() {
  return (
    <div className="about_wrapper">
      <BannerAbout />
      <Collapse title="Fiabilité">
        <p>toto</p>
      </Collapse>
      <Collapse title="XXXX">
        <p>toto</p>
      </Collapse>
    </div>
  );
}

export default About;
