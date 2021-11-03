import React, {useEffect, useState} from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './EditProgram.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { editProgram } from '../../../../store/actions/webMainUtils';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationProgramEdit } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';

function EditProgram({
    onEditProgram,
    isLoading
}) {

    const [isPageLoading, setPageLoading] = useState(true);
    const [program, setProgram] = useState();
    const [programStartDate, setProgramStartDate] = useState();

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;
    const _id = localStorage.getItem('programSelected');

    useEffect(() => {
        setPageLoading(true);
        console.log(_id);
        if(_id) {
            const params = {
                whereKeyValues: {
                    cobrandEmail: cobrandEmail,
                    _id: _id
                }
            };

            axios({
                method: 'post',
                url: 'https://rk.defghi.biz.id:8080/api/cobrand/programFilter',
                data: params,
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            .then(response => {
                console.log("Response data: ", response.data);
                setProgram(response.data.programs[0]);
                console.log("This is ", program);
                let date = response.data.programs[0].startDate.split('T')[0];
                console.log(date);
                setProgramStartDate(date);
                setPageLoading(false);;
            })
            .catch(error => {
                console.log(error);
                setPageLoading(false);
            });
        }
    }, []);

    if(isPageLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Program" routes={[
                { path: '/program', name: 'On Going Program' },
                { path: '/program/edit', name: 'Edit Selected Program' }
            ]} />
            <Formik
                initialValues= {{
                    programName: program.programName,
                    programDescription: program.ProgramDescription,
                    startDate: programStartDate
                }}
                validationSchema = {validationProgramEdit}
                validateOnChange = {true}
                onSubmit = { values => {
                    onEditProgram( _id, cobrandEmail, values.programName, values.programDescription, '', values.startDate, history)
                }}
            >
            {({handleChange, handleSubmit, setFieldValue, values, errors}) => (
                <form onSubmit={handleSubmit}>
                    <div className="EditProgram">
                        <h1>Edit Selected Program: {program.programName}</h1>
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
                        {/*<div className="form-group">
                            <label>New Photo (Optional)</label>
                            <InputComponent
                                type="file"
                                className="form-group__input"
                                name="programThumbnailEdit"
                                onChange={(e) => {
                                    let file = e.currentTarget.files[0];
                                    if(file) {
                                        console.log("File to upload: ", file);
                                        setFieldValue("programThumbnailEdit", file);
                                    }
                                }}
                            />
                            <span className="message__error">{errors.programThumbnailEdit}</span>
                        </div>*/}
                        <div className="form-group">
                            <label>Set Schedule</label>
                            <InputComponent
                                type="date"
                                className="form-group__input"
                                name="startDate"
                                value={values.startDate}
                                min={new Date().toISOString().split('T')[0]}
                                onChange={handleChange}
                            />
                            <span className="message__error">{errors.startDate}</span>
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Update Program
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
        onEditProgram: ( _id, cobrandEmail, programName, programDescription, programThumbnailEdit, startDate, history ) =>
            dispatch(editProgram( _id, cobrandEmail, programName, programDescription, programThumbnailEdit, startDate, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditProgram)