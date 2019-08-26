import React from "react"
import Navigation from "../../components/navigation/navigation"
import Header from "../../components/header/header"

const layout = (props) => {
    return (
        <div>
            <Header title="Some eCommerce Site" />
            <Navigation />
            <div>{ props.children }</div>
        </div>
    )
}

export default layout