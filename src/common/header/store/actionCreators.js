import * as constants from './constants.js';
import axios from 'axios';
import { fromJS } from 'immutable';

// 自己使用
const changeList = (data) =>({
  type: constants.CHANGE_LIST,
  data: fromJS(data),
});
// 暴露出去给组件使用
export const searchFocus = () =>({
  type: constants.SEARCH_FOCUS
});
export const searchBlur = () =>({
  type: constants.SEARCH_BLUR
});
export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      // 我们在store中的数据全是immutable类型的数据
      const data = res.data;
      dispatch(changeList(data.data));
    }).catch(() => {
      console.log('err');
    })
  }
};