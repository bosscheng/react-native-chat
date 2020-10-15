/*
 * date: 2019-11-05
 * desc:
 */

import {
  USER_UPDATE_INFO,
  USER_UPDATE_STATUS,
  USER_KICKOUT,
  USER_CONNECT_FAIL,
  USER_LOGOUT,
  USER_OFFLINE,
} from '../actionTypes';

export const updateUserInfo = (payload) => ({
  type: USER_UPDATE_INFO,
  payload,
});

export const updateUserStatus = (payload) => ({
  type: USER_UPDATE_STATUS,
  payload,
});

export const kickout = (payload) => ({
  type: USER_KICKOUT,
  payload,
});

export const connectFail = (payload) => ({
  type: USER_CONNECT_FAIL,
  payload,
});

export const logout = (payload) => ({
  type: USER_LOGOUT,
  payload,
});

export const offline = (payload) => ({
  type: USER_OFFLINE,
  payload,
});
