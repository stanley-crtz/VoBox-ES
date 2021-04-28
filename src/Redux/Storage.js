import { createStore } from 'redux';

const initialState = {
    Address: '',
    DUI: '',
    Email: '',
    NIT: '',
    Name: '',
    Photo: '',
    TypeAcount: '',
    uid: '',
}

const reducer = (state = initialState, action) => {

    if (action.type === "CHANGE_USER") {
        return action.USER
    }

    return state;

}

export default createStore(reducer);