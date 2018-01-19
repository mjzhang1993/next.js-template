// 引入reducer
import { combineReducers } from 'redux';
import about from './about/reducer';

// 合并到主reducer
const reducers = {
   about
};

// combineReducers() 函数用于将分离的 reducer 合并为一个 reducer 
export default combineReducers(reducers);
