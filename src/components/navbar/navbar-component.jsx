import { useState } from "react"
import "./navbar.styles.scss"

function Navbar () {

    const [localRepo , setlocalRepo] = useState([])

    function deneme () {
        console.log("diyar");
    }

    return (
        <div className="navbar-container">
            <div className="favourites-navbar" onClick={deneme}>Favourites</div>
            <div>LoadMore</div>
        </div>
    )
}


export default Navbar