import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT
} from './actionTypes';
import axios from 'axios';
import { toBase64 } from '../../helpers/fileHelper/fileHelper';

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
        
        let data = {
            email,
            password
        };
        //Call API ....
        axios({
            method: 'post',
            url: 'https://rk.defghi.biz.id:8080/api/cobrand/cobrandLogin',
            data: data,
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => {
            console.log(response.data);
        })
        .catch((error) => {
            console.error('Error:', error);
        });

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

        localStorage.removeItem('rkLoggedIn');
        dispatch({
            type: AUTH_LOGOUT
        })
    }
}

export const registerAuth = ( email, accountName, cobrandName, photo, phoneNumber, address, password, confirmPassword, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(result);
            const thumbnail = result;

            setTimeout( () => {
                let data = {
                    email,
                    accountName,
                    cobrandName,
                    thumbnail,
                    phoneNumber,
                    address,
                    password,
                    confirmPassword
                };
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/register',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                console.log(data);
                history.push('/');
                dispatch( authFailed() );
            },2000)
        });
    }

}