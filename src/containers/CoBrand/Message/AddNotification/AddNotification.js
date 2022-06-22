import React, { useEffect, useState } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddNotification.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addNotification } from '../../../../store/actions/dashboard';
import { getAudienceList, getNotificationCategoryList } from './../../../../components/API/filter'
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationNotification } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

import { ReactMultiEmail } from "react-multi-email";
import "react-multi-email/style.css";

function AddNotification({
    onAddNotification,
    isLoading
}) {

    const history = useHistory();
    const [sche, setSche] = useState(new Date());
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const [emailList, setEmailList] = useState([]);
    const [notifContext, setNotifContext] = useState('');
    const [isTargetChecked, setTargetChecked] = useState(false);
    const [isScheduleChecked, setScheduleChecked] = useState(false);

    const [targetList, setTargetList] = useState([]);
    const [categoryList, setCategoryList] = useState([]);

    const [isPageLoading, setPageLoading] = useState(true);

    useEffect(() => {
        let x = sche;
        x.setTime(x.getTime() + 7 * 60 * 60 * 1000);
        setSche(x);
        // console.log(new Date().toISOString())
        if(localStorage.getItem('emailTo')) {
            setEmailList(localStorage.getItem('emailTo').split(','));
            localStorage.removeItem('emailTo');
        }
        if(localStorage.getItem('notifContext')) {
            setNotifContext(localStorage.getItem('notifContext'));
            localStorage.removeItem('notifContext');
        }
        let params = {};
        let promiseAudience = getAudienceList(params);
        let promiseCategory = getNotificationCategoryList(params);
        Promise.all([promiseAudience, promiseCategory])
        .then(response => {
            // console.log(response[0].data.Data);
            // console.log(response[1].data.Data);
            setTargetList(response[0].data.Data);
            setCategoryList(response[1].data.Data);
            setPageLoading(false);
        })
    }, []);

    if(isPageLoading)
        return <RKLoader />

    return (
        <>
            <Heading headingName="Buat Notifikasi" routes={[
                { path: '/cms/notifications', name: 'Notifikasi' },
                { path: '/cms/notifications/add', name: 'Buat Notifikasi Baru' }
            ]} />
            <Formik
                initialValues= {{
                    destination: emailList, 
                    messageSubject: notifContext,
                    messageContent: '',
                    useSchedule: false,
                    scheduleTime: sche.toISOString().slice(0, -8),
                    mediaType: 'Semua',
                    category: 'Umum',

                }}
                validationSchema = {validationNotification}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddNotification(values.destination, values.messageSubject, values.messageContent, values.useSchedule, values.scheduleTime, values.mediaType, values.category, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddNotification">
                        <div className="form-group">
                            <label className="form-group-label">Tujuan</label>
                            <label className="form-group-option">
                                <input type="checkbox" onClick={(e) => {
                                        setFieldValue("destination", []);
                                    if(e.currentTarget.checked) setTargetChecked(true);
                                    else {
                                        setFieldValue("destination", emailList);
                                        setTargetChecked(false);
                                    }
                                }}>
                                        </input>
                                <p>Pakai Target Pengguna</p>
                            </label>
                            {isTargetChecked ? (
                                <div className="form-group-choice"> 
                                    {targetList.map(e => {
                                        return <label>
                                            <input type="checkbox" value={e.audianceName} onClick={(event) => {
                                                if(event.currentTarget.checked) {
                                                    let x = values.destination;
                                                    x.push(e.audianceName);
                                                    setFieldValue("destination", x);
                                                }
                                                else {
                                                    let x = values.destination;
                                                    let y = x.indexOf(e.audianceName);
                                                    if(y > -1) x.splice(y, 1);
                                                    setFieldValue("destination", x);
                                                }
                                            }}>
                                            </input>
                                        <p>{e.audianceName}</p></label>
                                    })}
                                </div>
                            ) : (
                                <ReactMultiEmail
                                    placeholder="Masukkan email..."
                                    emails={values.destination}
                                    onChange={(_emails) => {
                                        setEmailList(_emails)
                                        setFieldValue("destination", _emails)
                                    }}
                                    getLabel={(
                                        email,
                                        index,
                                        removeEmail
                                    ) => {
                                        return (
                                            <div data-tag key={index}>
                                                {email}
                                                <span data-tag-handle onClick={() => removeEmail(index)}>
                                                ×
                                                </span>
                                            </div>
                                        );
                                    }}
                                />
                            )}
                            {touched.destination && <span className="message__error">{errors.destination}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Judul Pesan</label>
                            <InputComponent 
                                type="text"
                                name="messageSubject"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.messageSubject}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.programName && <span className="message__error">{errors.programName}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Isi Pesan</label>
                            <InputComponent
                                type="textarea"
                                name="messageContent"
                                placeholder="Ketik pesan..."
                                value={values.messageContent}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                           {touched.messageContent && <span className="message__error">{errors.messageContent}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Pengaturan Jadwal</label>
                            <label className="form-group-option">
                                <input type="checkbox" onClick={(e) => {
                                    if(e.currentTarget.checked) {
                                        setScheduleChecked(true);
                                        setFieldValue("useSchedule", true);
                                    }
                                    else {
                                        setScheduleChecked(false);
                                        setFieldValue("useSchedule", true);
                                    }
                                }}>
                                        </input>
                                <p>Jadwalkan</p>
                            </label>
                            <InputComponent
                                type="datetime-local"
                                className="form-group__input"
                                name="scheduleTime"
                                min={new Date().toISOString().slice(0, -8)}
                                value={values.scheduleTime}
                                onChange={handleChange}
                                onBlur={handleBlur}
                                disabled={!isScheduleChecked}
                            />
                            {touched.startDate && <span className="message__error">{errors.startDate}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Kirim Via</label>
                            <select
                                name="mediaType"
                                value={values.mediaType}
                                onChange={(e) => {
                                    setFieldValue("mediaType", e.currentTarget.value);
                                }}
                            >
                                <option value="Semua">Semua</option>
                                <option value="Email">Email</option>
                                <option value="Device">Device</option>
                            </select>
                           {touched.messageContent && <span className="message__error">{errors.messageContent}</span>}
                        </div>
                        <div className="form-group">
                            <label className="form-group-label">Kategori</label>
                            
                            <div className="form-group-choice"> 
                                {categoryList.map(e => {
                                    return <label>
                                        <input type="radio" name="category" value={e.category} checked={values.category === e.category} onChange={(event) => {
                                            if(event.currentTarget.checked) {
                                                setFieldValue("category", event.currentTarget.value);
                                            }
                                        }}>
                                        </input>
                                    <p>{e.category}</p></label>
                                })}
                            </div>
                            
                            {touched.category && <span className="message__error">{errors.category}</span>}
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Kirim Notifikasi
                            </button>
                        </div>
                    </div>
                </form>
            )}
            </Formik>
            {/* {console.log(isLoading)} */}
            {isLoading ? <RKLoader/> : null}
        </>
    )
}

const mapStateToProps = state => {
    // console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddNotification: ( destination, messageSubject, messageContent, useSchedule, scheduleTime, mediaType, category, history ) =>
            dispatch(addNotification( destination, messageSubject, messageContent, useSchedule, scheduleTime, mediaType, category, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddNotification)
