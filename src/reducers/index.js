import {combineReducer} from 'redux';
import authReducer from './authReducer';
import EmployeeFormReducer from './EmployeeFormReducer';
import EmployeeReducer from './EmployeeReducer';

export default combineReducer({
    auth: authReducer,
    employeeForm : EmployeeFormReducer,
    employees : EmployeeReducer
});