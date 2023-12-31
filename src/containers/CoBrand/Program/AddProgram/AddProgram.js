import React from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddProgram.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addProgram } from '../../../../store/actions/webMainUtils';
import RKLoader from '../../../../components/UI/RKLoader/RKLoader';
import { connect } from 'react-redux';
import { validationProgram } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';

function AddProgram({
    onAddProgram,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;

    return (
        <>
            <Heading headingName="Program" routes={[
                { path: '/program', name: 'On Going Program' },
                { path: '/program/add', name: 'Create new Program' }
            ]} />
            <Formik
                initialValues= {{
                    programName: '',
                    programDescription: '',
                    programThumbnail: '',
                    startDate: new Date().toISOString().split('T')[0]
                }}
                validationSchema = {validationProgram}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddProgram( cobrandEmail, values.programName, values.programDescription, values.programThumbnail, values.startDate, history)
                }}
            >
            {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddProgram">
                        <h1>Create New Program</h1>
                        <div className="form-group">
                            <label>Title</label>
                            <InputComponent 
                                type="text"
                                name="programName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.programName}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.programName}</span>
                        </div>
                        <div className="form-group">
                            <label>Description</label>
                            <InputComponent
                                type="textarea"
                                name="programDescription"
                                placeholder="Type Something..."
                                value={values.programDescription}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.programDescription}</span>
                        </div>
                        <div className="form-group">
                            <label>Photo</label>
                            <InputComponent
                                type="file"
                                className="form-group__input"
                                name="programThumbnail"
                                onChange={(e) => {
                                    let file = e.currentTarget.files[0];
                                    if(file) {
                                        console.log("File to upload: ", file);
                                        setFieldValue("programThumbnail", file);
                                    }
                                }}
                            />
                            <span className="message__error">{errors.programThumbnail}</span>
                        </div>
                        <div className="form-group">
                            <label>Set Schedule</label>
                            <InputComponent
                                type="date"
                                className="form-group__input"
                                name="startDate"
                                min={new Date().toISOString().split('T')[0]}
                                value={values.startDate}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.startDate}</span>
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Post Program
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
        onAddProgram: ( cobrandEmail, programName, programDescription, programThumbnail, startDate, history ) =>
            dispatch(addProgram( cobrandEmail, programName, programDescription, programThumbnail, startDate, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddProgram)
