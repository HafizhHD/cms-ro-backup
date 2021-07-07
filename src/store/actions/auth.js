import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT
} from './actionTypes';

export const authStart = () => ({ type: AUTH_START });
export const authFailed = () => ({ type: AUTH_FAILED });
export const authSuccess = () => ({ type: AUTH_SUCCESS })
export const auth = ( email, password ) => {
    console.log({
        email,
        password
    })
    return dispatch => {
        dispatch( authStart() );
        

        //Call API ....

        setTimeout( () => {
            localStorage.setItem('rkLoggedIn', true);
            dispatch( authSuccess() )
        }, 2000)
    }

}

export const logout = () => {
    return dispatch => {
        dispatch( authStart() );

        //Call API and remove token

        setTimeout( () => {
            localStorage.removeItem('rkLoggedIn');
            dispatch({
                type: AUTH_LOGOUT
            })
        })
    }
}