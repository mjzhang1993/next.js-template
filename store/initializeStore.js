/*
   生成初始化 store 的函数
*/

import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import reducer from '../modules/reducers';

const middleware = [thunk];
const initializeStore = initialState => {
   return createStore(
         reducer, 
         initialState, 
         composeWithDevTools(applyMiddleware(...middleware))
      );
};

export default initializeStore;