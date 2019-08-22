import React from "react"
import "./navigation.scss"
import { Link } from 'react-router-dom'

const navigation = (props) => {
    return (
        <div className="navigation">
            <Link className="navigation__title" to="/">Title</Link>
            <div className="navigation__menu">
                <Link className="navigation__menu__item" to="/">Store</Link>
                <Link className="navigation__menu__item" to="/cart"> Shopping  Cart</Link>
            </div>
        </div>
    )
}

export default navigation