import React from "react"
import "./quantity-toggle.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

const quantityToggle = (props) => {
    return (
        <div className="quantity-toggle">
            <div className="quantity-toggle__button" onClick={ props.total > 1 ? props.decrementClicked : null }>
                <FontAwesomeIcon icon={ faMinus } />
            </div>
            <div className="quantity-toggle__quantity">{ props.total }</div>
            <div className="quantity-toggle__button" onClick={ props.incrementClicked }>
                <FontAwesomeIcon icon={ faPlus } />
            </div>
        </div>
    )
}

export default quantityToggle