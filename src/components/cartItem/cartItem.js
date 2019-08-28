import React from "react"
import "./cartItem.scss"
import { connect } from "react-redux"

import DeleteButton from "../UI/deleteButton/deleteButton"
import QuantityToggle from "../../components/UI/quantity-toggle/quantity-toggle"

import * as actionCreators from '../../store/actions/index';

const cartItem = (props) => {

    const deleteButtonHandler = (id) => {
        props.deleteItemFromCart(id)
        props.removeInCartIndicator(id)
    }
    return (
        <div className="cart-item">
            <div className="cart-item__delete">
                <DeleteButton onDeleteButtonClick={ () => deleteButtonHandler(props.id) } />
            </div>
            <div className="cart-item__image"></div>
            <QuantityToggle 
                total={ props.quantity }
                decrementClicked={ () => props.decrementQuantity(props.id) } 
                incrementClicked={ () => props.incrementQuantity(props.id) } />
            <div className="cart-item__block">
                <div className="cart-item__block__title">
                    ${ props.price } - { props.title }
                </div>
                <div className="cart-item__block__description">
                    { props.description }
                </div>
            </div>
            <div className="cart-item__quantity-selector"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(cartItem)