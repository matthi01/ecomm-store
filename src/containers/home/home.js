import React from "react"
import { connect } from "react-redux"

import Item from "../../components/item/item"
import "./home.scss"

class Home extends React.Component {

    render() {
        let itemsList = this.props.items.map((el) => {
            return (
                <Item key={el.id} id={ el.id } title={ el.title } description={ el.description } />
            )
        })

        return (
            <div>
                <div className="page__title">Home</div>
                <div className="page__container">
                    { itemsList }
                </div>
            </div>
            
        )
    }
}

const mapStateToProps = (state)=>{
    return {
        items: state.items
    }
}

export default connect(mapStateToProps)(Home)