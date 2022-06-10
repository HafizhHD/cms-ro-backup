import React, { useEffect, useCallback, lazy } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Layout from '../../Layout/CoBrand/Layout';
import PrivateRoute from '../../hoc/PrivateRoute';
import { connect } from 'react-redux';
import { authSuccess, authFailed, logout } from './../../store/actions/auth';
import { Suspense } from 'react';
import RKLoader from '../../components/UI/RKLoader/RKLoader';


const ProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/Program'));
const AddProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/AddProgram/AddProgram'));
const EditProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/EditProgram/EditProgram'));
const ViewProgramAsync = lazy(() => import('./../../containers/CoBrand/Program/ViewProgram/ViewProgram'));
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
const listStaff = lazy(() => import('./../../containers/CoBrand/ManagementUser/ListStaff/ListStaff'));
const Audience = lazy(() => import('../../containers/CoBrand/Setting/Audience/Audience'));
const AddAudience = lazy(() => import('../../containers/CoBrand/Setting/Audience/AddAudi'));

const Topik = lazy(() => import('../../containers/CoBrand/Setting/TopikKonten/topik'));
const TopikAdd = lazy(() => import('../../containers/CoBrand/Setting/TopikKonten/AddTopik'));
const KategoriProgram = lazy(() => import('../../containers/CoBrand/Setting/KategoriProgram/AddKateProg'));
const ListKategoriProgram = lazy(() => import('../../containers/CoBrand/Setting/KategoriProgram/KategoriProgram'));
const AddKategoriNotifikasi = lazy(() => import('../../containers/CoBrand/Setting/KategoriNotifikasi/AddKateNotif'));
const ListKategoriNotifikasi = lazy(() => import('../../containers/CoBrand/Setting/KategoriNotifikasi/KategoriNotifikasi'));
const ListScreenTime = lazy(() => import('../../containers/CoBrand/Setting/ScreenTime/ListScreenTime'));
const AddScreenTime = lazy(() => import('../../containers/CoBrand/Setting/ScreenTime/AddScreenTime'));
const ListKoment = lazy(() => import('../../containers/CoBrand/Content/ViewContent/comment/ListKomen'));
const EditRedzone = lazy(() => import('../../containers/CoBrand/RedZone/ListRedzone/ListRedzone'));
const EditUser = lazy(() => import('../../containers/CoBrand/User/EditUser/EditUser'));
const ListProgram = lazy(() => import('../../containers/CoBrand/Program/REVISI/ListBc/ListProgram'));
const AddProgramRev = lazy(() => import('../../containers/CoBrand/Program/REVISI/ListBc/addProgram'));


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

    const checkIsLogin = useCallback(() => {

        let check = localStorage.getItem('accessToken');

        if (check) {
            onAuthSuccess()
        } else {
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
                    path="/report/user"
                    component={UserReportAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/program"
                    component={ProgramReportAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/content"
                    component={ContentReportAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/redzone"
                    component={RedzoneReportAsync}
                />


                <PrivateRoute
                    exact
                    path="/report/monitoring-content"
                    component={MonitoringContentAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/monitoring-program"
                    component={MonitoringProgramAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/monitoring-status"
                    component={MonitoringStatusAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/controlling-status"
                    component={ControllingStatusAsync}
                /><PrivateRoute
                    exact
                    path="/report/controlling-status"
                    component={ControllingStatusAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/commercial"
                    component={CommercialReportAsync}
                />
                <PrivateRoute
                    path="/cms/user"
                    exact
                    component={UserManagement}
                />
                <PrivateRoute
                    path="/cms/user-edit"
                    exact
                    component={EditUser}
                />
                <PrivateRoute
                    path="/cms/notifications/add"
                    exact
                    component={(props) => {
                        return (<AddMessageAsync {...props} />)
                    }}
                />
                <PrivateRoute
                    path="/cms/notifications"
                    exact
                    component={MessageListAsync}
                />
                <PrivateRoute
                    path="/cms/forum-add"
                    exact
                    component={Forum}
                />
                <PrivateRoute
                    path="/cms/forum-moderator"
                    exact
                    component={ForumList}
                />

                <PrivateRoute
                    path="/cms/program"
                    exact
                    // component={ProgramAsync}
                    component={ListProgram}
                />
                <PrivateRoute
                    path="/cms/program/add"
                    exact
                    component={(props) => {
                        return (<AddProgramAsync {...props} />)
                    }}
                />
                <PrivateRoute
                    path="/cms/program/edit"
                    exact
                    component={EditProgramAsync}
                />
                <PrivateRoute
                    path="/cms/program/view"
                    exact
                    component={ViewProgramAsync}
                />

                <PrivateRoute
                    path="/cms/program/revisilist"
                    exact
                    // component={ListProgram}
                    component={ProgramAsync}
                />

                <PrivateRoute
                    path="/cms/program/revisilist-add"
                    exact
                    component={AddProgramRev}
                />

                <PrivateRoute
                    path="/cms/content"
                    exact
                    component={ContentAsync}
                />
                <PrivateRoute
                    path="/cms/content/add"
                    exact
                    component={(props) => {
                        return (<AddContentAsync {...props} />)
                    }}
                />
                <PrivateRoute
                    path="/cms/content/edit"
                    exact
                    component={EditContentAsync}
                />
                <PrivateRoute
                    path="/cms/content/view"
                    exact
                    component={ViewContentAsync}
                />

                <PrivateRoute
                    path="/cms/content/view-komen"
                    exact
                    component={ListKoment}
                />

                <PrivateRoute
                    path="/cms/redzone"
                    exact
                    component={RedZoneAsync}
                />
                <PrivateRoute
                    path="/cms/redzone/add"
                    exact
                    component={RedZoneAdd}

                />
                <PrivateRoute
                    exact
                    path="/cms/redzone/edit"
                    component={EditRedzone}
                />
                <PrivateRoute
                    path="/tools/setting/program-category/add"
                    exact
                    component={KategoriProgram}
                />
                <PrivateRoute
                    path="/tools/setting/notification-category"
                    exact
                    component={ListKategoriNotifikasi}
                />

                <PrivateRoute
                    path="/tools/setting/notification-category/add"
                    exact
                    component={AddKategoriNotifikasi}
                />
                <PrivateRoute
                    path="/tools/setting/program-category"
                    exact
                    component={ListKategoriProgram}
                />
                <PrivateRoute
                    path="/tools/setting/screentime/add"
                    exact
                    component={AddScreenTime}
                />
                <PrivateRoute
                    path="/tools/setting/screentime"
                    exact
                    component={ListScreenTime}
                />


                <PrivateRoute
                    path="/tools/setting"
                    exact
                    component={SettingAsync}
                />

                <PrivateRoute
                    path="/tools/setting/target-audience"
                    exact
                    component={Audience}
                />
                <PrivateRoute
                    path="/tools/setting/target-audience/add"
                    exact
                    component={AddAudience}
                />

                <PrivateRoute
                    path="/tools/setting/topic"
                    exact
                    component={Topik}
                />

                <PrivateRoute
                    path="/tools/setting/topic/add"
                    exact
                    component={TopikAdd}
                />


                <PrivateRoute
                    exact
                    path="/"
                    component={DashboardAsync}
                />
                <PrivateRoute
                    exact
                    path="/report/user"
                    component={UserReportAsync}
                />

                <PrivateRoute
                    path="/cms/user"
                    exact
                    component={UserManagement}
                />


                <PrivateRoute
                    path="/cms/program"
                    exact
                    component={ProgramAsync}
                />
                <PrivateRoute
                    path="/cms/program/add"
                    exact
                    component={(props) => {
                        return (<AddProgramAsync {...props} />)
                    }}
                />
                <PrivateRoute
                    path="/cms/program/edit"
                    exact
                    component={EditProgramAsync}
                />
                <PrivateRoute
                    path="/cms/program/view"
                    exact
                    component={ViewProgramAsync}
                />

                <PrivateRoute
                    path="/cms/content"
                    exact
                    component={ContentAsync}
                />
                <PrivateRoute
                    path="/cms/content/add"
                    exact
                    component={(props) => {
                        return (<AddContentAsync {...props} />)
                    }}
                />
                <PrivateRoute
                    path="/cms/content/edit"
                    exact
                    component={EditContentAsync}
                />
                <PrivateRoute
                    path="/cms/content/view"
                    exact
                    component={ViewContentAsync}
                />


                <PrivateRoute
                    path="/cms/redzone"
                    exact
                    component={RedZoneAsync}
                />
                <PrivateRoute
                    path="/cms/redzone/add"
                    exact
                    component={RedZoneAdd}
                />

                <PrivateRoute
                    path="/tools/setting"
                    exact
                    component={SettingAsync}
                />

                <PrivateRoute
                    path="/tools/admin-staff/add"
                    exact
                    component={Management}
                />

                <PrivateRoute
                    path="/tools/admin-staff"
                    exact
                    component={listStaff}
                />

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
