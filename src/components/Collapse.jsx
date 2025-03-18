import styles from "./Collapse.module.css";
import { useState } from "react";
import ChevronUp from "../assets/ChevronUp.svg";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.collapseWrapper}>
      <div className={styles.collapseItem}>
        <button className={styles.collapseTop} onClick={toggleCollapse}>
          {title}
          <img
            src={ChevronUp}
            alt={isOpen ? "Fermer" : "Ouvrir"}
            className={`${styles.chevron} ${isOpen ? styles.rotate : ""}`}
          />
        </button>

        <div
          className={`${styles.collapseInner} ${
            isOpen ? styles.open : styles.closed
          }`}
        >
          {children}
        </div>
      </div>
    </div>
  );
}
