import React from "react"
import "./cartItem.scss"
import { connect } from "react-redux"

import DeleteButton from "../UI/deleteButton/deleteButton"

import * as actionCreators from '../../store/actions/index';


const cartItem = (props) => {
    return (
        <div className="cart-item">
            <div className="cart-item__delete">
                <DeleteButton onDeleteButtonClick={ () => props.deleteItemFromCart(props.id) } />
            </div>
            <div className="cart-item__image"></div>
            <div className="cart-item__block">
                <div className="cart-item__block__title">
                    { props.title }
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
        deleteItemFromCart: (id) => dispatch(actionCreators.deleteItemFromCart(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cartItem)