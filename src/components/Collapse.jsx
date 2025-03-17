import styles from "./Collapse.module.css";
import ChevronUp from "../assets/ChevronUp.svg";
import ChevronDown from "../assets/ChevronDown.svg";
import { useState } from "react";

export default function Collapse({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className={styles.collapseWrapper}>
      <button className={styles.collapseTop} onClick={toggleCollapse}>
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
