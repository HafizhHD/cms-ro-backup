import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddTopik.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addContentTopic } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationContentTopic } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

function AddContentTopic({
    onAddContentTopic,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;

    if(isLoading) return <RKLoader/>

    return (
        <>
            <Heading headingName="Topik Artikel" routes={[
                { path: '/tools/setting/topic', name: 'Topik Artikel' },
                { path: '/tools/setting/topic/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    topicName: ''
                }}
                validationSchema = {validationContentTopic}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddContentTopic( values.topicName, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddContentTopic">
                        <h1>Tambah</h1>
                        <div className="form-group">
                            <label>Nama Topik Artikel</label>
                            <InputComponent 
                                type="text"
                                name="topicName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.topicName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.topicName && <span className="message__error">{errors.topicName}</span>}
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
        onAddContentTopic: ( topicName, history ) =>
            dispatch(addContentTopic( topicName, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddContentTopic)
