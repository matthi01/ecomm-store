import * as actionTypes from '../actions/actionTypes';

const initialState = {
    cartItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM_TO_CART:
            const newItem = {
                ...action.item,
                inCart: true
            };
            return {
                cartItems: state.cartItems.concat(newItem)
            };
        case actionTypes.DELETE_ITEM_FROM_CART:
            const newItems = state.cartItems.filter((el) => {
                return el.id !== action.itemId
            })
            return {
                ...state,
                cartItems: newItems
            };
        case actionTypes.CHANGE_QUANTITY:
            return {
                ...state,
                quantity: action.itemQuantity
            };
        default:
            return state;
    }
}

export default reducer;