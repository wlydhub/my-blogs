import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SerchWrapper, NavSearch, Addition, Button } from './style';

class Header extends Component {

  constructor(props){
    super(props);
    this.state = {
      focused: false,
    }
    this.handleInputFocus = this.handleInputFocus.bind(this);
    this.handleInputBlur = this.handleInputBlur.bind(this);
  }

  render(){
    return(
      <HeaderWrapper>
        <Logo href='./' />
        <Nav>
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载app</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className='iconfont'>&#xe636;</i>
          </NavItem>
          <SerchWrapper>
            <CSSTransition
              in = { this.state.focused }
              timeout = { 300 }
              classNames = "slide"
            >
              <NavSearch
                className = {this.state.focused ? 'focused': ''}
                onFocus = {this.handleInputFocus}
                onBlur = {this.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i 
              className = {this.state.focused ? 'focused iconfont': 'iconfont'}
            >
            &#xe637;
            </i>
          </SerchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className='iconfont'>&#xe615;</i>
            写文章
          </Button>
          <Button className='reg'>注册</Button>  
        </Addition>
      </HeaderWrapper>
    )
  }

  handleInputFocus(){
    this.setState ({
      focused: true,
    })
  }

  handleInputBlur(){
    this.setState ({
      focused: false,
    })
  }

}

export default Header;
