// Styling
import styles from "./formhome.module.css";

export default function FormWrapper({ title, children }) {
  return (
    <div className={styles.form_wrapper}>
      <h2 className={styles.form_title}>
        {title}
        <span className={styles.form_title_required}> *</span>
      </h2>
      <div className={styles.form_inner_wrapper}>{children}</div>
    </div>
  );
}
