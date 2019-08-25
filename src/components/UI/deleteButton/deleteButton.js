import React from "react"
import "./deleteButton.scss"

const deleteButton = (props) => {
    return (
        <div onClick={ props.onDeleteButtonClick } className="delete-button">X</div>
    )
}

export default deleteButton