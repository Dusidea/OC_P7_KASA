import styles from "./LogementInfo.module.css";
import Collapse from "../components/Collapse.jsx";
// import Starr from "../assets/Starr.svg";
// import Starg from "../assets/Starg.svg";

import Rating from "./Rating.jsx";

function LogementInfo({ logement }) {
  const taglist = logement.tags;
  const equipments = logement.equipments;

  return (
    <div className={styles.wrapper}>
      <div className={styles.halfWrapper}>
        <div className={styles.titles}>
          <h1 className={styles.title}>{logement.title}</h1>
          <h2 className={styles.location}>{logement.location}</h2>
        </div>
        <div className={styles.tags}>
          {taglist.map((tag) => (
            <div className={`${styles.tag} ${styles.tagsMobile}`}>{tag}</div>
          ))}
        </div>
        <div className={styles.halfWrapperRight}>
          <div className={styles.host}>
            <div className={styles.hostName}>
              {logement.host.name.split(" ").map((part, index) => (
                <div key={index}>{part}</div>
              ))}
            </div>
            <div className={styles.hostPictureWrapper}>
              <img
                className={styles.hostPicture}
                src={logement.host.picture}
                title="photographie de l'host"
                alt="photographie de l'host"
              ></img>
            </div>
          </div>
          <Rating score={parseInt(logement.rating)} />
        </div>
      </div>
      <div className={`${styles.tags} ${styles.tagsDesktop}`}>
        {taglist.map((tag) => (
          <div key={tag} className={styles.tag}>
            {tag}
          </div>
        ))}
      </div>

      <div className={styles.collapseBlock}>
        <Collapse title="Description">{logement.description}</Collapse>
        <Collapse title="Équipements">
          {equipments.map((equipment) => (
            <p key={equipment}>{equipment}</p>
          ))}
        </Collapse>
      </div>
    </div>
  );
}

export default LogementInfo;
