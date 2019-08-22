import React from "react"
import Navigation from "../../components/navigation/navigation"

const layout = (props) => {
    return (
        <div>
            <Navigation />
            <div>{ props.children }</div>
        </div>
    )
}

export default layout