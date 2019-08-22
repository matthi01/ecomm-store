import * as actionTypes from '../actions/actionTypes';

const initialState = {
    items: [{
        id: 0,
        title: "test 1",
        description: "this is test 1"
    },{
        id: 1,
        title: "test 2",
        description: "this is test 2"
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
        default:
            return state;
    }
}

export default reducer;