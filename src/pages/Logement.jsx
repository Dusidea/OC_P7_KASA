import Carrousel from "../components/Carrousel.jsx";
import LogementInfo from "../components/LogementInfo.jsx";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

function Logement() {
  const { id } = useParams();
  const [logement, setLogement] = useState(undefined);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("../../public/logements.json")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((item) => item.id === id);
        if (!found) {
          navigate("/error");
        } else {
          setLogement(found);
        }
      })
      .catch((error) => {
        console.error("Erreur de fetch logement :", error);
        navigate("/error");
      });
  }, [id, navigate]);

  if (!logement) return null;

  return (
    <div className="main_wrapper">
      <Carrousel logement={logement} />
      <LogementInfo logement={logement} />
    </div>
  );
}

export default Logement;
