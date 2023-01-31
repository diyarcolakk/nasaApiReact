
import { useEffect, useState } from "react"
import "./card.styles.scss"

function Card(props) {

    console.log(props);
  const {title,explanation,hdurl,date} = props.eleman

  const [localStorageRepo, setLocalStorageRepo] = useState([])

  const myKey = "key"

  useEffect(() => {
    localStorage.setItem("myKey",JSON.stringify(localStorageRepo))
  })

//   LocalStorage'a atmam gereken değerler Propsdan gelen değerler olmalı.Yani props objesinin tamamımını atmam gerekiyor.useState ile state her değiştiğinde içindeki 
//   veriyi değiştirmeliyim
//   Daha sonra verdiğim key ile bunları map ile dönmeliyim
//   Döndüğüm map fonksiyonuyla başka bir component'da çağırmalıyım ve bu component favorilere gittiğinde çalışmalı. (Router)
//   LoadMore fonksiyonuyla sayfayı refresh edip ana sayfaya gitmeliyim


    return (
        <div className="card-container">
            <div className="img-container">
                <a href={hdurl} target = "_blank">
                    <img className="image-set" src={hdurl} alt={title} />
                </a>
            </div> 
            <div className="text-container">
                <h1 className="title-show">{title}</h1>
                <div className="btn-div">
                <button className="btn" onClick={() => {
                    setLocalStorageRepo()
                }}>Add to Favorites</button>
                </div>
                 <div className="only-text">
                    <p>{explanation}</p>
                    <p className="date">{date}</p>
                 </div>
            </div>
        </div>
    )
} 


export default Card