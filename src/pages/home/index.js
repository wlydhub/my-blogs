import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { HomeWrapper, HomeLeft, HomeRight, BackTop } from './style.js';

class Home extends Component {

  handleScrollTop() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <HomeWrapper>
        <HomeLeft >
          <img alt = '' className='banner-img' src='https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1537089627185&di=69a9937ddde87e6898782cad8a4f25c2&imgtype=0&src=http%3A%2F%2Fi8.ask.fd.zol-img.com.cn%2Fg5%2FM00%2F06%2F01%2FChMkJ1oRSw2IGywxAASy3v8VWBYAAiTCAL3hQIABLL2027.jpg' />
          <Topic />
          <List />
        </HomeLeft>
        <HomeRight>
          <Recommend />
          <Writer />
        </HomeRight>
        {
          this.props.showScroll ? <BackTop onClick = { this.handleScrollTop }>顶部</BackTop> : null
        }
        
      </HomeWrapper>
    )
  }

  componentDidMount() {
    this.props.changeHomeData();
    this.bindEvents();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }

  bindEvents() {
    window.addEventListener('scroll', this.props.changeScrollTopShow)
  }

}

const mapState = (state)=> ({
  showScroll: state.getIn(['home', 'showScroll']),
});

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    dispatch(actionCreators.getHomeInfo());
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 400) {
      dispatch(actionCreators.toggleTopShow(true))
    }else {
      dispatch(actionCreators.toggleTopShow(false))
    }
  }
});

export default connect(mapState, mapDispatch)(Home);
