import BannerAbout from "../components/BannerAbout";
import Collapse from "../components/Collapse";
import "../styles/main.css";

function About() {
  return (
    <div className="about_wrapper">
      <BannerAbout />
      <Collapse title="Fiabilité">
        <p>
          Les annonces postées sur Kasa garantisses une fiabilité totale. Les
          photos sont conformes aux logements, et toutes les informations osnt
          régulièrement vérifées pa nos équipes.
        </p>
      </Collapse>
      <Collapse title="Respect">
        <p>
          La bienveillance fait partie des valeurs fondratrices de Kasa. Tout
          comportement discriminatoire ou de perturbation du voisinage
          entrainera une exclustion de notre plateforme.
        </p>
      </Collapse>
      <Collapse title="Service">
        <p>
          La qualité du service est au coeur de notre engagement chez Kasa. Nous
          veillons à ce que chaque interaction, que ce soit avec nos hôtes ou
          nous locataires, soit empreinte de respect et de bienveillance.
        </p>
      </Collapse>
      <Collapse title="Sécurité">
        <p>
          La sécurité est la priorité de Kasa. Aussi bien pour nous hôtes que
          pour les voyageurs, chaque logement correspond aux critères de
          sécurité établis par nos services. En laissant une note aussi bien à
          l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les
          standards sont bien respectés. Nous organisons également des ateliers
          usr la sécurité domestique pour nos hôtes.
        </p>
      </Collapse>
    </div>
  );
}

export default About;
