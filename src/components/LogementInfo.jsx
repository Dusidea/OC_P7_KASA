import styles from "./LogementInfo.module.css";
import Collapse from "../components/Collapse.jsx";

function LogementInfo({ logement }) {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>{logement.title}</h1>
      <p> tags</p>
      <div>
        <Collapse title="Description">toto</Collapse>
        <Collapse title="Équipements">toto</Collapse>
      </div>
    </div>
  );
}

export default LogementInfo;
