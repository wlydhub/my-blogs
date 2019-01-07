import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  login: false,
  show: true,
  captcha: false,
  token: '',
  user: null,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
    return state.merge({
      'login': action.login,
      'user': action.user,
      'token': action.token,
    });
    case constants.LOGOUT:
      return state.set('login',action.value);
    case constants.CHANGE_CAPTCHA_STATE:
      return state.set('captcha',action.value);
    case constants.CHANGE_STATUS:
      return state.set('show', action.value);
    default :
      return state;
  }
};
  