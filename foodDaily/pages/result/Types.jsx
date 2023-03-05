import style from './result.module.css'

function types ({diet,age,goal,physical}){
    return (
        <div className={style.detail__container}>
            <div className={style.detail__wrapper}>
                <div className={`${style.age } ${style.options}`}>{age}</div>
                <div className={`${style.physical} ${style.options}`}> {physical} </div>
                <div className={`${style.diet } ${style.options}`}>{diet}</div>
                <div className={`${style.gender} ${style.options}`}> {goal} </div>
                {/* <div className="cuisine options">{cuisine}</div> */}
            </div>
        </div>
    )
}

export default types