import styles from "./Banner.module.css";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <p className={styles.title}>Chez vous, partout et ailleurs</p>
    </div>
  );
}
