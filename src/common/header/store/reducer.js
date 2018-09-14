import * as constants from './constants.js';
import { fromJS } from 'immutable';
const defaultState = fromJS({
  focused: false,
  mouseIn: false,
  list: [],
  page: 1,
  totalPage: 0,
});

export default (state = defaultState, action) => {
  switch(action.type) {
    case constants.SEARCH_FOCUS :
      return state.set('focused', true);
    case constants.SEARCH_BLUR :
      return state.set('focused', false);
    case constants.MOUSER_ENTER :
      return state.set('mouseIn', true);
    case constants.MOUSER_LEAVE :
      return state.set('mouseIn', false);
    case constants.CHANGE_PAGE :
      return state.set('page', action.page);
    case constants.CHANGE_LIST :
      // merge 改变多个值
      return state.merge({
        list: action.data,
        totalPage: action.totalPage
      })
    default :
      return state;
  }
};
  