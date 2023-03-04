// Styling
import styles from "./navbar.module.css";

export default function Navbar() {
  return (
    <div className={styles.navbar_wrapper}>
      <h2 className={styles.navbar_title}>Food Daily</h2>
      <button className={styles.navbar_button}>Get Started</button>
    </div>
  );
}
