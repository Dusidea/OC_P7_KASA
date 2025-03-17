import styles from "./Banner.module.css";

export default function BannerHome() {
  return (
    <div className={`${styles.banner} ${styles.bannerHome}`}>
      <h1 className={styles.title}>Chez vous, partout et ailleurs</h1>
    </div>
  );
}
