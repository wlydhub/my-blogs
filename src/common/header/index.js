import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSSTransition } from 'react-transition-group';
import { HeaderWrapper, Logo, Nav, NavItem, SerchWrapper, SerchInfo, SerchInfoTitle, SerchInfoSwitch, SerchInfoList, SerchInfoItem, NavSearch, Addition, Button } from './style';
import { actionCreators } from './store';
import { actionCreators as loginAtionCreators } from '../../pages/login/store';

class Header extends Component {

  getListArea() {
    const { focused, list, page, totalPage, mouseIn, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
    const jsList = list.toJS();
    const pageList = [];
    
    // 双重保险，如果服务器回的数据不是整数也会导致报错
    if (jsList.length){
      for(let i = (page - 1) * 10; i < page * 10; i++) {
        if(jsList[i]){
          pageList.push(
            <SerchInfoItem key = { jsList[i] }>{ jsList[i] }</SerchInfoItem>
          )
        }
      }
    }
    
    if(focused || mouseIn){
      return (
        <SerchInfo 
          onMouseEnter={ handleMouseEnter }
          onMouseLeave={ handleMouseLeave }
        >
          <SerchInfoTitle>
            热门搜索
            <SerchInfoSwitch onClick = { () => handleChangePage(page, totalPage, this.spanIcon) }> 
              <i ref = {(icon)=>{ this.spanIcon = icon }} className='iconfont spin'>&#xe851;</i> 
              换一换
            </SerchInfoSwitch>
          </SerchInfoTitle>
          <SerchInfoList>
            { pageList }
          </SerchInfoList>
        </SerchInfo>
      );
    } else {
      return null;
    }
  }

  render(){
    const { focused, list, handleInputFocus, handleInputBlur, login, logout } = this.props;
    return(
      <HeaderWrapper>
        <Link to='/'>
          <Logo/>
        </Link>

        <Nav>
          <Link to='/'>
            <NavItem className='left active'>首页</NavItem>
          </Link>
          { 
            login ? <NavItem onClick={logout} className='right'>退出</NavItem> : <Link to = '/login'><NavItem className='right'>登录/注册</NavItem></Link>
          }
          
          <SerchWrapper>
            <CSSTransition
              in = { focused }
              timeout = { 300 }
              classNames = "slide"
            >
              <NavSearch
                className = { focused ? 'focused': '' }
                onFocus = { () =>  handleInputFocus(list) }
                onBlur = { handleInputBlur }
              >
              </NavSearch>
            </CSSTransition>
            <i className = { focused ? 'focused iconfont zoom': 'iconfont zoom' }>&#xe637;</i>
            { this.getListArea() }
          </SerchWrapper>
        </Nav>
  
        <Addition> 
          <Link to = '/write' >
            <Button className='writting'>
              <i className='iconfont'>&#xe615;</i>
              写文章
            </Button>
          </Link>
        </Addition>
      </HeaderWrapper>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    login: state.getIn(['login', 'login'])
  }
}

const mapDispathToProps = (dispatch) => {
  return {
    handleInputFocus(list){
      dispatch(actionCreators.searchFocus());
      if(list.size === 0){
        dispatch(actionCreators.getList());
      } 
    },
    handleInputBlur(){
      dispatch(actionCreators.searchBlur());
    },
    handleMouseEnter(){
      dispatch(actionCreators.mouseEnter());
    },
    handleMouseLeave(){
      dispatch(actionCreators.mouseLeave());
    },
    handleChangePage(page, totalPage, spin){
      // 用css旋转实现简单的动画效果
      // 使用ref获取到真是的dom直接操作dom样式
      let originAngle = spin.style.transform.replace(/[^0-9]/ig, '');
      if(originAngle){
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)'
      if (page < totalPage) {
        dispatch(actionCreators.changePage(page + 1));
      } else {
        dispatch(actionCreators.changePage(1));
      }
    },
    logout(){
      dispatch(loginAtionCreators.logout())
    }
  }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);
