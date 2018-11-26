import { combineReducers } from 'redux'; 
import appointmentsReducer from './appointmentsReducer';
import shopReducer from './shopReducer'

export default combineReducers({
    appointmentsReducer,
    shopReducer
})