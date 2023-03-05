import styles from "./home.module.css";

export default function Card({ children, title, className }) {
  return (
    <div className={className}>
      <h2 className={styles.card_title}>{title}</h2>
      {children}
    </div>
  );
}
