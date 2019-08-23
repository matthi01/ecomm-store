import React from "react"
import "./quantity-toggle.scss"

const quantityToggle = (props) => {
    return (
        <div className="quantity-toggle">
            <div className="quantity-toggle__button" onClick={ props.decrementClicked }>-</div>
            <div className="quantity-toggle__quantity">{ props.total }</div>
            <div className="quantity-toggle__button" onClick={ props.incrementClicked }>+</div>
        </div>
    )
}

export default quantityToggle