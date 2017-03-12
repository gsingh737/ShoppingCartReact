const INIT_STATE = [];
import {ADD_TO_CART, REMOVE_FROM_CART} from '../actions';
export default (state = INIT_STATE, action) => {
    switch(action.type) {
        case ADD_TO_CART:
            return [...state, action.payload];
        case REMOVE_FROM_CART:
            return state.filter((item) => { return item.id !== action.payload});
        default:
            return state;
    }
}

