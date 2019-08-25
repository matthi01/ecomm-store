import * as actionTypes from './actionTypes';

export const addStoreItems = (items) => {
    return {
        type: actionTypes.ADD_STORE_ITEMS,
        storeItems: items
    };
};

export const setInCartIndicator = (id) => {
    return {
        type: actionTypes.SET_IN_CART_INDICATOR,
        itemId: id
    }
};

export const removeInCartIndicator = (id) => {
    return {
        type: actionTypes.REMOVE_IN_CART_INDICATOR,
        itemId: id
    }
};