import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartItems: []
}

const reducer = (state = initialState, action) => {
    let updatedCartItems = null
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            const newItem = {
                ...action.item,
            };
            return {
                cartItems: state.cartItems.concat(newItem)
            };
        case actionTypes.DELETE_ITEM_FROM_CART:
            updatedCartItems = state.cartItems.filter((el) => {
                return el.id !== action.itemId
            })
            return {
                ...state,
                cartItems: updatedCartItems
            };
        case actionTypes.INCREMENT_QUANTITY:
            updatedCartItems = state.cartItems.map((el) => {
                if (el.id !== action.itemId) { return el }
                return { ...el, quantity: ++el.quantity }
            })
            return {
                ...state,
                cartItems: updatedCartItems
            };
        case actionTypes.DECREMENT_QUANTITY:
                updatedCartItems = state.cartItems.map((el) => {
                    if (el.id !== action.itemId) { return el }
                    return { ...el, quantity: --el.quantity  }
                })
                return {
                    ...state,
                    cartItems: updatedCartItems
                };
        default:
            return state;
    }
}

export default reducer;