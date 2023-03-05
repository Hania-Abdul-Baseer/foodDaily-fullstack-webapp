import styles from "./home.module.css";
export default function SmallerCard({ title, desc }) {
  return (
    <div className={styles.smaller_caprd_wrappers}>
      <div className={styles.smaller_card_inner_wrapper}>
        <h3 className={styles.smaller_card_inner_wrapper_title}>{title}</h3>
        <span className={styles.smaller_card_paragraph}>{desc}</span>
      </div>
    </div>
  );
}
