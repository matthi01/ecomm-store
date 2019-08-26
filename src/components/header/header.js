import React from "react"
import "./header.scss"

const header = (props) => {
    return (
        <div className="header">
            <div className="header__site-title">{ props.title }</div>
        </div>
    )
}

export default header