import React from "react"
import Navigation from "../../components/navigation/navigation"
import Header from "../../components/header/header"
import Footer from "../../components/footer/footer"
import "./layout.scss"

const layout = (props) => {
    return (
        <div className="wrapper">
            <Header title="Some eCommerce Site" />
            <Navigation />
            <div className="content">{ props.children }</div>
            <Footer />
        </div>
    )
}

export default layout