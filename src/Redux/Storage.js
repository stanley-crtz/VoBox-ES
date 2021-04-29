import { createStore } from 'redux';

const initialState = null;

const reducer = (state = initialState, action) => {

    if (action.type === "CHANGE_USER") {
        return action.USER
    }

    return state;

}

export default createStore(reducer);