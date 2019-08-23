import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [{
        id: 0,
        title: "test 1",
        description: "this is test 1",
        quantity: 3
    },{
        id: 1,
        title: "test 2",
        description: "this is test 2",
        quantity: 4
    }],
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_ITEM:
            const newItem = {
                id: action.itemId,
                title: action.itemTitle,
                description: action.itemDescription
            };
            return {
                ...state,
                items: state.items.concat(newItem)
            };
        case actionTypes.DELETE_ITEM:
            const newItems = state.items.filter((el) => {
                return el.id !== action.itemId
            })
            return {
                ...state,
                items: newItems
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