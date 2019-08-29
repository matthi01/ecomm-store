import React from "react"
import "./notification.scss"

const notification = (props) => {
    return (
        <div className={ "notification" + (props.type === "add" ? " notification__add" : " notification__delete") }>
            { props.text }
        </div>
    )
}

export default notification