import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SerchWrapper, SerchInfo, SerchInfoTitle, SerchInfoSwitch, SerchInfoList, SerchInfoItem, NavSearch, Addition, Button } from './style';
import { actionCreators } from './store';

class Header extends Component {

  getListArea() {
    if(this.props.focused){
      return (
        <SerchInfo>
          <SerchInfoTitle>
                热门搜索
            <SerchInfoSwitch>换一换</SerchInfoSwitch>
          </SerchInfoTitle>
          <SerchInfoList>
            {
              this.props.list.map((item) => {
                return <SerchInfoItem key = { item }>{ item }</SerchInfoItem>
              })
            }
          </SerchInfoList>
        </SerchInfo>
      );
    } else {
      return null;
    }
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
              in = { this.props.focused }
              timeout = { 300 }
              classNames = "slide"
            >
              <NavSearch
                className = {this.props.focused ? 'focused': ''}
                onFocus = {this.props.handleInputFocus}
                onBlur = {this.props.handleInputBlur}
              >
              </NavSearch>
            </CSSTransition>
            <i className = {this.props.focused ? 'focused iconfont': 'iconfont'}>&#xe637;</i>
            { this.getListArea() }
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
}

const mapStateToProps = (state) => {
  return {
    focused: state.get('header').get('focused'),
    list: state.get('header').get('list'),
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(){
      dispatch(actionCreators.searchFocus());
      dispatch(actionCreators.getList());
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
