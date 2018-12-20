import { fromJS } from 'immutable';
import * as constants from './constants';

const defaultState = fromJS({
  login: false,
  register: false,
})

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.CHANGE_LOGIN:
      return state.set('login',action.value);
    case constants.LOGOUT:
      return state.set('login',action.value);
    default :
      return state;
  }
};
  