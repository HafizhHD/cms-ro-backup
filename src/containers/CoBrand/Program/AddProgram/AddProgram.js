import React, { useEffect, useState } from 'react';
import Heading from '../../../../components/UI/Heading/Heading';
import './AddProgram.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { getProgramCategoryList } from './../../../../components/API/filter'
import { addProgram } from '../../../../store/actions/dashboard';
import RKLoader from '../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationProgram } from '../../../../helpers/validation/validation';
import InputComponent from '../../../../components/UI/Input/Input';
import { FiPlus } from 'react-icons/fi';

function AddProgram({
    onAddProgram,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).email;

    const [isPageLoading, setPageLoading] = useState(true);
    const [categoryList, setCategoryList] = useState([]);

    useEffect(() => {
        let params = {};
        getProgramCategoryList(params)
        .then(response => {
            console.log(response.data.Data);
            let catName = [];
            for(var i = 0; i < response.data.Data.length; i++) {
                catName.push(response.data.Data[i].category);
            }
            setCategoryList(catName);
            setPageLoading(false);
        })

    }, [])

    if(isLoading || isPageLoading) {
        return <RKLoader />
    }

    return (
        <>
            <Heading headingName="Program" routes={[
                { path: '/cms/program', name: 'Program' },
                { path: '/cms/program/add', name: 'Buat Program Baru' }
            ]} />
            <Formik
                initialValues= {{
                    programName: '',
                    programDescription: '',
                    programThumbnail: '',
                    startDate: new Date().toISOString().split('T')[0],
                    endDate: new Date().toISOString().split('T')[0],
                    category: categoryList[0],
                    targetAudiance: [],
                    topics: [],
                    contentPrograms: []
                }}
                validationSchema = {validationProgram}
                validateOnChange = {true}
                onSubmit = { values => {
                    onAddProgram( cobrandEmail, values.programName, values.programDescription, values.programThumbnail, values.startDate, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddProgram">
                        <h1>Buat Program Baru</h1>
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
                        <div className="form-group">
                            <label>Thumbnail</label>
                            <InputComponent
                                type="file"
                                className="form-group__input"
                                name="programThumbnail"
                                onBlur={handleBlur}
                                onChange={(e) => {
                                    let file = e.currentTarget.files[0];
                                    if(file) {
                                        console.log("File to upload: ", file);
                                        setFieldValue("programThumbnail", file);
                                    }
                                }}
                            />
                            { touched.programThumbnail && <span className="message__error">{errors.programThumbnail}</span> }
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label>Tanggal Mulai</label>
                                <InputComponent
                                    type="date"
                                    className="form-group__input"
                                    name="startDate"
                                    value={values.startDate}
                                    min={new Date().toISOString().split('T')[0]}
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
                        <button id="add_program">
                            <FiPlus className="IconAdd" />
                            <span>Tambah Tahap Program</span>  
                        </button>
                        <div>
                            <button className="btn btn-submit" type="submit">
                                Buat Program
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
