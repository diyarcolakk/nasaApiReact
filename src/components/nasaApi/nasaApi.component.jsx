import { useEffect, useState } from "react";
import Card from "../card/card.component";
import "./nasaApi.styles.scss"
const NasaApi = () => {
    const count = 10;
    const apiKey = "S765qBh4X5m2oYxN8zQZgtNj6gXqHGEGWbB8ba6r";
    const apiUrl = `https://api.nasa.gov/planetary/apod?api_key=${apiKey}&count=${count}`;
   
   
   
    const [nasaApiTemp , setnasaApiTemp] = useState([])

    useEffect(() => {
   fetch(apiUrl).then(res => res.json()).then(data => {
    console.log(data)
    setnasaApiTemp(data)}).catch((err) => console.log(err))
} , [])

// Her bir componentin kendine ait ID si olacak. Böylece localStorage'e koyarken bu ID'ye göre compnonenti aslında stocklayacağım.
//Ardından eğer ki removelamak istersem bu id'ye ait componenti stateden çıkarmam yeterli olacaktır :)

let counter = 0;

return  (
    <div className="container">
        {nasaApiTemp.map((eleman) => {
          console.log(counter)
          return  <Card eleman={eleman} key={counter += 1 } />
          
        }) }
    </div>
)
}



export default NasaApi