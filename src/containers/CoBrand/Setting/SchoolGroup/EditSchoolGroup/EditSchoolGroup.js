import React, {useState, useEffect} from 'react';
import Heading from '../../../../../components/UI/Heading/Heading';
import './EditSchoolGroup.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { editSchoolGroup } from '../../../../../store/actions/dashboard';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationGroupMitraAsuh } from '../../../../../helpers/validation/validation';
import InputComponent from '../../../../../components/UI/Input/Input';
import {getSchoolList, getSchoolGroupList} from '../../../../../components/API/filter';

import AsyncSelect from 'react-select/async';

function EditSchoolGroup({
    onEditSchoolGroup,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const schoolGroupId = localStorage.getItem('schoolGroupSelected');
    const [school, setSchool] = useState([]);
    const [data, setData] = useState();
    const [isPasswordVisible, showPassword] = useState(false);
    const [isCurrentlyLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let params = {
            whereKeyValues: {
                groupMitraAsuhId: schoolGroupId
            }
        }
        getSchoolGroupList(params)
        .then(response => {
            console.log("ini respown", response);
            let schoolRaw = [];
            response.data.Data[0].memberSekolah.map(e => {
                schoolRaw.push({value: e, label: e});
            })
            setSchool(schoolRaw);
            setData(response.data.Data[0]);
            setLoading(false);
        })
    },[]);
    const colourStyles = {
        control: styles => ({ ...styles, backgroundColor: '#cccccc66', width: '40%', border: 'none' }),
    };

    const loadOptions = (inputValue, callback) => {
        setTimeout(() => {
          getSchoolList({
            whereKeyValues: {
              nama: {
                "$regex": inputValue,
                "$options": "i"
              }
            },
            orderKeyValues: {
              nama: 1
            },
            limit: 20
          })
          .then(response => {
            console.log(response.data);
            const options = [];
            response.data.Data.forEach(e => {
                options.push({
                    label: e.nama,
                    value: e.nama
                })
            });
            callback(options);
        })
          .catch(error => {
              callback([]);
          });
        }, 500);
      };

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Ubah Instansi" routes={[
                { path: '/tools/setting/school-group', name: 'Daftar Instansi' },
                { path: '/tools/setting/school-group/edit', name: 'Ubah' }
            ]} />
            <Formik
                initialValues= {{
                    groupMitraAsuhName: data.groupMitraAsuhName,
                    memberSekolah: school,
                }}
                validationSchema = {validationGroupMitraAsuh}
                validateOnChange = {true}
                onSubmit = { values => {
                    // console.log(values);
                    onEditSchoolGroup( schoolGroupId, values.groupMitraAsuhName, cobrandEmail, values.memberSekolah, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="EditCommunity">
                        <h1>Ubah</h1>
                        <div className="form-group">
                            <label>Nama Instansi</label>
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
                            <AsyncSelect
                            defaultValue={school.map(e => e)}
                            cacheOptions defaultOptions isMulti
                            styles={colourStyles}
                            placeholder={"Pilih sekolah..."} loadOptions={loadOptions} onChange={(e) => {
                                console.log(e);
                                setFieldValue('memberSekolah', e);
                                console.log(values.memberSekolah);
                            }}
                            className="basic-multi-select"
                            classNamePrefix="select"
                            />
                        </div>
                        <div>
                            <button className="btn btn-submit" type="submit" onClick={() => {
                                // console.log(values);
                            }}>
                                Simpan Perubahan
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
        onEditSchoolGroup: ( schoolGroupId, groupMitraAsuhName, cobrandEmail, memberSekolah, history ) =>
            dispatch(editSchoolGroup( schoolGroupId, groupMitraAsuhName, cobrandEmail, memberSekolah, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (EditSchoolGroup)
