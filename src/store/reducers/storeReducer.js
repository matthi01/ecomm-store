import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [{
        id: 9,
        title: "test 9",
        description: "this is test 9",
        quantity: 9,
        inCart: false
    }]
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_STORE_ITEMS:
            return {
                ...state,
                storeItems: action.storeItems
            };
        default:
            return state;
    }
}

export default reducer;