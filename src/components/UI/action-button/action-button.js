import React from "react"
import "./action-button.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart, faPlus } from '@fortawesome/free-solid-svg-icons'

const actionButton = (props) => {

    let buttonLabel = <FontAwesomeIcon icon={faPlus} />
    if (props.type === "cart") {
        buttonLabel = <FontAwesomeIcon icon={faShoppingCart} />
    }
    return (
        <button className="action-button" onClick={ props.onClickHandler }>{ buttonLabel }</button>
    )
}

export default actionButton