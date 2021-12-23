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
<<<<<<< HEAD

        setTimeout( () => {
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
                //console.log(response.data);
                let loginData = response.data;
                if (loginData.resultCode === "OK" && loginData.resultData && loginData.resultData.user.password === password) {
                    localStorage.setItem('accessToken', loginData.resultData.token);
                    localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                    console.log('User Data: ', localStorage.getItem('userData'));
                    localStorage.removeItem('loginMessage');
                    dispatch( authSuccess() );
                }
                else {
                    localStorage.setItem('loginMessage', "Incorrect Email/Password.");
                    dispatch(authFailed());
                }
            })
            .catch((error) => {
                console.error('Error:', error);
            });
        }, 2000);
=======
        //Call API ....
        cobrandLogin(data)
        .then(response => {
            console.log(response.data);
            let loginData = response.data;
            if (loginData.resultCode === "OK" && loginData.resultData && loginData.resultData.user.password === password) {
                localStorage.setItem('accessToken', loginData.resultData.token);
                localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                localStorage.removeItem('loginMessage');
                dispatch( authSuccess() );
            }
            else {
                localStorage.setItem('loginMessage', "Incorrect Email/Password.");
                dispatch(authFailed());
            }
        })
        .catch((error) => {
            console.error('Error:', error);
        });
>>>>>>> 9bf1327cb5d3f45e02c7429f185acf2faf70528b
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
                
                cobrandRegister(data)
                .then(response => {
                    console.log('Success:', response.data);
                    localStorage.setItem('loginMessage', "Successfully registered. You can now log in.");
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                console.log(data);
                history.push('/');
                dispatch({
                    type: AUTH_LOGOUT
                });
            },2000)
        });
    }

}