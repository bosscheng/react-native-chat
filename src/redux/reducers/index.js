import {combineReducers} from 'redux';

import userReducer from './userReducer';

// 合并 reducers
const appReducer = combineReducers({
  userState: userReducer, // 登录人的相关信息
});

export default appReducer;
