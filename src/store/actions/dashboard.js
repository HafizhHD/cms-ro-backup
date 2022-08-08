import {
    AUTH_SUCCESS,
    AUTH_START,
    AUTH_FAILED,
    AUTH_LOGOUT,
    ALERT_ERROR,
    ALERT_SUCCESS,
    ALERT_CLOSE
} from './actionTypes';
import axios from 'axios';
import { toBase64, getEmbedUrl } from '../../helpers/fileHelper/fileHelper';
import { contentAdd, contentAddAsync, contentDelete, contentEdit, programAdd, programAddv2, programDelete, programEdit, notificationAdd, audienceAdd, notifCategoryAdd, programCategoryAdd,
    adminAdd, adminEdit, adminDelete, contentTopicAdd, screenTimeAdd, appUserEdit } from '../../components/API/dashboard';
import { cobrandEdit, cobrandLogin } from '../../components/API/auth';

///pdf
// import { Viewer } from '@react-pdf-viewer/core' //library, plugin
// import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout' //styles
// import '@react-pdf-viewer/default-layout/lib/styles/index.css'
// import '@react-pdf-viewer/core/lib/styles/index.css'
// import { Worker } from '@react-pdf-viewer/core'
// import React, { useState } from 'react';
// import InputComponent from '../../../src/components/UI/Input/Input';

export const loadingStart = () => ({ type: AUTH_START });
export const loadingStop = () => ({ type: AUTH_FAILED });
export const authSuccess = () => ({ type: AUTH_SUCCESS });

export const alertError = (message, id) => ({
    type: ALERT_ERROR,
    message: message,
    idMessage: id
});

export const alertSuccess = (message, id) => ({
    type: ALERT_SUCCESS,
    message: message,
    idMessage: id
})

