import axios from 'axios';
import * as constants from './constants';

export const changeLogin = ()=>({
  type: constants.CHANGE_LOGIN,
  value: true,
})

export const login = (accound, password) => {
  return (dispatch) => {
    axios.get('/api/login.json?accound='+accound+'&password='+password).then((res)=>{
      const result = res.data.data;
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    })
  }
} 