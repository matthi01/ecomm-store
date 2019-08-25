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
            inCart: false
        }, {
            id: 1,
            title: "test 2",
            description: "this is test 2",
            inCart: false
        }, {
            id: 2,
            title: "test 3",
            description: "this is test 3",
            inCart: false
        }, {
            id: 3,
            title: "test 4",
            description: "this is test 4",
            inCart: false
        }, {
            id: 4,
            title: "test 5",
            description: "this is test 5",
            inCart: false
        }]

        if (this.props.storeItems.length === 0) {
            this.props.addStoreItems(storeItems)
        }
    }

    addItemToCartHandler = (item) => {
        this.props.addItemToCart(item)
        this.props.setInCartIndicator(item.id)
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
                        onAddHandler={ () => this.addItemToCartHandler(el) } />
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
        addItemToCart: (item) => dispatch(actionCreators.addItemToCart(item)),
        setInCartIndicator: (id) => dispatch(actionCreators.setInCartIndicator(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)