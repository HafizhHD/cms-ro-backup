import React, { useEffect, useCallback, lazy } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import Layout from '../../Layout/CoBrand/Layout';
import PrivateRoute from '../../hoc/PrivateRoute';
import { connect } from 'react-redux';
import { authSuccess, authFailed, logout } from './../../store/actions/auth';
import { Suspense } from 'react';
import RKLoader from '../../components/UI/RKLoader/RKLoader';

const LoginAsync = lazy( () => import('./../../containers/CoBrand/Login/Login'));
const RegisterAsync = lazy( () => import('./../../containers/CoBrand/Register/Register'));
const DashboardAsync = lazy( () => import('./../../containers/CoBrand/Dashboard/Dashboard'));
const UserReportAsync = lazy ( () => import('./../../containers/CoBrand/Report/Report'));
const ProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/Program'));
const AddProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/AddProgram/AddProgram'));
const EditProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/EditProgram/EditProgram'));
const ViewProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/ViewProgram/ViewProgram'));
const ContentAsync = lazy( () => import('./../../containers/CoBrand/Content/Content'));
const AddContentAsync = lazy( () => import('./../../containers/CoBrand/Content/AddContent/AddContent'));
const EditContentAsync = lazy( () => import('./../../containers/CoBrand/Content/EditContent/EditContent'));
const ViewContentAsync = lazy( () => import('./../../containers/CoBrand/Content/ViewContent/ViewContent'));
const RedZoneAsync = lazy( ( ) => import('./../../containers/CoBrand/RedZone/RedZone'));
const SettingAsync = lazy( () => import('./../../containers/CoBrand/Setting/Setting'));

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

    const checkIsLogin = useCallback( () => {
        
        let check = localStorage.getItem('accessToken');

        if( check ) {
            onAuthSuccess()
        }else{
            onAuthFailed()
        }


    }, [ onAuthSuccess, onAuthFailed ])

    useEffect( () => {
        checkIsLogin()
    }, [isLogin, checkIsLogin]);

    const logoutHandler = () => onLogout(history);
    

    if(!isLogin){
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
                        path="/cms/program"
                        exact
                        component={ProgramAsync}
                    />
                    <PrivateRoute
                        path="/cms/program/add"
                        exact
                        component={ (props) => {
                            return (<AddProgramAsync {...props}/>)
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
                        component={ (props) => {
                            return (<AddContentAsync {...props}/>)
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
                        path="/tools/setting"
                        exact
                        component={SettingAsync}
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
        onAuthSuccess: () => dispatch( authSuccess()  ),
        onAuthFailed: () => dispatch( authFailed() ),
        onLogout: (history) => dispatch( logout(history)  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cobrand)