export const addProgram = (cobrandEmail, programName, ProgramDescription, photo, startDate, endDate, category, targetAudience, contentProg, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });

        const promise = toBase64(photo);
        promise.then((result) => {
            // console.log(typeof result);
            const programthumnail = result;
            let targetAudiance = [];
            for(var j = 0; j < targetAudience.length; j++) {
                targetAudiance.push(targetAudience[j].value);
            }

            let data1 = {
                cobrandEmail,
                programName,
                ProgramDescription,
                programthumnail,
                startDate,
                endDate,
                category,
                targetAudiance
            };

            programAdd(data1)
            .then(response => {
                console.log('response:', response.data);
                let programId = response.data.resultData.progrram._id;
                let contentPrograms1 = [];
                for(var i = 0; i < contentProg.length; i++) {
                    let x = contentProg[i];
                    let respons = {};
                    for(var j = 0; j < x.response.length; j++) {
                        respons[x.response[j]] = 0;
                    }
                    let realContents = '<!DOCTYPE html>'
                            + '<html lang="en">'
                            + '<head>'
                            + '<meta charset="utf-8">'
                            + '<style>'
                            + '#contents {'
                            + 'overflow-y: scroll;'
                            + 'text-align: justify;'
                            + 'font-family: Arial, Helvetica, sans-serif;'
                            + 'padding: 1%;'
                            + 'width: 360px;'
                            + '}'
                            + '#contents li {'
                            + 'margin-left: 5%;'
                            + '}'
                            + '</style>'
                            + '</head>'
                            + '<body>'
                            + '<div id="contents">'
                            + x.contents
                            + '</div>'
                            + '</body>'
                            + '</html>';
                    let dataRaw = {
                        programId: programId,
                        cobrandEmail: cobrandEmail,
                        nomerUrutTahapan: x.nomerUrutTahapan,
                        namaTahapan: x.namaTahapan,
                        contentName: x.contentName,
                        contentType: x.contentType,
                        contentSource: x.contentSource,
                        contents: realContents,
                        startDate: x.startDate,
                        endDate: x.endDate,
                        topics: x.topics,
                        targetAudiance: x.targetAudiance,
                        status: 'active',
                        respons: respons,
                        answerKey: x.answerKey
                    }

                    contentPrograms1.push(contentAddAsync(dataRaw).then(response2 => {
                        console.log('Respons ' + i, response2)
                    }));
                    console.log('content Program 1', contentPrograms1);
                }
                if(contentPrograms1.length === contentProg.length) {
                    history.push('/cms/program');
                    dispatch(alertSuccess('Program "' + programName + '" berhasil ditambahkan.'));
                    dispatch(loadingStop());
                }
                else {
                    dispatch(alertError('Program "' + programName + '" berhasil ditambahkan, namun beberapa tahap gagal ditambahkan.'));
                    dispatch(loadingStop());
                }
            })
            .catch(error => {
                console.log('Error:', error);
                dispatch(alertError('Program "' + programName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            })

            // let contentPrograms = [];
            // for(var i = 0; i < contentProg.length; i++) {
            //     let x = contentProg[i];
            //     let respons = {};
            //     for(var j = 0; j < x.response.length; j++) {
            //         respons[x.response[j]] = 0;
            //     }
            //     let realContents = '<!DOCTYPE html>'
            //             + '<html lang="en">'
            //             + '<head>'
            //             + '<meta charset="utf-8">'
            //             + '<style>'
            //             + '#contents {'
            //             + 'overflow-y: scroll;'
            //             + 'text-align: justify;'
            //             + 'font-family: Arial, Helvetica, sans-serif;'
            //             + 'padding: 1%;'
            //             + '}'
            //             + '#contents li {'
            //             + 'margin-left: 5%;'
            //             + '}'
            //             + '</style>'
            //             + '</head>'
            //             + '<body>'
            //             + '<div id="contents">'
            //             + x.contents
            //             + '</div>'
            //             + '</body>'
            //             + '</html>';
            //     let dataRaw = {
            //         nomerUrutTahapan: x.nomerUrutTahapan,
            //         namaTahapan: x.namaTahapan,
            //         contentName: x.contentName,
            //         contentType: x.contentType,
            //         contentSource: x.contentSource,
            //         contents: realContents,
            //         startDate: x.startDate,
            //         endDate: x.endDate,
            //         topics: x.topics,
            //         targetAudiance: x.targetAudiance,
            //         respons: respons,
            //         answerKey: x.answerKey
            //     }
            //     contentPrograms.push(dataRaw);
            // }

            // let targetAudiance = [];
            // for(var j = 0; j < targetAudience.length; j++) {
            //     targetAudiance.push(targetAudience[j].value);
            // }

            // let data = {
            //     cobrandEmail,
            //     programName,
            //     ProgramDescription,
            //     programthumnail,
            //     startDate,
            //     endDate,
            //     category,
            //     targetAudiance,
            //     contentPrograms
            // };

            // // console.log(data);
            // //Call API ....

            // // programAdd(data)
            // programAddv2(data)
            //     .then(response => {
            //         // console.log('Success:', response.data);
            //         history.push('/cms/program');
            //         dispatch(alertSuccess('Program "' + programName + '" berhasil ditambahkan.'));
            //         dispatch(loadingStop());
            //     })
            //     .catch((error) => {
            //         console.error('Error:', error);
            //         dispatch(alertError('Program "' + programName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
            //         dispatch(loadingStop());
            //     });
            // // console.log(data);
        });
    }

}

