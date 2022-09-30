import React, {useState, useEffect} from 'react';
import Heading from '../../../../../components/UI/Heading/Heading';
import './AddKomunitas.scss';
import { Formik } from 'formik';
import { useHistory } from 'react-router-dom';
import { addCommunity } from '../../../../../store/actions/dashboard';
import RKLoader from '../../../../../components/UI/RKLoaderInner/RKLoader';
import { connect } from 'react-redux';
import { validationCommunity } from '../../../../../helpers/validation/validation';
import InputComponent from '../../../../../components/UI/Input/Input';
import {getCommunityList} from '../../../../../components/API/filter';

function AddCommunity({
    onAddCommunity,
    isLoading
}) {

    const history = useHistory();
    const cobrandEmail = JSON.parse(localStorage.getItem('userData')).cobrandEmail;
    const [komunitas, setKomunitas] = useState([]);
    const [isPasswordVisible, showPassword] = useState(false);
    const [isCurrentlyLoading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true);
        let params = {
            cobrandEmail: cobrandEmail
        }
        getCommunityList(params)
        .then(response => {
            setKomunitas(response.data.Data);
            setLoading(false);
        })
    },[]);

    if(isLoading || isCurrentlyLoading) {
        return <RKLoader/>
    }

    return (
        <>
            <Heading headingName="Tambah Komunitas" routes={[
                { path: '/tools/setting/komunitas', name: 'Komunitas' },
                { path: '/tools/setting/komunitas/add', name: 'Tambah' }
            ]} />
            <Formik
                initialValues= {{
                    cobrandComunityName: "",
                    partComunityId: ""
                }}
                validationSchema = {validationCommunity}
                validateOnChange = {true}
                onSubmit = { values => {
                    // console.log(values);
                    onAddCommunity( values.cobrandComunityName, cobrandEmail, values.partComunityId, history)
                }}
            >
            {({handleChange, handleSubmit, handleBlur, setFieldValue, values, errors, touched}) => (
                <form onSubmit={handleSubmit}>
                    <div className="AddCommunity">
                        <h1>Tambah</h1>
                        <div className="form-group">
                            <label>Nama Komunitas</label>
                            <InputComponent 
                                type="text"
                                name="cobrandComunityName"
                                className="form-group__input form-group__input--fullwidth" 
                                placeholder="Example"
                                value={values.cobrandComunityName}
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.userName && <span className="message__error">{errors.userName}</span>}
                        </div>
                        <div className="form-group">
                            <label>Sub-Komunitas dari</label>
                            <select
                                name="partComunityId"
                                value={values.partComunityId}
                                onChange={(e) => {
                                    setFieldValue("partComunityId", e.currentTarget.value);
                                }}
                            >
                                <option value="">--Bukan Sub-Komunitas--</option>
                                {komunitas.map(e => {
                                    return <option value={e.cobrandComunityId}>{e.cobrandComunityName}</option>
                                })}
                            </select>
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
        onAddCommunity: ( cobrandComunityName, cobrandEmail, partComunityId, history ) =>
            dispatch(addCommunity(  cobrandComunityName, cobrandEmail, partComunityId, history ))
    }
}

export default connect(mapStateToProps, mapDispatchToProps) (AddCommunity)
