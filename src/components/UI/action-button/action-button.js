import React from "react"
import "./action-button.scss"

const actionButton = (props) => {
    return (
        <button className="action-button" onClick={ props.onClickHandler }>{ props.label }</button>
    )
}

export default actionButton