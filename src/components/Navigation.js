import React from "react"
import {Link} from "react-router-dom"
import {observer} from "mobx-react"
import "../styles/nav.scss"


const Navigation = observer(({ clearSearch}) => {
    return <header>
        <div className="menu-grid">
            <div className="nav-btn">
                <Link to="/" onClick={clearSearch} className="btn">Playing Now</Link>
            </div>
        </div>
    </header>
})

export default Navigation