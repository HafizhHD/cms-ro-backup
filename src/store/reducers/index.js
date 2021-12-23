import { combineReducers } from 'redux';

import authReducers from './auth';
import dashboardReducers from './dashboard';

const rootReducers = combineReducers({
    auth: authReducers,
    dashboard: dashboardReducers
});

export default rootReducers;