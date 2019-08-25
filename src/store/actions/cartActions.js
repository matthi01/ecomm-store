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

export const changeQuantity = (id, quantity) => {
    return {
        type: actionTypes.CHANGE_QUANTITY,
        itemId: id,
        itemQuantity: quantity
    };
};
