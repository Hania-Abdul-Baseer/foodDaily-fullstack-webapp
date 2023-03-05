import styles from './result.module.css'
function feed({title,link,plan}){
    return (
    <div className={styles.component__wrapper}>
      <div className={styles.table}>
        <div className={styles.diet__wrapper}>
              <img className = {styles.imgs} src={link} alt="img" />
            <div className={styles.details}>
              <h1 className={styles.meal__type}>{title}</h1>
              <p className={styles.para}>{plan}</p>
            </div>
          </div>
      </div>
    </div>
    )
}

export default feed