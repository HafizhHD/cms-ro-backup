import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED
} from './actionTypes';

export const authStart = () => ({ type: AUTH_START });
export const authFailed = () => ({ type: AUTH_FAILED });
export const auth = ( email, password ) => {
    console.log({
        email,
        password
    })
    return dispatch => {
        dispatch( authStart() );

        //Call API ....

        setTimeout( () => {
            dispatch({
                type: AUTH_SUCCESS
            })
        }, 2000)
    }

}