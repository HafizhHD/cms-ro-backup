import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import Cobrand from './module/Cobrand/Cobrand';

//redux 
import {
  applyMiddleware,
  createStore,
  compose
} from 'redux';
import { Provider } from 'react-redux';
import rootReducers from './store/reducers/index';
import thunk from 'redux-thunk';

//composerEnhancers
const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null || compose;
let store = createStore( rootReducers );

if(composeEnhancers) {
  store = createStore( rootReducers, composeEnhancers(
    applyMiddleware( thunk )
    ) 
  );
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <Cobrand  />
      </HashRouter>
    </Provider>
  </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
