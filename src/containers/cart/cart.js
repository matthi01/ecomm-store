import React from "react"
import { connect } from "react-redux"
import CartItem from "../../components/cartItem/cartItem"
import Total from "../../components/total/total"
import "../layout/page.scss"
import * as actionCreators from '../../store/actions/index'
import Notification from "../../components/notification/notification"
import Expire from "../../hoc/expire/expire"

let notification = null

const cart = (props) => {

    const deleteButtonHandler = (id) => {
        props.deleteItemFromCart(id)
        props.removeInCartIndicator(id)
        notification = <Expire delay={ 2000 }><Notification text="Item deleted!" type="delete" /></Expire>
    }
    
    let cartItems = null
    if (props.cartItems.length > 0) {
        cartItems = props.cartItems.map((el) => {
            return (
                <CartItem 
                    key={el.id} 
                    id={ el.id }
                    title={ el.title } 
                    description={ el.description }
                    quantity={ el.quantity }
                    price={ el.price }
                    onDeleteHandler={ deleteButtonHandler }
                    onIncrementHandler={ props.incrementQuantity }
                    onDecrementHandler={ props.decrementQuantity } />
            )
        })
    }
    
    return (
        <div className="page">
            <div className="page__container">
                { cartItems }
                <Total />
                { notification }
            </div>
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}

const mapDispatchToProps= (dispatch) => {
    return {
        deleteItemFromCart: (id) => dispatch(actionCreators.deleteItemFromCart(id)),
        removeInCartIndicator: (id) => dispatch(actionCreators.removeInCartIndicator(id)),
        incrementQuantity: (id) => dispatch(actionCreators.incrementQuantity(id)),
        decrementQuantity: (id) => dispatch(actionCreators.decrementQuantity(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)