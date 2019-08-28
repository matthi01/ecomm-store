import React from "react"
import "./checkoutButton.scss"
import { Link } from 'react-router-dom'

const checkoutButton = (props) => {
    return (
        <Link to="/checkout">
            <button className="checkout-button">
                Checkout
            </button>
        </Link>
    )
}

export default checkoutButton