import styles from "./Collapse.module.css";
import ChevronUp from "../assets/ChevronUp.svg";
import ChevronDown from "../assets/ChevronDown.svg";
import { useState } from "react";

export default function Collapse({ title = "Voir plus", children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.collapseTop}>
      <button onClick={toggleCollapse}>
        {title}
        {isOpen ? (
          <img src={ChevronUp} alt="Fermer" />
        ) : (
          <img src={ChevronDown} alt="Ouvrir" />
        )}
      </button>

      <div
        className={`${styles.collapseInner} ${
          isOpen ? styles.open : styles.closed
        }`}
      >
        {children}
      </div>
    </div>
  );
}

// état ouvert vs état fermé => state ?
//utiliser les props
//animaton d'ouverture/fermeture déclenchée au clic sur la flèche

//Version qui affiche juste les bandeaux en fixe
// export default function Collapse() {
//     return (
//       <div className={styles.collapseWrapper}>
//         <div className={styles.collapseTop}>
//           <h3 className={styles.collapseTitle}>Fiabilité</h3>
//           <img
//             src={Vector}
//             title="flèche pour déplier la rubrique"
//             alt="flèche pour déplier la rubrique"
//           ></img>
//         </div>
//         <div className={styles.collapseInner}> Texte intérieur collapse</div>
//         <div className={styles.collapseTop}>
//           <h3 className={styles.collapseTitle}>xxx</h3>
//           <img
//             src={Vector}
//             title="flèche pour déplier la rubrique"
//             alt="flèche pour déplier la rubrique"
//           ></img>
//         </div>
//         <div className={styles.collapseInner}> Texte intérieur collapse</div>
//       </div>
//     );
//   }
