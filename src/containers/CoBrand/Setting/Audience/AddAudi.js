import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddAudi.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addAudience } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationAudience } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

function AddAudience({
    onAddAudience,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;

    if(isLoading) return <RKLoader/>

    return (
        <>
            <Heading headingName="Audience" routes={[
                { path: '/tools/setting/target-audience', name: 'Audience' },
                { path: '/tools/setting/target-audience/add', name: 'Add New Audience' }
            ]} />
            <Formik
                initialValues= {{
                    audianceName: ''
                }}
                validationSchema = {validationAudience}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddAudience( values.audianceName, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddAudience">
                        <h1>Tambah Target Pembaca</h1>
                        <div className="form-group">
                            <label>Nama Target Pembaca</label>
                            <InputComponent 
                                type="text"
                                name="audianceName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.audianceName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.audianceName && <span className="message__error">{errors.audianceName}</span>}
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
        onAddAudience: ( audianceName, history ) =>
            dispatch(addAudience( audianceName, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddAudience)
