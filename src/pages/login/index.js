import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, Input, Button } from './style';

class Login extends PureComponent {

  render() {
    const { loginStatus, registerStatus } = this.props;
    if(loginStatus){
      return (
        <Redirect to = '/' />
      )
    } else {
      if(registerStatus) {
        <LoginWrapper>
          <LoginBox>
            <Input placeholder = '账号' innerRef = { (input) => { this.account = input } } />
            <Input placeholder = '密码' innerRef = { (input) => { this.password = input } } />
            <Input placeholder = '确认密码' innerRef = { (input) => { this.password = input } } />
            <Input placeholder = '确认密码' innerRef = { (input) => { this.password = input } } />
            <Button onClick = { () => this.props.login(this.account, this.password) } >获取验证码</Button>
            <Button onClick = { () => this.props.login(this.account, this.password) } >登录</Button>
          </LoginBox>
        </LoginWrapper>
      } else {
        return (
          <LoginWrapper>
              <LoginBox>
                <Input placeholder = '账号' innerRef = { (input) => { this.account = input } } />
                <Input placeholder = '密码' innerRef = { (input) => { this.password = input } } />
                <Button onClick = { () => this.props.login(this.account, this.password) } >登录</Button>
              </LoginBox>
          </LoginWrapper>
        )
      }
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
  registerStatus: state.getIn(['login', 'register'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  },
  register(accountElem, passwordElem, againPasswordElem, captchaElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  }    
})

export default connect(mapState, mapDispatch)(Login);
