import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddKateNotif.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addNotifCategory } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationNotifCategory } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

function AddNotifCategory({
    onAddNotifCategory,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;

    if(isLoading) return <RKLoader/>

    return (
        <>
            <Heading headingName="Kategori Notifikasi" routes={[
                { path: '/tools/setting/notification-category', name: 'Kategori Notifikasi' },
                { path: '/tools/setting/notification-category/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    category: '',
                    description: ''
                }}
                validationSchema = {validationNotifCategory}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddNotifCategory( values.category, values.description, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddNotifCategory">
                        <h1>Tambah</h1>
                        <div className="form-group">
                            <label>Nama Kategori Notifikasi</label>
                            <InputComponent 
                                type="text"
                                name="category"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.category}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.category && <span className="message__error">{errors.category}</span>}
                        </div>
                        <div className="form-group">
                            <label>Deskripsi</label>
                            <InputComponent 
                                type="text"
                                name="description"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.description}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.description && <span className="message__error">{errors.description}</span>}
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
        onAddNotifCategory: ( category, description, history ) =>
            dispatch(addNotifCategory( category, description, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddNotifCategory)
