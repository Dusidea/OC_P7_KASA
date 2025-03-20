import React from "react";
import styles from "./Rating.module.css";
import Starr from "../assets/Starr.svg";
import Starg from "../assets/Starg.svg";

function Rating({ score }) {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    const starIcon = i <= score ? Starr : Starg;
    stars.push(
      <img
        key={i}
        src={starIcon}
        alt={i <= score ? "Étoile pleine" : "Étoile vide"}
        className={styles.star}
      />
    );
  }

  return <div className={styles.rating}>{stars}</div>;
}

export default Rating;
