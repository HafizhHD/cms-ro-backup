import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddStaff.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addStaff } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationStaff } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

function AddStaff({
    onAddStaff,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;

    return (
        <>
            <Heading headingName="Tambah Admin &amp; Staff" routes={[
                { path: '/tools/admin-staff', name: 'Admin & Staff' },
                { path: '/tools/admin-staff/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    userName: '',
                    password: '',
                    userType: 'Co-Brand',
                    cobrandEmail: cobrandEmail,
                    userLevel: 'Staff',
                    emailUser: '',
                    phone: ''
                }}
                validationSchema = {validationStaff}
                validateOnChange = {true}
                onSubmit = { values => {
                    console.log(values);
                    onAddStaff( values.userName, values.password, values.userType, values.cobrandEmail, values.userLevel, values.emailUser, values.phone, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddStaff">
                        <h1>Tambah</h1>
                        <div className="form-group">
                            <label>Username</label>
                            <InputComponent 
                                type="text"
                                name="userName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.userName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.userName && <span className="message__error">{errors.userName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Password</label>
                            <InputComponent 
                                type="password"
                                name="password"
                                className="form-group__input form-group__input--fullwidth"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.password && <span className="message__error">{errors.password}</span>}
                        </div>
                        <div className="form-group">
                            <label>Tipe User</label>
                            <select
                                name="userType"
                                value={values.userType}
                                onChange={(e) => {
                                    setFieldValue("userType", e.currentTarget.value);
                                }}
                            >
                                <option value="CS">CS</option>
                                <option value="Co-Brand">Co-Brand</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Level User</label>
                            <select
                                name="userLevel"
                                value={values.userLevel}
                                onChange={(e) => {
                                    setFieldValue("userType", e.currentTarget.value);
                                }}
                            >
                                <option value="Super Admin">Super Admin</option>
                                <option value="Admin">Admin</option>
                                <option value="Staff">Staff</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Email User</label>
                            <InputComponent 
                                type="text"
                                name="emailUser"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.emailUser}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.emailUser && <span className="message__error">{errors.emailUser}</span>}
                        </div>
                        <div className="form-group">
                            <label>Nomor Telepon</label>
                            <InputComponent 
                                type="text"
                                name="phone"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.phone}
                                onChange={(e) => {
                                    const result = e.currentTarget.value.replace(/\D/g, '');
                                    setFieldValue("phone", result);
                                }}
                                onBlur={handleBlur}
                            />
                            {touched.phone && <span className="message__error">{errors.phone}</span>}
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit" onClick={() => {
                                console.log(values);
                            }}>
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
        onAddStaff: ( userName, password, userType, cobrandEmail, userLevel, emailUser, phone, history ) =>
            dispatch(addStaff(  userName, password, userType, cobrandEmail, userLevel, emailUser, phone, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddStaff)
