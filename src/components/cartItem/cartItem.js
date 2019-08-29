import React from "react"
import "./cartItem.scss"
import DeleteButton from "../UI/deleteButton/deleteButton"
import QuantityToggle from "../../components/UI/quantity-toggle/quantity-toggle"

const cartItem = (props) => {

    return (
        <div className="cart-item">
            <div className="cart-item__delete">
                <DeleteButton onDeleteButtonClick={ () => props.onDeleteHandler(props.id) } />
            </div>
            <div className="cart-item__image"></div>
            <QuantityToggle 
                total={ props.quantity }
                decrementClicked={ () => props.onDecrementHandler(props.id) } 
                incrementClicked={ () => props.onIncrementHandler(props.id) } />
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

export default cartItem