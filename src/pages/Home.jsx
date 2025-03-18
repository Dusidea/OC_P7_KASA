import BannerHome from "../components/BannerHome.jsx";
import Cards from "../components/Cards.jsx";
import "../styles/main.css";
import { useEffect, useState } from "react";

function Home() {
  const [logements, setLogements] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("../../public/logements.json")
      .then((response) => {
        if (!response.ok) {
          throw new Error(`Erreur HTTP: ${response.status}`);
        }
        return response.json();
      })
      .then((data) => {
        setLogements(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Erreur de chargement des données:", err);
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <p>Chargement des logements...</p>;
  if (error) return <p>Erreur : {error}</p>;

  return (
    <div className="main_wrapper">
      <BannerHome />
      <div className="gallery">
        <Cards logements={logements} />
      </div>
    </div>
  );
}

export default Home;
