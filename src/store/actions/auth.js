import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT,
    ALERT_CLOSE
} from './actionTypes';
import axios from 'axios';
import { toBase64 } from '../../helpers/fileHelper/fileHelper';
import { cobrandLogin, cobrandRegister } from '../../components/API/auth';

export const authStart = () => ({ type: AUTH_START });
export const authFailed = () => ({ type: AUTH_FAILED });
export const authSuccess = () => ({ type: AUTH_SUCCESS })
export const auth = ( userName, password ) => {
    console.log({
        userName,
        password
    })
    return dispatch => {
        dispatch( authStart() );
        
        let data = {
            userName,
            password
        };
        //Call API ....
        cobrandLogin(data)
        .then(response => {
            console.log(response.data);
            let loginData = response.data;
            if (loginData.resultCode === "OK" && loginData.resultData) {
                localStorage.setItem('accessToken', loginData.resultData.token);
                localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                localStorage.setItem('userLevel', loginData.resultData.user.userLevel);
                localStorage.setItem('cobrandComId', loginData.resultData.user.cobrandComunityId ?? '');
                localStorage.removeItem('loginMessage');
                dispatch( authSuccess() );
            }
            else {
                localStorage.setItem('loginMessage', "Incorrect User Name/Password.");
                dispatch(authFailed());
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    }

}

export const logout = (history) => {
    return dispatch => {
        dispatch( authStart() );

        //Call API and remove token
        localStorage.clear();
        history.push('/');
        dispatch({
            type: ALERT_CLOSE
        });
        dispatch({
            type: AUTH_LOGOUT
        });
    }
}

export const registerAuth = ( nama, alamat, phone, nik, ktp, userName, password, userType, cobrandEmail, userLevel, sekolah, emailUser, cobrandComunityId, groupMitraAsuhId, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(ktp);
        promise.then((result) => {
            // console.log(result);
            const thumbnail = result;

            setTimeout( () => {
                let data = {
                    nama,
                    alamat,
                    phone,
                    nik,
                    ktp: thumbnail,
                    userName, password, userType, cobrandEmail, userLevel, sekolah, emailUser, cobrandComunityId, groupMitraAsuhId
                };
                console.log(data);
                //Call API ....
                
                cobrandRegister(data)
                .then(response => {
                    // console.log('Success:', response.data);
                    localStorage.setItem('loginMessage', "Successfully registered. You can now log in.");
                    history.push('/');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                dispatch({
                    type: AUTH_LOGOUT
                });
                // console.log(data);
            },2000)
        });
    }

}