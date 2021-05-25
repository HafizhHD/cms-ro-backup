import React, { useState } from 'react';
import Login from '../../containers/CoBrand/Login/Login';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../Layout/Layout';


function Cobrand({

}) {

    const [isLogin, setIsLogin] = useState(false);

    let routes = (
        <Login
            setIsLogin={ () => setIsLogin(!isLogin)}
        />
    )

    if(isLogin) {
        routes = (
            <>
                <Layout></Layout>
            </>
        )
    }
    
    return routes;
}

export default Cobrand
