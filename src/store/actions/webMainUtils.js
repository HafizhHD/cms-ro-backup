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

export const addProgram = ( cobrandEmail, programName, ProgramDescription, photo, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(typeof result);
            const programthumnail = result;

            setTimeout( () => {
                let data = {
                    cobrandEmail,
                    programName,
                    ProgramDescription,
                    programthumnail,
                    startDate
                };

                console.log(data);
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
                    history.push('/program');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                console.log(data);
                dispatch(authFailed());
            },2000)
        });
    }

}

export const addContent = ( cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, history ) => {
    return dispatch => {
        dispatch( authStart() );

        const promise = toBase64(photo);
        promise.then((result) => {
            console.log(typeof result);
            const contentThumbnail = result;

            setTimeout( () => {
                let data = {
                    cobrandEmail,
                    programId,
                    contentName,
                    contentDescription,
                    contentType,
                    contentSource,
                    contentThumbnail,
                    contents,
                    startDate
                };

                console.log(data);
                //Call API ....
                
                axios({
                    method: 'post',
                    url: 'https://rk.defghi.biz.id:8080/api/cobrand/contentAdd',
                    data: data,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                })
                .then(response => {
                    console.log('Success:', response.data);
                    history.push('/content');
                })
                .catch((error) => {
                    console.error('Error:', error);
                });
                console.log(data);
                dispatch(authFailed());
            },2000)
        });
    }

}