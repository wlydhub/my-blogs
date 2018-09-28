import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from './components/List';
import Recommend from './components/Recommend';
import Topic from './components/Topic';
import Writer from './components/Writer';
import { actionCreators } from './store';

import { HomeWrapper, HomeLeft, HomeRight } from './style.js';

class Home extends Component {
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
      </HomeWrapper>
    )
  }
  componentDidMount() {
    this.props.changeHomeData();
  }
}

const mapDispatch = (dispatch) => ({
  changeHomeData(){
    const action = actionCreators.getHomeInfo();
    dispatch(action);
  }
})

export default connect(null, mapDispatch)(Home);