export const editProgram = (_id, cobrandEmail, programName, ProgramDescription, startDate, endDate, category, targetAudiance, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            whereValues: {
                cobrandEmail,
                _id
            },
            newValues: {
                programName,
                ProgramDescription,
                startDate,
                endDate,
                category,
                targetAudiance
            }
        };

        // console.log(data);
        //Call API ....

        programEdit(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/cms/program');
                dispatch(alertSuccess('Program "' + programName + '" berhasil diubah.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Program "' + programName + '" gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
    }

}

export const addStep = (programId, cobrandEmail, nomerUrutTahapan, namaTahapan, contentName, contentType, contentSource, contents, startDate, endDate, topics, targetAudiance, response, answerKey, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let respons = {};
        for(var j = 0; j < response.length; j++) {
            respons[response[j]] = 0;
        }
        let realContents = '<!DOCTYPE html>'
                            + '<html lang="en">'
                            + '<head>'
                            + '<meta charset="utf-8">'
                            + '<style>'
                            + '#contents {'
                            + 'overflow-y: scroll;'
                            + 'text-align: justify;'
                            + 'font-family: Arial, Helvetica, sans-serif;'
                            + 'padding: 1%;'
                            + 'width: 360px;'
                            + '}'
                            + '#contents li {'
                            + 'margin-left: 5%;'
                            + '}'
                            + '</style>'
                            + '</head>'
                            + '<body>'
                            + '<div id="contents">'
                            + contents
                            + '</div>'
                            + '</body>'
                            + '</html>';
        let data = {
            programId,
            cobrandEmail,
            nomerUrutTahapan,
            namaTahapan,
            contentName,
            contentType,
            contentSource,
            contents: realContents,
            startDate,
            endDate,
            topics,
            targetAudiance,
            respons,
            answerKey,
            status: 'active'
        };

        console.log(data);
        //Call API ....

        contentAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/cms/program/edit/');
                dispatch(alertSuccess('Tahap program "' + contentName + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Tahap program "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
    }

}

export const editStep = (_id, cobrandEmail, namaTahapan, contentName, contents, response, answerKey, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let respons = {};
        for(var j = 0; j < response.length; j++) {
            respons[response[j]] = 0;
        }
        let realContents = '<!DOCTYPE html>'
                            + '<html lang="en">'
                            + '<head>'
                            + '<meta charset="utf-8">'
                            + '<style>'
                            + '#contents {'
                            + 'overflow-y: scroll;'
                            + 'text-align: justify;'
                            + 'font-family: Arial, Helvetica, sans-serif;'
                            + 'padding: 1%;'
                            + 'width: 360px;'
                            + '}'
                            + '#contents li {'
                            + 'margin-left: 5%;'
                            + '}'
                            + '</style>'
                            + '</head>'
                            + '<body>'
                            + '<div id="contents">'
                            + contents
                            + '</div>'
                            + '</body>'
                            + '</html>';
        let data = {
            whereValues: {
                cobrandEmail,
                _id
            },
            newValues: {
                namaTahapan,
                contentName,
                contents: realContents,
                response,
                answerKey
            }
        };

        // console.log(data);
        //Call API ....

        contentEdit(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/cms/program/view/step');
                dispatch(alertSuccess('Tahap program "' + contentName + '" berhasil diubah.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Tahap program "' + contentName + '" gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
    }

}

export const deleteProgram = (cobrandEmail, programId, retrieveList) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                cobrandEmail: cobrandEmail,
                _id: programId[0]
            }
        }
        programDelete(deleting)
            .then(response => {
                // console.log(response.data);
                let paramu = {
                    whereValues: {
                        programId: programId[0]
                    }
                }
                contentDelete(paramu)
                .then(response2 => {
                    // console.log(response2.data);
                    dispatch(alertSuccess('Program "' + programId[1] + '" berhasil dihapus.'));
                    dispatch(loadingStop());
                    retrieveList();
                })
                .catch(error => {
                    // console.log(error);
                    dispatch(alertSuccess('Program "' + programId[1] + '" berhasil dihapus, namun tahap pada program gagal dihapus.'));
                    dispatch(loadingStop());
                    retrieveList();
                });
            })
            .catch(error => {
                // console.log(error);
                dispatch(alertError('Program "' + programId[1] + '" gagal dihapus. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
                retrieveList();
            });
    }
}

export const addContent = (cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, endDate, isActive, topics, targetAudience, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });

        // const [numPages, setNumPages] = useState(null);
        // const [pageNumber, setPageNumber] = useState(1);


        const promise = toBase64(photo);
        promise.then((result) => {

            let topic = [], audi = [];
            topics.map(e => {
                topic.push(e.value)
            });
            targetAudience.map(e => {
                audi.push(e.value)
            });

            // console.log(typeof result);
            const contentThumbnail = result;
            let status = isActive ? 'active' : 'inactive';

            if (contentType === 'Video') {
                // const video = toBase64(contents);
                if (typeof contents === 'string') {
                    contents = "<div><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:360px;height:202.5px;\" frameborder=\"0\" width=\"360px\" height=\"202.5px\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
                } else {
                    const video = toBase64(contents);
                    video.then((hasil) => {
                        contents = "<div><video autoplay controls src=\"" + getEmbedUrl(hasil) + "\" style=\"width:360px;height:202.5px;\" frameborder=\"0\" width=\"360px\" height=\"202.5px\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></video></div>"
                        // contents = "<img src=\"" + hasil + "\" style=\"width:100%;\"/>" 
                        let data = {
                            cobrandEmail,
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            contentThumbnail,
                            contents,
                            status,
                            startDate,
                            endDate,
                            topics: topic,
                            targetAudiance: audi
                        };

                        // console.log(data);
                        //Call API ....

                        contentAdd(data)
                            .then(response => {
                                // console.log('Success:', response.data);
                                history.push('/cms/content');
                                dispatch(alertSuccess('Content "' + contentName + '" berhasil ditambahkan.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Content "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                        // console.log(data);
                    })
                }

            }
            else if (contentType === 'Image') {
                if (typeof contents === 'string') {
                    contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>";
                } else {
                    const gambar = toBase64(contents);
                    gambar.then((hasil) => {
                        contents = "<img src=\"" + hasil + "\" style=\"width:100%;\"/>";
                        // console.log(contents);
                        // <div style="position:relative;padding-bottom:56.25%;"><iframe src="https://www.youtube.com/embed/jVKzomlvDgE" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                        let data = {
                            cobrandEmail,
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            contentThumbnail,
                            contents,
                            status,
                            startDate,
                            endDate,
                            topics: topic,
                            targetAudiance: audi
                        };

                        // console.log(data);
                        //Call API ....

                        contentAdd(data)
                            .then(response => {
                                // console.log('Success:', response.data);
                                history.push('/cms/content');
                                dispatch(alertSuccess('Content "' + contentName + '" berhasil ditambahkan.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Content "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                        // console.log(data);

                    })
                }
            }
            else if (contentType === 'Pdf') {
                if (typeof contents === 'string') {
                    contents = '<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url=' + contents + (contents.includes('&embedded=true') ? '' : '&embedded=true') + '" frameborder="0" width="100%" height="100%"></iframe></div>'
                } else {
                    const pdf = toBase64(contents);
                    pdf.then((hasil) => {
                        contents = '<div style="width:100%;height:100vh;"><iframe src="' + hasil + '" frameborder="0" width="100%" height="100%"></iframe></div>'
                        let data = {
                            cobrandEmail,
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            contentThumbnail,
                            contents,
                            status,
                            startDate,
                            endDate,
                            topics: topic,
                            targetAudiance: audi
                        };

                        // console.log(data);
                        //Call API ....

                        contentAdd(data)
                            .then(response => {
                                // console.log('Success:', response.data);
                                history.push('/cms/content');
                                dispatch(alertSuccess('Content "' + contentName + '" berhasil ditambahkan.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Content "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                        // console.log(data);
                    })
                }
            }
            else {
                contents = '<!DOCTYPE html>'
                    + '<html lang="en">'
                    + '<head>'
                    + '<meta charset="utf-8">'
                    + '<style>'
                    + '#contents {'
                    + 'overflow-y: scroll;'
                    + 'text-align: justify;'
                    + 'font-family: Arial, Helvetica, sans-serif;'
                    + 'padding: 1%;'
                    + '}'
                    + '#contents li {'
                    + 'margin-left: 5%;'
                    + '}'
                    + '</style>'
                    + '</head>'
                    + '<body>'
                    + '<div id="contents">'
                    + contents
                    + '</div>'
                    + '</body>'
                    + '</html>';
            }

            // console.log(contents);
            // <div style="position:relative;padding-bottom:56.25%;"><iframe src="https://www.youtube.com/embed/jVKzomlvDgE" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            let data = {
                cobrandEmail,
                programId,
                contentName,
                contentDescription,
                contentType,
                contentSource,
                contentThumbnail,
                contents,
                status,
                startDate,
                endDate,
                topics: topic,
                targetAudiance: audi
            };

            console.log(data);
            //Call API ....

            contentAdd(data)
                .then(response => {
                    // console.log('Success:', response.data);
                    history.push('/cms/content');
                    dispatch(alertSuccess('Content "' + contentName + '" berhasil ditambahkan.'));
                    dispatch(loadingStop());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Content "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
            // console.log(data);
        });
    }
}

//edit content di sesuaikan dg ini
export const editContent = (_id, cobrandEmail, programId, contentName, contentDescription, contentType, contentSource, photo, contents, startDate, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });


        // const [numPages, setNumPages] = useState(null);
        // const [pageNumber, setPageNumber] = useState(1);


        // const promise = toBase64(photo);
        // promise.then((result) => {

            // // console.log(typeof result);
            // const contentThumbnail = result;
            const contentThumbnail = photo;
            // let status = isActive ? 'active' : 'inactive';

            if (contentType === 'Video') {
                // const video = toBase64(contents);
                if (typeof contents === 'string') {
                    contents = "<div><iframe src=\"" + getEmbedUrl(contents) + "\" style=\"width:360px;height:202.5px;\" frameborder=\"0\" width=\"360px\" height=\"202.5px\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"
                } else {
                    
                    const video = toBase64(contents);
                    video.then((hasil) => {
                        contents = "<div><video autoplay controls src=\"" + getEmbedUrl(hasil) + "\" style=\"width:360px;height:202.5px;\" frameborder=\"0\" width=\"360px\" height=\"202.5px\" allow=\"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></video></div>"
                        // contents = "<img src=\"" + hasil + "\" style=\"width:100%;\"/>" 
                        // const contentThumbnail = result;
                        let datax = {
                            cobrandEmail,
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            // contentThumbnail,
                            contents,
                            // status,
                            startDate
                        };

                        let data = {
                            whereValues: {
                                _id
                            },
                            newValues: datax
                        }

                        // console.log(data);
                        //Call API ....

                        contentEdit(data)
                            .then(response => {
                                // console.log('Success:', response.data);
                                history.push('/cms/content');
                                dispatch(alertSuccess('Content "' + contentName + '" berhasil diubah.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Content "' + contentName + '" gagal diubah. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                        // console.log(data);
                    })
                }

            }
            else if (contentType === 'Image') {
                if (typeof contents === 'string') {
                    contents = "<img src=\"" + contents + "\" style=\"width:100%;\"/>";
                } else {
                    const gambar = toBase64(contents);
                    gambar.then((hasil) => {
                        contents = "<img src=\"" + hasil + "\" style=\"width:100%;\"/>";
                        // console.log(contents);
                        // <div style="position:relative;padding-bottom:56.25%;"><iframe src="https://www.youtube.com/embed/jVKzomlvDgE" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

                        let datax = {
                            cobrandEmail,
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            // contentThumbnail,
                            contents,
                            // status,
                            startDate
                        };

                        let data = {
                            whereValues: {
                                _id
                            },
                            newValues: datax
                        }

                        // console.log(data);
                        //Call API ....

                        contentEdit(data)
                            .then(response => {
                                // console.log('Success:', response.data);
                                history.push('/cms/content');
                                dispatch(alertSuccess('Content "' + contentName + '" berhasil diubah.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Content "' + contentName + '" gagal diubah. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                        // console.log(data);

                    })
                }
            }
            else if (contentType === 'Pdf') {
                if (typeof contents === 'string') {
                    contents = '<div style="width:100%;height:100vh;"><iframe src="http://docs.google.com/gview?url=' + contents + (contents.includes('&embedded=true') ? '' : '&embedded=true') + '" frameborder="0" width="100%" height="100%"></iframe></div>'
                } else {
                    const pdf = toBase64(contents);
                    pdf.then((hasil) => {
                        contents = '<div style="width:100%;height:100vh;"><iframe src="' + hasil + '" frameborder="0" width="100%" height="100%"></iframe></div>'
                        let datax = {
                            cobrandEmail,
                            programId,
                            contentName,
                            contentDescription,
                            contentType,
                            contentSource,
                            // contentThumbnail,
                            contents,
                            // status,
                            startDate
                        };

                        let data = {
                            whereValues: {
                                _id
                            },
                            newValues: datax
                        }

                        // console.log(data);
                        //Call API ....

                        contentEdit(data)
                            .then(response => {
                                // console.log('Success:', response.data);
                                history.push('/cms/content');
                                dispatch(alertSuccess('Content "' + contentName + '" berhasil ditambahkan.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Content "' + contentName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                        // console.log(data);
                    })
                }
            }
            else {
                contents = '<!DOCTYPE html>'
                    + '<html lang="en">'
                    + '<head>'
                    + '<meta charset="utf-8">'
                    + '<style>'
                    + '#contents {'
                    + 'overflow-y: scroll;'
                    + 'text-align: justify;'
                    + 'font-family: Arial, Helvetica, sans-serif;'
                    + 'padding: 1%;'
                    + '}'
                    + '#contents li {'
                    + 'margin-left: 5%;'
                    + '}'
                    + '</style>'
                    + '</head>'
                    + '<body>'
                    + '<div id="contents">'
                    + contents
                    + '</div>'
                    + '</body>'
                    + '</html>';
            }

            // console.log(contents);
            // <div style="position:relative;padding-bottom:56.25%;"><iframe src="https://www.youtube.com/embed/jVKzomlvDgE" style="width:100%;height:100%;position:absolute;left:0px;top:0px;" frameborder="0" width="100%" height="100%" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>

            let datax = {
                cobrandEmail,
                programId,
                contentName,
                contentDescription,
                contentType,
                contentSource,
                // contentThumbnail,
                contents,
                // status,
                startDate
            };

            let data = {
                whereValues: {
                    _id
                },
                newValues: datax
            }

            // console.log(data);
            //Call API ....

            contentEdit(data)
                .then(response => {
                    // console.log('Success:', response.data);
                    history.push('/cms/content');
                    dispatch(alertSuccess('Content "' + contentName + '" berhasil diubah.'));
                    dispatch(loadingStop());
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Content "' + contentName + '" gagal diubah. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
            // console.log(data);
        // });
    }
    
    
}

export const deleteContent = (cobrandEmail, contentId, retrieveList) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                cobrandEmail: cobrandEmail,
                _id: contentId[0]
            }
        }
        contentDelete(deleting)
            .then(response => {
                // console.log(response.data);
                dispatch(alertSuccess('Content "' + contentId[1] + '" berhasil dihapus.'));
                dispatch(loadingStop());
                retrieveList();
            })
            .catch(error => {
                // console.log(error);
                dispatch(alertError('Content "' + contentId[1] + '" gagal dihapus. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
                retrieveList();
            });
    }
}

export const editProfile = (oldEmail, oldPassword, cobrandName, photo, phoneNumber, address, password) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });

        let whereValues = { email: oldEmail, password: oldPassword }, newValues = {};

        if (cobrandName) newValues = Object.assign(newValues, { cobrandName: cobrandName });
        if (phoneNumber) newValues = Object.assign(newValues, { phoneNumber: phoneNumber });
        if (address) newValues = Object.assign(newValues, { address: address });
        if (password) newValues = Object.assign(newValues, { password: password });

        if (photo) {
            const promise = toBase64(photo);
            promise.then((result) => {
                newValues = Object.assign(newValues, { thumbnail: result });
                // console.log('whereValues: ', whereValues);
                // console.log('newValues: ', newValues);
                cobrandEdit(whereValues, newValues)
                    .then(response => {
                        // console.log('Success:', response.data);
                        if (password) {
                            // console.log('YOI BRUH');
                            whereValues.password = password;
                        }
                        cobrandLogin(whereValues)
                            .then(response2 => {
                                // console.log('Success 2: ', response2.data);
                                let loginData = response2.data;
                                localStorage.removeItem('accessToken');
                                localStorage.removeItem('userData');
                                localStorage.setItem('accessToken', loginData.resultData.token);
                                localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                                dispatch(alertSuccess('Profil berhasil diubah.'));
                                dispatch(loadingStop());
                            })
                            .catch((error) => {
                                console.error('Error:', error);
                                dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                                dispatch(loadingStop());
                            });
                    })
                    .catch((error) => {
                        console.error('Error:', error);
                        dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                        dispatch(loadingStop());
                    });
            });
        }
        else {
            // console.log('whereValues: ', whereValues);
            // console.log('newValues: ', newValues);
            cobrandEdit(whereValues, newValues)
                .then(response => {
                    // console.log('Success:', response.data);
                    if (password) {
                        // console.log('YOI BRUH');
                        whereValues.password = password;
                    }
                    cobrandLogin(whereValues)
                        .then(response2 => {
                            // console.log('Success 2: ', response2.data);
                            let loginData = response2.data;
                            localStorage.setItem('accessToken', loginData.resultData.token);
                            localStorage.setItem('userData', JSON.stringify(loginData.resultData.user));
                            dispatch(alertSuccess('Profil berhasil diubah.'));
                            dispatch(loadingStop());
                        })
                        .catch((error) => {
                            console.error('Error:', error);
                            dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                            dispatch(loadingStop());
                        });
                })
                .catch((error) => {
                    console.error('Error:', error);
                    dispatch(alertError('Profil gagal diubah. Coba beberapa saat lagi.'));
                    dispatch(loadingStop());
                });
        }
    }

}

export const addNotification = (destination, messageSubject, messageContent, useSchedule, scheduleTime, mediaType, category, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let schedule = useSchedule ? scheduleTime : '';
        let data = {
            destination: destination.join(','), messageSubject, messageContent, scheduleTime: schedule,  mediaType, category
        };

        // console.log(data);
        //Call API ....

        notificationAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/cms/notifications');
                dispatch(alertSuccess('Notifikasi berhasil dikirim.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Notifikasi gagal dikirim. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const addAudience = (audianceName, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            audianceName,
        };

        // console.log(data);
        //Call API ....

        audienceAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/setting/target-audience');
                dispatch(alertSuccess('Target pembaca "' + audianceName + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Target pembaca "' + audianceName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const addNotifCategory = (category, description, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            category,
            description
        };

        // console.log(data);
        //Call API ....

        notifCategoryAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/setting/notification-category');
                dispatch(alertSuccess('Kategori Notifikasi "' + category + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Kategori Notifikasi "' + category + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const addProgCategory = (category, description, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            category,
            description
        };

        // console.log(data);
        //Call API ....

        programCategoryAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/setting/program-category');
                dispatch(alertSuccess('Kategori Program "' + category + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Kategori Program "' + category + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const addStaff= (userName, password, userType, cobrandEmail, userLevel, emailUser, phone, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            userName, password, userType, cobrandEmail, userLevel, emailUser, phone
        };

        // console.log(data);
        //Call API ....

        adminAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/admin-staff');
                dispatch(alertSuccess('User "' + userName + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('User"' + userName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const editStaff= (userName, password, userType, cobrandEmail, userLevel, emailUser, phone, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            whereValues: {
                _id: localStorage.getItem('staffSelected')
            },
            newKeyValues: {
                userName, password, userType, cobrandEmail, userLevel, emailUser, phone
            }
        };

        // console.log(data);
        //Call API ....

        adminEdit(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/admin-staff');
                dispatch(alertSuccess('User "' + userName + '" berhasil diubah.'));
                dispatch(loadingStop());
                localStorage.removeItem('staffSelected');
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('User"' + userName + '" gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const deleteStaff = (cobrandEmail, staffId, retrieveList) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        const deleting = {
            whereValues: {
                _id: staffId[0]
            }
        }
        adminDelete(deleting)
            .then(response => {
                // console.log(response.data);
                dispatch(alertSuccess('User "' + staffId[1] + '" berhasil dihapus.'));
                dispatch(loadingStop());
                retrieveList();
            })
            .catch(error => {
                // console.log(error);
                dispatch(alertError('User "' + staffId[1] + '" gagal dihapus. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
                retrieveList();
            });
    }
}

export const addContentTopic = (topicName, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            topicName
        };

        // console.log(data);
        //Call API ....

        contentTopicAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/setting/topic');
                dispatch(alertSuccess('Topik konten "' + topicName + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Topik konten "' + topicName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const addScreenTime = (cobrandEmail, controlParameterName, controlParameterValue, unit, history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            cobrandEmail, controlParameterName, controlParameterValue, unit
        };

        // console.log(data);
        //Call API ....

        screenTimeAdd(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/tools/setting/screentime');
                dispatch(alertSuccess('Standar Screentime "' + controlParameterName + '" berhasil ditambahkan.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Standar Screentime "' + controlParameterName + '" gagal ditambahkan. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}

export const editAppUser = (oldEmail, nameUser, emailUser, gender, birdDate, address, imagePhoto, phoneNumber,  history) => {
    return dispatch => {
        dispatch(loadingStart());
        dispatch({
            type: ALERT_CLOSE
        });
        let data = {
            whereValues: {emailUser: oldEmail},
            newValues: {nameUser, emailUser, gender, birdDate, address, imagePhoto, phoneNumber}
        };

        // console.log(data);
        //Call API ....

        appUserEdit(data)
            .then(response => {
                // console.log('Success:', response.data);
                history.push('/cms/user');
                dispatch(alertSuccess('Informasi pengguna "' + oldEmail + '" berhasil diubah.'));
                dispatch(loadingStop());
            })
            .catch((error) => {
                console.error('Error:', error);
                dispatch(alertError('Informasi pengguna "' + oldEmail + '" gagal diubah. Coba beberapa saat lagi.'));
                dispatch(loadingStop());
            });
        // console.log(data);
    }

}
