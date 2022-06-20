import React, {useEffect, useState} from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './EditProgram.scss';
import { Formik } from 'formik';
import { NavLink, useHistory } from 'react-router-dom';
import { editProgram } from '../../../../store/actions/dashboard';
import { getProgramCategoryList, getAudienceList, getContentList, getProgramList } from './../../../../components/API/filter'
import { contentDelete } from './../../../../components/API/dashboard'
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationProgramEdit } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import axios from 'axios';
import { FiPlus } from 'react-icons/fi';
import Warning from '../../../../components/UI/Warning/Warning'

import TableProgram from './../../../../components/UI/Table/Table';
import columns from './columns'

import Select from 'react-select';

function EditProgram({
    onEditProgram,
    isLoading
}) {

    const [isPageLoading, setPageLoading] = useState(true);
    const [program, setProgram] = useState();
    const [programStartDate, setProgramStartDate] = useState();

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const _id = localStorage.getItem('programSelected');

    const [categoryList, setCategoryList] = useState([]);
    const [audience, setAudience] = useState([]);
    const [steps, setSteps] = useState([]);
    const [stepDeleting, setStepDeleting] = useState(null);
    const [audienceVal, setAudienceVal] = useState([]);

    const [showWarning, setShowWarning] = useState(false);
    const [confirmDelete, setConfirmDelete] = useState(false);
    // const [isStepAdded, setStepAdded] = useState(false);
    // const [stepCount, setStepCount] = useState(0);
    // const [responseCount, setResponseCount] = useState(1);

    useEffect(() => {
        setPageLoading(true);
        console.log(_id);
        if(_id) {
            let paramTopic = {};
            let paramAudience = {};
            const params2 = {
                whereKeyValues: {
                    programId: _id
                },
                orderKeyValues: {
                    nomerUrutTahapan: 1
                }
            };
            const promiseTopic = getProgramCategoryList(paramTopic);
            const promiseAudience = getAudienceList(paramAudience);
            const promiseStep = getContentList(params2);

            Promise.all([promiseTopic, promiseAudience, promiseStep]).then(responseAll => {
                console.log(responseAll[0]);
                console.log(responseAll[1]);
                var topicRaw = [], audienceRaw = [];
                responseAll[0].data.Data.map(e => {
                    topicRaw.push(e.category);
                })
                responseAll[1].data.Data.map(e => {
                    audienceRaw.push({value: e.audianceName, label: e.audianceName});
                })
                console.log("Topic raw", topicRaw);
                console.log("Audience raw", audienceRaw);
                setCategoryList(topicRaw);
                setAudience(audienceRaw);
                console.log("This is ", responseAll[2]);
                setSteps(responseAll[2].data.contents);
                if(responseAll[2].data.contents.length > 0) {
                    localStorage.setItem('responseCount', Object.keys(responseAll[2].data.contents[0].respons).length);
                }
                else localStorage.setItem('responseCount', 0);
                localStorage.setItem('noUrutTahap', responseAll[2].data.contents.length);

                const params = {
                    whereKeyValues: {
                        cobrandEmail: cobrandEmail,
                        _id: _id
                    }
                };

                getProgramList(params)
                .then(response => {
                    console.log("Response data: ", response.data);
                    setProgram(response.data.programs[0]);
                    localStorage.setItem('programCategory', response.data.programs[0].category);
                    localStorage.setItem('startDateProgram', response.data.programs[0].startDate);
                    localStorage.setItem('endDateProgram', response.data.programs[0].endDate);
                    var audienceValRaw = [];
                    response.data.programs[0].targetAudiance.map(e => {
                        audienceValRaw.push({value: e, label: e});
                    })
                    setAudienceVal(audienceValRaw);
                    setPageLoading(false);
                    
                })
                .catch(error => {
                    console.log(error);
                    setPageLoading(false);
                });
            })
        }
    }, []);

    useEffect(() => {
        if(stepDeleting && confirmDelete) {
            console.log('yatta!')
            console.log('ini id step', stepDeleting[0]);
            setPageLoading(true);
            let param = {
                whereValues: {
                    _id: stepDeleting[0]
                }
            };
            contentDelete(param)
            .then(response => {
                setStepDeleting(null);
                setConfirmDelete(false);
                console.log('ini respon step deleting', response);
                const params2 = {
                    whereKeyValues: {
                        programId: _id
                    },
                    orderKeyValues: {
                        nomerUrutTahapan: 1
                    }
                };
                getContentList(params2)
                .then(res => {
                    console.log('ini respon ambil step', res);
                    setSteps(res.data.contents);
                    localStorage.setItem('noUrutTahap', res.data.contents.length);
                    setPageLoading(false);
                })
            })
            .catch(error => {
                console.log(error);
            })
        }
    }, [stepDeleting, confirmDelete]);

    if(isPageLoading || isLoading) {
        return <RKLoader/>
    }

    return (
        <>
            {showWarning ? <Warning setDeleting={setStepDeleting} setConfirmDeleting={setConfirmDelete} setWarning={setShowWarning} message={"Tahap"}/> : null}
            <Heading headingName="Program" routes={[
                { path: '/cms/program', name: 'Program' },
                { path: '/cms/program/edit', name: 'Ubah Program Terpilih' }
            ]} />
            <Formik
                initialValues= {{
                    programName: program.programName,
                    programDescription: program.ProgramDescription,
                    startDate: program.startDate.split('T')[0],
                    endDate: program.endDate.split('T')[0],
                    category: program.category,
                    targetAudiance: program.targetAudiance
                }}
                validationSchema = {validationProgramEdit}
                validateOnChange = {true}
                onSubmit = { values => {
                    onEditProgram( _id, cobrandEmail, values.programName, values.programDescription, values.startDate, values.endDate, values.category, values.targetAudiance, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="EditProgram">
                        <h1>Ubah Program Terpilih: {program.programName}</h1>
                        <div className="form-group">
                            <label>Judul</label>
                            <InputComponent 
                                type="text"
                                name="programName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.programName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.programName && <span className="message__error">{errors.programName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Kategori Program</label>
                            <select
                                name="category"
                                value={values.category}
                                onChange={handleChange}
                            >
                                {
                                    categoryList.map((category) => {
                                        return (
                                            <option value={category}>{category}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Target Pembaca</label>
                            <Select
                                isMulti
                                value={audienceVal}
                                onChange={(e) => {
                                    setFieldValue("targetAudiance", e)
                                }}
                                name="targetAudience"
                                options={audience}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                            {touched.targetAudiance && <span className="message__error">{errors.targetAudiance}</span>}
                        </div>
                        <div className="form-group">
                            <label>Deskripsi</label>
                            <InputComponent
                                type="textarea"
                                name="programDescription"
                                placeholder="Type Something..."
                                value={values.programDescription}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.programDescription && <span className="message__error">{errors.programDescription}</span>}
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
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Tanggal Mulai</label>
                                <InputComponent
                                    type="date"
                                    className="form-group__input"
                                    name="startDate"
                                    value={values.startDate}
                                    min={"2020-01-01"}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.startDate && <span className="message__error">{errors.startDate}</span>}
                            </div>
                            {/* end date */}
                            <div className="form-group">
                                <label>Tanggal Selesai</label>
                                <InputComponent
                                    type="date"
                                    className="form-group__input"
                                    name="endDate"
                                    value={values.endDate}
                                    min={values.startDate}
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.endDate && <span className="message__error">{errors.endDate}</span>}
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="Program__table">
                                <TableProgram 
                                    COLUMNS={columns(setStepDeleting, setShowWarning)} 
                                    DATA={steps}  
                                />
                            </div>
                        </div>
                        <NavLink id="add_program" to="/cms/program/edit/add-step">
                            <FiPlus className="IconAdd" />
                            <span>Tambah Tahap Program</span>  
                        </NavLink>
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
        onEditProgram: ( _id, cobrandEmail, programName, programDescription, programThumbnailEdit, startDate, endDate, category, targetAudiance, history ) =>
            dispatch(editProgram( _id, cobrandEmail, programName, programDescription, programThumbnailEdit, startDate, endDate, category, targetAudiance, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditProgram)