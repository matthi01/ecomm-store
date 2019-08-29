import React from "react"
import { connect } from "react-redux"
import StoreItem from "../../components/storeItem/storeItem"
import "../layout/page.scss"
import * as actionCreators from '../../store/actions/index'
import Notification from "../../components/notification/notification"
import Expire from "../../hoc/expire/expire"

class Home extends React.Component {

    componentDidMount() {
        const storeItems = [{
            id: 0,
            title: "test 1",
            description: "this is a longer test description test test",
            quantity: 1,
            inCart: false,
            price: 9.99
        }, {
            id: 1,
            title: "test 2",
            description: "this is a longer test description test test",
            quantity: 1,
            inCart: false,
            price: 9.99
        }, {
            id: 2,
            title: "test 3",
            description: "this is a longer test description test test",
            quantity: 1,
            inCart: false,
            price: 9.99
        }, {
            id: 3,
            title: "test 4",
            description: "this is a longer test description test test",
            quantity: 1,
            inCart: false,
            price: 9.99
        }, {
            id: 4,
            title: "test 5",
            description: "this is a longer test description test test",
            quantity: 1,
            inCart: false,
            price: 9.99
        }]

        if (this.props.storeItems.length === 0) {
            this.props.addStoreItems(storeItems)
        }
    }

    notification = null

    addItemToCartHandler = (item) => {
        this.props.addItemToCart(item)
        this.props.setInCartIndicator(item.id)
        this.notification = <Expire delay={ 2000 }><Notification text="Item added!" type="add" /></Expire>
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
                        price={ el.price }
                        onAddHandler={ () => this.addItemToCartHandler(el) } />
                )
            })
        }

        return (
            <div className="page">
                <div className="page__container">
                    { itemsList }
                    { this.notification }
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