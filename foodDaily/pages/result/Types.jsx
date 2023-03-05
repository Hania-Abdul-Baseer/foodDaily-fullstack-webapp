import styles from './result.module.css'

function types ({diet,age,goal,physical}){
    return (
        <div className={styles.container}>
            <div className={styles.wrapper}>
                <div className={`${styles.age } ${styles.options}`}>{age}</div>
                <div className={`${styles.physical} ${styles.options}`}> {physical} </div>
                <div className={`${styles.diet } ${styles.options}`}>{diet}</div>
                <div className={`${styles.gender} ${styles.options}`}> {goal} </div>
                {/* <div className="cuisine options">{cuisine}</div> */}
            </div>
        </div>
    )
}

export default types