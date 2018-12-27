import axios from 'axios';
import * as constants from './constants';
import * as http from '../../../http/http';
axios.create({
  timeout: 15000 ,// 请求超时时间
  headers: {
      'Access-Control-Allow-Origin': '*'
    }
})

export const changeLogin = ()=>({
  type: constants.CHANGE_LOGIN,
  value: true,
})

export const logout = ()=>({
  type: constants.LOGOUT,
  value: false,
})

export const login = (accound, password) => {
  return (dispatch) => {
    axios.get(http.url + '/api/login.json?accound=' + accound + '&password=' + password)
    .then((res)=>{
      const result = res.data.data;
      if(result){
        dispatch(changeLogin())
      }else{
        alert('登录失败')
      }
    })
    .catch((e)=> {
      alert('服务器错误')
    })
  }
}

export const getCaptcha = (email) => {
  return (dispatch) => {
    axios.get(http.url + 'captcha/getCode?email=' + email)
    .then((res)=>{
      const result = res.data.data;
      console.log('result', result)
      if(result){
        dispatch(changeLogin())
      }else{
        alert('验证码获取时报')
      }
    })
    .catch((e)=> {
      console.log('err:', e)
      alert('服务器错误 -> from getCaptcha')
    })
  }
}
