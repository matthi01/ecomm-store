import * as actionTypes from './actionTypes';

export const addItem = (id, title, description) => {
    return {
        type: actionTypes.ADD_ITEM,
        itemId: id,
        itemTitle: title,
        itemDescription: description
    };
};