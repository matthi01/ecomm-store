import * as actionTypes from './actionTypes';

export const addItem = (id, title, description) => {
    return {
        type: actionTypes.ADD_ITEM,
        itemId: id,
        itemTitle: title,
        itemDescription: description
    };
};

export const deleteItem = (id) => {
    return {
        type: actionTypes.DELETE_ITEM,
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