import React from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SerchWrapper, NavSearch, Addition, Button } from './style';

const Header = (props) => {
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
            in = { props.focused }
            timeout = { 300 }
            classNames = "slide"
          >
            <NavSearch
              className = {props.focused ? 'focused': ''}
              onFocus = {props.handleInputFocus}
              onBlur = {props.handleInputBlur}
            >
            </NavSearch>
          </CSSTransition>
          <i 
            className = {props.focused ? 'focused iconfont': 'iconfont'}
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

const mapStateToProps = (state) => {
  return {
    focused: state.header.focused,
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(){
      const action = {
        type: 'search_focus'
      };
      dispatch(action);
    },
    handleInputBlur(){
      const action = {
        type: 'search_blur'
      };
      dispatch(action);
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
