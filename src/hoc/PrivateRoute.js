import React, { Suspense } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import RKLoader from './../components/UI/RKLoaderInner/RKLoader'

const PrivateRoute = ({ component: Comp, isLogin,  ...rest }) => {

    return (
       <Route
            {...rest}
            render={props => 
                isLogin ? (
                    <Suspense fallback={<RKLoader/>}>
                        <Comp {...props} />
                    </Suspense>
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
