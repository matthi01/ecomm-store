import React from "react"
import { connect } from "react-redux"
import CartItem from "../../components/cartItem/cartItem"

import * as actionCreators from '../../store/actions/index';

const cart = (props) => {
    
    let cartItems = null
    if (props.cartItems.length > 0) {
        cartItems = props.cartItems.map((el) => {
            return (
                <CartItem 
                    key={el.id} 
                    id={ el.id }
                    title={ el.title } 
                    description={ el.description }
                    quantity={ el.quantity } />
            )
        })
    }
    
    return (
        <div>
            <div>Cart</div>
            { cartItems }
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
        addStoreItems: (items) => dispatch(actionCreators.addStoreItems(items)),
        addItemToCart: (item) => dispatch(actionCreators.addItemToCart(item))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(cart)