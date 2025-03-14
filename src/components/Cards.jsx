import styles from "./Cards.module.css";
import React from "react";

export default function Cards({ logements }) {
  // XXXX Cards reçoit la propriété (props) appelée logements
  // XXXX La props est un tableau d'objets
  // (une objet = un logement) transmis depuis home.jsx
  return (
    <>
      <div className={styles.cardblock}>
        {logements.map((logement) => (
          //boucle pour parcourir le tableau logements , la key est obligatoire
          <a className={styles.card} href="" key={logement.id}>
            {/* <img src={logement.cover} alt={logement.title}></img> */}
            <h2 className={styles.card__text}>{logement.title}</h2>
          </a>
        ))}
      </div>
    </>
  );
}
