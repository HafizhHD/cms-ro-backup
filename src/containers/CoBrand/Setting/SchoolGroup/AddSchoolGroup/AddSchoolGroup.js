import React, {useState, useEffect} from 'react';
import Heading from '../../../../../components/UI/Heading/Heading';
import './AddSchoolGroup.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addSchoolGroup } from '../../../../../store/actions/dashboard';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationGroupMitraAsuh } from '../../../../../helpers/validation/validation';
import InputComponent from '../../../../../components/UI/Input/Input';
import {getSchoolList} from '../../../../../components/API/filter';

import Select from 'react-select';

function AddSchoolGroup({
    onAddSchoolGroup,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const [school, setSchool] = useState([]);
    const [isPasswordVisible, showPassword] = useState(false);
    const [isCurrentlyLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let params = {
            cobrandEmail: cobrandEmail
        }
        getSchoolList(params)
        .then(response => {
            let schoolRaw = [];
            response.data.Data.map(e => {
                schoolRaw.push({value: e.nama, label: e.nama});
            })
            setLoading(false);
        })
    },[]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Tambah Kelompok" routes={[
                { path: '/tools/setting/school-group', name: 'Kelompok Mitra Asuh' },
                { path: '/tools/setting/school-group/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    groupMitraAsuhName: "",
                    memberSekolah: [],
                }}
                validationSchema = {validationGroupMitraAsuh}
                validateOnChange = {true}
                onSubmit = { values => {
                    // console.log(values);
                    onAddSchoolGroup( values.groupMitraAsuhName, cobrandEmail, values.memberSekolah, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddCommunity">
                        <h1>Tambah</h1>
                        <div className="form-group">
                            <label>Nama Kelompok</label>
                            <InputComponent 
                                type="text"
                                name="groupMitraAsuhName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.groupMitraAsuhName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.userName && <span className="message__error">{errors.userName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Anggota Sekolah</label>
                            <Select
                                isMulti
                                value={values.memberSekolah}
                                onChange={(e) => {
                                    setFieldValue("memberSekolah", e)
                                }}
                                name="community"
                                options={school}
                                className="basic-multi-select"
                                classNamePrefix="select"
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
        onAddSchoolGroup: ( groupMitraAsuhName, cobrandEmail, memberSekolah, history ) =>
            dispatch(addSchoolGroup(  groupMitraAsuhName, cobrandEmail, memberSekolah, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddSchoolGroup)
