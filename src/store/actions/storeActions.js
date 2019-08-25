import * as actionTypes from './actionTypes';

export const addStoreItems = (items) => {
    return {
        type: actionTypes.ADD_STORE_ITEMS,
        storeItems: items
    };
};