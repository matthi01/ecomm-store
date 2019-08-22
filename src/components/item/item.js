import React from "react"
import "./item.scss"

const item = (props) => {
    return (
        <div className="item">
            <div className="item__title">{ props.title }</div>
            <div className="item__description">{ props.description }</div>
        </div>
    )
}

export default item