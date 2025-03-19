import Carrousel from "../components/Carrousel.jsx";
import LogementInfo from "../components/LogementInfo.jsx";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
// import styles from "./Logement.module.css";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("../../public/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        setLogement(found);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Erreur de fetch logement :", error);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p>Chargement...</p>;
  if (!logement) return <p>Logement introuvable</p>;

  return (
    <div className="main_wrapper">
      <Carrousel logement={logement} />
      <LogementInfo logement={logement} />
    </div>
  );
}

export default Logement;
