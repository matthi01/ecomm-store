import React from "react"
import { connect } from "react-redux"

import StoreItem from "../../components/storeItem/storeItem"
import "./home.scss"
import * as actionCreators from '../../store/actions/index';

class Home extends React.Component {

    componentDidMount() {
        const storeItems = [{
            id: 0,
            title: "test 1",
            description: "this is test 1",
            quantity: 3
        },{
            id: 1,
            title: "test 2",
            description: "this is test 2",
            quantity: 4
        }]

        this.props.addStoreItems(storeItems)
    }

    render() {
        let itemsList = null

        if (this.props.storeItems) {
            itemsList = this.props.storeItems.map((el) => {
                return (
                    <StoreItem 
                        key={el.id} 
                        id={ el.id } 
                        title={ el.title } 
                        description={ el.description } 
                        total={ el.quantity }
                        inCart={ el.inCart }
                        onAddHandler={ () => this.props.addItemToCart(el) } />
                )
            })
        }

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
        storeItems: state.store.storeItems
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        addStoreItems: (items) => dispatch(actionCreators.addStoreItems(items)),
        addItemToCart: (item) => dispatch(actionCreators.addItemToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)