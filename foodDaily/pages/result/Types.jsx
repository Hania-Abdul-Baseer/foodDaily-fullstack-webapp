import style from './result.module.css'

function types ({diet,age,goal,physical}){
    return (
        <div className={style.detail__container}>
            <div className={style.detail__wrapper}>
                <div className={`${style.age } ${style.options}`}>Dietary Restriction: {age}</div>
                <div className={`${style.physical} ${style.options}`}>Current Physical Activity: {physical} </div>
                <div className={`${style.diet } ${style.options}`}>Favorite Cuisine: {diet}</div>
                <div className={`${style.diet} ${style.options}`}>Health Goal: {goal} </div>
                {/* <div className="cuisine options">{cuisine}</div> */}
            </div>
        </div>
    )
}

export default types