import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddScreenTime.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addScreenTime } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationScreenTime } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

function AddScreenTime({
    onAddScreenTime,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const unit = "jam";

    if(isLoading) return <RKLoader/>

    return (
        <>
            <Heading headingName="Kategori Program" routes={[
                { path: '/tools/setting/program-category', name: 'Kategori Program' },
                { path: '/tools/setting/program-category/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    controlParameterName: 'TK',
                    controlParameterValue: 24,
                }}
                validationSchema = {validationScreenTime}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddScreenTime( cobrandEmail, values.controlParameterName, values.controlParameterValue, unit, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddScreenTime">
                        <h1>Tambah</h1>
                        <div className="form-group">
                            <label>Kelompok Pengguna</label>
                            <select
                                name="controlParameterName"
                                value={values.controlParameterName}
                                onChange={(e) => {
                                    setFieldValue("controlParameterName", e.currentTarget.value);
                                }}
                            >
                                <option value="TK">TK</option>
                                <option value="SD">SD</option>
                                <option value="SMP">SMP</option>
                                <option value="SMA">SMA</option>
                            </select>
                            {touched.controlParameterName && <span className="message__error">{errors.controlParameterName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Standar Penggunaan Gadget {"(Jam)"}</label>
                            <InputComponent 
                                type="number"
                                name="controlParameterValue"
                                className="form-group__input"
                                value={values.controlParameterValue}
                                min={1}
                                max={24}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.controlParameterValue && <span className="message__error">{errors.controlParameterValue}</span>}
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Tambah
                            </button>
                        </div>
                    </div>
                </form>
            )}
            </Formik>
            {console.log(isLoading)}
            {isLoading ? <RKLoader/> : null}
        </>
    )
}

const mapStateToProps = state => {
    console.log(state.auth.isLoading);
    return {
        isLoading: state.auth.isLoading
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddScreenTime: ( cobrandEmail, controlParameterName, controlParameterValue, unit, history ) =>
            dispatch(addScreenTime( cobrandEmail, controlParameterName, controlParameterValue, unit, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddScreenTime)
