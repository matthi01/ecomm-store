import React from "react"
import "./deleteButton.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

const deleteButton = (props) => {
    return (
        <div onClick={ props.onDeleteButtonClick } className="delete-button">
            <FontAwesomeIcon icon={ faTimes } />
        </div>
    )
}

export default deleteButton