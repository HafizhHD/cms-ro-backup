import {
    ALERT_CLOSE,
    ALERT_ERROR,
    ALERT_SUCCESS
} from './../actions/actionTypes';

const initialState = {
    showAlert: true,
    alertType: null,
    alertMessage: 'Nganu bikin enak.',
    idMessage: null
}

const dashboard = (state = initialState, action) => {
    switch(action.type) {
        case ALERT_CLOSE: return {
            ...state,
            showAlert: false
        }
        case ALERT_ERROR: return {
            ...state,
            alertType: action.type,
            alertMessage: action.message,
            idMessage: action.idMessage,
            showAlert: true
        }
        case ALERT_SUCCESS: return {
            ...state,
            alertType: action.type,
            alertMessage: action.message,
            idMessage: action.idMessage,
            showAlert: true
        }
        default: return state;
    }
}

export default dashboard;