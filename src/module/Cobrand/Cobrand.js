import React, { useState, lazy, Suspense } from 'react';
import { Route, Switch } from 'react-router-dom';
import Layout from '../../Layout/CoBrand/Layout';
import RKLoader from '../../components/UI/RKLoader/RKLoader';

const LoginAsync = lazy( () => import('./../../containers/CoBrand/Login/Login'));
const DashboardAsync = lazy( () => import('./../../containers/CoBrand/Dashboard/Dashboard'));
const ReportAsync = lazy( () => import('./../../containers/CoBrand/Report/Report'));
const ProgramAsync = lazy( () => import('./../../containers/CoBrand/Program/Program'));
const ContentAsync = lazy( () => import('./../../containers/CoBrand/Content/Content'));
const RedZoneAsync = lazy( () => import('./../../containers/CoBrand/RedZone/RedZone'));
const SettingAsync = lazy( () => import('./../../containers/CoBrand/Setting/Setting'));


function Cobrand({

}) {

    const [isLogin, setIsLogin] = useState(false);

    let routes = (
        <Switch>
            <Route 
                exact
                path="/"
                render={(props) => (
                    <Suspense fallback={<RKLoader text="Welcome back" />}>
                        <LoginAsync 
                            {...props}
                            setIsLogin={ () => setIsLogin(!isLogin)}
                        />
                    </Suspense>
                )}
            />
      
        </Switch>
    )

    if(isLogin) {
        routes = (
            <>
                <Layout>
                    <Switch>
                        <Route 
                            path="/"
                            exact
                            render={(props) => (
                                <Suspense fallback={<p>Loading...</p>}>
                                    <DashboardAsync {...props} />
                                </Suspense>
                            )}
                        />

                        <Route 
                            path="/report"
                            exact
                            render={(props) => (
                                <Suspense fallback={<p>Loading...</p>}>
                                    <ReportAsync {...props} />
                                </Suspense>
                            )}
                        />

                        <Route 
                            path="/program"
                            exact
                            render={(props) => (
                                <Suspense fallback={<p>Loading...</p>} >
                                    <ProgramAsync {...props} />
                                </Suspense>
                            )}
                        />

                        <Route 
                            path="/content"
                            exact
                            render={(props) => (
                                <Suspense fallback={<p>Loading...</p>} > 
                                    <ContentAsync {...props} />
                                </Suspense>
                            )}
                        />

                        <Route 
                            path="/redzone"
                            exact
                            render={(props) => (
                                <Suspense fallback={<p>Loading...</p>}>
                                    <RedZoneAsync {...props} />
                                </Suspense>
                            )}
                        />

                        <Route 
                            path="/setting"
                            exact
                            render={(props) => (
                                <Suspense fallback={<p>Loading...</p>}>
                                    <SettingAsync {...props} />
                                </Suspense>
                            )}
                        />
                    </Switch>
                </Layout>
            </>
        )
    }
    
    return routes;
}

export default Cobrand
