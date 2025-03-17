import styles from "./Cards.module.css";
import React from "react";

export default function Cards({ logements }) {
  return (
    <>
      <div className={styles.cardblock}>
        {logements.map((logement) => (
          <a className={styles.card} href="" key={logement.id}>
            <img
              className={styles.card__image}
              src={logement.cover}
              alt={logement.title}
            ></img>
            <h2 className={styles.card__text}>{logement.title}</h2>
          </a>
        ))}
      </div>
    </>
  );
}
