import {
    AUTH_FAILED,
    AUTH_START,
    AUTH_SUCCESS
} from './../actions/actionTypes';

const initialState = {
    isLogin: false,
    error: null,
    isLoading: false
}

const auth = (state = initialState, action) => {
    switch(action.type){

        case AUTH_START:
            return {
                ...state,
                isLoading: true
            }

        case AUTH_SUCCESS:
            return {
                ...state,
                isLoading: false,
                isLogin: true
            }

        case AUTH_FAILED:
            return {
                ...state,
                isLoading: false
            }

        default:
            return state;
    }
}

export default auth;