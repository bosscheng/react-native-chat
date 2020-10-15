/*
 * date: 2019-11-05
 * desc:主要是登录人的一些信息。
 */

import {
  USER_UPDATE_INFO,
  USER_UPDATE_STATUS,
  USER_KICKOUT,
  USER_CONNECT_FAIL,
  USER_OFFLINE,
} from '../actionTypes';
import {USER_STATUS} from '../../constants';

const defaultState = {
  userId: '',
  token: '',
  status: USER_STATUS.OFFLINE,
  timestamp: '',
  tmNum: '',
  plantData: {},
  userName: '',
  userNickName: '',
  userSignature: '',
  userHeadType: '',
  userHeadId: '',
  equipments: [],
  role: '',
  domain: '',
  deptName: '',
  employeeNo: '',
  micKeyDept: '',
};
// others

export default (state = defaultState, action) => {
  switch (action.type) {
    case USER_UPDATE_INFO: {
      return Object.assign({}, state, action.payload);
    }
    case USER_UPDATE_STATUS: {
      return Object.assign({}, state, {status: action.payload});
    }
    case USER_KICKOUT: {
      return Object.assign({}, state, {
        status: USER_STATUS.OFFLINE,
        kickout: true,
      });
    }
    case USER_CONNECT_FAIL: {
      return Object.assign({}, state, {status: USER_STATUS.OFFLINE});
    }
    case USER_OFFLINE: {
      return Object.assign({}, state, {status: USER_STATUS.OFFLINE});
    }
    default:
      return state;
  }
};
