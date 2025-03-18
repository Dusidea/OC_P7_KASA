import React from "react";
import { Link } from "react-router-dom";
import styles from "./ErrorContent.module.css";

function Error() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>404</h1>
      <p className={styles.subtitle}>
        Oups ! La page que vous demandez n'existe pas.
      </p>

      <Link className={styles.link} to="/">
        Retourner sur la page d'accueil{" "}
      </Link>
    </div>
  );
}

export default Error;
