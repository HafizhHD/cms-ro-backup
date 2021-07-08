import React, { useEffect, useCallback, lazy } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../Layout/CoBrand/Layout';
import PrivateRoute from '../../hoc/PrivateRoute';
import { connect } from 'react-redux';
// import Login from './../../containers/CoBrand/Login/Login';
// import Dashboard from './../../containers/CoBrand/Dashboard/Dashboard';
// import Report from './../../containers/CoBrand/Report/Report';
// import Program from './../../containers/CoBrand/Program/Program';
// import AddProgram from './../../containers/CoBrand/Program/AddProgram/AddProgram';
// import Content from './../../containers/CoBrand/Content/Content';
// import RedZone from './../../containers/CoBrand/RedZone/RedZone';
// import Setting from './../../containers/CoBrand/Setting/Setting';
// import AddContent from '../../containers/CoBrand/Content/AddContent/AddContent';
import { authSuccess, authFailed, logout } from './../../store/actions/auth';
import { Suspense } from 'react';
import RKLoader from '../../components/UI/RKLoader/RKLoader';

const LoginAsync = lazy( () => import('./../../containers/CoBrand/Login/Login'));
const DashboardAsync = lazy( () => import('./../../containers/CoBrand/Dashboard/Dashboard'));
const ReportAsync = lazy ( () => import('./../../containers/CoBrand/Report/Report'));
const ProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/Program'));
const AddProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/AddProgram/AddProgram'));
const ContentAsync = lazy( () => import('./../../containers/CoBrand/Content/Content'));
const RedZoneAsync = lazy( ( ) => import('./../../containers/CoBrand/RedZone/RedZone'));
const AddContentAsync = lazy( () => import('./../../containers/CoBrand/Content/AddContent/AddContent'));
const SettingAsync = lazy( () => import('./../../containers/CoBrand/Setting/Setting'));

function Cobrand({
    isLogin,
    onAuthSuccess,
    onAuthFailed,
    onLogout
}) {

    const checkIsLogin = useCallback( () => {
        
        let check = localStorage.getItem('rkLoggedIn');

        if( check ) {
            onAuthSuccess()
        }else{
            onAuthFailed()
        }


    }, [ onAuthSuccess, onAuthFailed ])

    useEffect( () => {
        checkIsLogin()
    }, [isLogin, checkIsLogin]);

    const logoutHandler = () => onLogout()
    

    if(!isLogin){
        return (
        <Route 
            path="/" 
            render={(props) => {
               return (
                <Suspense fallback={<RKLoader />}>
                    <LoginAsync {...props} />
                </Suspense>
               )
            }}
        />
        )
    }

    return (
            <Layout logoutHandler={logoutHandler}>
                 <Switch>
                    <PrivateRoute 
                        exact
                        path="/"
                        component={DashboardAsync}
                    />
                    <PrivateRoute 
                        exact
                        path="/report"
                        component={ReportAsync}
                    />

                    
                    <PrivateRoute 
                        path="/program"
                        exact
                        component={ProgramAsync}
                    />
                    <PrivateRoute
                        path="/program/add"
                        exact
                        component={AddProgramAsync}
                    />

                    <PrivateRoute 
                        path="/content"
                        exact
                        component={ContentAsync}
                    />
                    <PrivateRoute 
                        path="/content/add"
                        exact
                        component={AddContentAsync}
                    />

                    <PrivateRoute 
                        path="/redzone"
                        exact
                        component={RedZoneAsync}
                    />

                    <PrivateRoute 
                        path="/setting"
                        exact
                        component={SettingAsync}
                    />
                 </Switch>
             </Layout>
    );
}

const mapStateToProps = state => {
    return {
        isLogin: state.auth.isLogin
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuthSuccess: () => dispatch( authSuccess()  ),
        onAuthFailed: () => dispatch( authFailed() ),
        onLogout: () => dispatch( logout()  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cobrand)
