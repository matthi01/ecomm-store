import React from "react"
import "./total.scss"
import { connect } from "react-redux"
import CheckoutButton from "../UI/checkoutButton/checkoutButton"

const total = (props) => {

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    let priceArray = []
    let totalPrice = 0

    if (props.cartItems.length > 0) {
        priceArray = props.cartItems.map((el) => {
            return el.price * el.quantity
        })

        totalPrice = priceArray.reduce(reducer)
    }

    priceArray = props.cartItems.map((el) => {
        return el.price * el.quantity
    })

    let totalContent = (
        <div className="total__no-items">
            Your cart is empty!
        </div>)

    if (props.cartItems.length > 0) {
        totalContent = (
            <>
                <div className="total__amount">
                    Cart total: ${ totalPrice.toFixed(2) }
                </div>
                <div className="total__checkout-button">
                    <CheckoutButton />
                </div>
            </>
        )
    }

    return (
        <div className="total">
            { totalContent }
        </div>
    )
}

const mapStateToProps = (state)=>{
    return {
        cartItems: state.cart.cartItems
    }
}

export default connect(mapStateToProps)(total)