import React, { useEffect, useCallback, lazy, useState } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Layout from '../../Layout/CoBrand/Layout';
import PrivateRoute from '../../hoc/PrivateRoute';
import { connect } from 'react-redux';
import { authSuccess, authFailed, logout } from './../../store/actions/auth';
import { Suspense } from 'react';
import RKLoader from '../../components/UI/RKLoader/RKLoader';


const ProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/Program'));
const AddProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/AddProgram/AddProgram'));
const AddProgramStepAsync = lazy(() => import('./../../containers/CoBrand/Program/EditProgram/AddStep/AddStep'));
const EditProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/EditProgram/EditProgram'));
const EditProgramStepAsync = lazy(() => import('./../../containers/CoBrand/Program/EditProgram/EditStep/EditStep'));
const ViewProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/ViewProgram/ViewProgram'));
const ViewProgramStepAsync = lazy(() => import('./../../containers/CoBrand/Program/ViewProgram/ViewStep/ViewStep'));
const ContentAsync = lazy(() => import('./../../containers/CoBrand/Content/Content'));
const AddContentAsync = lazy(() => import('./../../containers/CoBrand/Content/AddContent/AddContent'));
const EditContentAsync = lazy(() => import('./../../containers/CoBrand/Content/EditContent/EditContent'));
const ViewContentAsync = lazy(() => import('./../../containers/CoBrand/Content/ViewContent/ViewContent'));
const RedZoneAsync = lazy(() => import('./../../containers/CoBrand/RedZone/RedZone'));
const SettingAsync = lazy(() => import('./../../containers/CoBrand/Setting/Setting'));
const UserManagement = lazy(() => import('./../../containers/CoBrand/User/User'));
const RedZoneAdd = lazy(() => import('./../../containers/CoBrand/RedZone/RedzoneAdd/RedzoneAdd'));

const LoginAsync = lazy(() => import('./../../containers/CoBrand/Login/Login'));
const RegisterAsync = lazy(() => import('./../../containers/CoBrand/Register/Register'));
const DashboardAsync = lazy(() => import('./../../containers/CoBrand/Dashboard/Dashboard'));

const UserReportAsync = lazy(() => import('./../../containers/CoBrand/Report/UserReport/UserReport'));
const ProgramReportAsync = lazy(() => import('./../../containers/CoBrand/Report/ProgramReport/ProgramReport'));
const StepReportAsync = lazy(() => import('./../../containers/CoBrand/Report/ProgramReport/StepReport/StepReport'));
const ContentReportAsync = lazy(() => import('./../../containers/CoBrand/Report/ContentReport/ContentReport'));
const RedzoneReportAsync = lazy(() => import('./../../containers/CoBrand/Report/RedzoneReport/RedzoneReport'));
const CommercialReportAsync = lazy(() => import('./../../containers/CoBrand/Report/CommercialReport/CommercialReport'));

const MonitoringContentAsync = lazy(() => import('./../../containers/CoBrand/Report/MonitoringContent/MonitoringContent'));
const MonitoringProgramAsync = lazy(() => import('./../../containers/CoBrand/Report/MonitoringProgram/MonitoringProgram'));
const MonitoringStatusAsync = lazy(() => import('./../../containers/CoBrand/Report/MonitoringStatus/MonitoringStatus'));
const ControllingStatusAsync = lazy(() => import('./../../containers/CoBrand/Report/ControllingStatus/ControllingStatus'));

const AddMessageAsync = lazy(() => import('./../../containers/CoBrand/Message/AddNotification/AddNotification'));
const MessageListAsync = lazy(() => import('./../../containers/CoBrand/Message/ListBc/ListBc'));
const Forum = lazy(() => import('./../../containers/CoBrand/Forum/Forum'));
const ForumList = lazy(() => import('./../../containers/CoBrand/Forum/ListForum/ListForum'));
const Management = lazy(() => import('../../containers/CoBrand/ManagementUser/AddStaff/AddStaff'));
const EditStaffAsync = lazy(() => import('../../containers/CoBrand/ManagementUser/EditStaff/EditStaff'));
const listStaff = lazy(() => import('./../../containers/CoBrand/ManagementUser/ListStaff/ListStaff'));
const Audience = lazy(() => import('../../containers/CoBrand/Setting/Audience/Audience'));
const AddAudience = lazy(() => import('../../containers/CoBrand/Setting/Audience/AddAudi'));

