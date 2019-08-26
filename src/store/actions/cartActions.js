import * as actionTypes from './actionTypes';

export const addItemToCart = (item) => {
    return {
        type: actionTypes.ADD_ITEM_TO_CART,
        item: item
    };
};

export const deleteItemFromCart = (id) => {
    return {
        type: actionTypes.DELETE_ITEM_FROM_CART,
        itemId: id
    };
};

export const incrementQuantity = (id) => {
    return {
        type: actionTypes.INCREMENT_QUANTITY,
        itemId: id
    };
};

export const decrementQuantity = (id) => {
    return {
        type: actionTypes.DECREMENT_QUANTITY,
        itemId: id
    };
};