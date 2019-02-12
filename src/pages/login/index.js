import React, { PureComponent } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { LoginWrapper, LoginBox, Input, InputSmall, CodeBox, Button, ButtonSmall, SignInBox, Title } from './style';

class Login extends PureComponent {

  render() {
    const { loginStatus, showStatus } = this.props;
    if(loginStatus){
      return (
        <Redirect to = '/' />
      )
    } else {
      if(!showStatus) {
        return (
          <LoginWrapper>
            <SignInBox>
              <Title onClick = { () => this.props.changeStatus(showStatus) } >注册</Title>
              <Input placeholder = '昵称' innerRef = { (input) => { this.name = input } } />
              <Input placeholder = '账号' innerRef = { (input) => { this.account = input } } />
              <Input type="password" placeholder = '密码' innerRef = { (input) => { this.password = input } } />
              <Input type="password" placeholder = '确认密码' innerRef = { (input) => { this.secondPassword = input } } />
              <Input placeholder = '邮箱地址' innerRef = { (input) => { this.email = input } } />
              <CodeBox>
                <InputSmall placeholder = '验证码' innerRef = { (input) => { this.captcha = input } } />
                <ButtonSmall onClick = { () => this.props.getCaptcha(this.email) } >获取验证码</ButtonSmall>
              </CodeBox>
              <Button onClick = { () => this.props.signIn(this.name, this.account, this.password, this.secondPassword, this.email, this.captcha) } >
                注册
              </Button>
              <Button onClick = { () => this.props.changeStatus(showStatus) } >
                已有账号，去登陆
              </Button>
            </SignInBox>
          </LoginWrapper>
        )
      } else {
        return (
          <LoginWrapper>
              <LoginBox>
                <Title onClick = { () => this.props.changeStatus(showStatus) } >登录</Title>
                <Input placeholder = '账号' innerRef = { (input) => { this.account = input } } />
                <Input placeholder = '密码' innerRef = { (input) => { this.password = input } } />
                <Button onClick = { () => this.props.login(this.account, this.password) } >登录</Button>
                <Button onClick = { () => this.props.changeStatus(showStatus) } >尚未注册，去注册 </Button>
              </LoginBox>
          </LoginWrapper>
        )
      }
    }
  }


  



}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login']),
  showStatus: state.getIn(['login', 'show'])
})

const mapDispatch = (dispatch) => ({
  login(accountElem, passwordElem){
    dispatch(actionCreators.login(accountElem.value, passwordElem.value))
  },
  signIn(nameElem ,accountElem, passwordElem, secondPasswordElem, emailElem, captchaElem){
    dispatch(actionCreators.signIn(nameElem.value, accountElem.value, passwordElem.value, secondPasswordElem.value, emailElem.value, captchaElem.value))
  },
  getCaptcha(emailElem){
    dispatch(actionCreators.getCaptcha(emailElem.value))
  },
  changeStatus(value){
    dispatch(actionCreators.changeStatus(value))
  }
})

export default connect(mapState, mapDispatch)(Login);
