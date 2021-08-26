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
const ReportAsync = lazy ( () => import('./../../containers/CoBrand/Report/Report'));
const ProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/Program'));
const AddProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/AddProgram/AddProgram'));
const EditProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/EditProgram/EditProgram'));
const ContentAsync = lazy( () => import('./../../containers/CoBrand/Content/Content'));
const RedZoneAsync = lazy( ( ) => import('./../../containers/CoBrand/RedZone/RedZone'));
const AddContentAsync = lazy( () => import('./../../containers/CoBrand/Content/AddContent/AddContent'));
const EditContentAsync = lazy( () => import('./../../containers/CoBrand/Content/EditContent/EditContent'));
const SettingAsync = lazy( () => import('./../../containers/CoBrand/Setting/Setting'));

function Cobrand({
    isLogin,
    onAuthSuccess,
    onAuthFailed,
    onLogout
}) {
    const history = useHistory();

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
                        path="/program/edit"
                        exact
                        component={EditProgramAsync}
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
                        path="/content/edit"
                        exact
                        component={EditContentAsync}
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
        onLogout: (history) => dispatch( logout(history)  )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cobrand)
