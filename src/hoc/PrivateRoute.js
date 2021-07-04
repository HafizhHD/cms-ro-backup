import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Comp, isLogin,  ...rest }) => {

    return (
       <Route
            {...rest}
            render={props => 
                isLogin ? (
                    <Comp {...props} />
                ) : (
                    <Redirect to={{ pathname: '/' }} /> 
                )
            }
       />
    )
}

const mapStateToProps = state => {
    return {
        isLogin: state.auth.isLogin
    }
}

export default connect (mapStateToProps) (PrivateRoute);
