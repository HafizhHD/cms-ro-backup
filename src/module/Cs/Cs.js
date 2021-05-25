import React, { useState, lazy, Suspense } from 'react';
import Layout from './../../Layout/Cs/Layout';
import { Route, Switch } from 'react-router-dom';
import RKLoader from '../../components/UI/RKLoader/RKLoader';

const LoginAsync = lazy( () => import('./../../containers/Cs/Login/Login') );

function Cs({

}) {
    const [isLogin, setIsLogin] = useState(false);

    let routes = (
        <Switch>
            <Route 
                path="/"
                exact
                render={(props) => (
                    <Suspense fallback={<RKLoader text="Please wait ..." />}>
                        <LoginAsync setIsLogin={() => setIsLogin(!isLogin)}  {...props} />
                    </Suspense>
                )}
            />
        </Switch>
    )

    if(isLogin){
        routes = (
           <Layout>
               Hallo
           </Layout>
        )
    }

    return routes;
}

export default Cs
