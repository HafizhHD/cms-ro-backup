import React, {useState, useEffect} from 'react';
import Heading from '../../../../../components/UI/Heading/Heading';
import './AddPraytimeMessage.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addPraytimeMessage } from '../../../../../store/actions/dashboard';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationGroupMitraAsuh } from '../../../../../helpers/validation/validation';
import InputComponent from '../../../../../components/UI/Input/Input';
import {getSchoolList} from '../../../../../components/API/filter';

import Select from 'react-select';

function AddPraytimeMessage({
    onAddPraytimeMessage,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const [school, setSchool] = useState([]);
    const [isPasswordVisible, showPassword] = useState(false);
    // const [isCurrentlyLoading, setLoading] = useState(true);
    const today = new Date().toISOString().split('T')[0];

    if(isLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Tambah Hadits/Pesan" routes={[
                { path: '/cms/praytime-message', name: 'Hadits/Pesan' },
                { path: '/cms/praytime-message/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    prayDate: today,
                    shubuh: '',
                    dzuhur: '',
                    ashr: '',
                    maghrib: '',
                    isya: ''
                }}
                // validationSchema = {validationGroupMitraAsuh}
                validateOnChange = {true}
                onSubmit = { values => {
                    // console.log(values);
                    onAddPraytimeMessage( values.prayDate, values.shubuh, values.dzuhur, values.ashr, values.maghrib, values.isya, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddCommunity">
                        {/* <h1>Tambah</h1> */}
                        <div className="form-group">
                            <label>Tanggal</label>
                            <InputComponent
                                type="date"
                                className="form-group__input"
                                name="prayDate"
                                value={values.prayDate}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {/* {touched.prayDate && <span className="message__error">{errors.prayDate}</span>} */}
                        </div>
                        <div className="form-group">
                            <label>Hadits/Pesan</label>
                            <InputComponent
                                type="text"
                                name="shubuh"
                                className="form-group__input form-group__input--fullwidth"
                                placeholder="Shubuh"
                                value={values.shubuh}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <InputComponent
                                type="text"
                                name="dzuhur"
                                className="form-group__input form-group__input--fullwidth"
                                placeholder="Dzuhur"
                                value={values.dzuhur}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <InputComponent
                                type="text"
                                name="ashr"
                                className="form-group__input form-group__input--fullwidth"
                                placeholder="Ashr"
                                value={values.ashr}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <InputComponent
                                type="text"
                                name="maghrib"
                                className="form-group__input form-group__input--fullwidth"
                                placeholder="Maghrib"
                                value={values.maghrib}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            <InputComponent
                                type="text"
                                name="isya"
                                className="form-group__input form-group__input--fullwidth"
                                placeholder="Isya"
                                value={values.isya}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit" onClick={() => {
                                // console.log(values);
                            }}>
                                Tambah
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
        onAddPraytimeMessage: ( prayDate, shubuh, dzuhur, ashr, maghrib, isya,  history ) =>
            dispatch(addPraytimeMessage(  prayDate, shubuh, dzuhur, ashr, maghrib, isya, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddPraytimeMessage)
