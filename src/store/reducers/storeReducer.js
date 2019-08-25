import * as actionTypes from '../actions/actionTypes';

const initialState = {
    storeItems: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_STORE_ITEMS:
            return {
                ...state,
                storeItems: action.storeItems
            };
        case actionTypes.SET_IN_CART_INDICATOR:
            const newStoreItems = state.storeItems.map((el) => {
                if (el.id !== action.itemId) { return el }
                return { ...el, inCart: true }
            })
            return {
                ...state,
                storeItems: newStoreItems
            };
        case actionTypes.REMOVE_IN_CART_INDICATOR:
            const updatedStoreItems = state.storeItems.map((el) => {
                if (el.id !== action.itemId) { return el }
                return { ...el, inCart: false }
            })
            return {
                ...state,
                storeItems: updatedStoreItems
            };
        default:
            return state;
    }
}

export default reducer;