const Topik = lazy(() => import('../../containers/CoBrand/Setting/TopikKonten/topik'));
const TopikAdd = lazy(() => import('../../containers/CoBrand/Setting/TopikKonten/AddTopik'));
const KategoriProgram = lazy(() => import('../../containers/CoBrand/Setting/KategoriProgram/AddKateProg')); //ini
const ListKategoriProgram = lazy(() => import('../../containers/CoBrand/Setting/KategoriProgram/KategoriProgram'));
const AddKategoriNotifikasi = lazy(() => import('../../containers/CoBrand/Setting/KategoriNotifikasi/AddKateNotif'));
const ListKategoriNotifikasi = lazy(() => import('../../containers/CoBrand/Setting/KategoriNotifikasi/KategoriNotifikasi'));
const ListScreenTime = lazy(() => import('../../containers/CoBrand/Setting/ScreenTime/ListScreenTime'));
const AddScreenTime = lazy(() => import('../../containers/CoBrand/Setting/ScreenTime/AddScreenTime'));
const ListKoment = lazy(() => import('../../containers/CoBrand/Content/ViewContent/comment/ListKomen'));
const EditRedzone = lazy(() => import('../../containers/CoBrand/RedZone/ListRedzone/ListRedzone'));
const EditUser = lazy(() => import('../../containers/CoBrand/User/EditUser/EditUser'));

const Komunitas = lazy(() => import('./../../containers/CoBrand/Setting/Komunitas/Komunitas'));
const AddKomunitas = lazy(() => import('./../../containers/CoBrand/Setting/Komunitas/AddKomunitas/AddKomunitas'));
const SchoolGroup = lazy(() => import('./../../containers/CoBrand/Setting/SchoolGroup/SchoolGroup'));
const AddSchoolGroup = lazy(() => import('./../../containers/CoBrand/Setting/SchoolGroup/AddSchoolGroup/AddSchoolGroup'));
const ListProgram = lazy(() => import('../../containers/CoBrand/Program/REVISI/ListBc/ListProgram'));
const AddProgramRev = lazy(() => import('../../containers/CoBrand/Program/REVISI/ListBc/addProgram'));

const StatusAsync = lazy(() => import('../../containers/CoBrand/Status/Status'));


