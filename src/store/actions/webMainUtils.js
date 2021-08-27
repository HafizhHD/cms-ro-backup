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

export const addProgram = ( email, programName, programDescription, photo, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(result);
            const programThumbnail = result;

            setTimeout( () => {
                let data = {
                    email,
                    programName,
                    programDescription,
                    programThumbnail,
                    startDate
                };
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/programAdd',
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
                history.push('/program');
                dispatch(authFailed());
            },2000)
        });
    }

}