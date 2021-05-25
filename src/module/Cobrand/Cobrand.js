import React, { useState } from 'react';
import Login from '../../containers/CoBrand/Login/Login';
import { Route, Switch } from 'react-router-dom';


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
                <h1>Welcome back</h1>
            </>
        )
    }
    
    return routes;
}

export default Cobrand
