import { combineReducers } from 'redux';
import validator from './validator';

const formApp = combineReducers({
    validator: validator,
});

export default formApp;