function Cobrand({
    isLogin,
    onAuthSuccess,
    onAuthFailed,
    onLogout,
    showAlert,
    alertType,
    alertMessage
}) {
    const history = useHistory();

    const [userLevel, setUserLevel] = useState('');
    const [cobrandComId, setCobrandComId] = useState('');

    const checkIsLogin = useCallback(() => {

        let check = localStorage.getItem('accessToken');

        if (check) {
            // console.log('Yes masuk');
            setUserLevel(JSON.parse(localStorage.getItem('userData')).userLevel);
            let cbr = JSON.parse(localStorage.getItem('userData')).cobrandComunityId ?? ''
            setCobrandComId(cbr);
            // console.log('User level', JSON.parse(localStorage.getItem('userData')).userLevel)
            onAuthSuccess()
        } else {
            // console.log('Yah gagal');
            onAuthFailed()
        }


    }, [onAuthSuccess, onAuthFailed])

    useEffect(() => {
        checkIsLogin()
    }, [isLogin, checkIsLogin]);

    const logoutHandler = () => onLogout(history);


    if (!isLogin) {
        return (
            <Switch>
                <Route
                    exact
                    path="/"
                    render={(props) => {
                        return (
                            <Suspense fallback={<RKLoader />}>
                                <LoginAsync {...props} />
                            </Suspense>
                        )
                    }}
                />
                <Route
                    exact
                    path="/register"
                    render={(props) => {
                        return (
                            <Suspense fallback={<RKLoader />}>
                                <RegisterAsync {...props} />
                            </Suspense>
                        )
                    }}
                />
                <Route
                    exact
                    path="/status"
                    render={(props) => {
                        return (
                            <Suspense fallback={<RKLoader />}>
                                <StatusAsync {...props} />
                            </Suspense>
                        )
                    }}
                />
            </Switch>
        )
    }

    return (
        <Layout logoutHandler={logoutHandler} showAlert={showAlert} alertType={alertType} alertMessage={alertMessage}>
            <Switch>
                <PrivateRoute
                    exact
                    path="/"
                    component={DashboardAsync}
                />
                <PrivateRoute
                    exact
                    path="/status"
                    component={StatusAsync}
                />
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter' || userLevel === 'user' ?
                <PrivateRoute
                    exact
                    path="/report/user"
                    component={UserReportAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/program"
                    component={ProgramReportAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/program/step"
                    component={StepReportAsync}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter' ?
                <PrivateRoute
                    exact
                    path="/report/content"
                    component={ContentReportAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/redzone"
                    component={RedzoneReportAsync}
                /> : null}

                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter' ?
                <PrivateRoute
                    exact
                    path="/report/monitoring-content"
                    component={MonitoringContentAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/monitoring-program"
                    component={MonitoringProgramAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/monitoring-status"
                    component={MonitoringStatusAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/controlling-status"
                    component={ControllingStatusAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Reporter') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/report/commercial"
                    component={CommercialReportAsync}
                />
                : null}

                
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/user"
                    exact
                    component={UserManagement}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/user/edit"
                    exact
                    component={EditUser}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' || userLevel === 'Reporter' ?
                <PrivateRoute
                    path="/cms/notifications/add"
                    exact
                    component={(props) => {
                        return (<AddMessageAsync {...props} />)
                    }}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' || userLevel === 'Reporter' ?
                <PrivateRoute
                    path="/cms/notifications"
                    exact
                    component={MessageListAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/forum-add"
                    exact
                    component={Forum}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/forum-moderator"
                    exact
                    component={ForumList}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program"
                    exact
                    component={ProgramAsync}
                    // component={ListProgram}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program/add"
                    exact
                    component={(props) => {
                        return (<AddProgramAsync {...props} />)
                    }}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program/edit"
                    exact
                    component={EditProgramAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program/edit/add-step"
                    exact
                    component={AddProgramStepAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program/edit/step"
                    exact
                    component={EditProgramStepAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program/view"
                    exact
                    component={ViewProgramAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/program/view/step"
                    exact
                    component={ViewProgramStepAsync}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/content"
                    exact
                    component={ContentAsync}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/content/add"
                    exact
                    component={(props) => {
                        return (<AddContentAsync {...props} />)
                    }}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/content/edit"
                    exact
                    component={EditContentAsync}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/content/view"
                    exact
                    component={ViewContentAsync}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor' ?
                <PrivateRoute
                    path="/cms/content/view-komen"
                    exact
                    component={ListKoment}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/redzone"
                    exact
                    component={RedZoneAsync}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    path="/cms/redzone/add"
                    exact
                    component={RedZoneAdd}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin' || userLevel === 'Editor') && cobrandComId === '' ?
                <PrivateRoute
                    exact
                    path="/cms/redzone/edit"
                    component={EditRedzone}
                /> : null}


                {(userLevel === 'Super Admin' || userLevel === 'Admin') && cobrandComId === '' ?
                <PrivateRoute
                    path="/tools/setting/program-category/add"
                    exact
                    component={KategoriProgram}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/notification-category"
                    exact
                    component={ListKategoriNotifikasi}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/notification-category/add"
                    exact
                    component={AddKategoriNotifikasi}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/program-category"
                    exact
                    component={ListKategoriProgram}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin') && cobrandComId === '' ?
                <PrivateRoute
                    path="/tools/setting/screentime/add"
                    exact
                    component={AddScreenTime}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin') && cobrandComId === '' ?
                <PrivateRoute
                    path="/tools/setting/screentime"
                    exact
                    component={ListScreenTime}
                /> : null}


                {/* <PrivateRoute
                    path="/tools/setting"
                    exact
                    component={SettingAsync}
                /> */}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/target-audience"
                    exact
                    component={Audience}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/target-audience/add"
                    exact
                    component={AddAudience}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/topic"
                    exact
                    component={Topik}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/topic/add"
                    exact
                    component={TopikAdd}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/komunitas"
                    exact
                    component={Komunitas}
                /> : null}
                {userLevel === 'Super Admin' || userLevel === 'Admin' ?
                <PrivateRoute
                    path="/tools/setting/komunitas/add"
                    exact
                    component={AddKomunitas}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin') && cobrandComId === '' ?
                <PrivateRoute
                    path="/tools/setting/school-group"
                    exact
                    component={SchoolGroup}
                /> : null}
                {(userLevel === 'Super Admin' || userLevel === 'Admin') && cobrandComId === '' ?
                <PrivateRoute
                    path="/tools/setting/school-group/add"
                    exact
                    component={AddSchoolGroup}
                /> : null}
                {userLevel === 'Super Admin' ?
                <PrivateRoute
                    path="/tools/admin-staff/add"
                    exact
                    component={Management}
                /> : null}
                {userLevel === 'Super Admin' ?
                <PrivateRoute
                    path="/tools/admin-staff/edit"
                    exact
                    component={EditStaffAsync}
                /> : null}
                {userLevel === 'Super Admin' ?
                <PrivateRoute
                    path="/tools/admin-staff"
                    exact
                    component={listStaff}
                /> : null}
            </Switch>
        </Layout>
    );
}

const mapStateToProps = state => {
    return {
        isLogin: state.auth.isLogin,
        showAlert: state.dashboard.showAlert,
        alertType: state.dashboard.alertType,
        alertMessage: state.dashboard.alertMessage
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthSuccess: () => dispatch(authSuccess()),
        onAuthFailed: () => dispatch(authFailed()),
        onLogout: (history) => dispatch(logout(history))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cobrand)
