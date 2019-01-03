import axios from 'axios';
import * as constants from './constants';
import * as http from '../../../http/http';

export const changeLogin = ()=>({
  type: constants.CHANGE_LOGIN,
  value: true,
})

export const logout = ()=>({
  type: constants.LOGOUT,
  value: false,
})

export const changeCaptchaState = ()=>({
  type: constants.CHANGE_CAPTCHA_STATE,
  value: true,
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
      if(result){
        dispatch(changeCaptchaState())
        alert('已获取验证码')
      }else{
        alert('验证码获取时报')
      }
    })
    .catch((e)=> {
      alert('服务器错误 -> from getCaptcha')
    })
  }
}
// accountElem, passwordElem, secondPasswordElem, emailElem, captchaElem
export const signIn = (name, accound, password, secondPassword, email, captcha) => {
  return (dispatch) => {
    const obj = {
      name,
      accound,
      password,
      secondPassword,
      email,
      captcha
    }
    axios.post(http.url + 'user/signIn', obj).then((res) => {
      const result = res.data.data;
      if (result) {
        console.log('result', result)
        // dispatch(changeLogin())
        alert('已登录')
      } else {
        alert('登录出现错误,请刷新重试,或联系管理员15617432515')
      }
    }).catch((e) => {
      alert('服务器错误 -> from getCaptcha')
    })
  }
}
