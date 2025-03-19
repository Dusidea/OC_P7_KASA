import styles from "./Carrousel.module.css";
import { useState } from "react";
import ArrowLeft from "../assets/ArrowLeft.svg";
import ArrowRight from "../assets/ArrowRight.svg";

export default function Carrousel({ logement }) {
  const pictures = logement.pictures;
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const isSingleImage = pictures.length === 1;

  function goToNextSlide() {
    console.log("go to next slide");
    setCurrentSlideIndex((prevIndex) => (prevIndex + 1) % pictures.length);
  }

  function goToPreviousSlide() {
    console.log("go to prev slide");
    setCurrentSlideIndex(
      (prevIndex) => (prevIndex - 1 + pictures.length) % pictures.length
    );
  }

  return (
    <div className={styles.wrapper}>
      <div className={styles.slide}>
        <img
          className={styles.cover}
          src={pictures[currentSlideIndex]}
          alt={`${logement.title} - ${currentSlideIndex + 1}`}
        />

        {/* Ici on vérifie qu'on a bien plusieurs images pour afficher les éléments du slider */}
        {!isSingleImage && (
          <>
            <button
              className={`${styles.arrow} ${styles.arrowLeft}`}
              onClick={goToPreviousSlide}
            >
              <div className={styles.arrowBlock}>
                <img src={ArrowLeft} alt="flèche gauche" />
              </div>
            </button>
            <button
              className={`${styles.arrow} ${styles.arrowRight}`}
              onClick={goToNextSlide}
            >
              <div className={styles.arrowBlock}>
                <img src={ArrowRight} alt="flèche droite" />
              </div>
            </button>
            <div className={styles.counter}>
              {currentSlideIndex + 1}/{pictures.length}
            </div>
          </>
        )}
      </div>
    </div>
  );
}
