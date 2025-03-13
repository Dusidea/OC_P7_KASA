import Banner from "../components/Banner.jsx";
import Cards from "../components/Cards.jsx";
import "../styles/main.css";

function Home() {
  return (
    <div className="home_wrapper">
      <Banner />
      <div className="gallery">
        <Cards />
      </div>
    </div>
  );
}

export default Home;
