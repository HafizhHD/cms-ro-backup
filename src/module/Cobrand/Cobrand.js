import React, { useEffect, useCallback } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../Layout/CoBrand/Layout';
import PrivateRoute from '../../hoc/PrivateRoute';
import { connect } from 'react-redux';
import Login from './../../containers/CoBrand/Login/Login';
import Dashboard from './../../containers/CoBrand/Dashboard/Dashboard';
import Report from './../../containers/CoBrand/Report/Report';
import Program from './../../containers/CoBrand/Program/Program';
import AddProgram from './../../containers/CoBrand/Program/AddProgram/AddProgram';
import Content from './../../containers/CoBrand/Content/Content';
import RedZone from './../../containers/CoBrand/RedZone/RedZone';
import Setting from './../../containers/CoBrand/Setting/Setting';
import { authSuccess, authFailed, logout } from './../../store/actions/auth';
import AddContent from '../../containers/CoBrand/Content/AddContent/AddContent';

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
            component={Login}
        />
        )
    }

    return (
            <Layout logoutHandler={logoutHandler}>
                 <Switch>
                    <PrivateRoute 
                        exact
                        path="/"
                        component={Dashboard}
                    />

                    <PrivateRoute 
                        exact
                        path="/report"
                        component={Report}
                    />

                    <PrivateRoute 
                        path="/program"
                        exact
                        component={Program}
                    />
                    <PrivateRoute
                        path="/program/add"
                        exact
                        component={AddProgram}
                    />

                    <PrivateRoute 
                        path="/content"
                        exact
                        component={Content}
                    />
                    <PrivateRoute 
                        path="/content/add"
                        exact
                        component={AddContent}
                    />

                    <PrivateRoute 
                        path="/redzone"
                        exact
                        component={RedZone}
                    />

                    <PrivateRoute 
                        path="/setting"
                        exact
                        component={Setting}
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
